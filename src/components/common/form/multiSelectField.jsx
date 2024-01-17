import React from "react";
import Select from "react-select";

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((opitonName) => ({
          label: options[opitonName].name,
          value: options[opitonName]._id,
        }))
      : options.map((q) => ({ label: q.name, value: q._id }));

  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default MultiSelectField;
