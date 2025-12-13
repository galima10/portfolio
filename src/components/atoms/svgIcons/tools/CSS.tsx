interface ClassNameType {
  className?: string;
}

export default function CSS({ className }: ClassNameType) {
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
          d="M21.9 6.5V3.3l-.1-.1h-2.3v-.3h2.3V1.4h-4v3.2h2.4V5h-2.3v1.5h3.9M26.6 3.2h-2.3v-.3h2.3V1.5h-4v3.2H25l-.1.3h-2.3v1.5h4zM17 6.5V4.8h-2.2V3.2H17V1.5h-4v5zM33 8.5H6.8v.3l2.4 26.5v.2h.1l10.7 3 10.8-3 .1-.2 2.3-26.5zM20 31.7l-5.9-1.6-.3-3.6h1.6l.1 2.3v.2h.2l4.2 1.3h.1l4.3-1.3h.2v-.2l.5-5.4v-.2H13.5l-.1-1.6H25v-.2l.4-4.6v-.2H13l-.1-1.4V15h14.5l-1.4 15.1zm.2-2.7v-4.7h3.6l-.3 3.8zm0-8.4v-3h4.2l-.2 3h-4m8.3 12.8-8.3 2.3v-2.9l6.6-1.8h.1v-.2l1.5-16.6V14h-8.2V11h10.3z"
        />
      </svg>
    </div>
  );
}
