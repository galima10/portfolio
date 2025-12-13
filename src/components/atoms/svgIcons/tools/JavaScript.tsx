interface ClassNameType {
  className?: string;
}

export default function JavaScript({ className }: ClassNameType) {
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
          d="M6.9 8.3v.2l-.2.4 2.4 26.4v.2h.2l10.5 3h.1l3-.8q3.3-.8 6.4-1.8h.2q1.2-.3 1.4-.7V35l1.4-14.7.3-4q0-1.4.3-2.6 0-2 .3-4V8.2zm13 23.4L14.1 30l-.3-3.7h1.5l.2 1.9v.6h.3l.4.1 3.5 1h.5l2.2-.6 1.5-.5q.5-.2.5-.5v-.1l.2-2.5c0-2 0-2-.3-2.4l-.6-.2h-10l1-10.2 11.4-.1.5 5.4H25l-.3-2.6v-.5h-.1l-.3-.2-.7-.1h-7.5v.7l-.5 5-.1.6v.3h.9l10.2.1-.8 8.4-.8.3zm.4-5.7v-1.6h3.1l-.1 3.5-3 .8zm3.3 2v.1m5.7-5.6-1 11-8 2v-2.5l6.4-2h.2v-.2l1-9.9q0-.2-.3-.3h-.4l-4.7-.1h-5.7l.4-4.4h6.4l.5 3.3h.1l3.4.1h.1l.2-.4V19l-.6-7v-.2h-7V11h10q0 2-1 11.4M24.7 5.2l-2.1-2.3 2-.1V1.5h-4.5v1.1L22.2 5H20v1.3h4.7zM19.3 1.5h-1.7v3.2h-2.3v1.6h4z"
        />
      </svg>
    </div>
  );
}
