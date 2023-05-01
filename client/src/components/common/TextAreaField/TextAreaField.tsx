import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TextAreaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
}
export default function TextAreaField({
  id,
  label,
  placeholder,
}: TextAreaFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className="!mb-2">
        {label}
      </Label>
      <Textarea id={id} placeholder={placeholder} />
    </div>
  );
}
