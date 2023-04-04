import React from "react";

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  errorMessage: string | undefined;
}

const Input = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  errorMessage = "",
  ...props
}: InputProps) => {
  return (
    <div className="w-full mb-3">
      <label className="block text-lg" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        autoComplete="off"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-emerald-500"
        {...props}
      />
      {error ? (
        <p className="text-sm italic text-red-500">*{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Input;
