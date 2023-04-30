import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder?: string;
}

const TextField = ({ id, label, placeholder }: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1 my-6">
      <Label htmlFor={id} className="!mb-2">
        {label}
      </Label>
      <Input id={id} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
