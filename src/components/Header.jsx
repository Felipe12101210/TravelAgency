import heroImage from "../assets/images/image.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Header({ setModal }) {
  const scrollY = useMotionValue(0);

  // Movimiento de fondo: zoom + parallax
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const bgY = useTransform(scrollY, [0, 500], [0, -100]);

  // Movimiento del texto: parallax + fade
  const textY = useTransform(scrollY, [0, 500], [0, -80]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <header className="relative text-white min-h-screen flex flex-col overflow-hidden">
      {/* Fondo hero con zoom y parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          scale: bgScale,
          y: bgY,
        }}
      />

      {/* Overlay dinámico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-sm"
        style={{
          opacity: useTransform(scrollY, [0, 500], [1, 0.6]),
        }}
      />

      {/* Navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo futurista */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_15px_rgba(239,68,68,0.8)] border border-red-400">
            TA
          </div>
          <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-lg">Travel Agency</h1>
        </motion.div>

        {/* Nav links */}
        <nav className="hidden md:flex gap-8">
          {["Iniciar sesión", "Contacto"].map((item, idx) => (
            <motion.button
              key={idx}
              onClick={() => setModal({ type: item === "Iniciar sesión" ? "login" : "contact" })}
              whileHover={{ scale: 1.1 }}
              className="relative text-white hover:text-red-400 transition text-lg font-medium"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </nav>

        {/* Botón futurista */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(239,68,68,0.8)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setModal({ type: "login" })}
          className="py-2 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full hover:from-red-500 hover:to-red-600 transition shadow-lg"
        >
          Reservar
        </motion.button>
      </div>

      {/* Hero text con parallax y fade */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]"
        >
          Descubre el mundo con <span className="text-red-500">nosotros</span>
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-lg md:text-2xl mb-8 text-gray-200 max-w-2xl"
        >
          Ofertas únicas, experiencias inolvidables y un futuro lleno de viajes extraordinarios.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(239,68,68,0.9)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setModal({ type: "/" })}
          className="py-4 px-10 bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-extrabold rounded-full shadow-lg hover:from-red-500 hover:to-red-700 transition"
        >
          Ver Ofertas
        </motion.button>
      </motion.div>
    </header>
  );
}
