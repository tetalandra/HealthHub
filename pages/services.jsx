import { motion } from "framer-motion";
import ServiceCard from '../components/ServiceCard';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      name: "Cardiology",
      description: "Specialist care for heart conditions.",
      price: 150,
    },
    {
      name: "Dermatology",
      description: "Skin care and treatment.",
      price: 80,
    },
    {
      name: "Neurology",
      description: "Expert care for brain and nervous system.",
      price: 200,
    },
    {
      name: "Pediatrics",
      description: "Health care for children.",
      price: 100,
    },
    // Add more services here
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#0f1a17] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />

      {/* Page Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mt-16 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Services
      </motion.h2>

      {/* Service Cards Grid */}
      <motion.div
        className="service-grid max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ServiceCard
              name={service.name}
              description={service.description}
              price={`$${service.price}`}
            />
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </motion.div>
  );
}
