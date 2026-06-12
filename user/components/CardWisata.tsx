import Image from "next/image";

export default function CardWisata() {
  return (
    <section className="container">

      <h2 className="title">
        Informasi Wisata
      </h2>

      <div className="grid">

        <div className="card">

          <Image
             src="/pantai5.jpeg"
             width={400}
             height={300}
             alt="Pantai Sanggar"
             loading="eager"
          />

          <div className="card-content">
            <h3>Pantai Sanggar</h3>

            <p>
              Pantai indah di Lampung Selatan dengan
              pemandangan laut yang tenang.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}