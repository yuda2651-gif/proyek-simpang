# Simpang

Simulator lampu lalu lintas isometrik dan HMI milik **Yuda Wahyu Ramadhan**. Domain proyek **yudawhyusimpang.my.id**. Profil pemilik: [yuda2651-gif](https://github.com/yuda2651-gif).

## Menjalankan di VS Code

Ekstrak proyek dan buka **folder yang berisi package.json** melalui **File → Open Folder**.

| Keperluan | Langkah |
| --- | --- |
| Demo dua tab pada satu laptop | Klik kanan **index.html → Open with Live Server**. Masuk ke **Simulator**, lalu gunakan **Buka HMI** untuk membuka tab kedua pada browser dan alamat Live Server yang sama. |
| Server lokal dengan Node.js | Siapkan Node.js 20 atau lebih baru, buka Terminal di VS Code, jalankan `npm ci`, lalu `npm start`. Buka alamat yang tercetak di terminal (biasanya http://127.0.0.1:8080/). |
| HMI di HP, simulator di laptop | Sambungkan keduanya ke Wi-Fi yang sama. Setelah `npm ci`, jalankan `npm start -- --lan` di laptop. Buka alamat IP Wi-Fi dari terminal di HP dan masukkan kode operator pada HMI. Gunakan alamat server Node pada kedua perangkat. |

Jika alamat Wi-Fi tidak dapat dibaca otomatis, gunakan IPv4 adaptor Wi-Fi laptop dari `ipconfig`. Periksa izin jaringan privat untuk Node.js jika HP tidak dapat membuka alamatnya. Di Linux atau Termux, gunakan perintah npm yang sama. **Ctrl+C** menghentikan server.

## Mengendalikan simpang

| Arah masuk | Jalan |
| --- | --- |
| Utara (U) | Jl. Kenanga |
| Timur (T) | Jl. Angsana |
| Selatan (S) | Jl. Tanjung |
| Barat (B) | Jl. Cempaka |

- **Manual.** Pilih mode Manual, ketuk satu lengan pada gambar HMI atau tombol jalan di sampingnya, lalu tekan **Mulai**. Sesudah berjalan, ketuk jalan lain untuk meminta giliran. Bingkai menunjukkan pilihan operator. Warna lampu tetap menunjukkan keadaan sebenarnya. Indikator ∞ berarti operator sedang menahan hijau.
- **Otomatis.** Urutannya **Utara → Timur → Selatan → Barat → Penyeberang**. Atur waktu hijau setiap jalan secara terpisah saat berhenti. Kuning dan jeda semua merah dipakai untuk perpindahan. Mengetuk gambar dalam mode otomatis menampilkan informasi ruas.
- **Mengubah durasi atau mode saat berjalan.** Klik kotak durasi yang ingin diedit, atau pilih **Otomatis** atau **Manual**. Pada dialog **Hentikan simulasi?**, pilih **Batal** atau tekan **Esc** untuk meneruskan siklus. Pilih **Hentikan simulasi** untuk membuat semua lampu kendaraan merah. Untuk durasi, kolom yang kamu pilih langsung siap diedit. Isi waktunya lalu klik **Simpan durasi**. Untuk mode, pilihanmu langsung diterapkan. Tekan **Mulai** untuk menjalankan simpang kembali.
- **Simulator.** Ketuk nama jalan di denah, bagian jalan masuk, atau baris pada daftar lampu untuk melihat statusnya. Pengaturan tetap dilakukan dari HMI. Lajur kiri dapat langsung berbelok saat bebas; kendaraan menunggu saat ada fase penyeberang. Lajur utama mengikuti lampu jalannya masing-masing.
- **Penyeberang.** Orang mendapat sembilan detik untuk menyeberang. Saat berpindah fase atau menghentikan simulasi, jalur kendaraan tetap terlindungi hingga penyeberangan yang sudah dimulai selesai.
- **Data lama.** Bila browser menyimpan pengaturan versi dua arah, durasi hijau lama disalin ke empat jalan. Lingkungan dipertahankan dan sesi dibuka dengan semua merah. Tekan **Mulai** untuk menjalankan siklus baru.

## Menjelajahi 16 petak

Simulator dibuka dekat ke pusat simpang. Di laptop, seret permukaan peta untuk menjelajah. Roda mouse pada denah biasa tetap menggulir halaman. **Perbesar denah** memberi ruang lebih luas untuk menggeser peta. Dalam tampilan besar, roda mouse atau usapan dua jari pada trackpad menggeser denah; gunakan **+** dan **−** untuk skala. **Pusat simpang** mengembalikan fokus dan **Seluruh kawasan** menampilkan keempat kuadran. Pilih satu lokasi langsung melalui **Jelajahi petak**.

| Kawasan | Empat petak |
| --- | --- |
| Barat laut | KOPDES Merah Putih, Taman Kenanga, Perumahan Kenanga, Masjid Al-Ikhlas |
| Timur laut | Dapur SPPG, Pasar Angsana, Kebun warga, Puskesmas Angsana |
| Tenggara | SD Tunas Bangsa, Lapangan olahraga, Taman Tanjung, Perumahan Tanjung |
| Barat daya | Gedung Warga, Gereja Imanuel, Balai baca, Kampung Cempaka |

Ada empat tiang penerangan di setiap jalan utama (16 total). Lampu menyala saat **Sore** dan **Malam**, termasuk saat kedua suasana itu dipilih manual di HMI. Dalam mode **Ikuti WIB**, lampu mulai menyala pukul **15.00** dan padam pukul **05.00**. Sorot malam pada aspal lebih terang daripada sorot sore. Penerangan jalan tetap mengikuti suasana saat pengatur lalu lintas berhenti.

Untuk memakai keyboard, fokuskan denah, lalu gunakan tombol panah untuk menggeser, **+ / −** untuk memperbesar atau memperkecil, **Home** untuk kembali ke simpang, **0** untuk melihat seluruh kawasan, dan **Esc** untuk menutup tampilan besar.

Vektor bangunan, pohon dan lampu dibaca sekali per suasana dan dipakai kembali untuk menggambar potongan yang diperbesar. Halaman dan tampilan besar memakai denah yang sama. Selama halaman digulir atau kamera digeser, browser memprioritaskan gerakan layar. Animasi kendaraan dilanjutkan setelah gerakan selesai. Fase dan hitung mundur tetap mengikuti jam pengendali.

## Waktu, cuaca, dan lingkungan

Semua jam menggunakan **Asia/Jakarta (WIB)**. Pilih **Ikuti WIB** untuk menampilkan pagi (05.00–10.59), siang (11.00–14.59), sore (15.00–17.59), atau malam (18.00–04.59). Memilih preset hanya mengubah pencahayaan. Lapangan SD Tunas Bangsa kosong saat sore dan malam, sedangkan tiang Merah Putih tetap terlihat. Gedung Warga memiliki empat lantai. Halaman depan KOPDES terbuka.

Pilih provinsi terlebih dahulu, lalu kota atau kabupaten. **Banten** mencakup Kota Serang, Kota Cilegon, Kota Tangerang, Kota Tangerang Selatan, serta Kabupaten Serang, Tangerang, Pandeglang, dan Lebak. Cuaca kabupaten menggunakan titik perwakilan yang disebutkan pada pilihan, misalnya Rangkasbitung untuk Lebak. Suhu dan kondisi cuaca biasanya diperbarui setiap 15 menit. Ketika internet terputus, aplikasi menandai data tersimpan yang masih layak pakai atau menampilkan bahwa cuaca belum tersedia.

Data cuaca dari [Open-Meteo](https://open-meteo.com/), tersedia dengan atribusi [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Informasi koordinat dapat diperiksa melalui [Open-Meteo Geocoding](https://open-meteo.com/en/docs/geocoding-api).

## Struktur kode

| Lokasi | Peran |
| --- | --- |
| `index.html`, `simulator.html`, `hmi.html` | Struktur dan konten masing-masing halaman. |
| `aset/css/` | Tipografi, tata letak, gaya panel/lingkungan, penanda pilihan dan transisi navigasi. |
| `aset/js/data.js`, `siklus.js` | Katalog jalan dan wilayah, validasi durasi serta aturan pergantian fase. Modul yang sama dibaca oleh browser dan Node. |
| `aset/js/kendaraan.js`, `lalu-lintas.js` | Geometri badan, kabin, roda dan pengendara; gerak pada lajur, tikungan dan zebra cross. |
| `aset/js/kendali-peta.js`, `panel.js`, `pengaturan-hmi.js`, `beranda.js` | Interaksi pada peta, kendali HMI, konfirmasi berhenti, dan tampilan Beranda. |
| `aset/js/koneksi.js`, `lingkungan.js`, `navigasi.js` | Sinkronisasi antartab/WebSocket, jam dan cuaca, menu, dialog, dan transisi. |
| `aset/grafis/denah.js`, `kawasan.js` | Geometri pusat simpang, tata letak 16 petak, fasilitas lingkungan dan penerangan jalan. |
| `aset/js/peta-kawasan.js`, `lapisan-kawasan.js`, `jadwal-gambar.js` | Kamera, zoom, navigasi lokasi, cache latar, dan penjadwalan animasi. |
| `aset/grafis/ikon.js`, `aset/font/` | Ikon SVG dan font WOFF2 lokal beserta lisensinya. |
| `server.cjs`, `server/` | Proses Node, WebSocket, penyajian aset dan cache cuaca. |
| `test/` | Uji siklus, kendali manual, penyeberang, pengaturan lama, tata letak 16 petak, dan penerangan WIB. |

Jalankan **npm test** untuk menguji aturan lampu. Front-end menggunakan HTML, CSS dan JavaScript biasa, langsung terbaca oleh Live Server atau hosting statis. Dependensi Node untuk server tercatat dalam `package-lock.json`.

## Menyiapkan GitHub dan domain

Unggah **isi folder proyek** ke repositori agar `index.html` berada di akar. `.gitignore` mengecualikan `node_modules` dan konfigurasi lokal. File `CNAME` sudah berisi `yudawhyusimpang.my.id` sebagai persiapan jika memakai GitHub Pages. Pengaturan domain dan DNS tetap dilakukan pada layanan hosting yang dipilih.

GitHub Pages/Cloudflare Pages dapat menyajikan mode demo statis. Untuk kendali antarperangkat melalui domain, jalankan server Node di Linux/Termux dan teruskan HTTP serta WebSocket (jalur `/ws`) melalui Cloudflare Tunnel ke port server. Untuk akses publik, tetapkan `KUNCI_OPERATOR` di lingkungan server agar HMI meminta kode, termasuk jika proses hanya mendengarkan loopback. Jangan menaruh kode operator dalam repositori.
