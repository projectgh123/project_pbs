export default function Lokasi() {
  return (
    <main className="lokasi-page">

      {/* HERO */}
      <section className="lokasi-hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <h1>
            📍 Lokasi Sanggar Beach
          </h1>

          <p>
            Nikmati perjalanan menuju pantai indah
            di Lampung Selatan
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="maps-button"
          >
            Buka Google Maps
          </a>

        </div>

      </section>

      {/* CONTENT */}
      <section className="lokasi-section">

        <div className="lokasi-grid">

          {/* MAP */}
          <div className="map-box">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

          {/* INFO */}
          <div className="info-box">

            <div className="info-card">
              <h3>📌 Alamat</h3>
              <p>Lampung Selatan, Lampung</p>
            </div>

            <div className="info-card">
              <h3>🚗 Akses</h3>
              <p>
                Dapat dilalui kendaraan roda dua
                dan roda empat
              </p>
            </div>

            <div className="info-card">
              <h3>🕒 Operasional</h3>
              <p>08.00 - 18.00 WIB</p>
            </div>

            <div className="info-card">
              <h3>🎟 Harga Tiket</h3>
              <p>Rp10.000 / orang</p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}