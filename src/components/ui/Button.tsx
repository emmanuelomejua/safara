import { forwardRef } from "react";

type BtnProps = {
    className: string;
    wrapperClass?: string;
    label: string;
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button'
}

const Button = forwardRef<HTMLButtonElement, BtnProps>(({className, wrapperClass, label, onClick, type = 'button'}, ref) => {
  return (
    <div className={wrapperClass}>
        <button 
            ref={ref}
            type={type} 
            className={className} 
            onClick={onClick}>{label}</button>
    </div>
  )
}
)

Button.displayName = 'Button'
export default Button;
