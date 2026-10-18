import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faClock, faLeaf, faTag } from '@fortawesome/free-solid-svg-icons';
import './Why.css';

const features = [
  {
    icon: faGem,
    title: 'Aroma Eksklusif',
    text: 'Racikan khas yang nggak pasaran. Setiap varian punya karakter sendiri, jadi wangi kamu nggak bakal sama dengan orang lain.',
  },
  {
    icon: faClock,
    title: 'Tahan 12 Jam Lebih',
    text: 'Konsentrasi Eau de Parfum membuat aroma nempel dari pagi sampai malam, tanpa perlu semprot ulang berkali-kali.',
  },
  {
    icon: faLeaf,
    title: 'Bahan Premium & Aman',
    text: 'Bibit parfum berkualitas impor yang lembut di kulit, nyaman dipakai seharian, dan bebas bahan berbahaya.',
  },
  {
    icon: faTag,
    title: 'Harga Jujur',
    text: 'Kualitas setara parfum counter dengan harga yang masuk akal. Tampil berkelas tanpa bikin kantong jebol.',
  },
];

export default function Why() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Kenapa Beast?</span>
          <h2 className="section-title">Bukan Sekadar Wangi, Ini Soal Karakter</h2>
          <p className="section-sub">
            Kami meracik Beast untuk pria yang tahu siapa dirinya. Empat alasan
            kenapa Beast layak jadi signature scent kamu.
          </p>
        </div>

        <div className="why__grid">
          {features.map((f) => (
            <article className="why__card" key={f.title}>
              <span className="why__icon">
                <FontAwesomeIcon icon={f.icon} />
              </span>
              <h3 className="why__title">{f.title}</h3>
              <p className="why__text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
