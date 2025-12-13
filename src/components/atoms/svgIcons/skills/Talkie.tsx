interface ClassNameType {
  className?: string;
}

export default function Talkie({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-label="Icône Talkie-Walkie">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="152"
        height="96"
        fill="none"
        viewBox="0 0 152 96"
      >
        <path d="M119 69V41h26q7-1 7-6 0-6-7-7h-26v-1q0-5-5-5H91q-5 0-5 5v1H5q-5 1-5 5v30q0 3 5 4h81v2q0 5 5 5h23q5 0 5-5M60 38l3-3q4 1 4 3-1 3-4 4-2-1-3-4m13 0 3-3q3 1 4 3 0 3-4 4-2-1-3-4M60 48q1-3 3-3 4 0 4 3-1 3-4 3-2 0-3-3m13 0q1-3 3-3 3 0 4 3 0 3-4 3-2 0-3-3M60 58q1-3 3-3 4 0 4 3-1 3-4 3-2 0-3-3m13 0q1-3 3-3 3 0 4 3 0 3-4 3-2 0-3-3m40 3H93V35h20z" />
      </svg>
    </div>
  );
}
