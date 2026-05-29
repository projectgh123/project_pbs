export default function Panduan() {
  return (
    <main className="panduan-page">

      {/* HERO */}
      <section className="panduan-hero">

        <div className="panduan-overlay"></div>

        <div className="panduan-hero-content">

          <h1>
            📖 Panduan Wisata
          </h1>

          <p>
            Persiapkan perjalanan terbaikmu
            ke Sanggar Beach
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="panduan-container">

        {/* CARD */}
        <div className="panduan-grid">

          <div className="panduan-card">
            <h3>🚗 Transportasi</h3>
            <p>
              Pastikan kendaraan dalam kondisi baik
              sebelum perjalanan.
            </p>
          </div>

          <div className="panduan-card">
            <h3>🌤 Cuaca</h3>
            <p>
              Datang saat cuaca cerah untuk menikmati
              pemandangan pantai.
            </p>
          </div>

          <div className="panduan-card">
            <h3>🧴 Perlengkapan</h3>
            <p>
              Gunakan sunblock dan bawa topi
              agar lebih nyaman.
            </p>
          </div>

          <div className="panduan-card">
            <h3>🗑 Kebersihan</h3>
            <p>
              Jagalah kebersihan pantai selama wisata.
            </p>
          </div>

        </div>

        {/* CHECKLIST */}
        <div className="checklist-box">

          <h2>
            🎒 Checklist Barang
          </h2>

          <ul>
            <li>✔ Air minum</li>
            <li>✔ Kamera</li>
            <li>✔ Sunblock</li>
            <li>✔ Sandal pantai</li>
            <li>✔ Topi</li>
          </ul>

        </div>

        {/* FAQ */}
        <div className="faq-box">

          <h2>
            ❓ Pertanyaan Umum
          </h2>

          <div className="faq-item">
            <h3>Apakah ada area parkir?</h3>
            <p>
              Ya, tersedia area parkir motor dan mobil.
            </p>
          </div>

          <div className="faq-item">
            <h3>Apakah aman untuk keluarga?</h3>
            <p>
              Sanggar Beach cocok untuk wisata keluarga.
            </p>
          </div>

          <div className="faq-item">
            <h3>Apakah ada tempat makan?</h3>
            <p>
              Tersedia beberapa warung di sekitar pantai.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}