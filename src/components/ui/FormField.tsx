"use client";

import type { ChangeEventHandler, ReactNode } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  error?: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
  children?: ReactNode;
}

export function FormField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  as = "input",
  options = [],
  placeholder,
  children
}: FormFieldProps) {
  const baseClass =
    "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-civic focus:ring-2 focus:ring-civic/20";

  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {as === "textarea" && (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className={baseClass}
        />
      )}
      {as === "select" && (
        <select name={name} value={value} onChange={onChange} className={baseClass}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {as === "input" && (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
      {children}
      {error && <span className="mt-1 block text-xs text-rose-600">{error}</span>}
    </label>
  );
}
