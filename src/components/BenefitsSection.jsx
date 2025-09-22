import { benefits } from "../data/travelData";
import { motion } from "framer-motion";

export default function BenefitsSection({ setModal }) {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Fondo animado idéntico al de OffersCarousel */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_8s_ease-in-out_infinite] -z-10"></div>

      {/* Título futurista */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 drop-shadow-lg text-red-500 animate-pulse"
      >
        ¿Por qué elegirnos?
      </motion.h2>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.id}
            whileHover={{ scale: 1.08, rotateX: 5, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            onClick={() => setModal({ type: "benefit", payload: b })}
            className="relative bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-red-600/50 p-8 text-center cursor-pointer transition-transform transform hover:scale-105"
          >
            {/* Icono 3D con glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="text-6xl md:text-7xl mb-6 drop-shadow-[0_0_25px_rgba(239,68,68,0.9)]"
            >
              {b.icon}
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-red-500">
              {b.title}
            </h3>

            <p className="text-gray-300 text-sm md:text-base">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
