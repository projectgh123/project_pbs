import Image from "next/image";

export default function Galeri() {
  const images = [
    "/pantai1.jpg",
    "/pantai2.jpg",
    "/pantai3.jpg",
    "/pantai4.jpg"
  ];

  return (
    <main className="min-h-screen p-10 bg-sky-50">

      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        Galeri Wisata Sanggar Beach
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg">

            <Image
              src={img}
              width={500}
              height={300}
              alt={`galeri-${i}`}
              className="w-full h-60 object-cover"
            />

          </div>
        ))}

      </div>

    </main>
  );
}