import { Link } from 'react-router-dom';
import { school } from '../content.js';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label={`${school.name}, home`}>
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <rect width="40" height="40" rx="10" className="logo__bg" />
        <g fill="none" className="logo__mark" strokeWidth="1.6">
          <rect x="12" y="12" width="16" height="16" />
          <rect x="12" y="12" width="16" height="16" transform="rotate(45 20 20)" />
        </g>
      </svg>
      <span className="logo__text">
        <strong>Attarbiyah</strong>
        <small>Community College</small>
      </span>
    </Link>
  );
}
