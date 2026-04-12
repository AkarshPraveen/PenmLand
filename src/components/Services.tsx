import { Link } from 'react-router-dom';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  mobileOnly?: boolean;
};

function ServiceCard({ icon, title, description, mobileOnly }: ServiceCardProps) {
  return (
    <div className={`bg-surface-container-lowest p-6 md:p-10 rounded-lg md:rounded-xl md:ambient-shadow border border-outline-variant/10 md:border-transparent ambient-shadow hover:-translate-y-1 md:hover:translate-y-[-8px] transition-transform ${mobileOnly ? 'md:hidden' : ''}`}>
      <div className="w-12 h-12 md:w-14 md:h-14 bg-surface-container-low rounded-lg flex items-center justify-center mb-4 md:mb-8 text-primary">
        <span className="material-symbols-outlined text-2xl md:text-3xl">{icon}</span>
      </div>
      <h3 className="text-lg md:text-2xl font-headline font-bold text-primary mb-2 md:mb-4">{title}</h3>
      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: 'construction',
      title: 'Construction',
      description: 'Professional building solutions tailored to specific project requirements.'
    },
    {
      icon: 'weekend',
      title: 'Interior',
      description: 'Curated indoor aesthetics that blend functionality with premium materials.'
    },
    {
      icon: 'domain',
      title: 'Exterior',
      description: 'Elevating building facades with durable and iconic architectural elements.'
    },
    {
      icon: 'park',
      title: 'Landscape',
      description: 'Harmonious outdoor environments that connect structures with nature.'
    },
    {
      icon: 'mop',
      title: 'Renovation',
      description: 'Expert structural updates and modernizations for legacy properties.',
      mobileOnly: true
    },
    {
      icon: 'gavel',
      title: 'Legal Documentation',
      description: 'Seamless handling of permits, land rights, and architectural compliance.',
      mobileOnly: true
    }
  ];

  return (
    <section className="py-16 md:py-32 px-6 md:px-0 bg-surface">
      <div className="max-w-[1920px] mx-auto md:px-12">
        <div className="max-w-2xl mb-10 md:mb-24 text-left">
          <span className="text-[10px] md:text-label-md uppercase tracking-[0.2em] text-secondary font-semibold mb-2 md:mb-4 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4 md:mb-6">Our Services</h2>
          <p className="text-sm md:text-lg text-on-surface-variant">
            From conceptual blueprints to the final touch of paint, <span className="md:hidden">our services are </span>delivered with surgical precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-10 md:mt-16 flex justify-center text-center">
          <Link to="/services" className="editorial-gradient text-white flex items-center justify-center w-full md:w-auto px-10 py-4 md:py-5 rounded-xl font-bold ambient-shadow hover:-translate-y-1 md:hover:translate-y-[-2px] transition-transform">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
