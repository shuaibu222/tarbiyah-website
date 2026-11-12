import { useId } from 'react';

// Light eight-point star lattice, a quiet nod to Islamic geometric art.
export default function Pattern({ className = '' }) {
  const id = useId();
  return (
    <svg className={`pattern ${className}`} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width="64" height="64" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="18" y="18" width="28" height="28" />
            <rect x="18" y="18" width="28" height="28" transform="rotate(45 32 32)" />
            <path d="M0 32h8M56 32h8M32 0v8M32 56v8" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
