interface ClassNameType {
  className?: string;
}

export default function Lamp({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Lampe-torche">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="152"
        height="96"
        fill="none"
        viewBox="0 0 152 96"
      >
        <path d="M5 61h103q3 0 3-3V39q0-3-3-4h-6v-2l-3-4H86q-3 1-4 4v2H5q-3 1-4 4v18a4 4 0 0 0 4 4M119 33l-2 5v20l2 5 11 8q3 1 3-2V27q0-3-3-2zM148 74a4 4 0 0 0 4-4V26q0-3-4-3h-6q-3 0-4 3v44q1 4 4 4z" />
      </svg>
    </div>
  );
}
