import Image from "next/image";

export default function Home() {
  const wisata = [
    {
      id: 1,
      title: "Pantai Sanggar",
      desc: "Pantai indah di Lampung Selatan dengan pemandangan laut yang tenang.",
      image: "/pantai1.jpg"
    },
    {
      id: 2,
      title: "Sunset Sanggar",
      desc: "Nikmati pemandangan matahari terbenam yang menarik.",
      image: "/pantai2.jpg"
    },
    {
      id: 3,
      title: "Spot Foto",
      desc: "Tersedia area foto yang menarik untuk pengunjung.",
      image: "/pantai3.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-sky-50">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-5">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">
            🏝 WisataCui
          </h1>

          <ul className="flex gap-6">
            <li>Beranda</li>
            <li>Tentang</li>
            <li>Galeri</li>
            <li>Wisata</li>
            <li>Lokasi</li>
            <li>Kontak</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-10">

        <h2 className="text-5xl font-bold text-blue-800 mb-6">
          Selamat Datang di WisataCui
        </h2>

        <p className="text-gray-700 text-lg">
          Jelajahi keindahan Sanggar Beach,
          Lampung Selatan
        </p>

        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
          Jelajahi Sekarang
        </button>

      </section>

      {/* Informasi */}
      <section className="max-w-6xl mx-auto py-10">

        <h2 className="text-3xl font-bold text-center mb-10">
          Informasi Wisata
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {wisata.map((item)=>(
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >

              <div className="h-56 bg-gray-200 flex items-center justify-center">
                Gambar Wisata
              </div>

              <div className="p-5">

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Detail */}
      <section className="bg-white py-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-5">
            Detail Sanggar Beach
          </h2>

          <div className="space-y-3">

            <p>
              📍 Lokasi : Lampung Selatan, Lampung
            </p>

            <p>
              💰 Tiket Masuk : Rp10.000
            </p>

            <p>
              🚗 Parkir Motor : Rp5.000
            </p>

            <p>
              🚘 Parkir Mobil : Rp10.000
            </p>

            <p>
              🕒 Jam Operasional : 08:00 - 18:00 WIB
            </p>

          </div>

        </div>

      </section>

      {/* Ulasan */}
      <section className="py-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-8">
            Ulasan Pengunjung
          </h2>

          <div className="bg-white p-5 rounded-xl shadow">

            <h3 className="font-bold">
              ⭐⭐⭐⭐⭐
            </h3>

            <p>
              Pantainya bersih dan pemandangan sunset sangat bagus.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center p-5">

        © 2026 WisataCui - Sanggar Beach Lampung Selatan

      </footer>

    </main>
  );
}