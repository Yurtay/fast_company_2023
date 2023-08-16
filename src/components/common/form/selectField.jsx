import React from "react";

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  const getInputClasses = () => {
    return "form-select" + (error ? " is-invalid" : "");
  };
  console.log(getInputClasses());

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((opitonName) => ({
          name: options[opitonName].name,
          value: options[opitonName]._id,
        }))
      : options;
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <select
        value={value}
        className={getInputClasses}
        // id="validationCustom04"
        onChange={onChange}
        name="profession"
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
        <option>...</option>
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectField;
