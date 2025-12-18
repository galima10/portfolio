interface ClassNameType {
  className?: string;
}

export default function WampServer({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône WampServer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M25.2 38.5c-5.5-.4-11.7 1-16.7-1.7A14 14 0 0 1 2 27.9q-.7-3.2-.5-6.5h5.3q-.2 3 .4 5.8c1.2 4 4.6 5.9 8.6 6 2.6.2 5.8.2 8.4 0 3.7-.1 7-1.8 8.4-5.4.8-2 .7-4.2.7-6.4h5.2v2.9c.2 7.7-5.8 13.7-13.3 14.2"
        />
        <path
          d="M30.5 24.3c-.1 2.9-2 5.5-4.9 6.1q-3 .7-5.6-1a8 8 0 0 1-6.2.9c-6.2-1.8-4-10-4.4-14.8.2-3 2.3-5.4 5.3-5.9v14.7l.2.5c.4.7 1.9.7 2.3 0l.2-.5v-5.6h5.2v5.7l.4.7c.7.4 1.9.3 2.2-.5v-15c2.8.4 4.8 2.7 5.3 5.3q.2 4.7 0 9.4"
        />
        <path
          d="M38.5 18.7h-5.2v-2.6c-.3-5.6-3.4-9-9.1-9.4h-8.4q-4 .1-6.9 3c-2.2 2.5-2.2 5.8-2.1 9H1.5c-.1-3.7.2-7 2-10.4C8.3-.3 16.9 1.8 25.3 1.5c5.2.4 10.2 3.6 12.2 8.6 1 2.7 1 5.7 1 8.6"
        />
      </svg>
    </div>
  );
}
