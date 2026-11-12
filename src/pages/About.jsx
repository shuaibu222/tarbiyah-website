import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { about } from '../content.js';

const initials = (name) =>
  name.replace(/^(Dr|Mr|Mrs|Ms)\.\s*/, '').split(' ').map((w) => w[0]).slice(0, 2).join('');

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A school that began in a home"
        intro="Our history, our values, and the people who guide us."
      />

      <Section eyebrow="Our story" title={`${new Date().getFullYear() - 1987} years of service`}>
        <div className="story">
          <ol className="timeline">
            {about.story.map((s, i) => (
              <Reveal as="li" key={s.year} delay={i * 80}>
                <span className="timeline__year">{s.year}</span>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="story__media" delay={120}>
            <div className="arch arch--tall">
              <img src={about.image} alt="Students at Attarbiyah" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft" eyebrow="What guides us" title="Mission and values">
        <div className="cards cards--3">
          {about.values.map((v, i) => (
            <Reveal key={v.title} className="card" delay={i * 80}>
              <span className="icon-chip"><Icon name={v.icon} /></span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="The people who guide us">
        <div className="cards cards--3">
          {about.leaders.map((l, i) => (
            <Reveal key={l.name} className="card leader" delay={i * 80}>
              <span className="leader__mono" aria-hidden="true">{initials(l.name)}</span>
              <h3>{l.name}</h3>
              <p>{l.role}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
