// components/Navigation.js
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="navigation fixed top-0 w-full bg-[#0f1a17] text-white shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          HealthHub
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <motion.a
                href={link.href}
                className="relative px-1 py-1"
                whileHover={{ scale: 1.1, color: "#4ade80" }}
              >
                {link.name}
                {/* Underline animation */}
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-green-300 origin-left scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.ul
          className="md:hidden bg-[#0f1a17] flex flex-col gap-4 px-6 pb-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {links.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <motion.a
                href={link.href}
                className="block py-2 text-white"
                whileHover={{ scale: 1.05, color: "#4ade80" }}
              >
                {link.name}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
