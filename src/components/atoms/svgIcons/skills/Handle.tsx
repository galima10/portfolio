interface ClassNameType {
  className?: string;
}

export default function Handle({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="587"
        height="120"
        fill="none"
        viewBox="0 0 587 120"
        className="grey"
      >
        <path d="M586 119h-18v-2l-20-99H38l-20 99v2H0l1-3 10-50 10-53Q25 1 36 0h514q12 1 15 13l21 103z" />
      </svg>
    </div>
  );
}
