import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: React.HTMLAttributes<HTMLDivElement>;
}

const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  className,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className="!mb-2">
        {label}
      </Label>
      <Input id={id} placeholder={placeholder} type={type} />
    </div>
  );
};

export default InputField;
