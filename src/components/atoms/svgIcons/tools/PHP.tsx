interface ClassNameType {
  className?: string;
}

export default function PHP({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône PHP">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M38.3 18.5c-1.4-4.8-9-7.2-13.4-7.8l-3-.3H18c-5 .2-13.2 2.2-15.8 6.9q-.5 1-.7 2v1.4c.5 2.8 2.7 4.7 5 6a32 32 0 0 0 21.2 2A18 18 0 0 0 37 24a7 7 0 0 0 1.5-3.3v-1.1zm-24.1 4c-1.5.8-3 .5-4.6.5l-.5 2.7H6.7l2-10.2q2.5-.1 5 0c4 .3 3.3 5.4.5 7m7.5-5.1h-2.2l-1 5.6H16l2-10.2h2.4l-.5 2.7h2.7l.9.2c1.8.6 1.2 2.3 1 3.8q-.4 1.6-.6 3.4l-.1.1h-2.5l1-5q0-.6-.6-.6m8 5.6h-3.1l-.5 2.7h-2.4l2-10.2h4.9c4.8.3 3 7.2-1 7.5"
        />
        <path
          d="M28.8 21.2h-1.7l.6-3.8c1 0 3.1-.4 3.2 1 0 1.2-.7 2.8-2 2.8M14 18.6c-.1.7-.4 1.7-1 2.2l-1.2.4h-1.7l.6-3.8c1 0 3.3-.4 3.2 1.2"
        />
      </svg>
    </div>
  );
}
