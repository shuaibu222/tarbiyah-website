import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import Reveal from './Reveal.jsx';
import PageHero from './PageHero.jsx';
import { gallery } from '../content.js';

const categories = ['All moments', 'Learning', 'Community', 'Milestones'];
const number = (value) => String(value).padStart(2, '0');

export default function Gallery({ standalone = false }) {
  const [category, setCategory] = useState(categories[0]);
  const [active, setActive] = useState(null);
  const opener = useRef(null);
  const items = category === categories[0] ? gallery : gallery.filter((item) => item.category === category);

  const open = (item, event) => {
    opener.current = event.currentTarget;
    setActive(items.indexOf(item));
  };
  const close = () => {
    setActive(null);
    requestAnimationFrame(() => opener.current?.focus({ preventScroll: true }));
  };

  return (
    <>
    {standalone && <PageHero eyebrow="The gallery" title={<>Little moments.<br /><em>Limitless possibility.</em></>} intro="A life of learning is made of more than lessons. It’s curiosity, connection, and the joy of becoming." />}
    <section className={`moments ${standalone ? 'moments--page' : ''}`} id="gallery" aria-label={standalone ? 'Photo collection' : undefined} aria-labelledby={standalone ? undefined : 'moments-title'}>
      <div className="container">
        {!standalone && <Reveal className="moments__heading">
          <div>
            <p className="eyebrow">The Attarbiyah spirit</p>
            <h2 id="moments-title">Little moments.<br /><em>Limitless possibility.</em></h2>
          </div>
          <div className="moments__intro">
            <p>A life of learning is made of more than lessons. It’s curiosity, connection, and the joy of becoming.</p>
            {!standalone && <Link to="/gallery" className="text-link">Explore the gallery <ArrowUpRight size={18} /></Link>}
          </div>
        </Reveal>}

        <div className="moments__toolbar">
          <div className="moments__filters" role="group" aria-label="Filter gallery">
            {categories.map((name) => (
              <button type="button" key={name} aria-pressed={category === name} onClick={() => setCategory(name)}>
                {name}<span>{number(name === categories[0] ? gallery.length : gallery.filter((item) => item.category === name).length)}</span>
              </button>
            ))}
          </div>
          <span className="moments__hint">Select a photograph to explore</span>
          <span className="sr-only" role="status">{items.length} {category === categories[0] ? 'moments' : category.toLowerCase() + ' moments'} displayed</span>
        </div>

        <div className={`moments__grid ${items.length < 6 ? 'moments__grid--filtered' : ''}`} key={category}>
          {items.map((item, index) => (
            <button className="moment" key={item.id} type="button" onClick={(event) => open(item, event)} aria-label={`View ${item.caption}`} style={{ '--order': index }}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <span className="moment__top"><span>{item.category}</span><span className="moment__expand"><ArrowUpRight size={20} /></span></span>
              <span className="moment__caption"><span className="moment__number">{number(gallery.indexOf(item) + 1)} /</span><span>{item.caption}</span></span>
            </button>
          ))}
        </div>
        <p className="moments__footnote">Illustrative photography · Unsplash</p>
      </div>
      {active !== null && createPortal(<PhotoViewer items={items} active={active} setActive={setActive} onClose={close} />, document.body)}
    </section>
    </>
  );
}

function PhotoViewer({ items, active, setActive, onClose }) {
  const dialog = useRef(null);
  const touchX = useRef(null);
  const item = items[active];
  const move = (offset) => setActive((current) => (current + offset + items.length) % items.length);

  useEffect(() => {
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.showModal();
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog className="photo-viewer" ref={dialog} aria-labelledby="viewer-title" aria-describedby="viewer-description" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={(event) => {
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'Tab') {
        const controls = dialog.current.querySelectorAll('button:not([disabled])');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }}>
      <div className="photo-viewer__shell">
        <header className="photo-viewer__header"><span>ATTARBIYAH <span>/ THE GALLERY</span></span><button autoFocus type="button" className="viewer-button" aria-label="Close photo viewer" onClick={onClose}><X size={22} /></button></header>
        <div className="photo-viewer__stage" onTouchStart={(event) => { touchX.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => {
          if (touchX.current === null) return;
          const distance = event.changedTouches[0].clientX - touchX.current;
          if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
          touchX.current = null;
        }}>
          <img key={item.id} src={item.image} alt={item.alt} />
          <button type="button" className="viewer-button photo-viewer__prev" aria-label="Previous photo" onClick={() => move(-1)}><ArrowLeft size={22} /></button>
          <button type="button" className="viewer-button photo-viewer__next" aria-label="Next photo" onClick={() => move(1)}><ArrowRight size={22} /></button>
        </div>
        <div className="photo-viewer__details" aria-live="polite" aria-atomic="true">
          <div>
            <p className="eyebrow eyebrow--light">{item.category}</p>
            <h2 id="viewer-title">{item.caption}</h2>
            <p id="viewer-description">{item.text}</p>
          </div>
          <span className="photo-viewer__count">{number(active + 1)} <span>/ {number(items.length)}</span></span>
        </div>
        <div className="photo-viewer__bottom">
          <p>← → to explore <span>· Esc to close</span></p>
          <div className="photo-viewer__thumbnails" aria-label="Choose a photo">
            {items.map((photo, index) => (
              <button key={photo.id} type="button" aria-label={`Show ${photo.caption}`} aria-pressed={index === active} onClick={() => setActive(index)}>
                <img src={photo.image} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
}
