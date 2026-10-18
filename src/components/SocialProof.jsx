import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './SocialProof.css';

const testimonials = [
  {
    name: 'Dimas Prakoso',
    role: 'Karyawan Swasta, Jakarta',
    quote:
      'Wanginya beneran beda. Seharian di kantor masih kecium, dan banyak yang nanya pakai parfum apa. Auto repeat order.',
  },
  {
    name: 'Rangga Aditya',
    role: 'Entrepreneur, Bandung',
    quote:
      'Packaging rapi, pengiriman cepat, dan aromanya elegan banget. Sekarang jadi signature scent saya tiap hari.',
  },
  {
    name: 'Bayu Saputra',
    role: 'Fotografer, Surabaya',
    quote:
      'Awalnya ragu karena harganya terjangkau, tapi kualitasnya di atas ekspektasi. Tahan lama dan nggak bikin pusing.',
  },
];

function Stars() {
  return (
    <span className="proof__stars" aria-label="Rating 5 dari 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="section proof" id="testimoni">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Kata Mereka</span>
          <h2 className="section-title">Dipercaya Ribuan Pria Berkarakter</h2>
          <p className="section-sub">
            Jangan cuma percaya kata kami. Ini pengalaman nyata mereka yang sudah
            lebih dulu memakai Beast.
          </p>
        </div>

        <div className="proof__grid">
          {testimonials.map((t) => (
            <figure className="proof__card" key={t.name}>
              <FontAwesomeIcon className="proof__quote" icon={faQuoteLeft} />
              <Stars />
              <blockquote className="proof__text">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="proof__who">
                <span className="proof__avatar">{t.name.charAt(0)}</span>
                <span className="proof__meta">
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
