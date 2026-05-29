export default function Panduan() {
  return (
    <main className="panduan-page">

      <div className="panduan-container">

        <h1 className="panduan-title">
          📖 Panduan Wisata
        </h1>

        <p className="panduan-text">
          Berikut beberapa petunjuk sebelum berkunjung
          ke Sanggar Beach.
        </p>

        <div className="panduan-grid">

          <div className="panduan-card">
            <h3>🚗 Transportasi</h3>
            <p>
              Gunakan kendaraan yang nyaman karena
              perjalanan cukup jauh.
            </p>
          </div>

          <div className="panduan-card">
            <h3>🌤 Cuaca</h3>
            <p>
              Datang saat cuaca cerah agar dapat
              menikmati pantai dengan nyaman.
            </p>
          </div>

          <div className="panduan-card">
            <h3>🧴 Perlengkapan</h3>
            <p>
              Bawa sunblock, topi, dan air minum.
            </p>
          </div>

          <div className="panduan-card">
            <h3>🗑 Kebersihan</h3>
            <p>
              Jagalah kebersihan pantai dan jangan
              membuang sampah sembarangan.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}