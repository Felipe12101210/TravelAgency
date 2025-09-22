import { motion } from "framer-motion";

export default function ContactForm({ setModal }) {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Fondo animado futurista */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_8s_ease-in-out_infinite] -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center drop-shadow-lg text-red-500 animate-pulse"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contáctanos
        </motion.h2>

        {/* Formulario */}
        <motion.form
          className="bg-black/40 backdrop-blur-xl border border-red-600/50 rounded-2xl shadow-2xl p-8 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-red-500/50 text-white placeholder-red-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-red-500/50 text-white placeholder-red-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition"
          />
          <textarea
            placeholder="Tu mensaje"
            rows="5"
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-red-500/50 text-white placeholder-red-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition"
          ></textarea>

          {/* Botón */}
          <div className="flex justify-center">
            <motion.button
              type="button"
              onClick={() => setModal({ type: "contact" })}
              className="relative px-10 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-red-600/50 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
