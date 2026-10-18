import { site } from '../config/site';
import { formatPrice } from './format';

// Pesan default untuk CTA umum (hero, navbar, section CTA).
export const DEFAULT_WA_MESSAGE =
  'Halo Beast! Saya tertarik dengan koleksi parfum kalian. Boleh dibantu info dan cara pemesanannya?';

// Membangun tautan wa.me dengan teks ter-prefill.
export function buildWhatsAppUrl(message = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${site.whatsapp.international}?text=${encodeURIComponent(message)}`;
}

// Pesan khusus untuk tombol beli pada sebuah produk.
export function productOrderMessage(product) {
  return `Halo Beast! Saya mau pesan parfum ${product.name} (${formatPrice(
    product.price,
  )}). Apakah masih tersedia?`;
}

export function productOrderUrl(product) {
  return buildWhatsAppUrl(productOrderMessage(product));
}
