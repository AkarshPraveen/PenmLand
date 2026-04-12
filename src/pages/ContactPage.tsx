import Navbar from '../components/Navbar';
import ContactHero from '../components/contact/ContactHero';
import ContactLayout from '../components/contact/ContactLayout';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <Navbar />
      
      {/* max-w-md on mobile, expands on desktop */}
      <main className="pt-24 md:pt-32 pb-32 md:pb-24 px-6 md:px-12 max-w-md md:max-w-[1920px] mx-auto w-full">
        <ContactHero />
        <ContactLayout />
      </main>
      
      <Footer />
      <FloatingActions />
    </div>
  );
}
