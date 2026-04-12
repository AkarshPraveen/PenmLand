import Navbar from '../components/Navbar';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesCTA from '../components/services/ServicesCTA';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col bg-surface">
      <Navbar />
      <main className="md:pt-0 pt-0 pb-0">
        <ServicesHero />
        <ServicesList />
        <ServicesCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
