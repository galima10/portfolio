interface ClassNameType {
  className?: string;
}

export default function TypeScript({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M34.3 1.5H5.7a4 4 0 0 0-4.2 4.2v28.6c0 2.3 1.9 4.2 4.2 4.2h28.6c2.3 0 4.2-1.9 4.2-4.2V5.7c0-2.3-1.9-4.2-4.2-4.2M23 22h-4.7v13.3h-3.7V22H10v-3h13zm12.4 9.3c-.4 4-5.2 4.5-8.4 4q-1.4-.1-2.6-.7V31a7 7 0 0 0 3.3 1.5c1 .2 3.5.2 3.9-1.2.5-1.8-2.6-2.7-3.8-3.2-2.2-1-3.7-2.5-3.4-5.2.5-4.3 6-4.7 9.3-3.9q.6 0 1 .3v3.4q-1.4-1-3.1-1.1c-1-.1-2.7 0-3.2 1-1.1 1.8 2.6 3 3.7 3.5 2.3 1.1 3.6 2.5 3.3 5.2"
        />
      </svg>
    </div>
  );
}
