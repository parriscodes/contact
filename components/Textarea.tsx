import React from "react";

interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error: boolean;
  errorMessage: string | undefined;
}

const Textarea = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  errorMessage = "",
  ...props
}: TextAreaProps) => {
  return (
    <div className="w-full mb-3">
      <label className="block text-lg" htmlFor={id}>
        {label}
      </label>
      <textarea
        autoComplete="off"
        id={id}
        name={name}
        rows={5}
        style={{ resize: "none" }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-emerald-500"
        {...props}
      />
      {error ? (
          <p className="text-sm italic text-red-500">*{errorMessage}</p>
        ) : null}
    </div>
  );
};

export default Textarea;
