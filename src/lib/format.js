// Format angka menjadi Rupiah, mis. 250000 -> "Rp 250.000".
export function formatPrice(value) {
  const amount = Number(value);
  if (value == null || Number.isNaN(amount)) return '';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
