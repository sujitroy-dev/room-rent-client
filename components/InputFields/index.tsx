type UpdateValue = {
  name: string;
  value: string | number;
};
type Props = React.ComponentPropsWithoutRef<"label"> & {
  label?: string;
  type?: string;
  value?: string | number;
  required?: boolean;
  variant?: string;
  placeholder?: string;
  updateValue?: ({ name, value }: UpdateValue) => void;
};

export default function InputField(Props: Props) {
  const {
    label,
    type = "text",
    value = "",
    required = false,
    variant = "default",
    placeholder = "",
    updateValue,
  } = Props;
  return (
    <label className="flex flex-col" {...Props}>
      <span>
        {label && <span className="text-sm">{label}</span>}
        {required && <span className="text-red self-start ml-1">*</span>}
      </span>
      <input
        className={`px-4 py-2 rounded-lg outline-slate-700 mt-1 ${
          variant === "default"
            ? "bg-slate-100"
            : variant === "outlined"
            ? "border-2 border-slate-300"
            : ""
        }`}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={({ target }) =>
          updateValue
            ? updateValue({ name: target.name, value: target.value })
            : () => {}
        }
      />
    </label>
  );
}
