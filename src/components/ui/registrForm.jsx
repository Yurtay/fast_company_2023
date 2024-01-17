import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import validator from "../../utils/validator";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";
import { useQualities } from "../../app/hooks/useQualities";
import { useProfessions } from "../../app/hooks/useProfession";
import { useAuth } from "../../app/hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RegisterForm = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "male",
    name: "",
    qualities: [],
    licence: false,
  });
  const { signUp } = useAuth();
  const [errors, setErrors] = useState({});
  const { professions } = useProfessions();
  const { qualities } = useQualities();
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательно для заполнения" },
      isEmail: { message: "Email введен некорректно" },
    },
    name: {
      isRequired: { message: "Имя обязательно для заполнения" },
      min: {
        message: "Имя должено состоять минимум из 3-х символов",
        value: 3,
      },
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
    licence: {
      isRequired: {
        message:
          "Вы не можете использовать наш сервис без лицензионного соглашения",
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = { ...data, qualities: data.qualities.map((q) => q.value) };
    try {
      await signUp(newData);
      history.push("/");
    } catch (error) {
      setErrors(error);
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
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
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
        name="profession"
      />
      <RadioField
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
          { name: "Other", value: "other" },
        ]}
        value={data.sex}
        name="sex"
        onChange={handleChange}
        label="Выберите ваш пол"
      />
      <MultiSelectField
        options={qualities}
        onChange={handleChange}
        name="qualities"
        label="Выберите ваши качества"
        defaultValue={data.qualities}
      />
      <CheckBoxField
        value={data.licence}
        onChange={handleChange}
        name="licence"
        error={errors.licence}
      >
        Подтвердите <a>лицензионное соглашение</a>
      </CheckBoxField>
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
