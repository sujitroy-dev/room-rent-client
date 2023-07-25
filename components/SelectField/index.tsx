import React from "react";

type Props = React.ComponentPropsWithRef<"label"> & {
  label: string;
  required?: boolean;
  variant?: string;
  options?: {
    title: string;
    value: string;
  }[];
  updateValue?: (value: string) => void;
};
export default function SelectField(Props: Props) {
  const {
    label,
    required = false,
    variant = "default",
    options = [],
    updateValue,
  } = Props;

  return (
    <label {...Props} className="flex flex-col">
      <span>
        {label && <span className="text-sm">{label}</span>}
        {required && <span className="text-red self-start ml-1">*</span>}
      </span>
      <select
        className={`px-4 py-2 rounded-lg outline-slate-700 mt-1 ${
          variant === "default" ? "bg-slate-100" : "border-2 border-slate-300"
        }`}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
          if (!updateValue) return;
          updateValue(e.target.value);
        }}
      >
        <option value="select" key="select">
          Select
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </label>
  );
}
