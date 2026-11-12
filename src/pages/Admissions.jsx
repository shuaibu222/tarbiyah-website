import { Check } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import { admissions, school } from '../content.js';

const naira = (n) => `₦${n.toLocaleString('en-NG')}`;

export default function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join our community"
        intro="Begin your child’s journey with Attarbiyah. Five simple steps from first visit to first day."
      >
        <a href={`tel:${school.phones[0]}`} className="btn btn--gold">Call the admissions office</a>
      </PageHero>

      <Section eyebrow="How it works" title="Admission in five steps">
        <ol className="steps">
          {admissions.steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="step" delay={i * 70}>
              <span className="step__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="soft" eyebrow="What to bring" title="Requirements">
        <div className="cards cards--3">
          {admissions.requirements.map((r, i) => (
            <Reveal key={r.level} className="card" delay={i * 80}>
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

      <Section eyebrow={`Academic year ${admissions.feesYear}`} title="Fees per term">
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

      <Section tone="soft" eyebrow="Questions" title="Frequently asked">
        <Reveal className="narrow">
          <Accordion items={admissions.faq} />
        </Reveal>
      </Section>
    </>
  );
}
