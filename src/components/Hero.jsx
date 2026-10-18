import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSprayCanSparkles,
  faClock,
  faStar,
  faUsers,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/whatsapp';
import './Hero.css';
import { useParfumes } from '../hooks/useParfumes';

const stats = [
  { icon: faUsers, value: '1.200+', label: 'Memilih Beast' },
  { icon: faClock, value: '12 Jam', label: 'Tahan Lama' },
  { icon: faStar, value: '4.9/5', label: 'Rating Puas' },
];

export default function Hero() {

  const {products} = useParfumes();
  const featuredProduct = products.find((p) => p.featured);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__circle hero__circle--a" />
        <span className="hero__circle hero__circle--b" />
        <span className="hero__circle hero__circle--c" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="badge hero__badge">
            <FontAwesomeIcon icon={faSprayCanSparkles} /> Eau de Parfum Premium
          </span>

          <h1 className="hero__title">
            Wangi yang Bikin{' '}
            <span className="hero__accent">Orang Menoleh Dua Kali.</span>
          </h1>

          <p className="hero__lead">
            Beast bukan parfum biasa. Racikan tegas berkarakter kuat yang nempel
            seharian — sekali semprot, kehadiranmu langsung terasa dan susah
            dilupakan.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn-primary btn-lg"
              href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Beli Sekarang
            </a>
            <a className="btn btn-outline btn-lg" href="#koleksi">
              Lihat Koleksi <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label} className="hero__stat">
                <span className="hero__stat-icon">
                  <FontAwesomeIcon icon={s.icon} />
                </span>
                <span className="hero__stat-text">
                  <strong>{s.value}</strong>
                  <small>{s.label}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          {featuredProduct && (
            <div className="hero__frame">
              <img src={featuredProduct.image} alt={featuredProduct.name} />
            </div>
          )}
          {/* <div className="hero__frame">
            <img src="/hero-perfume.png" alt="Botol parfum Beast" />
          </div> */}
          <span className="hero__chip hero__chip--top">
            <FontAwesomeIcon icon={faClock} /> Tahan 12 Jam
          </span>
          <span className="hero__chip hero__chip--bottom">
            <FontAwesomeIcon icon={faStar} /> Best Seller
          </span>
        </div>
      </div>
    </section>
  );
}
