import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { schools } from '../content.js';

export default function SchoolDirectory() {
  const [selected, setSelected] = useState(2);
  const panelId = useId();
  const current = schools[selected];

  return (
    <section className="section school-directory" id="our-schools" aria-labelledby="directory-title">
      <div className="container">
        <Reveal className="editorial-heading">
          <div><p className="eyebrow">Our schools</p><h2 id="directory-title">Every beginning.<br /><em>A place to grow.</em></h2></div>
          <p className="lead">From first letters to lifelong learning. Five schools, brought together by a belief in knowledge, character, and community.</p>
        </Reveal>
        <label className="school-directory__mobile-control">
          <span>Choose a school</span>
          <select value={selected} onChange={(event) => setSelected(Number(event.target.value))} aria-controls={panelId}>
            {schools.map((item, index) => <option key={item.id} value={index}>{item.name}</option>)}
          </select>
        </label>
        <div className="school-directory__layout">
          <div className="school-directory__choices" role="group" aria-label="Explore our five schools">
            {schools.map((item, index) => (
              <button type="button" key={item.id} aria-pressed={selected === index} aria-controls={panelId} onClick={() => setSelected(index)}>
                <span className="school-directory__number">0{index + 1}</span>
                <span><strong>{item.name}</strong><small>{item.focus}</small></span>
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div id={panelId} className="school-directory__feature" aria-live="polite" aria-atomic="true">
            <div className="school-directory__photograph"><img key={current.id} src={current.image} alt={current.imageAlt} loading="lazy" /></div>
            <div className="school-directory__caption">
              <p>{current.text}</p>
              <Link className="text-link" to={`/schools#${current.id}`}>Explore this school <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
        <p className="photography-note">Illustrative photography</p>
      </div>
    </section>
  );
}
