import Image from "next/image";

export default function Galeri() {
  const images = [
    "/pantai1.jpg",
    "/pantai2.jpg",
    "/pantai3.jpg",
    "/pantai4.jpg",
    "/pantai5.jpeg",
  ];

  return (
    <main className="galeri-page">

      {/* Hero */}
      <section className="galeri-hero">

        <div className="galeri-hero-content">

          <h1>
            📸 Galeri Sanggar Beach
          </h1>

          <p>
            Kumpulan momen terbaik dan keindahan
            wisata Sanggar Beach Lampung Selatan
          </p>

        </div>

      </section>

      {/* Galeri */}
      <section className="galeri-container">

        <h2 className="galeri-title">
          Koleksi Foto Wisata
        </h2>

        <div className="galeri-grid">

          {images.map((img, i) => (
            <div
              key={i}
              className="galeri-card"
            >

              <Image
                src={img}
                width={500}
                height={300}
                alt={`galeri-${i}`}
              />

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}