// Kredensial Contentful CMS.
// Nilai default mengikuti spesifikasi; dapat ditimpa lewat environment variable
// (lihat .env.example) tanpa mengubah kode.
export const contentfulConfig = {
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
  contentType: import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE || 'parfumes',
};
