interface ClassNameType {
  className?: string;
}

export default function Logo({ className }: ClassNameType) {
  return (
    <div
      className={className}
      aria-label="Mon logo monogramme (deux lettres M se chevauchant)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
      >
        <path
          fill="url(#a)"
          d="M46 19 19 44V20l12 11 4-4V4l-4-4-12 11 3 3 9-8v19L4 0 0 4v27l4 4V6l11 10v30l4 4 27-25v25l4-4V23z"
        />
        <defs>
          <linearGradient
            id="a"
            x1="50"
            x2="0"
            y1="25"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5c967d" />
            <stop offset="1" stop-color="#5a587d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
