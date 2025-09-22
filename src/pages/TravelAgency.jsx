import { useState } from "react";

// 🧩 Componentes
import Hero from "../components/Hero";
import FlightSearchForm from "../components/FlightSearchForm";
import OffersCarousel from "../components/OffersCarousel";
import DestinationsGrid from "../components/DestinationsGrid";
import BenefitsSection from "../components/BenefitsSection";
import PlansSection from "../components/PlansSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterForm from "../components/NewsletterForm";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import TiltCard from "../components/TiltCard";

export default function TravelAgency() {
  const [modal, setModal] = useState(null);

  // Función para hacer scroll a secciones
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* 🏝️ Hero principal */}
      <Hero setModal={setModal} scrollToId={scrollToId} />

      {/* ✈️ Buscador de vuelos */}
      <FlightSearchForm setModal={setModal} />

      {/* 💸 Ofertas */}
      <OffersCarousel setModal={setModal} />

      {/* 🌎 Destinos populares */}
      <DestinationsGrid setModal={setModal} />

      {/* 🎁 Beneficios */}
      <BenefitsSection setModal={setModal} />

      {/* 📦 Planes */}
      <PlansSection setModal={setModal} />

      {/* ⭐ Testimonios */}
      <TestimonialsSection />

      {/* 📩 Newsletter */}
      <NewsletterForm setModal={setModal} />

      {/* 📞 Contacto */}
      <ContactForm setModal={setModal} />

      {/* 📌 Footer */}
      <Footer />

      {/* 🔲 Modal dinámico */}
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
