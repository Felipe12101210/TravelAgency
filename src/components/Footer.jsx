export default function Footer() {
  return (
    <footer className="relative py-12 text-white overflow-hidden">
      {/* Fondo animado futurista */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_8s_ease-in-out_infinite] -z-10"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <p className="mb-3 text-lg font-medium drop-shadow-lg">
          © 2025 <span className="text-red-500 font-extrabold">Travel Agency</span>. Todos los derechos reservados.
        </p>
        <p className="text-md">
          Hecho <span className="text-red-600"></span> por{" pipe "}
          <span className="text-red-500 font-semibold">tu equipo</span>.
        </p>
      </div>
    </footer>
  );
}
