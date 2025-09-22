import heroImage from "../assets/images/image.png";

export default function Header({ setModal }) {
  return (
    <header
      className="relative text-white bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Navbar */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            TA
          </div>
          <h1 className="text-2xl font-bold drop-shadow-lg">Travel Agency</h1>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => setModal({ type: "login" })}
            className="hover:text-red-400 transition drop-shadow-lg"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setModal({ type: "contact" })}
            className="hover:text-red-400 transition drop-shadow-lg"
          >
            Contacto
          </button>
        </nav>

        {/* Botón principal */}
        <button
          onClick={() => setModal({ type: "login" })}
          className="py-2 px-5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
        >
          Reservar
        </button>
      </div>

      {/* Hero text centrado */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Descubre el mundo con nosotros 🌍
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
          Ofertas únicas y experiencias inolvidables. Tu viaje comienza aquí.
        </p>
        <button
          onClick={() => setModal({ type: "contact" })}
          className="py-3 px-6 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition"
        >
          Ver Ofertas
        </button>
      </div>
    </header>
  );
}
