import React from "react";
import TextField from "./TextField";
import RangeField from "./RangeField";
import RadioField from "./RadioField";
import CheckField from "./CheckField";
import ListField from "./ListField";
import SelectField from "./SelectField";

export default function Fields({ fields, data, errors, ...rest }) {
  return (
    <>
      {fields.map((field) => {
        const value = data[field.name];
        const error = errors[field.name];

        switch (field.type) {
          case "text":
          case "password":
          case "tel":
          case "email":
          case "number":
            return (
              <TextField
                field={field}
                key={field.name}
                value={value}
                error={error}
                {...rest}
              />
            );
          // break;
          case "range":
            return (
              <RangeField
                field={field}
                key={field.name}
                value={value}
                error={error}
                {...rest}
              />
            );
          // break;
          case "radio":
            return (
              <RadioField
                field={field}
                key={field.id}
                value={field.id}
                error={error}
                {...rest}
              />
            );
          // break;
          case "list":
            return (
              <ListField
                field={field}
                key={field.id}
                value={value}
                error={error}
                {...rest}
              />
            );
          // break;
          case "checkbox":
            return (
              <CheckField
                field={field}
                key={field.id}
                value={value}
                error={error}
                {...rest}
              />
            );
          // break;
          case "select":
            return (
              <SelectField
                field={field}
                key={field.id}
                value={value}
                error={error}
                {...rest}
              />
            );
          // break;
          default:
            return null;
        }
      })}
    </>
  );
}
