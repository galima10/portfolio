interface LinkedInProps {
  className?: string;
}

export default function LinkedIn({ className }: LinkedInProps) {
  return (
    <div className={`svgIcon ${className}`} aria-label="Icône LinkedIn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path d="M34 1H6Q2 2 1 6v28q1 4 5 5h28q4-1 5-5V6q-1-4-5-5M13 33H7V15h6v18m-3-20c-4 1-5-6 0-6 4-1 4 6 0 6m23 20h-5V23l-1-2h-4l-1 2v10h-6V15h5v3l2-2q8-4 10 5z" />
      </svg>
    </div>
  );
}
