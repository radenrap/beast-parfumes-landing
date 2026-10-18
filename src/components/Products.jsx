import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faTriangleExclamation,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';
import { useParfumes } from '../hooks/useParfumes';
import ProductCard from './ProductCard.jsx';
import './Products.css';

export default function Products() {
  const { products, loading, error } = useParfumes();

  return (
    <section className="section section--alt products" id="koleksi">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Koleksi Unggulan</span>
          <h2 className="section-title">Pilih Karakter Wangimu</h2>
          <p className="section-sub">
            Setiap varian Beast dirancang untuk momen dan kepribadian yang
            berbeda. Temukan yang paling &ldquo;kamu&rdquo; banget.
          </p>
        </div>

        {loading && (
          <div className="products__state" role="status">
            <FontAwesomeIcon icon={faSpinner} spin />
            <span>Memuat koleksi…</span>
          </div>
        )}

        {!loading && error && (
          <div className="products__state products__state--error" role="alert">
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <span>Maaf, koleksi sedang sulit dimuat. Coba muat ulang halaman.</span>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="products__state">
            <FontAwesomeIcon icon={faBoxOpen} />
            <span>Koleksi belum tersedia.</span>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="products__grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
