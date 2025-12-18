interface ClassNameType {
  className?: string;
}

export default function Bootstrap({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Bootstrap">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M16.9 18.8v-4.6h3.6c1.1 0 2.3.6 2.4 1.9.3 3.3-3.9 2.6-6 2.7M23.7 23c.1 2-1.4 2.7-3 2.8h-3.8v-5h3.9c1.4 0 2.8.6 2.9 2.2"
        />
        <path
          d="M34.8 14.5q-.5-2.9-.3-5.6c0-1.6-1.3-3.3-3-3.6H8.2Q6.7 6 6 7.3c-.7 1.3-.4 3-.4 4.4l-.3 2.2C5 16 4 18.8 1.5 19.1v1.8c2 .1 3 2 3.5 3.8.3 1 .5 2.5.6 3.6 0 1.5-.3 3.1.4 4.4q1 2 3.1 2H31c2 0 3.5-1.7 3.6-3.7 0-2.7-.2-5.8 1.3-8.3q.9-1.6 2.7-1.8v-1.8c-2.3-.2-3.3-2.7-3.7-4.6m-8.5 9.8c-.5 2.4-2.6 3.4-4.9 3.5h-7.1V12.1h.1c2.3.1 4.8-.2 7 0 4 .4 5.7 4.4 2.5 7l-1.1.4.8.2c2 .7 3 2.5 2.7 4.6"
        />
      </svg>
    </div>
  );
}
