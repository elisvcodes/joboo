import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: any;
}

const SelectField = ({
  id,
  name,
  label,
  placeholder,
  options,
  value,
  onChange,
}: SelectFieldProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange} name={name}>
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className="max-h-[200px] overflow-auto">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
