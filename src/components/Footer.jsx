import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import Logo from './Logo.jsx';
import { school, nav, hours } from '../content.js';

// 08132136338 -> 0813 213 6338
const prettyPhone = (p) => p.replace(/^(\d{4})(\d{3})(\d{4})$/, '$1 $2 $3');

export default function Footer() {
  const [mainPhone, ...otherPhones] = school.phones;
  const social = school.social.filter((s) => s.url);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.mapQuery)}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo light />
            <p className="footer__statement">{school.statement}</p>
          </div>
          <div className="footer__actions">
            <a href={mapUrl} target="_blank" rel="noreferrer" className="footer__action">
              Get directions <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={`tel:${mainPhone}`} className="footer__action">
              Call {prettyPhone(mainPhone)} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div>
            <h3>Visit</h3>
            <address>{school.address}</address>
          </div>

          <div>
            <h3>Contact</h3>
            <a href={`tel:${mainPhone}`} className="footer__phone">{prettyPhone(mainPhone)}</a>
            {otherPhones.length > 0 && (
              <p className="footer__muted">
                Also{' '}
                {otherPhones.map((p, i) => (
                  <span key={p}>
                    <a href={`tel:${p}`}>{prettyPhone(p)}</a>
                    {i < otherPhones.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            )}
            <a href={`mailto:${school.email}`} className="footer__email">{school.email}</a>
          </div>

          <div>
            <h3>School hours</h3>
            <dl className="footer__hours">
              {hours.map((h) => (
                <div key={h.level}><dt>{h.level}</dt><dd>{h.time}</dd></div>
              ))}
            </dl>
            <p className="footer__muted">{school.officeHours}</p>
          </div>

          <div>
            <h3>Explore</h3>
            <ul className="footer__links">
              {nav.map((item) => (
                <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
              ))}
            </ul>
            {social.length > 0 && (
              <ul className="footer__social">
                {social.map((s) => (
                  <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <p className="footer__wordmark" aria-hidden="true">{school.shortName}</p>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {school.name}</p>
        <button
          type="button"
          className="footer__top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top <ArrowUp size={16} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
