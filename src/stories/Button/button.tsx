import { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  [
    'w-full',
    'rounded-md',
    'font-bold',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: 'bg-[#1A202C]',
        outline: 'border-2',
        ghost: 'transition-colors duration-200',
      },
      size: {
        sm: ['text-sm', 'py-2', 'px-4'],
        md: ['text-medium', 'py-2', 'px-4'],
        lg: ['text-large', 'py-3', 'px-6'],
      },
      colorScheme: {
        primary: 'text-white',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorScheme: 'primary',
        className: 'bg-primary-500 hover:bg-primary-600',
      },
      {
        variant: 'outline',
        colorScheme: 'primary',
        className:
          'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
      },
      {
        variant: 'ghost',
        colorScheme: 'primary',
        className: 'bg-primary-500 text-primary-600 hover:bg-primary-100',
      },
    ],
  },
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

function Button({ variant, size, colorScheme, ...props }: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, size, colorScheme })}
      {...props}
    />
  );
}

export default Button;
