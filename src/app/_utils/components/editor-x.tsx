"use client";

import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuillDynamic = dynamic(() => import("react-quill"), { ssr: false });

function EditorX({
  form,
  name,
  label,
  defaultValue = "",
}: {
  form: any;
  name: string;
  label: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <FormItem className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <ReactQuillDynamic
        theme="snow"
        value={value}
        onChange={(editorValue: string) => {
          form.setValue(name, editorValue);
          setValue(editorValue);
        }}
      />
    </FormItem>
  );
}

export default EditorX;
