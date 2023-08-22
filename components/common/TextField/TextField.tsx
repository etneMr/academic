import "./TextField.scss";

interface ITextField {
  register: any;
  name: string;
  id?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
}
export function TextField({
  name,
  id,
  label,
  placeholder,
  isRequired = false,
  register,
}: ITextField) {
  return (
    <div className="text-field">
      <div className="label">
        {label} {isRequired && "*"}
      </div>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
}

export function TextareaField({
  name,
  id,
  label,
  placeholder,
  isRequired = false,
  register,
}: ITextField) {
  return (
    <div className="text-field">
      <div className="label">
        {label} {isRequired && "*"}
      </div>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        cols="30"
        rows="10"
        {...register(name)}
      />
    </div>
  );
}

export function SelectImageField({
  name,
  label,
  isRequired = false,
}: ITextField) {
  return (
    <div className="text-field">
      <div className="label">
        {label} {isRequired && "*"}
      </div>
      <div className="image">Drag and drop or click here to select file</div>
    </div>
  );
}
