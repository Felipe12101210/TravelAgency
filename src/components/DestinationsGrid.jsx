import { destinations } from "../data/travelData";

export default function DestinationsGrid({ setModal }) {
  return (
    <section className="relative py-16 px-6 text-white overflow-hidden">
      {/* Fondo animado futurista */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_10s_ease-in-out_infinite] -z-10"></div>

      <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-red-500 drop-shadow-lg animate-pulse">
        Destinos Populares
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-red-600/50 transition-transform transform hover:scale-105"
            onClick={() => setModal({ type: "destination", payload: dest })}
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center p-4">
              <h3 className="text-white text-2xl font-extrabold group-hover:text-red-500 transition-all duration-500">
                {dest.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
