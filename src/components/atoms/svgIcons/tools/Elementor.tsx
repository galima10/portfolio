interface ClassNameType {
  className?: string;
}

export default function Elementor({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} aria-label="Icône Elementor">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          d="M36 10.5A18.5 18.5 0 1 0 5.1 31a18.6 18.6 0 0 0 30.7-20.6M15.3 27.7h-3.1V12.3h3.1zm12.3 0h-9.2v-3h9.2zm0-6.1h-9.2v-3.2h9.2zm0-6.3h-9.2v-3h9.2z"
        />
      </svg>
    </div>
  );
}
