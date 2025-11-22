import { motion } from "framer-motion";
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Shield, Clock } from "lucide-react";

export default function Home() {
  const services = [
    { name: "General Check-up", description: "A comprehensive examination to assess your overall health.", price: 50 },
    { name: "Vaccinations", description: "Protect yourself and your family with our vaccination services.", price: 30 },
    { name: "Cardiology", description: "Specialist care for heart conditions.", price: 150 },
    { name: "Dermatology", description: "Skin care and treatment.", price: 80 },
  ];

  const features = [
    { icon: <Heart className="w-6 h-6 text-green-300" />, title: "Expert Care", text: "Experienced doctors providing top-notch services." },
    { icon: <Shield className="w-6 h-6 text-green-300" />, title: "Safe & Trusted", text: "Your health and safety are our top priority." },
    { icon: <Clock className="w-6 h-6 text-green-300" />, title: "24/7 Availability", text: "We're here for you whenever you need us." },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#0f1a17] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Comprehensive Health Services"
        description="We provide a range of health services to meet your needs."
        imageUrl="/images/hero.jpg"
      />

      {/* Features Section */}
      <section className="features max-w-6xl mx-auto mt-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-[#162521] p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, backgroundColor: "#1b3a2e" }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services max-w-6xl mx-auto mt-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
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
      </section>

      {/* Call To Action Section */}
      <section className="cta text-center mt-20 mb-16">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Ready to Take Care of Your Health?
        </motion.h2>
        <motion.button
          className="bg-green-300 text-black px-6 py-3 rounded-xl font-semibold shadow-md"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 20px rgba(0,255,128,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Book an Appointment
        </motion.button>
      </section>

      <Footer />
    </motion.div>
  );
}
