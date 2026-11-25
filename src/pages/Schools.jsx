import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { schools, school, prettyPhone } from '../content.js';

const mapQuery = encodeURIComponent(school.mapQuery);

export default function Schools() {
  return (
    <>
      <PageHero
        eyebrow="Our schools"
        title={<>Five schools.<br /><em>One community.</em></>}
        intro="Every stage of learning, from early childhood to adult education, on one campus in Hotoro, Kano."
      />

      <nav className="school-index" aria-label="Jump to a school"><div className="container">{schools.map((item, index) => <a key={item.id} href={`#${item.id}`}><span>0{index + 1}</span>{item.name}</a>)}</div></nav>

      <section className="section school-collection" aria-label="Our five schools">
        <div className="container">
          {schools.map((s, i) => (
            <article key={s.id} id={s.id} className="school-chapter">
              <Reveal className="school-chapter__media">
                <img src={s.image} alt={s.imageAlt} loading="lazy" />
              </Reveal>
              <div className="school-chapter__body">
                <span className="chapter-number" aria-hidden="true">0{i + 1}</span>
                <p className="eyebrow">{s.focus}</p>
                <h2>{s.name}</h2>
                <p className="lead">{s.text}</p>
                <ul className="school-chapter__subjects" aria-label="Areas of learning">{s.subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>
                <Link to="/admissions" className="text-link">Ask about admission <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
          <p className="photography-note">Illustrative photography</p>
        </div>
      </section>

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
