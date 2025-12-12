import { useAppNavigation } from "@hooks/globals/navigation/useAppNavigation";

interface NavExternalButtonProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
  action?: () => void;
}

export default function GenericButton({
  children,
  className,
  to,
  action,
}: NavExternalButtonProps) {
  const { handleClick } = useAppNavigation(action, to);
  return (
    <button className={className ? className : ""} onClick={handleClick}>
      {children}
    </button>
  );
}
