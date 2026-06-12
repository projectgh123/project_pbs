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
          src="/pantai1.jpg"
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

    </main>
  );
}