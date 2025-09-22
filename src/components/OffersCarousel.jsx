import { OFFERS } from "../data/travelData";
import TiltCard from "./TiltCard";

export default function OffersCarousel({ setModal }) {
  return (
    <section className="relative py-16 px-6 text-white overflow-hidden">
      {/* Fondo animado futurista */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_8s_ease-in-out_infinite] -z-10"></div>

      <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg text-red-500 animate-pulse">
        Ofertas Especiales
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {OFFERS.map((offer) => (
          <TiltCard key={offer.id}>
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-red-600/50 overflow-hidden w-72 transition-transform transform hover:scale-105 cursor-pointer">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-red-500">{offer.title}</h3>
                <p className="text-2xl font-extrabold text-white mb-4">${offer.price}</p>
                <button
                  onClick={() => setModal({ type: "offer", payload: offer })}
                  className="w-full py-3 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-lg shadow-red-600/50 transition-transform transform hover:scale-105"
                >
                  Reservar
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
