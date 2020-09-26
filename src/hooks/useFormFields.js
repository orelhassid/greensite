import { useEffect } from "react";

export default function useFormFields(fields, setLoading, setData) {
  useEffect(() => {
    const newData = {};
    let track = "";
    fields.forEach((item) => {
      if (item.defaultValue) {
        track = item.name;
        return (newData[item.name] = item.defaultValue);
      } else if (track === item.name) {
        return;
      }
      newData[item.name] = "";
    });
    setData(newData);
    setLoading(true);
  }, [fields, setLoading, setData]);
}
