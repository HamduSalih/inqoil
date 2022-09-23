import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { createClient } from "@supabase/supabase-js";

export default function Inqoil({
  supabaseUrl,
  supabaseAnonKey,
  handlesChange,
  bucket,
  folder,
  fileName,
  disabled,
  hoverTitle,
  types,
  onTypeError,
  classes,
  maxSize,
  onSizeError,
}) {
  var formData;
  React.useEffect(() => {
    formData = new FormData();
  });
  const [file, setFile] = useState(null);
  const handleChange = async (file) => {
    formData = new FormData();
    formData.append("File", file);
    formData.append("fileName", fileName);
    formData.append("supabaseUrl", supabaseUrl);
    formData.append("supabaseAnonKey", supabaseAnonKey);
    formData.append("bucket", bucket);
    formData.append("folder", folder);
    const options = {
      method: "PUT",
      body: formData,
    };
    const res = await fetch(`http://localhost:5000`, options);
    const Res = await res.json();
    handlesChange(Res)
  };
  return (
    <div>
      <FileUploader
        handleChange={handleChange}
        name="file"
        disabled={disabled ? disabled : false}
        hoverTitle={hoverTitle ? hoverTitle : "Drop here"}
        types={types ? types : undefined}
        onTypeError={
          onTypeError
            ? onTypeError
            : () => {
                alert("File type not supported");
              }
        }
        classes={classes ? classes : ""}
        maxSize={maxSize ? maxSize : 10}
        onSizeError={
          onSizeError
            ? onSizeError
            : () => {
                alert("File exceeds max size limitation");
              }
        }
      />
    </div>
  );
}
