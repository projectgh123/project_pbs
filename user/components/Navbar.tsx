import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-5">
      <div className="max-w-6xl mx-auto flex justify-between">

        <h1 className="text-2xl font-bold">
          🏝 WisataCui
        </h1>

        <ul className="flex gap-6">
          <li>
            <Link href="/">Beranda</Link>
          </li>

          <li>
            <Link href="/tentang">Tentang</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}