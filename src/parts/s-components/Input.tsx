import { InputHTMLAttributes, useState } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id?: string;
  placeholder?: string;
  label?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  label,
  ...rest
}) => {
  const [labelOnFocus, setLabelOnFocus] = useState(false);
  const labelClasses = clsx({
    "form-input-label": true,
    shrink: rest.value || labelOnFocus,
  });

  const inputClasses = clsx({
    input: true,
    "input-field": label,
    button: !label,
  });

  return (
    <div className={`input-wrapper`}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {placeholder}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        onFocus={() => setLabelOnFocus(true)}
        onBlur={() => setLabelOnFocus(false)}
        {...rest}
      />
    </div>
  );
};

export default Input;
