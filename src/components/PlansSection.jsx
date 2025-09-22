import { useEffect, useState, useRef } from "react";
import { plans } from "../data/travelData";
import { motion } from "framer-motion";

export default function PlansSection({ setModal }) {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current.length) {
      const heights = cardRefs.current.map((card) => card.offsetHeight);
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
      >
        Nuestros Planes
      </motion.h2>

      {/* Tarjetas de planes */}
      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            ref={(el) => (cardRefs.current[i] = el)}
            whileHover={{ scale: 1.08, rotateX: 5, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 w-80 cursor-pointer border border-red-600/40 shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.7)] transition-all duration-500 group perspective-1000
                        flex flex-col justify-between`}
            style={{ minHeight: maxHeight }} // <-- Aquí aplicamos la altura máxima
          >
            {/* Glow animado */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-red-500/30 opacity-0 group-hover:opacity-100"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <div>
              {/* Nombre del plan */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-400 transition">
                {plan.name}
              </h3>

              {/* Precio */}
              <p className="text-3xl font-extrabold text-red-500 mb-6">
                ${plan.price}
              </p>

              {/* Características */}
              <ul className="text-gray-300 space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-500">✦</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón */}
            <button
              onClick={() => setModal({ type: "plan", payload: plan })}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
            >
              Seleccionar
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
