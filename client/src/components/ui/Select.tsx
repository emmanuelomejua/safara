import type { FC } from "react";


export interface Option {
    value: string
    label: string
}


interface SelectProps {
    name?: string;
    id?: string;
    options: Option[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className: string;
    onClick?: any;
}

const Select:FC<SelectProps> = ({ name = "select", id = "select", options, onChange, className }) => {
  return (
    <div className={className}>
        <select name={name} id={id}  className='w-full h-full outline-none rounded-lg px-2 bg-white' onChange={onChange}>
            { options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))
            }

        </select>
    </div>
  )
}

export default Select;
