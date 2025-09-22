import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ modal, setModal }) {
  return (
    <AnimatePresence>
      {modal?.type && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full p-6 relative"
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
          >
            {/* Botón cerrar */}
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300"
              onClick={() => setModal({ type: null, payload: null })}
            >
              <FiX size={20} />
            </button>

            {/* Contenido dinámico */}
            {modal.type === "login" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
                <input
                  type="email"
                  placeholder="Correo"
                  className="w-full mb-3 p-3 border rounded-lg dark:bg-gray-900"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full mb-3 p-3 border rounded-lg dark:bg-gray-900"
                />
                <button className="w-full py-2 bg-red-600 text-white rounded-full">
                  Acceder
                </button>
              </div>
            )}

            {modal.type === "offer" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Reserva: {modal.payload?.title}
                </h2>
                <p>{modal.payload?.subtitle}</p>
                <button className="mt-4 py-2 px-4 bg-red-600 text-white rounded-full">
                  Confirmar
                </button>
              </div>
            )}

            {modal.type === "destination" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{modal.payload?.name}</h2>
                <p>{modal.payload?.desc}</p>
              </div>
            )}

            {modal.type === "benefit" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{modal.payload?.title}</h2>
                <p>{modal.payload?.text}</p>
              </div>
            )}

            {modal.type === "plan" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{modal.payload?.name}</h2>
                <p className="text-xl font-bold mb-2">${modal.payload?.price}</p>
                <ul className="space-y-2">
                  {(modal.payload?.features || []).map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>
            )}

            {modal.type === "contact" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">¡Mensaje enviado!</h2>
                <p>Gracias por contactarnos. Te responderemos pronto.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
