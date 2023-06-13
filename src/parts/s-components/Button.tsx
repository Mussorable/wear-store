import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  additionalClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  additionalClasses,
  ...rest
}) => {
  const buttonClasses = clsx(
    {
      input: true,
      button: true,
    },
    additionalClasses
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
