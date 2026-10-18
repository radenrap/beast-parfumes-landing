import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faTiktok,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { site } from '../config/site';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/whatsapp';
import './Footer.css';

const socials = [
  { label: 'Instagram', icon: faInstagram, href: 'https://instagram.com' },
  { label: 'TikTok', icon: faTiktok, href: 'https://tiktok.com' },
  { label: 'Facebook', icon: faFacebook, href: 'https://facebook.com' },
  {
    label: 'WhatsApp',
    icon: faWhatsapp,
    href: buildWhatsAppUrl(DEFAULT_WA_MESSAGE),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-icon">
              <FontAwesomeIcon icon={faSprayCanSparkles} />
            </span>
            <span>BEAST</span>
          </a>
          <p className="footer__tag">
            {site.tagline}. Wangi tegas untuk pria yang tahu dirinya siapa.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Navigasi footer">
          <h4>Jelajah</h4>
          {site.nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <h4>Kontak</h4>
          <a
            href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> {site.whatsapp.display}
          </a>
          <p>Senin–Sabtu, 09.00–21.00 WIB</p>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          <small>
            © {new Date().getFullYear()} Beast Parfumes. Seluruh hak cipta
            dilindungi.
          </small>
        </div>
      </div>
    </footer>
  );
}
