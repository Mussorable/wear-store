import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, id, ...rest }) => {
  return (
    <>
      {placeholder && (
        <label className="sr-only" htmlFor={id}>
          {placeholder}
        </label>
      )}
      <input id={id} type={type} placeholder={placeholder} {...rest} />
    </>
  );
};

export default Input;
