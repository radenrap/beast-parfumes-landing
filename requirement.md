# Spec Bisnis, Desain, Teknis, Data

Buatkan saya website berbasis ReactJs terbaru dengant vite versi javascript untuk brand parfume bernama "Beast", yang menyediakan produk parfume yang beda dari yang lain dan mempunyai karakter. Dalam website atau landing page ini gunakan copywriting yang baik sehingga bisa menarik konsumen untuk klik tombol beli.

Gunakan prinsipnya gunakan teknik AIDA.

Gunakan flat design dalam css di web ini dengan basic warna (coklat dan turunannya) dengan color pallete yang sesuai. Gunakan icon dari fontawesome, JANGAN gunakan emoji.

Struktur web ini menggunakan section seperti :

- Hero
- Why
- Product list
- CTA (tombol ini mengarah ke prefill text whatsapp ke nomor 081234567890)
- Social proof, dan
- Section lain yang relevan dalam konsep AIDA.
NOTE : JANGAN terlalu banyak section sehingga membuat pengunjung lama berfikir, maksimal 6 saja.

Product list menggunakan consume data dari Contentful CMS, gunakan library contenful yang sudah proven, JANGAN membuat fetch sendiri. Dengan credentials :

- Spaces ID "ol9tzluswtja"
- Access Token "fOIjltP78AueUT4sCwSm_F6EckHmP7509JfCYXy-SUQ"
- Content Type "parfumes".

Field yang digunakan dalam consume API ini adalah :

- name
- description
- price
- category
- image
- featured

JANGAN ambil field lain karena tidak ada, ikuti yang tertulis saja.
