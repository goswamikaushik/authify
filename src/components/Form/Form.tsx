import { FC, FormHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../utils/utils';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const Form: FC<PropsWithChildren<FormProps>> = ({ children, className, ...props }) => {
  return (
    <form className={cn('flex flex-col gap-4', className)} {...props}>
      {children}
    </form>
  );
};

export default Form;
