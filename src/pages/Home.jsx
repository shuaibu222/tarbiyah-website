import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Pattern from '../components/Pattern.jsx';
import SchoolDirectory from '../components/SchoolDirectory.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Gallery from '../components/Gallery.jsx';
import { home } from '../content.js';

export default function Home() {
  return (
    <>
      <section className="hero hero--editorial">
        <Pattern />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light rise">{home.eyebrow}</p>
            <h1 className="hero__title">
              <span>{home.title[0]} </span>
              <span>{home.title[1]} </span>
              <span><em>{home.title[2]}</em></span>
            </h1>
            <p className="lead rise" style={{ animationDelay: '160ms' }}>{home.intro}</p>
            <div className="hero__actions rise" style={{ animationDelay: '240ms' }}>
              <Link to="/admissions" className="btn btn--gold">Begin admission <ArrowRight size={18} /></Link>
              <Link to="/about" className="btn btn--ghost">Discover our story</Link>
            </div>
          </div>
          <div className="hero__media rise" style={{ animationDelay: '200ms' }}>
            <div className="hero__image-frame">
              <img src={home.image} alt={home.imageAlt} fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="At a glance">
        <div className="container stats__grid">
          {home.stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 70}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <SchoolDirectory />

      <Gallery />

      <Section tone="soft" eyebrow="Our community" title="What parents say">
        <div className="quotes">
          {home.testimonials.map((t, i) => (
            <Reveal as="figure" key={t.author} className="quote" delay={i * 80}>
              <span className="quote__mark" aria-hidden="true">“</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{t.author.split(' ').pop()[0]}</span>
                <span><strong>{t.author}</strong><small>{t.role}</small></span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
