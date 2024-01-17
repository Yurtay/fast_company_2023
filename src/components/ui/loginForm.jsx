import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import validator from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";
import { useAuth } from "../../app/hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = () => {
  // console.log(process.env);
  const history = useHistory();
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});
  const { logIn } = useAuth();
  const [enterError, setEnterError] = useState(null);
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    setEnterError(null);
  };

  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательно для заполнения" },
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    try {
      await logIn(data);
      history.push("/");
    } catch (error) {
      // setEnterError(error.message);
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Оставаться в системе
      </CheckBoxField>
      {enterError && <p className="text-danger">{enterError}</p>}
      <button
        className="btn btn-primary w-100 mx-auto"
        type="submit"
        disabled={!isValid || enterError}
      >
        Send
      </button>
    </form>
  );
};

export default LoginForm;
