export default function Home() {

const wisata = [
{
id:1,
title:"Pantai Sanggar",
desc:"Pantai indah di Lampung Selatan"
}
];

return (

<main className="main-container">

<nav className="navbar">
<div className="nav-container">

<h1>🏝 WisataCui</h1>

<ul className="menu">
<li>Beranda</li>
<li>Tentang</li>
<li>Galeri</li>
<li>Wisata</li>
<li>Lokasi</li>
<li>Kontak</li>
</ul>

</div>
</nav>

<section className="hero">

<h2 className="hero-title">
Selamat Datang di WisataCui
</h2>

<p className="hero-text">
Jelajahi Sanggar Beach Lampung Selatan
</p>

<button className="button">
Jelajahi Sekarang
</button>

</section>

<section className="container">

<h2 className="title">
Informasi Wisata
</h2>

<div className="grid">

{wisata.map((item)=>(

<div className="card" key={item.id}>

<div className="image-placeholder">
Gambar Wisata
</div>

<div className="card-content">

<h3>{item.title}</h3>
<p>{item.desc}</p>

</div>

</div>

))}

</div>

</section>

<footer className="footer">
© 2026 WisataCui
</footer>

</main>

)
}