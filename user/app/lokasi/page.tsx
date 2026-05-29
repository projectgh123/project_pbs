export default function Lokasi() {
  return (
    <main className="lokasi-page">

      <div className="lokasi-container">

        <h1 className="lokasi-title">
          📍 Lokasi Sanggar Beach
        </h1>

        <p className="lokasi-text">
          Sanggar Beach berada di Lampung Selatan
          dengan akses yang mudah dijangkau kendaraan.
        </p>

        {/* GRID */}
        <div className="lokasi-grid">

          {/* MAP */}
          <div className="map-box">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18"
              width="100%"
              height="350"
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
              <h3>🛣 Akses Jalan</h3>
              <p>Bisa dilalui motor dan mobil</p>
            </div>

            <div className="info-card">
              <h3>🕒 Jam Operasional</h3>
              <p>08:00 - 18:00 WIB</p>
            </div>

            <div className="info-card">
              <h3>🎟 Tiket Masuk</h3>
              <p>Rp10.000 / orang</p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}