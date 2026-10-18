import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/whatsapp';
import './WhatsAppButton.css';

// Tombol WhatsApp mengambang agar aksi beli selalu dalam jangkauan.
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      title="Chat via WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}
