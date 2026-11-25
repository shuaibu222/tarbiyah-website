import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { about } from '../content.js';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>A school that began<br /><em>in a home.</em></>}
        intro="Our history, our values, and the people who guide us."
      />

      <section className="section history-section">
        <div className="container">
        <div className="editorial-heading"><div><p className="eyebrow">Our story</p><h2>A small beginning.<br /><em>A lasting purpose.</em></h2></div><p className="lead">{new Date().getFullYear() - 1987} years of learning, faith, and service to the community of Hotoro.</p></div>
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
            <img src={about.image} alt="Students sharing ideas in a library, illustrative photography" loading="lazy" />
            <p className="history-section__caption"><span>Learning brings us together.</span><span>Since 1987</span></p>
          </Reveal>
        </div>
        </div>
      </section>

      <Section tone="soft" eyebrow="What guides us" title="Mission and values">
        <div className="purpose-grid">
          {about.values.map((v, i) => (
            <Reveal key={v.title} className="purpose" delay={i * 80}>
              <span className="purpose__index">0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="The people who guide us">
        <div className="leadership-list">
          {about.leaders.map((l, i) => (
            <Reveal key={l.name} className="leadership-person" delay={i * 80}>
              <p>{l.role}</p>
              <h3>{l.name}</h3>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
