import "./Button.css"

interface ButtonProps {
    primary?: boolean
    size?: "small" | "medium" | "large"
    label: string
    onClick: () => void
}

export const Button = ({
    primary = false,
    size = "medium",
    label,
    ...props
}: ButtonProps) => {

    const baseClasses = 'font-bold rounded-full transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

    let sizeClasses = '';
    if (size === 'small') {
        sizeClasses = 'px-3 py-1.5 text-xs';
    } else if (size === 'medium') {
        sizeClasses = 'px-4 py-2 text-sm';
    } else if (size === 'large') {
        sizeClasses = 'px-6 py-3 text-base';
    }

    const modeClasses = primary
        ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
        : 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:focus:ring-gray-500'; // Contoh dark mode sederhana

    return (
        <button
            type="button"
            className={`${baseClasses} ${sizeClasses} ${modeClasses}`}
            {...props}
        >
            {label}
        </button>
    )
}