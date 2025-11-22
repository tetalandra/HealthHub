// components/Footer.js
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer bg-[#0f1a17] text-gray-300 py-6 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-content max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <motion.p
          className="text-sm mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Health Services. All rights reserved.
        </motion.p>

        <nav>
          <ul className="footer-nav flex gap-4">
            {[
              { text: "Privacy Policy", href: "/privacy" },
              { text: "Terms of Service", href: "/terms" },
            ].map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <motion.a
                  href={link.href}
                  className="hover:text-green-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1, color: "#4ade80" }} // Slight grow + color change
                  whileTap={{ scale: 0.95 }}
                >
                  {link.text}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.footer>
  );
}
