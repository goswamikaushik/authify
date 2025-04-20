import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from '../../utils/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...props }) => {
  return (
    <button className={cn(className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
