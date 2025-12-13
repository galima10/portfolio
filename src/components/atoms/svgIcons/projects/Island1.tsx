import { strokeWidth } from "@constants/global";

interface ClassNameType {
  className?: string;
}

export default function Island1({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="274"
        height="235"
        fill="none"
        viewBox="0 0 274 235"
        className="map"
      >
        <path
          strokeWidth={strokeWidth.heavy}
          d="M127 3q6-1 9 1l6 6 3 8 3 6q1 3 7 4l5 1 5 2h1l7 3 3 5 1 3 1 2 3 5q2 3 7 5l9 1 2-1 3-1h5l4-1 7-3 9-2q5 2 7 5l3 9-3 9q-1 5-6 6l-4 1-3 1-10 6-1 5-1 2v4l-1 6-1 6v1q0 13 7 22l7 4 7 6 3 8v8l1 4 3 5v7l-5 7q-6 5-15 9-9 5-17 4-8-3-11-6l-4-4-3-4h-1q-6-6-14-3l-2 2-3 3-6 8-2 2-2 4-4 2-3 2q-8 5-10 15v6l-1 7q-1 4-4 5l-5 2-10-2-22-4q-6-2-12-1h-3l-3 1q-9 1-13-2t-6-7l-3-9-4-9-5-12q-3-5-3-14l-1-9v-10l1-5 1-4v-4l-1-4 1-5 2-6v-5l4-6 3-4 3-2h11l2-2 1-4v-8l2-5 1-4 1-4 1-5 1-3 1-2v-4l-4-9q-3-4-3-11l1-3q0-3 3-4l6-1 4-1 5-2 5-2 6-1 4-1 3-4 3-7 3-3 3-4 3-4 2-4q3-4 10-5Z"
        />
      </svg>
    </div>
  );
}
