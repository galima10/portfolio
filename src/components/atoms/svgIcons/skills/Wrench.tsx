interface ClassNameType {
  className?: string;
}

export default function Wrench({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Clé à molette">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="152"
        height="96"
        fill="none"
        viewBox="0 0 152 96"
      >
        <path d="m123 76 8-1 1-1 1-2v-2l-16-9-1-2 2-14 1-1 9-7h2l17 10 2-1 2-3v-4a29 29 0 0 0-51-8q-6 7-11 7c-4 1-84-1-84-1a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4l85-1s6 1 9 6q8 12 24 13" />
      </svg>
    </div>
  );
}
