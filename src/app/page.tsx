import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main>
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </>
  );
}
