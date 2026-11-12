import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { events, news, gallery } from '../content.js';

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="Events & news"
        title="Life at Attarbiyah"
        intro="Upcoming dates, recent news, and moments from our school community."
      />

      <Section eyebrow="Upcoming" title="Mark your calendar">
        <ul className="events">
          {events.map((e, i) => (
            <Reveal as="li" key={e.title} className="event" delay={i * 60}>
              <div className="event__date"><strong>{e.day}</strong><span>{e.month}</span></div>
              <div className="event__body">
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
              <div className="event__meta">
                <span><Clock size={16} aria-hidden="true" />{e.time}</span>
                <span><MapPin size={16} aria-hidden="true" />{e.place}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="soft" eyebrow="Latest" title="School news">
        <div className="cards cards--3">
          {news.map((n, i) => (
            <Reveal as="article" key={n.title} className="news-card" delay={i * 80}>
              <img src={n.image} alt="" loading="lazy" />
              <div>
                <time>{n.date}</time>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Moments from school">
        <div className="gallery">
          {gallery.map((g, i) => (
            <Reveal as="figure" key={g.caption} delay={(i % 3) * 60}>
              <img src={g.image} alt={g.caption} loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </Section>

      <Newsletter />
    </>
  );
}

function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="section">
      <div className="container">
        <Reveal className="newsletter">
          <div>
            <h2>Stay updated</h2>
            <p>Get school news and event dates in your inbox.</p>
          </div>
          {done ? (
            <p className="newsletter__done" role="status">Thank you. We will keep you posted.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault(); // TODO: connect to a real mailing list. Nothing is sent today.
                setDone(true);
              }}
            >
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" required placeholder="Your email address" />
              <button type="submit" className="btn btn--primary">Subscribe</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
