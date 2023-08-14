import React from "react";
const TextField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        type={type}
        id={name}
        onChange={onChange}
        name={name}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

TextField.defaultsprops = {
  type: "text",
};

export default TextField;
