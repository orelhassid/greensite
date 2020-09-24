import React from "react";
import TextField from "./TextField";
import SelectField from "./SelectField";
import CheckField from "./CheckField";
import RadioField from "./RadioField";

const Fields = ({ fields, data, onChange, errors }) => {
  return (
    <>
      {fields.map((field) => {
        const { name, label, placeholder, options, type, select } = field;

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
              key={select}
              select={select}
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
        } else if (field.type === "radio") {
          return (
            <RadioField
              key={select}
              select={select}
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
            <TextField
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
