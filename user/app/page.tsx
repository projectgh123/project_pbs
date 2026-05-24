import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardWisata from "@/components/CardWisata";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      <Hero />
      <CardWisata />
      <Footer />
    </main>
  );
}