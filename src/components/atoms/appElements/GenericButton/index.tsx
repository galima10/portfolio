import { useAppNavigation } from "@hooks/globals/navigation/useAppNavigation";

interface NavExternalButtonProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
  action?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ariaLabel?: string;
  style?: React.CSSProperties;
  id?: string;
  ref?: React.Ref<HTMLButtonElement>;
  timeStep?: number;
}

export default function GenericButton({
  children,
  className,
  to,
  action,
  onMouseEnter,
  onMouseLeave,
  ariaLabel,
  style,
  id,
  ref,
  timeStep
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
      aria-label={ariaLabel}
      style={style}
      id={id}
      ref={ref}
      data-timeline-index={timeStep || null}
    >
      {children}
    </button>
  );
}
