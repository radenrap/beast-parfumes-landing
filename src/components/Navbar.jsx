import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSprayCanSparkles,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { site } from '../config/site';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/whatsapp';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#hero" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">
            <FontAwesomeIcon icon={faSprayCanSparkles} />
          </span>
          <span className="nav__name">BEAST</span>
        </a>

        <nav className={`nav__links${open ? ' is-open' : ''}`}>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn-primary nav__cta"
            href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Beli Sekarang</span>
          </a>
          <button
            type="button"
            className="nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}
