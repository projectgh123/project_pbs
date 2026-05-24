import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-container">

        <h1>
          🏝️ WisataCui
        </h1>

        <ul className="menu">
          <li>Beranda</li>
          <li> <a href="/tentang">Tentang</a> </li>
          <li> <Link href="/galeri">Galeri</Link> </li>
          <li> <a href="/wisata">Wisata</a> </li>
          <li> <a href="/lokasi">Lokasi</a> </li>
          <li> <a href="/kontak">Kontak</a> </li>
        </ul>

      </div>

    </nav>
  );
}