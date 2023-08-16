import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import validator from "../../utils/validator";
import API from "../../app/api";
import SelectField from "../common/form/selectField";

const RegisterForm = () => {
  const [data, setData] = useState({ email: "", password: "", profession: "" });
  const [errors, setErrors] = useState({});
  const [professions, setProfessions] = useState();
  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательно для заполнения" },
      isEmail: { message: "Email введен некорректно" },
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },

      isContainDigin: { message: "Пароль должен содержать хотя бы одно число" },

      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
    profession: {
      isRequired: { message: "Обязательно выберите профессию" },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
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
      <SelectField
        defaultOption="Chose..."
        options={professions}
        onChange={handleChange}
        value={data.profession}
        error={errors.profession}
        label="Выберите вашу профессию"
        // name="profession"
      />
      <button
        className="btn btn-primary w-100 mx-auto"
        type="submit"
        disabled={!isValid}
      >
        Send
      </button>
    </form>
  );
};

export default RegisterForm;
