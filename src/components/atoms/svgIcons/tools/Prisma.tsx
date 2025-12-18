interface ClassNameType {
  className?: string;
}

export default function Prisma({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Prisma">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M35 30 22.2 2.5a2 2 0 0 0-3-.5Q12.4 12.4 5.8 23.2l-1 1.4v2.5l6.9 10.6q.8 1 2 .8l20.4-6c.8-.5 1.2-1.6 1-2.5m-3.4 1c-5.3 1.8-10.9 3-16.1 4.8q-.9 0-1-.8Q17.4 22 20 9c.1-.6.4-2.3.6-2.6q.4-.4 1-.1l11 23.3c.3 1-.3 1.1-1 1.4"
        />
      </svg>
    </div>
  );
}
