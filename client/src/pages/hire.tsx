import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Editor as TinyMCEEditor } from "tinymce";
import { Editor } from "@tinymce/tinymce-react";

import jobtype from "../data/pages/hire/type.json";
import jobcategories from "../data/pages/hire/categories.json";
import countries from "../data/shared/countries.json";

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

interface SelectFieldProps {
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}

const SelectField = ({ label, placeholder, options }: SelectFieldProps) => {
  return (
    <div className="flex flex-col gap-3 my-6">
      <Label>{label}</Label>
      <Select>
        <SelectTrigger>
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

export default function hire() {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
    <div className="py-8">
      <div>
        <h1 className="font-bold text-xl italic mb-3">Post your job</h1>
        <p>
          Reach potential candiates anywhere in the world for only $89 for 30
          days
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Job Details</h3>
        <TextField
          id="jobTitle"
          label="Job title"
          placeholder="Software engineer"
        />
        <SelectField
          label={"Type"}
          placeholder="Type of job"
          options={jobtype}
        />
        <SelectField
          label={"Category"}
          placeholder="Job Catgeory"
          options={jobcategories}
        />
        <SelectField
          label={"Location"}
          placeholder="Job Location"
          options={countries}
        />

        <div className="flex flex-col gap-3">
          <Label>Job Description</Label>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            tinymceScriptSrc={"./tinymce/tinymce.min.js"}
            init={{
              height: 350,
              menubar: false,
              branding: false,
              plugins: [
                "advlist",
                "lists",
                "autolink",
                "link",
                "image",
                "anchor",
                "code",
                "powerpaste",
                "quickbars",
              ],
              toolbar:
                "undo redo blocks removeformat | bold italic link |alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent ",
              quickbars_selection_toolbar:
                "bold italic underline | blocks | bullist numlist | blockquote quicklink",
              quickbars_insert_toolbar: "",
            }}
          />
        </div>
      </div>
    </div>
  );
}
