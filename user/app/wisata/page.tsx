import Image from "next/image";

export default function Wisata() {
  return (
    <main className="wisata-page">

      {/* HEADER */}

      <section className="wisata-header">

        <h1>
          🌊 Sanggar Beach
        </h1>

        <p>
          Destinasi wisata pantai terbaik di Lampung Selatan
        </p>

      </section>

      {/* FOTO */}

      <section className="wisata-image-section">

        <Image
          src="/pantai4.jpg"
          alt="Pantai Sanggar"
          width={1000}
          height={500}
          className="wisata-image"
        />

      </section>

      {/* INFORMASI */}

      <section className="wisata-content">

        <div className="wisata-card">

          <h2>
            Tentang Wisata
          </h2>

          <p>
            Sanggar Beach merupakan pantai yang memiliki
            pemandangan laut indah, pasir yang bersih,
            serta suasana yang nyaman untuk keluarga
            maupun wisatawan.
          </p>

        </div>

        <div className="wisata-card">

          <h2>
            🎟 Harga Tiket
          </h2>

          <p>Rp10.000 / Orang</p>

        </div>

        <div className="wisata-card">

          <h2>
            🕒 Jam Operasional
          </h2>

          <p>08:00 - 18:00 WIB</p>

        </div>

        <div className="wisata-card">

          <h2>
            🏖 Fasilitas
          </h2>

          <ul>
            <li>Area Parkir</li>
            <li>Mushola</li>
            <li>Warung Makan</li>
            <li>Spot Foto</li>
            <li>Gazebo</li>
          </ul>

        </div>

      </section>

      {/* AKTIVITAS */}

<section className="aktivitas-section">

  <h2 className="aktivitas-title">
    🎯 Aktivitas Wisata
  </h2>

  <div className="aktivitas-grid">

    <div className="aktivitas-card">
      <h3>🌅 Menikmati Sunset</h3>
      <p>
        Nikmati pemandangan matahari terbenam yang indah
        di tepi pantai.
      </p>
    </div>

    <div className="aktivitas-card">
      <h3>📸 Berfoto</h3>
      <p>
        Banyak spot foto menarik yang cocok untuk
        media sosial.
      </p>
    </div>

    <div className="aktivitas-card">
      <h3>🏖 Bersantai</h3>
      <p>
        Duduk santai menikmati angin pantai bersama
        keluarga dan teman.
      </p>
    </div>

    <div className="aktivitas-card">
      <h3>🍽 Kuliner Pantai</h3>
      <p>
        Menikmati makanan dan minuman di sekitar
        area wisata.
      </p>
    </div>

  </div>

</section>

{/* TESTIMONI */}

<section className="testimoni-section">

  <h2 className="testimoni-title">
    ⭐ Ulasan Pengunjung
  </h2>

  <div className="testimoni-grid">

    <div className="testimoni-card">
      <h3>⭐⭐⭐⭐⭐</h3>

      <p>
        Pantainya bersih dan pemandangan sunset sangat indah.
      </p>

      <span>- Andi</span>
    </div>

    <div className="testimoni-card">
      <h3>⭐⭐⭐⭐⭐</h3>

      <p>
        Tempat wisata yang cocok untuk keluarga dan liburan.
      </p>

      <span>- Siti</span>
    </div>

    <div className="testimoni-card">
      <h3>⭐⭐⭐⭐⭐</h3>

      <p>
        Banyak spot foto menarik dan suasananya nyaman.
      </p>

      <span>- Budi</span>
    </div>

  </div>

</section>

    </main>
  );
}