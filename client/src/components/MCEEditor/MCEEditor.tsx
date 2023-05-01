import React, { useRef } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import { Editor } from "@tinymce/tinymce-react";
import { Label } from "../ui/label";

export default function MCEEditor() {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <Label>Job Description</Label>
      <Editor
        id="mce"
        onInit={(_evt, editor) => (editorRef.current = editor)}
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
  );
}
