interface ClassNameType {
  className?: string;
}

export default function Github({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-label="Icône Github">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path d="M27 38h-2l-1-9h-1q5 0 8-4 2-5-1-11V9l-3 1-2 1H15l-2-1-3-1v5l-2 5q0 9 8 10h1l-2 2-3 1-3-4H7l1 1q1 3 3 5h4v4h-1Q3 34 2 22C0 5 20-5 32 6c11 9 8 27-5 32" />
      </svg>
    </div>
  );
}
