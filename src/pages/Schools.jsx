import { MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { schools, school, prettyPhone } from '../content.js';

const mapQuery = encodeURIComponent(school.mapQuery);

export default function Schools() {
  return (
    <>
      <PageHero
        eyebrow="Our schools"
        title="Five schools, one community"
        intro="Every stage of learning, from early childhood to adult education, on one campus in Hotoro, Kano."
      />

      <Section>
        <div className="school-cards">
          {schools.map((s, i) => (
            <Reveal as="article" key={s.name} className="school-card" delay={(i % 2) * 80}>
              <div className="school-card__media">
                <img src={s.image} alt="" loading="lazy" />
              </div>
              <div className="school-card__body">
                <span className="icon-chip"><Icon name={s.icon} /></span>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Visit us" title="Our campus">
        <Reveal className="campus">
          <div className="campus__info">
            <p><MapPin size={20} aria-hidden="true" /> {school.address}</p>
            <p>
              <Phone size={20} aria-hidden="true" />
              <span className="campus__phones">
                {school.phones.map((p) => <a key={p} href={`tel:${p}`}>{prettyPhone(p)}</a>)}
              </span>
            </p>
            <a
              className="btn btn--primary"
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            className="campus__map"
            title="Map of Hotoro, Kano"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </Section>

      <CallToAction />
    </>
  );
}
