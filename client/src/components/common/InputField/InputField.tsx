import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className="!mb-2">
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
