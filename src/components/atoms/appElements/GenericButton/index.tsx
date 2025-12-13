import { useAppNavigation } from "@hooks/globals/navigation/useAppNavigation";

interface NavExternalButtonProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
  action?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function GenericButton({
  children,
  className,
  to,
  action,
  onMouseEnter,
  onMouseLeave,
}: NavExternalButtonProps) {
  const { handleClick } = useAppNavigation(action, to);
  return (
    <button
      className={className ? className : ""}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
    >
      {children}
    </button>
  );
}
