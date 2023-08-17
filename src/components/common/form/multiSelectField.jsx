import React from 'react'
import Select from 'react-select';

const MultiSelectField = ({options, onChange, name, label, defaultValue}) => {

    const handleChange = (value) => {
        onChange({name: name, value})
          };
        
    const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((opitonName) => ({
          label: options[opitonName].name,
          value: options[opitonName]._id,
        }))
      : options;

    return ( <div className="mb-4">
                    <label className="form-label">{label}</label>

            <Select
defaultValue={defaultValue}
        closeMenuOnSelect={false}
        isMulti
        name={name}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
    />
    </div>
 );
}
 
export default MultiSelectField;