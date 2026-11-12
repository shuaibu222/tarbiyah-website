import Reveal from './Reveal.jsx';

export default function Section({ eyebrow, title, intro, tone, id, children }) {
  return (
    <section id={id} className={`section ${tone ? `section--${tone}` : ''}`}>
      <div className="container">
        {(eyebrow || title) && (
          <Reveal className="section-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p className="lead">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
