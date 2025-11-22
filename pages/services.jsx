import ServiceCard from '../components/ServiceCard';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

export default function Services() {
  return (
    <div>
      <Navigation />
      <h2>Our Services</h2>
      <div className="service-grid">
        {/* Populate this with your service data */}
        <ServiceCard
          name="Cardiology"
          description="Specialist care for heart conditions."
          price="$150"
        />
        <ServiceCard
          name="Dermatology"
          description="Skin care and treatment."
          price="$80"
        />
         {/* Add more ServiceCards */}
      </div>
      <Footer />
    </div>
  );
}
