import { useState } from "react";

const useFormState = (initialState: any) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange =
    (name: string) =>
    (
      value: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | string
    ) => {
      let newValue: File | string | undefined;

      if (typeof value === "string") {
        newValue = value;
      } else if (value.target.type === "file") {
        newValue = (value.target as HTMLInputElement).files
          ? (value.target as HTMLInputElement).files?.[0]
          : "";
      } else {
        newValue = value.target.value;
      }

      setFormState((prevState: any) => ({
        ...prevState,
        [name]: newValue,
      }));
    };

  return [formState, handleChange];
};

export default useFormState;
