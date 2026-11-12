import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Pattern from '../components/Pattern.jsx';
import Icon from '../components/Icon.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { home, schools, school } from '../content.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <Pattern />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light rise">{home.eyebrow}</p>
            <h1 className="rise" style={{ animationDelay: '80ms' }}>{home.title}</h1>
            <p className="lead rise" style={{ animationDelay: '160ms' }}>{home.intro}</p>
            <div className="hero__actions rise" style={{ animationDelay: '240ms' }}>
              <Link to="/admissions" className="btn btn--gold">Begin admission <ArrowRight size={18} /></Link>
              <Link to="/about" className="btn btn--ghost">Our story</Link>
            </div>
          </div>
          <div className="hero__media rise" style={{ animationDelay: '200ms' }}>
            <div className="arch">
              <img src={home.image} alt="Students learning together" fetchPriority="high" />
            </div>
            <div className="hero__badge">
              <strong>{school.founded}</strong>
              <span>Founded in Hotoro</span>
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

      <Section
        eyebrow="Our schools"
        title="One family of five schools"
        intro="From a child’s first letters to adult learning, every stage has a home here."
      >
        <div className="school-list">
          {schools.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <Link to="/schools" className="school-row">
                <span className="school-row__num">0{i + 1}</span>
                <span className="icon-chip"><Icon name={s.icon} /></span>
                <span className="school-row__body">
                  <strong>{s.name}</strong>
                  <span>{s.text}</span>
                </span>
                <ArrowUpRight className="school-row__arrow" size={22} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

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
