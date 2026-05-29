export default function Panduan() {
  const tips = [
    {
      id: 1,
      icon: "☀️",
      title: "Datang Saat Sore",
      desc: "Waktu terbaik menikmati sunset di Sanggar Beach."
    },
    {
      id: 2,
      icon: "📸",
      title: "Bawa Kamera",
      desc: "Banyak spot foto instagramable di sekitar pantai."
    },
    {
      id: 3,
      icon: "🧴",
      title: "Gunakan Sunscreen",
      desc: "Cuaca pantai cukup panas saat siang hari."
    },
    {
      id: 4,
      icon: "🥤",
      title: "Bawa Air Minum",
      desc: "Tetap terhidrasi selama perjalanan wisata."
    }
  ];

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

      {/* TIPS */}
      <section className="panduan-container">

        <h2 className="panduan-title">
          Tips Sebelum Berkunjung
        </h2>

        <div className="panduan-grid">

          {tips.map((item) => (
            <div
              key={item.id}
              className="panduan-card"
            >

              <div className="panduan-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CHECKLIST */}
      <section className="checklist-section">

        <h2>
          ✅ Checklist Barang
        </h2>

        <div className="checklist-box">

          <p>✔️ Topi atau payung</p>
          <p>✔️ Sandal pantai</p>
          <p>✔️ Kamera / HP</p>
          <p>✔️ Air minum</p>
          <p>✔️ Sunscreen</p>

        </div>

      </section>

    {/* STATISTIK */}

<section className="stats-section">

  <div className="stats-container">

    <div className="stats-card">
      <h3>10K+</h3>
      <p>Pengunjung</p>
    </div>

    <div className="stats-card">
      <h3>4.9⭐</h3>
      <p>Rating Wisata</p>
    </div>

    <div className="stats-card">
      <h3>15+</h3>
      <p>Spot Foto</p>
    </div>

    <div className="stats-card">
      <h3>08:00</h3>
      <p>Buka Wisata</p>
    </div>

  </div>

</section>
        
    {/* FAQ */}

<section className="faq-section">

  <h2>
    ❓ Pertanyaan Umum
  </h2>

  <div className="faq-container">

    <details className="faq-item">
      <summary>
        Apakah pantai cocok untuk keluarga?
      </summary>

      <p>
        Ya, Sanggar Beach cocok untuk keluarga
        dan memiliki area santai yang nyaman.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        Apakah tersedia tempat parkir?
      </summary>

      <p>
        Tersedia parkir motor dan mobil
        di area wisata pantai.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        Kapan waktu terbaik berkunjung?
      </summary>

      <p>
        Waktu terbaik adalah sore hari
        untuk menikmati sunset.
      </p>
    </details>

  </div>

</section>

    </main>
  );
}