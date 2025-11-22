import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Navigation from '../components/Navigation';
import Footer from '../components/footer'; 

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero
        title="Comprehensive Health Services"
        description="We provide a range of health services to meet your needs."
        imageUrl="/images/hero.jpg" // ensure this image exists in public/images
      />

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <ServiceCard
            name="General Check-up"
            description="A comprehensive examination to assess your overall health."
            price="50"
          />
          <ServiceCard
            name="Vaccinations"
            description="Protect yourself and your family with our vaccination services."
            price="30"
          />
          {/* Add more ServiceCards */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
