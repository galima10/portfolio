interface ClassNameType {
  className?: string;
}

export default function HTML({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône HTML">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="m21.8 6.5.1-.1V4l1.2 1.6L24.2 4v2.4h1.6l.1-.3V1.5h-1.8l-1 1.7L22 1.5h-1.8v4.7l.1.3zM11 4.8h1.6v1.6h1.7v-5h-1.7v1.7H11V1.5H9.4v5H11zM15 3.2h1.4v3.2H18V3.2h1.4q.3-.8.2-1.7h-4.7q-.1.9.1 1.7M30.7 4.8h-2.4V1.5h-1.6v5h4zM6.8 8.5v.2L9 35.4v.1h.2l10.6 3h.1l10.7-3h.2v-.1l2.3-26.7v-.2zm6.9 18h1.7l.2 2.4v.1h.1l4.3 1 4.2-1 .1-.1v-.1l.5-5.3v-.2H13.4l-.7-8.4h14.6v.4l-.1 1.4H14.6v.2l.3 4.5v.2h11.9l-.8 8.6-6 1.7-6-1.7zm6.5-.2v-2h3.6l-.4 3.9-3.2.8zm8.2 7.2-8.2 2.3v-3l6.5-1.8h.2v-.2l.9-9.9v-.1l-.2-.1h-7.4v-3l7.7-.1h.2v-.2l.2-3V14h-8.1V11h10.3z"
        />
      </svg>
    </div>
  );
}
