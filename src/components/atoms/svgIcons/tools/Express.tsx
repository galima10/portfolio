interface ClassNameType {
  className?: string;
}

export default function Express({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Express">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M19.7 20.3c.2-3.7-.7-7.3-3.8-9.5-5.2-3.6-12.1-.6-13.7 5.3l-.7 3.1a14 14 0 0 0 1 6.1c3 8 15.7 7 17-1.7 0-.3-.7-.3-1-.3-.7.2-1 1.6-1.2 2.2-1.3 2.7-4 4-7 3.8-4.7-.1-7.4-4.5-7-9zm-10-9.5c5.1-.7 8.4 3.4 8.4 8.1H3.3c0-3.9 2.4-7.5 6.4-8M38.5 30.2q-1.5.4-2.6-.7l-6.4-8.8-6.5 8.8q-1 1.2-2.5.7l8-10.7L21 10q1.6-.4 2.6.6l5.8 7.8 6-7.9q1-1 2.3-.5l-7 9.3v.7z"
        />
      </svg>
    </div>
  );
}
