interface ClassNameType {
  className?: string;
}

export default function Wordpress({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Wordpress">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M33 6.9C21-5 1 3.9 1.6 20.7A18.5 18.5 0 1 0 33 6.9m-2.1 27C18.2 44-.3 32.7 2.5 17a17.8 17.8 0 0 1 26-12.4A17.6 17.6 0 0 1 31 33.9"
        />
        <path
          d="M30.5 21c-.7 2.8-1.9 5.6-2.5 8.4l-5.8-16.8c.7-.2 2.3.1 2.4-.7q0-.7-.7-.9l-2.3.2h-4c-.5 0-2.5-.4-2.8 0q-.2.8.2 1.1c.3.3 2 .2 2 .3l2.5 6.8L16 29.5l-5.9-16.9c.5-.1 1.7 0 2.2-.3.4-.2.3-1 0-1.2a31.1 31.1 0 0 1-5.6 0q2.7-4 7.3-5.8c4.6-1.8 9.6-1.4 13.9 1q1.4.8 2.6 1.8l-1 .2c-4.3 2.4.4 6.3 1 9.4q.3 1.6-.1 3.3"
        />
        <path
          d="m25.2 35-2.5.6a18 18 0 0 1-7.2-.4l4.7-13.8zM12.8 34.1a16 16 0 0 1-6.7-6.4 15 15 0 0 1-.7-14zM28 33.6l4.7-13.4c1-3 1.3-3.7 1.4-7v-.4a16 16 0 0 1-6 20.8"
        />
      </svg>
    </div>
  );
}
