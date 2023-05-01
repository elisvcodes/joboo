import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HTMLInputTypeAttribute } from "react";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
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
