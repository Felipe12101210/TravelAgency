import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterForm({ setModal }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal({ type: "contact", payload: { email } });
  };

  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Fondo animado futurista */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_8s_ease-in-out_infinite] -z-10"></div>

      {/* Título */}
      <motion.h2
        className="relative text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-lg text-red-500 animate-pulse"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Suscríbete a nuestro{" "}
        <span className="text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
          boletín
        </span>
      </motion.h2>

      {/* Formulario */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative max-w-2xl mx-auto flex gap-3 bg-black/40 backdrop-blur-xl border border-red-600/50 rounded-full shadow-2xl p-3 group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-6 py-3 rounded-full bg-transparent text-white placeholder-gray-400 outline-none text-lg"
        />

        <motion.button
          type="submit"
          className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-red-600/50 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          Enviar
        </motion.button>
      </motion.form>

      {/* Texto motivacional */}
      <p className="mt-6 text-center text-red-300 text-lg">
        Sé el primero en enterarte de <span className="font-bold text-white">ofertas exclusivas</span> y novedades 
      </p>
    </section>
  );
}
