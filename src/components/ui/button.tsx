import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

const button = cva(
  " px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  {
    variants: {
      variant: {
        primary:
          "inline-flex items-center text-indigo-700 bg-indigo-100 hover:bg-indigo-200 ",
        secondary:
          "inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700",
        underline: "hover:underline",
        danger: "bg-red-500 text-white",
        dangerOutline: "text-red-500 hover:bg-red-100",
        primaryOutline: "text-indigo-500 hover:bg-indigo-100",
        success: "bg-green-500 text-white",
        info: "bg-blue-500 text-white",
        light: "bg-gray-200 text-gray-800",
        dark: "bg-gray-800 text-white",
        ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
        pagination: "hover:bg-indigo-100 hover:text-indigo-700   bg-indigo-700 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      },
      disabled: {
        true: "bg-opacity-50  cursor-not-allowed ",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  variant?:
    | "primary"
    | "secondary"
    | "underline"
    | "danger"
    | "success"
    | "info"
    | "light"
    | "dark"
    | "dangerOutline"
    | "ghost"
    | "primaryOutline"
    | "pagination";
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant, size, disabled, ...props }, ref) => {
    const buttonClasses = cn(button({ variant, size, disabled }), className);
    if (asChild) {
      return (
        <button
          {...props}
          ref={ref as React.Ref<HTMLButtonElement>}
          disabled={disabled}
          className={buttonClasses}
        >
          {props.children}
        </button>
      );
    }
    return <button {...props} ref={ref} disabled={disabled} className={buttonClasses} />;
  }
);

Button.displayName = "Button";

export default Button;
