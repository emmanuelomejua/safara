import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge"; // Optional for merging classNames, you can remove if unused

// Props interface
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  helperText?: string;
}

// ForwardRef for better form compatibility
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      type = "text",
      error,
      helperText,
      containerClassName = "",
      inputClassName = "",
      labelClassName = "",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={twMerge("flex flex-col space-y-1 w-full", containerClassName)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={props.id}
            className={twMerge("text-sm font-medium text-gray-700 dark:text-gray-300", labelClassName)}
          >
            {label}
          </label>
        )}

        {/* Input */}
        <input
          ref={ref}
          type={type}
          className={twMerge(
            "w-full rounded-xl border px-4 py-2 text-sm outline-none transition-all duration-200",
            "bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100",
            "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300",
            error ? "border-red-500 focus:ring-red-400" : "",
            inputClassName,
            className
          )}
          {...props}
        />

        {/* Error Message */}
        {error ? (
          <p className="text-xs text-red-500 mt-1">{error}</p>
        ) : (
          helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
