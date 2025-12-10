import styles from "./NavExternalButton.module.scss";

interface NavExternalButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function NavExternalButton({
  children,
  href,
  className,
}: NavExternalButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : ""}
    >
      {children}
    </a>
  );
}
