// app/page.js
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="py-20 bg-gray-50">
        <About />
      </section>
      <section id="products" className="py-20">
        <Products />
      </section>
      <section id="services" className="py-20 bg-gray-50">
        <Services />
      </section>
      <section id="why-us" className="py-20">
        <WhyChooseUs />
      </section>
      <section id="team" className="py-20 bg-gray-50">
        <Team />
      </section>
      <section id="clients" className="py-20">
        <Clients />
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>
    </>
  );
}
