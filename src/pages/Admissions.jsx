import { Check } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import { admissions, school, prettyPhone } from '../content.js';

const naira = (n) => `₦${n.toLocaleString('en-NG')}`;

export default function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title={<>A new chapter.<br /><em>A shared future.</em></>}
        intro="Begin your child’s journey with Attarbiyah. Five simple steps from first visit to first day."
      >
        <a href={`tel:${school.phones[0]}`} className="btn btn--gold">Call the admissions office</a>
      </PageHero>

      <section className="section admission-journey"><div className="container admission-journey__layout">
        <div className="admission-journey__intro"><p className="eyebrow">How it works</p><h2>A thoughtful start.<br /><em>Five simple steps.</em></h2><p className="lead">We’re here to help you through each stage, from your first conversation to your child’s first day.</p></div>
        <ol className="steps">
          {admissions.steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="step" delay={i * 70}>
              <span className="step__num">0{i + 1}</span>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </Reveal>
          ))}
        </ol>
      </div></section>

      <Section tone="soft" eyebrow="What to bring" title="Requirements">
        <div className="requirements-grid">
          {admissions.requirements.map((r, i) => (
            <Reveal key={r.level} className="requirement" delay={i * 80}>
              <h3>{r.level}</h3>
              <ul className="checklist">
                {r.items.map((item) => (
                  <li key={item}><Check size={18} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow={`Academic year ${admissions.feesYear}`} title="A clear view of the fees">
        <Reveal className="table-wrap">
          <table className="fees">
            <thead>
              <tr>
                <th scope="col">Programme</th>
                <th scope="col">Tuition</th>
                <th scope="col">Registration</th>
                <th scope="col">Other</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {admissions.fees.map((f) => (
                <tr key={f.program}>
                  <th scope="row">{f.program}</th>
                  <td data-label="Tuition">{naira(f.tuition)}</td>
                  <td data-label="Registration">{naira(f.registration)}</td>
                  <td data-label="Other">{naira(f.other)}</td>
                  <td data-label="Total" className="fees__total">
                    {naira(f.tuition + f.registration + f.other)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="note">{admissions.feesNote}</p>
      </Section>

      <Section tone="soft">
        <div className="faq">
          <Reveal className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>Frequently asked</h2>
            <p className="lead">Still unsure? Call the office on{' '}
              <a href={`tel:${school.phones[0]}`} className="inline-link">{prettyPhone(school.phones[0])}</a>.</p>
          </Reveal>
          <Reveal delay={80}>
            <Accordion items={admissions.faq} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
