// src/components/ui/Badge.tsx

type BadgeProps = {
  label: string;
  color?: string;
};

const Badge = ({ label, color = "bg-gray-200 text-gray-700" }: BadgeProps) => {
  return (
    <span className={`text-xs px-2 py-1 rounded ${color}`}>
      {label}
    </span>
  );
};

export default Badge;