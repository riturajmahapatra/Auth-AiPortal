import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="text-blue-500 bg-white border-2 rounded-xl px-4 py-3"
      {...props}
    />
  );
}

export default Button;
