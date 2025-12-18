interface ClassNameType {
  className?: string;
}

export default function Hammer({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Marteau">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="152"
        height="96"
        fill="none"
        viewBox="0 0 152 96"
      >
        <path d="m1 47 3 3 107-1V33L4 31a3 3 0 0 0-3 4zM125 95c8-4 26-19 26-36V32c0-5-4-5-4-9 0-3 4-4 4-7V4q0-2-3-3h-16l-3 3v12c0 3 5 4 5 7q-1 7-6 7h-6l-4 3v16l4 2q8 1 9 6c-1 21-8 29-11 34q-1 6 5 4m6-38" />
      </svg>
    </div>
  );
}
