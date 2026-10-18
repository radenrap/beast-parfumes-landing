import { useEffect, useState } from 'react';
import { fetchParfumeEntries } from '../contentful/client';
import { mapProducts } from '../lib/mapProduct';

// Hook untuk memuat daftar parfum dari Contentful dengan state loading/error.
export function useParfumes() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const entries = await fetchParfumeEntries();
        if (!active) return;
        const mapped = mapProducts(entries);
        // Produk unggulan (featured) ditampilkan lebih dulu.
        mapped.sort((a, b) => Number(b.featured) - Number(a.featured));
        setProducts(mapped);
      } catch (err) {
        if (!active) return;
        console.error('Gagal memuat produk dari Contentful:', err);
        setError(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  return { products, loading, error };
}
