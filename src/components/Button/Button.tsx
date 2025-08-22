import "./Button.css"

interface ButtonProps {
    primary?: boolean
    size?: "small" | "medium" | "large"
    isDisabled?: boolean
    isLoading?: boolean
    label: string
    onClick: () => void
}

export const Button = ({
    primary = false,
    isDisabled = false,
    isLoading = false,
    size = "medium",
    label,
    ...props
}: ButtonProps) => {

    const baseClasses = ' font-bold rounded-full transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

    let sizeClasses = '';
    if (size === 'small') {
        sizeClasses = 'px-3 py-1.5 text-xs';
    } else if (size === 'medium') {
        sizeClasses = 'px-4 py-2 text-sm';
    } else if (size === 'large') {
        sizeClasses = 'px-6 py-3 text-base';
    }

    const isDisabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

    const isLoadingClass = isLoading ? `cursor-progress flex gap-2` : '';

    const modeClasses = primary
        ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
        : 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:focus:ring-gray-500'; // Contoh dark mode sederhana

    return (
        <button
            type="button"
            className={`${baseClasses} ${isLoadingClass} ${sizeClasses} ${modeClasses} ${isDisabledClass}`}
            {...props}
        >
            {isLoading && (
                <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                    <path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
            )}
            <span>
                {isLoading ? 'loading...' : label}
            </span>
        </button>
    )
}