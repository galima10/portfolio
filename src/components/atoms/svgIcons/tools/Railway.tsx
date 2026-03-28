interface ClassNameType {
  className?: string;
}

export default function Railway({ className }: ClassNameType) {
  return (
    <div
      className={`svgIcon ${className}`}
      role="img"
      aria-label="Icône Railway"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <g clip-path="url(#a)">
          <path d="m.2 17.1-.2 2h30.4l-.4-.5c-5.2-6.8-8-6.2-12-6.3l-7.5-.1h-9L.5 15h15.7v2zm30.4 4H0l.2 1.7h28.2c1.3 0 2-.8 2.2-1.6M1.8 28.4S6.4 39.8 20 40c8 0 15-4.8 18.2-11.7z" />
          <path d="M20 0A20 20 0 0 0 2.6 10.2h16.2c2.6.2 5.8.4 8.4 2.3 1.3 1 3.3 3.4 4.5 5q1.7 2.3.6 4.9a4 4 0 0 1-3.9 2.4H.7l.4 1.5H39A20 20 0 0 0 20 0" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h40v40H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
