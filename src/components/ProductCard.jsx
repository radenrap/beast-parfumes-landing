import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faImage } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { formatPrice } from '../lib/format';
import { productOrderUrl } from '../lib/whatsapp';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(product.image) && !imgFailed;

  return (
    <article className="card">
      <div className="card__media">
        {showImage ? (
          <img
            src={product.image}
            alt={`Parfum ${product.name}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="card__media-fallback" aria-hidden="true">
            <FontAwesomeIcon icon={faImage} />
          </div>
        )}

        {product.featured && (
          <span className="badge card__flag">
            <FontAwesomeIcon icon={faStar} /> Unggulan
          </span>
        )}

        {product.category && (
          <span className="badge card__cat">{product.category}</span>
        )}
      </div>

      <div className="card__body">
        <h3 className="card__name">{product.name}</h3>
        <p className="card__desc clamp-4">{product.description}</p>

        <div className="card__foot">
          <span className="card__price">{formatPrice(product.price)}</span>
          <a
            className="btn btn-primary card__buy"
            href={productOrderUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Beli
          </a>
        </div>
      </div>
    </article>
  );
}
