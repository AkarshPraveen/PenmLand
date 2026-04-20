export default function ContactLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left Column: Contact Form */}
      <section className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow border border-outline-variant/10">
        <form action="#" className="space-y-6" method="POST">
          <div className="space-y-6 md:space-y-2">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-low border-none rounded-xl p-4 md:px-6 md:py-4 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all placeholder:text-outline/50"
                placeholder="Johnathan Sterling"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">
                Phone Number
              </label>
              <input
                className="w-full bg-surface-container-low border-none rounded-xl p-4 md:px-6 md:py-4 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all placeholder:text-outline/50"
                placeholder="+91 99957 64324"
                type="number"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">
              Project Type
            </label>
            <div className="relative">
              <select className="w-full bg-surface-container-low border-none rounded-xl p-4 md:px-6 md:py-4 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer">
                <option>Residential Estate</option>
                <option>Commercial Development</option>
                <option>Sustainable Infrastructure</option>
                <option>Renovation & Retrofit</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">
              Message
            </label>
            <textarea
              className="w-full bg-surface-container-low border-none rounded-xl p-4 md:px-6 md:py-4 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all placeholder:text-outline/50 resize-none"
              placeholder="Describe your architectural requirements..."
              rows={4}
            ></textarea>
          </div>
          <button
            className="w-full bg-gradient-to-br from-[#001847] to-[#0B2C6B] text-white font-bold py-5 rounded-xl shadow-lg shadow-primary-container/20 active:scale-[0.98] transition-transform"
            type="submit"
          >
            Send Inquiry
          </button>
        </form>
      </section>

      {/* Right Column: Info + Map */}
      <div className="space-y-8 flex flex-col">
        {/* Contact Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary-container">
            <span
              className="material-symbols-outlined text-primary-container mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <h3 className="font-headline font-bold text-lg mb-1">Kannur Office</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Near Kannur South Railway Station <br />
              Kerala, India
            </p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
            <span
              className="material-symbols-outlined text-secondary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              call
            </span>
            <h3 className="font-headline font-bold text-lg mb-1">Direct Line</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Main: +91 99957 64324<br />
            </p>
          </div>
        </div>

        {/* Map Section */}
        <a href="https://maps.app.goo.gl/PTbASmtf1SaTgSMw9?g_st=iw" target="_blank" rel="noopener noreferrer" className="relative group block h-64 rounded-xl overflow-hidden ambient-shadow cursor-pointer transition-transform hover:scale-[1.02]">
          <div className="absolute inset-0 bg-primary-container/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
          <img
            alt="Map district"
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Q4m5KDuhpNdaV5tojqa6yGdrOnjs2lFqLjKU7ZqIcbDixim5UWB2_qGktC_FIWkUo3YgV_69Ez8WvXjMc0Mji_fXYhkpqRCAqxExAvbyM47XMsSC68GG9rrezTrAidgArhQspbKKDNOLNv84mD61A74uKeibxsSKSq8jn4UsvW1qBxkPw2EU-jHf-vcCAdqm4XKnFtFcpniXHn8dwREUeMLClm-P0vTg6pmofatMC2ECLi_uvT8OTXn1eBlMsQXyEX3lzu-NTrtK"
          />
          <div className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur-md p-3 rounded-lg shadow-lg group-hover:bg-white transition-colors">
            <p className="font-bold text-primary-container text-xs">Penmland</p>
            <p className="text-[10px] text-primary-container font-bold flex items-center gap-1 mt-1">
              View on Google Maps
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </p>
          </div>
          {/* Map Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-secondary/30 rounded-full animate-ping group-hover:bg-secondary/50"></div>
              <div className="relative w-5 h-5 bg-secondary border-2 border-white rounded-full shadow-lg group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </a>

        {/* Operational Hours */}
        <div className="bg-surface-container-high p-6 md:p-8 rounded-xl flex flex-col gap-4 md:gap-6 items-center text-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
              Operational Hours
            </p>
            <p className="font-headline font-bold text-sm">Mon - Fri: 08:00 AM - 06:00 PM</p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest text-primary-container shadow-sm hover:bg-secondary hover:text-white active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest text-primary-container shadow-sm hover:bg-secondary hover:text-white active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
