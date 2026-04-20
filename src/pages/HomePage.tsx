import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustTicker from '../components/TrustTicker';
import Services from '../components/Services';
import CaseStudy from '../components/CaseStudy';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {/* pt-[60px] applies to mobile due to fixed top navbar spacing, desktop handles padding within hero */}
      <main className="md:pt-0 pt-[60px] pb-24 md:pb-0">
        <Hero />
        <TrustTicker />
        <Services limit={3} />
        <CaseStudy />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
