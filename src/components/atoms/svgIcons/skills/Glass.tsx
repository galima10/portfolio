interface ClassNameType {
  className?: string;
}

export default function Glass({ className }: ClassNameType) {
  return (
    <div className={`svgIcon ${className}`} role="img" aria-label="Icône Loupe">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="152"
        height="96"
        fill="none"
        viewBox="0 0 152 96"
      >
        <path d="M88 53a32 32 0 1 0 0-10h-4v10zm8-5a23 23 0 1 1 47 0 23 23 0 0 1-47 0" />
        <path d="M137 47q-2-13-14-16a1 1 0 0 0-1 3q10 3 12 13a1 1 0 1 0 3 0M6 56l75-2V42L6 40q-5 0-6 8 1 8 6 8" />
      </svg>
    </div>
  );
}
