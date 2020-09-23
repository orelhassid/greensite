import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const Fields = ({ fields, data, onChange, errors }) => {
  return (
    <>
      {fields.map((field) => {
        const { name, label, placeholder, options } = field;
        console.log(errors[name]);
        if (field.options) {
          return (
            <SelectField
              key={name}
              name={name}
              label={label}
              options={options}
              placeholder={placeholder}
              value={data[name]}
              onChange={onChange}
              error={errors[name]}
            />
          );
        } else {
          return (
            <InputField
              key={name}
              name={name}
              label={label}
              placeholder={placeholder}
              value={data[name]}
              onChange={onChange}
              error={errors[name]}
            />
          );
        }
      })}
    </>
  );
};

export default Fields;
