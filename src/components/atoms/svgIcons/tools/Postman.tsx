interface ClassNameType {
  className?: string;
}

export default function Postman({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Postman">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M19.3 1.5A18.5 18.5 0 1 0 36 29.3 18.6 18.6 0 0 0 19.2 1.5m-2.6 17.3q2.6-2.7 5.5-5c1-.7 2.1-1.6 3.3-.9v.2q-.4 0-.7.3L18 20.2H18L16.7 19zm2 3-1.6.1.8-.9c.1 0 .8.7.7.8m-2.5-2.5 1.2 1.1-2.9.6zM9 30.3q-.1 0-.1-.2l1.3-1.3 1.6 1.6zm11.1-7a39 39 0 0 1-7.8 5c-.2.4.2 1.4.3 1.8l-.1.2-1.9-1.8v-.2l5.6-5.6 2.9-.5 1 1zm4.6-4.4-4 4-1.1-1.1 7-6.2a9 9 0 0 1-2 3.3m1.7-3.9-7.3 6.4c-.1-.2-.8-.7-.7-.9l6.8-6.7q.1-.2.5-.3c.7 0 1.3 1 .7 1.5m-.2-2.2a2.7 2.7 0 0 1 2.1-4.4q1 0 1.7.6c0 .1-2.4 2.1-2.5 2.5v.2l1.9 1.9c-1 .6-2.5.1-3.2-.8m3.7.5-1.7-1.7 2.2-2.2c1 1 .8 3.1-.5 3.9"
        />
        <path
          d="M30.3 11.9H30q-.1-.2.1-.5v-.7c.5-.2.5 1 .2 1.2"
        />
      </svg>
    </div>
  );
}
