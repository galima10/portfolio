interface ClassNameType {
  className?: string;
}

export default function Expo({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-label="Icône Expo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M32.7 23.4c-.3-.3-.7 0-1 0-5.4-.3-7.9-6.8-3.8-10.3.2-.3 1-.7 1-1L26 3l-2.8-1.6h-.3L13.5 7 4.4 25.2q-.2.4.2.6l1.8 1 .5.2 9.5-5.7 6.4 15 3.5 2.2 9.2-5.5.2-.4zM23 2.2l2 1.1-8.5 5-2-1.1zm.4 33.7c-3-6.3-5.3-13-8.1-19.3-.2-.4-.4-1.3-1-.8L6.8 26.2l-1.6-1L14 7.6q1.3.6 2.3 1.4l9.3 28.3z"
        />
        <path
          d="M31.3 13.8c-2.5.3-4 3-2.8 5.4a3.7 3.7 0 0 0 6.2.4c1.8-2.6-.2-6.1-3.4-5.8m2.8 2.6c-.5 1.7-2.3 3-4 3q-.5.3-.8-.2c-1.4-1.5-.3-4.4 1.8-4.7q1.6-.2 2.7.8c.4.4.4.5.3 1.1"
        />
      </svg>
    </div>
  );
}
