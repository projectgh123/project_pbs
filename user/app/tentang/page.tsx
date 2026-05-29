import Image from "next/image";

export default function Tentang() {
  return (
    <section className="tentang-page">

      <div className="tentang-wrapper">

        {/* GAMBAR */}
        <div className="tentang-image">
          <Image
            src="/pantai1.jpg"
            alt="Pantai Sanggar"
            width={500}
            height={500}
          />
        </div>

        {/* CONTENT */}
        <div className="tentang-content">

          <span className="badge">
            🌴 Tentang WisataCui
          </span>

          <h1>
            Surga Tersembunyi
            di Lampung Selatan
          </h1>

          <p>
            WisataCui adalah website wisata yang membantu
            pengunjung mengenal keindahan Sanggar Beach,
            mulai dari pantai, sunset, spot foto,
            hingga informasi wisata lengkap.
          </p>

          {/* INFO */}
          <div className="info-grid">

            <div className="info-card">
              <h3>📍 Lokasi</h3>
              <p>Lampung Selatan</p>
            </div>

            <div className="info-card">
              <h3>🌅 Daya Tarik</h3>
              <p>Sunset & Spot Foto</p>
            </div>

            <div className="info-card">
              <h3>🎟 Tiket</h3>
              <p>Rp10.000</p>
            </div>

          </div>

          {/* BUTTON */}
          <button className="tentang-btn">
            Jelajahi Sekarang
          </button>

        </div>

      </div>

      {/* STATISTIK */}
      <div className="statistik">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Pengunjung</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Spot Foto</p>
        </div>

        <div className="stat-box">
          <h2>4.9⭐</h2>
          <p>Rating Wisata</p>
        </div>

      </div>

    </section>
  );
}