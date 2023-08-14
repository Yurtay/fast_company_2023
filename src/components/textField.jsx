import React from "react";
const TextField = ({ label, type, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "")
  }
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        type={type}
        id={name}
        onChange={onChange}
        name={name}
        className={getInputClasses()}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextField.defaultsprops = {
  type: "text",
};

export default TextField;
