import { FC, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/utils';

type Type = 'email' | 'number' | 'password' | 'text';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: Type;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ className, type = 'text', placeholder, ...rest }) => {
  return <input type={type} placeholder={placeholder} className={cn(className)} {...rest} />;
};

export default Input;
