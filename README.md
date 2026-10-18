# Beast — Landing Page Parfum Pria

Landing page untuk brand parfum **Beast**, dibangun dengan **React (JavaScript) + Vite**,
mengonsumsi data produk dari **Contentful CMS**, menggunakan prinsip copywriting
**AIDA** dan gaya **flat design** dengan palet warna coklat.

## Fitur

- **React 19 + Vite** (template JavaScript, tanpa TypeScript).
- **Contentful CMS** via SDK resmi `contentful` (Content Delivery API) — tidak ada `fetch` manual.
- **Ikon FontAwesome** (React components) — tanpa emoji.
- **Flat design** dengan palet coklat & turunannya (espresso, coffee, brown, caramel, gold, sand, cream, ivory).
- **CTA WhatsApp** dengan teks ter-prefill ke nomor `081234567890` (format `wa.me/6281234567890`).
- Responsif (desktop, tablet, mobile) dengan navbar hamburger.

## Struktur Section (alur AIDA, maksimal 6)

| Section      | Peran AIDA  | Isi                                                        |
| ------------ | ----------- | ---------------------------------------------------------- |
| Hero         | Attention   | Headline kuat, CTA beli, statistik kepercayaan, visual     |
| Why          | Interest    | 4 alasan memilih Beast (ikon FontAwesome)                  |
| Product list | Desire      | Grid produk dari Contentful (gambar, kategori, harga, beli)|
| Social proof | Desire      | Testimoni pelanggan + rating bintang                       |
| CTA          | Action      | Ajakan bertindak + tombol WhatsApp + jaminan               |

Navbar & Footer bersifat struktural (bukan section konten).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build produksi ke dist/
npm run preview  # pratinjau hasil build
```

## Integrasi Contentful

Kredensial tertanam sebagai default di `src/config/contentful.js` dan dapat
ditimpa lewat environment variable (lihat `.env.example`):

- Space ID: `ol9tzluswtja`
- Access Token: `fOIjltP78AueUT4sCwSm_F6EckHmP7509JfCYXy-SUQ`
- Content Type: `parfumes`

Field yang dikonsumsi (sesuai spesifikasi): `name`, `description`, `price`,
`category`, `image`, `featured`.

> **Catatan pemetaan field (penting):**
> - Pada CMS, field gambar sebenarnya bernama **`picture`** (berisi URL string),
>   bukan `image`. Mapper membaca `image` lalu fallback ke `picture`
>   (`src/lib/mapProduct.js`) agar gambar tetap tampil.
> - Field `description` berbentuk **Rich Text** Contentful, sehingga diekstrak
>   menjadi teks polos via `src/lib/richText.js`.
> - Field `featured` berupa string `"Yes"`/`"No"`, dinormalisasi menjadi boolean.

## Struktur Folder

```
src/
├── components/        # Navbar, Hero, Why, Products, ProductCard,
│                      # SocialProof, CTASection, Footer, WhatsAppButton (+ CSS masing-masing)
├── config/            # site.js (brand/nav/WA), contentful.js (kredensial)
├── contentful/        # client.js (SDK resmi + getEntries)
├── hooks/             # useParfumes.js (state loading/error)
├── lib/               # mapProduct, richText, format (Rupiah), whatsapp (wa.me)
├── styles/            # globals.css (tema flat design & variabel warna)
├── App.jsx            # Komposisi section (alur AIDA)
└── main.jsx           # Entry + setup FontAwesome CSS
```

## WhatsApp

Semua tombol beli/CTA membangun tautan `https://wa.me/6281234567890?text=...`
dengan pesan ter-prefill (pesan umum, atau pesan spesifik berisi nama & harga
produk). Lihat `src/lib/whatsapp.js`.
