import Image from "next/image";

export default function Tentang() {
  return (
    <section className="tentang">

      <div className="tentang-container">

        <div className="tentang-image">
          <Image
            src="/pantai1.jpg"
            alt="Pantai Sanggar"
            width={500}
            height={350}
          />
        </div>

        <div className="tentang-content">

          <h1>
            Tentang WisataCui
          </h1>

          <p>
            WisataCui adalah website wisata yang membahas
            Sanggar Beach di Lampung Selatan, Lampung.
          </p>

          <div className="tentang-info">

            <div className="info-box">
              <h3>📍 Lokasi</h3>
              <p>Lampung Selatan</p>
            </div>

            <div className="info-box">
              <h3>🌊 Daya Tarik</h3>
              <p>Pantai, sunset, spot foto</p>
            </div>

            <div className="info-box">
              <h3>🎟 Tiket Masuk</h3>
              <p>Rp10.000</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}