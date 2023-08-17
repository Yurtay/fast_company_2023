import React from "react";

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
  name
}) => {

  const handleChange = ({ target }) => {
    onChange({name: target.name, value: target.value})
      };

  const getInputClasses = () => {
    return "form-select" + (error ? " is-invalid" : "");
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((opitonName) => ({
          name: options[opitonName].name,
          value: options[opitonName]._id,
        }))
      : options;

  return (
    <div className="mb-4">
      <label className="form-label" htmlFor={name} >{label}</label>
      <select
        value={value}
        className={getInputClasses()}
        onChange={handleChange}
        name={name}
        id={name}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectField;
