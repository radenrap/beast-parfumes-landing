import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faShieldHalved,
  faTruckFast,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/whatsapp';
import { site } from '../config/site';
import './CTASection.css';

const assurances = [
  { icon: faTruckFast, text: 'Pengiriman cepat ke seluruh Indonesia' },
  { icon: faShieldHalved, text: 'Produk original & aman di kulit' },
  { icon: faRotateLeft, text: 'Garansi uang kembali bila tidak puas' },
];

export default function CTASection() {
  return (
    <section className="cta" id="cta">
      <div className="container cta__inner">
        <span className="eyebrow eyebrow--light">Saatnya Bertindak</span>
        <h2 className="cta__title">Siap Tampil Lebih Percaya Diri Hari Ini?</h2>
        <p className="cta__sub">
          Jangan tunda lagi. Klik tombol di bawah, chat admin kami via WhatsApp,
          dan pilih karakter wangimu sekarang juga. Stok terbatas — yang ragu
          kehabisan.
        </p>

        <a
          className="btn btn-accent btn-lg cta__btn"
          href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> Pesan via WhatsApp
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
        <p className="cta__note">
          atau hubungi <strong>{site.whatsapp.display}</strong>
        </p>

        <ul className="cta__assure">
          {assurances.map((a) => (
            <li key={a.text}>
              <FontAwesomeIcon icon={a.icon} /> {a.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
