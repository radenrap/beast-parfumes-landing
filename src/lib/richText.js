// Utilitas untuk membaca field Contentful.

// Node bertipe blok yang anak-anaknya perlu dipisah baris baru.
const BLOCK_SEPARATOR_TYPES = new Set(['document', 'blockquote', 'list-item']);

function collect(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (node.nodeType === 'text') return node.value ?? '';
  const children = Array.isArray(node.content) ? node.content : [];
  const separator = BLOCK_SEPARATOR_TYPES.has(node.nodeType) ? '\n' : '';
  return children.map(collect).join(separator);
}

/**
 * Mengubah Rich Text Contentful (atau string biasa) menjadi teks polos.
 * Field `description` pada CMS berbentuk dokumen Rich Text, bukan string.
 */
export function toPlainText(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object') {
    return collect(value).replace(/\s+/g, ' ').trim();
  }
  return String(value);
}
