import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo.jsx';
import Pattern from './Pattern.jsx';
import { school, nav, hours } from '../content.js';

export default function Footer() {
  const social = school.social.filter((s) => s.url);

  return (
    <footer className="footer">
      <Pattern />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            Islamic and modern education from Nursery through Secondary School in Kano, since {school.founded}.
          </p>
          {social.length > 0 && (
            <ul className="footer__social">
              {social.map((s) => (
                <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li><MapPin size={16} aria-hidden="true" /><span>{school.address}</span></li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <span>
                {school.phones.map((p, i) => (
                  <span key={p}><a href={`tel:${p}`}>{p}</a>{i < school.phones.length - 1 ? ', ' : ''}</span>
                ))}
              </span>
            </li>
            <li><Mail size={16} aria-hidden="true" /><a href={`mailto:${school.email}`}>{school.email}</a></li>
            <li><Clock size={16} aria-hidden="true" /><span>{school.officeHours}</span></li>
          </ul>
        </div>

        <div>
          <h3>School hours</h3>
          <dl className="footer__hours">
            {hours.map((h) => (
              <div key={h.level}><dt>{h.level}</dt><dd>{h.time}</dd></div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
