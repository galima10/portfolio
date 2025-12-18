interface ClassNameType {
  className?: string;
}

export default function Brush({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Pinceau">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="152"
        height="96"
        fill="none"
        viewBox="0 0 152 96"
      >
        <path
          d="M0 46q1 6 11 7c7 0 39 4 57 4q20 2 29-1 5-3 5-6v-5q0-3-5-6-9-3-28-2l-57 3Q1 41 0 46M106 54q4 8 14 8c15 0 30-11 32-21l-5-1c-9-2-16-7-26-7q-11 1-15 7z"
        />
      </svg>
    </div>
  );
}
