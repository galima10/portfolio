import { strokeWidth } from "@constants/global";

interface ClassNameType {
  className?: string;
}

export default function Island2({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-label="Icône Île 2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="231"
        height="235"
        fill="none"
        viewBox="0 0 231 235"
        className="map"
      >
        <path
          strokeWidth={strokeWidth.heavy}
          d="M131 3q11-2 17 5t8 15l2 15-1 4-1 2v10l-3 8-3 6-1 5 2 6q4 4 11 4l7-1h7l22 5q8 3 12 8l3 4 4 5h1l3 4 3 3q3 3 4 10v10l-2 8v9q0 5-2 10l-3 3-2 2-4 5-4 6q-4 6-16 7l-9-1h-7l-3 2-10 11v3l-1 2-3 6q-5 7-13 8-6 1-10 3l-2 3-2 2-7 5-3 1-4 1-1 1-3 2a49 49 0 0 1-25 2q-9-4-12-15-2-10-2-18l3-10v-9q-4-10-18-9l-12 2-14 1q-6 0-8-3l-3-6-5-12-5-11-4-6-3-3-1-4v-6l-1-1-1-10-2-11v-1L3 89V78q0-7 6-12l4-4 2-4 3-11q1-7-3-13l-3-7q-2-3-1-7l1-4 5-1 4 1 7 3 6 6 3 5 3 3 4 2 5 4 4 2q4 2 12-1 7-4 10-10 4-7 16-10h1l10-1 8-3 4-4 5-3q4-4 12-6Z"
        />
      </svg>
    </div>
  );
}
