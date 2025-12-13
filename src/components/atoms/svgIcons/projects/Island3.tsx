import { strokeWidth } from "@constants/global";

interface ClassNameType {
  className?: string;
}

export default function Island3({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-label="Icône Île 3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="214"
        height="235"
        fill="none"
        viewBox="0 0 214 235"
        className="map"
      >
        <path
          stroke-width={strokeWidth.heavy}
          d="m44 3 22 2 5 1 3 3h1l5 8 2 2 1 2 3 3 2 1 2-2 2-4 1-4q0-3 3-5h7q5 2 6 7 0 7-1 10v2q-1 1 2 3l7 4q4 1 7 5l23 10 4-3q3-3 9-5h5l3 2 2 3 2 1v1l4 1 4-1 5-2 5-1h1q4 2 5 5l3 3 4 3 4 3 1 1 2 5 1 18-3 5-3 3v1l-4 11-1 5q-1 5-7 9l-6 2-6-1-5-1h-1l-1 3v3l2 3 2 4h1l1 4 1 2 8 11q5 6 7 14l1 3v4l2 6 2 6v1l1 1 1 2v1l-1 1v5l-2 6-2 4-3 3-7 5-7 4-4 4-5 4-3 3-4 1-1 2-3 1-1 1-8 1h-9l-4-1-3-1h-7l-4-2-3-1h-3l-2 1-4-1-3-3-1-1-1-7 1-2 1-3-1-8v-1h-7l-3-1-2-2-12-1-13 2-3-2-4-2-5-5-1-5-1-3v-1q-2-6-6-7h-2l-15 2h-3l-4 1q-4 2-8-2-5-3-6-10-1-6-4-9l-2-3-2-3q-4-2-3-8 1-4 3-6l2-2 2-2 7-10q5-6 5-10t-6-9l-1-1-2-1-3-5 1-9 4-8q2-4 6-6l3-4v-1l-1-3-3-3-4-4-3-6 2-7 2-4q3-9 8-11 5-3 6-7 2-10 6-19l1-1V3h6Z"
        />
      </svg>
    </div>
  );
}
