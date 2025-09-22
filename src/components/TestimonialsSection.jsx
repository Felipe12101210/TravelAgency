import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/travelData";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current.length) {
      const heights = cardRefs.current.map((card) => card.offsetHeight);
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  return (
    <section className="relative py-16 px-6 text-white overflow-hidden">
      {/* Fondo animado idéntico al de OffersCarousel */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_8s_ease-in-out_infinite] -z-10"></div>

      {/* Título futurista */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 drop-shadow-lg text-red-500 animate-pulse"
      >
        Opiniones de <span className="text-white">Nuestros Clientes</span>
      </motion.h2>

      {/* Contenedor de tarjetas */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative bg-black/40 backdrop-blur-xl border border-red-600/50 rounded-3xl shadow-2xl max-w-sm p-8 cursor-pointer transition-transform transform hover:scale-105 flex flex-col justify-between"
            style={{ minHeight: maxHeight }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Efecto decorativo neón */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-50 transition"></div>

            {/* Contenido del testimonio */}
            <div>
              {/* Texto del testimonio */}
              <p className="relative text-white italic mb-6 text-lg leading-relaxed z-10">
                “{t.text}”
              </p>

              {/* Autor */}
              <h4 className="relative text-xl md:text-2xl font-extrabold text-red-500 z-10">
                {t.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
