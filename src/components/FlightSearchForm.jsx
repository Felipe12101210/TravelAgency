import { useState } from "react";

export default function FlightSearchForm({ setModal }) {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-16 px-6 text-white overflow-hidden">
      {/* Fondo animado tipo futurista */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 animate-[pulse_8s_ease-in-out_infinite] -z-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-10 tracking-wide text-red-500 drop-shadow-lg animate-pulse">
          Busca tu vuelo
        </h2>
        <form className="grid gap-4 bg-black/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-red-600/50">
          <input
            type="text"
            name="from"
            value={form.from}
            onChange={handleChange}
            placeholder="Origen"
            className="p-3 rounded-lg bg-gray-900/70 border border-red-500/50 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 hover:scale-105"
          />
          <input
            type="text"
            name="to"
            value={form.to}
            onChange={handleChange}
            placeholder="Destino"
            className="p-3 rounded-lg bg-gray-900/70 border border-red-500/50 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 hover:scale-105"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-900/70 border border-red-500/50 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 hover:scale-105"
          />
          <input
            type="number"
            min="1"
            name="passengers"
            value={form.passengers}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-900/70 border border-red-500/50 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 hover:scale-105"
          />
          <button
            type="button"
            onClick={() => setModal({ type: "flight", payload: form })}
            className="py-3 px-6 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 shadow-lg shadow-red-600/50 transition-transform transform hover:scale-105"
          >
            Buscar vuelos
          </button>
        </form>
      </div>
    </section>
  );
}
