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

    </main>
  );
}