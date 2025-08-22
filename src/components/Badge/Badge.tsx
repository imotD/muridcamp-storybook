import "./Badge.css"

interface BadgeProps {
  color?: "danger" | "warning" | "success" | "default"
  label: string
  onClick: () => void
}

export const Badge = ({
  color = "default",
  label,
  ...props
}: BadgeProps) => {

  const baseClasses = 'rounded-full text-xs bg-gray-200 px-2 py-1 text-white';

  let colorClasses = '';
  if (color === 'danger') {
    colorClasses = 'bg-red-700';
  } else if (color === 'warning') {
    colorClasses = 'bg-yellow-500';
  } else if (color === 'success') {
    colorClasses = 'bg-green-700';
  } else {
    colorClasses = 'bg-gray-600';
  }

  return (
    <span
      className={`${colorClasses} ${baseClasses}`}
      {...props}
    >
      {label}
    </span>

  )
}