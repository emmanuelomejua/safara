import * as React from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
      secondary:"bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300",
      outline:  "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
      ghost:    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
      danger:   "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
      icon: "p-2 rounded-full",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<NativeButtonProps, "className"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  wrapperClassName?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      loading = false,
      disabled,
      wrapperClassName,
      children,
      icon,
      iconPosition = "left",
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={wrapperClassName}>
        <button
          ref={ref}
          disabled={disabled || loading}
          className={twMerge(buttonVariants({ variant, size }), className)}
          {...rest}
        >
          {loading ? (
            <svg
              className="mr-2 h-5 w-5 animate-spin text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            icon && iconPosition === "left" && <span className="mr-2">{icon}</span>
          )}

          {loading ? "Processing..." : children}

          {!loading && icon && iconPosition === "right" && (
            <span className="ml-2">{icon}</span>
          )}
        </button>
      </div>
    );
  }
);

Button.displayName = "Button";
