type UpdateValue = {
  name: string;
  value: string | number;
};
type Props = {
  label?: string;
  type?: string;
  value?: string | number;
  required?: boolean;
  updateValue?: ({ name, value }: UpdateValue) => void;
};

export default function InputField({
  label,
  type = "text",
  value = "",
  required = false,
  updateValue,
}: Props) {
  return (
    <label className="flex flex-col">
      <span>
        {label && <span className="text-sm">{label}</span>}
        {required && <span className="text-red self-start ml-1">*</span>}
      </span>
      <input
        className="bg-slate-200 px-4 py-2 rounded-md outline-slate-700 mt-1"
        type={type}
        value={value}
        required={required}
        onChange={({ target }) =>
          updateValue
            ? updateValue({ name: target.name, value: target.value })
            : () => {}
        }
      />
    </label>
  );
}
