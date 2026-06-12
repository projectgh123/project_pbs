import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo-area">

          <Image
            src="/logo1.png"
            alt="Logo"
            width={60}
            height={60}
          />

          <h1 className="logo">
          </h1>

        </div>

        <ul className="menu">
          <li>Beranda</li>
          <li><a href="/tentang">Tentang</a></li>
          <li><a href="/galeri">Galeri</a></li>
          <li><a href="/wisata">Wisata</a></li>
          <li><a href="/lokasi">Lokasi</a></li>
          <li><a href="/kontak">Kontak</a></li>
          <li><a href="/panduan">Panduan</a></li>
        </ul>

      </div>
    </nav>
  );
}