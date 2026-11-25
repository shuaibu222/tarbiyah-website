import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { nav } from '../content.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuBtn = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the menu is open: lock page scroll, hide the page from focus,
  // close on Escape (focus back to the button), and close if the screen becomes desktop-wide.
  useEffect(() => {
    if (!open) return undefined;
    const behind = document.querySelectorAll('main, footer');
    document.body.style.overflow = 'hidden';
    behind.forEach((el) => { el.inert = true; });

    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      menuBtn.current?.focus();
    };
    const wide = window.matchMedia('(min-width: 1081px)');
    const onWide = (e) => e.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);

    return () => {
      document.body.style.overflow = '';
      behind.forEach((el) => { el.inert = false; });
      window.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const menu = document.getElementById('mobile-menu');
    const focusable = () => [menuBtn.current, ...menu.querySelectorAll('a[href]')];
    const trapFocus = (event) => {
      if (event.key !== 'Tab') return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', trapFocus);
    return () => window.removeEventListener('keydown', trapFocus);
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
        <div className="container header__inner">
          <Logo />
          <nav className="nav" aria-label="Main">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav__link">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/admissions" className="btn btn--primary btn--sm header__cta">Apply now</Link>
          <button
            type="button"
            ref={menuBtn}
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Sibling of <header>, not a child: the header's backdrop-filter would trap a fixed child inside it. */}
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} inert={!open}>
        <nav aria-label="Mobile">
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="mobile-menu__link"
              style={{ transitionDelay: `${60 + i * 40}ms` }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/admissions" className="btn btn--primary">Apply now</Link>
      </div>
    </>
  );
}
