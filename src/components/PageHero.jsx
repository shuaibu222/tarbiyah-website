import Pattern from './Pattern.jsx';

export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="page-hero">
      <Pattern />
      <div className="container page-hero__inner">
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
