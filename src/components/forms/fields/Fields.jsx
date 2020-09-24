import React from "react";
import TextField from "./TextField";
import ListField from "./ListField";
import CheckField from "./CheckField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";

const Fields = ({ fields, data, onChange, errors }) => {
  return (
    <>
      {fields.map((field) => {
        const { name, label, placeholder, options, type, id, checked } = field;

        if (field.type === "select") {
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
        } else if (field.options) {
          return (
            <ListField
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
              key={id}
              id={id}
              name={name}
              label={label}
              options={id}
              placeholder={placeholder}
              value={data[name]}
              onChange={onChange}
              error={errors[name]}
              type={type}
              checked={checked}
            />
          );
        } else if (field.type === "radio") {
          return (
            <RadioField
              key={id}
              label={label}
              id={id}
              name={name}
              placeholder={placeholder}
              value={id}
              onChange={onChange}
              error={errors[name]}
              type={type}
              checked={checked}
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
