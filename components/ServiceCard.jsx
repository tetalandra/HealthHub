// components/ServiceCard.js
import { motion } from "framer-motion";

export default function ServiceCard({ name, description, price }) {
  return (
    <motion.div
      className="service-card bg-[#162521] border border-gray-700 rounded-xl p-6 shadow-md cursor-pointer flex flex-col justify-between hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(0,255,128,0.3)" }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="price bg-green-300 text-black px-3 py-1 rounded-full font-semibold">
          ${price}
        </span>

        <motion.button
          className="bg-green-400 text-black px-4 py-2 rounded-xl font-semibold shadow-md"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 20px rgba(0,255,128,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
}
