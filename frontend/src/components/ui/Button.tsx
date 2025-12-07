import type { ReactElement } from "react";


interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;


}
const sizeClasses = {
    "sm": "px-3 py-1 text-xs",
    "md": "px-6 py-1.5 text-sm",
    "lg": "px-8 py-2 text-base"
};

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
};

const defaultStyles = "px-8 py-2.5 rounded-lg text-base font-normal text-white p-3 m-2 flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-opacity ";

export function Button({ variant, text, startIcon, onClick, size = "md", fullWidth, }: ButtonProps) {
    return <button onClick={onClick} className={variantClasses[variant] + "" + defaultStyles + sizeClasses[size] + "" + `${fullWidth ? " w-full " : ""}`} >
        {startIcon} {text} </button>
}