interface ClassNameType {
  className?: string;
}

export default function Supabase({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Supabase">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M37.2 20 23 38c-1 1-2.7.4-2.9-1v-1.6L20 28v-2.7H4.8l-.7-.2c-1.8-.6-2.7-2.9-1.7-4.6L17.2 2q.3-.3.8-.4h.4c.8 0 1.4.8 1.5 1.6v11.6h14.4q1.1-.1 2 .4c1.8 1 2.3 3.4 1 5"
        />
      </svg>
    </div>
  );
}
