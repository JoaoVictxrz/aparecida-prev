export const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`rounded-sm border-2 px-2 dark:border-zinc-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
