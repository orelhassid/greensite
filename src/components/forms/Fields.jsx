import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import CheckField from "./CheckField";

const Fields = ({ fields, data, onChange, errors }) => {
  return (
    <>
      {fields.map((field) => {
        const { name, label, placeholder, options, type } = field;

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
              type={type}
            />
          );
        } else if (field.type === "checkbox") {
          return (
            <CheckField
              key={name}
              name={name}
              label={label}
              options={options}
              placeholder={placeholder}
              value={data[name]}
              onChange={onChange}
              error={errors[name]}
              type={type}
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
              type={type}
              error={errors[name]}
            />
          );
        }
      })}
    </>
  );
};

export default Fields;
