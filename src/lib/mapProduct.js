import { toPlainText } from './richText';

// Spesifikasi menyebut field gambar sebagai `image`, namun pada CMS field
// yang benar-benar ada bernama `picture` (berisi URL string). Kita baca keduanya
// agar tetap aman bila suatu saat field diganti nama.
function resolveImage(fields) {
  const raw = fields.image ?? fields.picture;
  if (!raw) return null;
  if (typeof raw === 'string') {
    return raw.startsWith('//') ? `https:${raw}` : raw;
  }
  // Bila suatu saat berupa asset/link Contentful.
  const url = raw?.fields?.file?.url;
  if (!url) return null;
  return url.startsWith('//') ? `https:${url}` : url;
}

// `category` bisa berupa string, array, atau objek referensi.
function resolveCategory(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value.map(resolveCategory).filter(Boolean).join(', ');
  }
  if (typeof value === 'object') return value.title || value.name || '';
  return String(value);
}

// `featured` pada CMS berupa string "Yes"/"No", bukan boolean.
function resolveFeatured(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return ['yes', 'true', '1', 'ya'].includes(value.trim().toLowerCase());
  }
  return Boolean(value);
}

export function mapProduct(entry) {
  const fields = entry.fields || {};
  return {
    id: entry.sys?.id,
    name: fields.name ?? 'Tanpa Nama',
    description: toPlainText(fields.description),
    price: fields.price,
    category: resolveCategory(fields.category),
    image: resolveImage(fields),
    featured: resolveFeatured(fields.featured),
  };
}

export function mapProducts(entries = []) {
  return entries.map(mapProduct);
}
