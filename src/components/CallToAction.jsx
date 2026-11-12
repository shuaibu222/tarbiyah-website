import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import Pattern from './Pattern.jsx';
import { school } from '../content.js';

export default function CallToAction() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <Pattern />
          <div>
            <h2>Give your child a foundation of knowledge and faith</h2>
            <p>Admissions are open for Nursery, Primary and Secondary.</p>
          </div>
          <div className="cta__actions">
            <Link to="/admissions" className="btn btn--gold">See how to apply <ArrowRight size={18} /></Link>
            <a href={`tel:${school.phones[0]}`} className="btn btn--ghost">Call {school.phones[0]}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
