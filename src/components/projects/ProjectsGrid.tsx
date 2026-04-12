interface ProjectsGridProps {
  activeFilter: string;
  searchQuery: string;
}

const PROJECTS_DATA = [
  {
    id: 1,
    title: "The Obsidian Estate",
    location: "Cape Town, South Africa",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-yrKrMN8U5Paii1dOG36cIYIVVXh-fCIH5SY-03Kzc3b_g4XuMwwYaB_jAguwqNlDltim96mSP_QTo2JylFpEUmcoqpi2ErAhrCYGP585Sly2Jho9cP65txjVfeIPRr7bAoYrsWRaGtZ0JbUjikD9f0aAJ8XqPywMDP-2VhCVkILx5LN6Bn69QyMmOAvAVkz6lD6bPN89KMJIuQpXlLqf84-jFljvtKqzyHRPodorVkNmnTyn-EDcT3RxT26KItcbQbaY5k-CQNcX",
    badgeLabel: "Award Winner",
    badgeType: "primary",
    tags: ["Concrete", "Glass"],
    category: "Residential",
  },
  {
    id: 2,
    title: "Veridian Nexus",
    location: "London, United Kingdom",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK919V4Qe4xmwiXlshx_plsKEWNu9aaXBsCJ-0Fk0jw2b58ddrcgKO575h1t58S0yqMC7cwBIVZeDcWulyare-lMv3PtqQ-jRZwYfRtlrqoBpGIZfbUr3t95jiMSgyLfGZ-iOmoe13sX6GZ-jrd1bBvkDQAruJkD2Pe5iS3glsPXlcLpvw-DHb_LgaMcrxeJPXqBAaCEhe65HcwL0HoVwNkIVAmyDnxn7bIN1ItSCbNmF6KywF_tRjCgYtEhhfqpRrhGCnJHXFy_Fk",
    badgeLabel: "Eco-Certified",
    badgeType: "secondary",
    tags: ["Solar", "Net-Zero"],
    category: "Sustainable",
  },
  {
    id: 3,
    title: "Zenith Pavilion",
    location: "Dubai, UAE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAupfpssFqTvNXKfOkSLFRiXtGp6qXEVOhtupwhCUHmFm8Um3KJI32DG0gzBQdrryjJRGQh-CWqpYw-p-qcJlz4sLp25xTPTAq0XaUFoPVw1oaKZrT3uaJSWEvVPSLUYg_zHmTQMR9pMCQxfJ92IrJLdzVXHXb4doRZqbEYHvJozBm-U0c4Vg0mqV7sdhXpyUBJEJSC_uywp9bumPMWT5gAyqxyCRE48IbgUFYhcHwxqqXucQkk4YL8cKY44rPxwziwKOTrZbtLrRAy",
    badgeLabel: null,
    badgeType: null,
    tags: ["Steel", "High-Rise"],
    category: "Commercial",
  },
  {
    id: 4,
    title: "Ether Loft",
    location: "New York, USA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAH_E8vPrlq9DuD1b754KaiYf1BC4gk6XakhUwGdHN3yzVAFnk0txQbqYjk8UtmqC9nRfq62uMkum4_0_6_S3eXtCUs_aScrt_ecs6Wy1ZqOlFAy-xp36hAHaSlApbTxBJxwaFpJQEtDqy8uC2usjFn_NaIIDVmtOrdj9OMDeS6Vkyml5PXurft-oviIuWVThNM5GE4O0db402fR8gZ575nEcz7PMkkYJXxzhqavA6L2KhAcKVacxpi2tAOvwtqMBA_Xe46snJRi4E4",
    badgeLabel: null,
    badgeType: null,
    tags: ["Minimal", "Adaptive Reuse"],
    category: "Restoration",
  },
  {
    id: 5,
    title: "Tide & Stone",
    location: "Lisbon, Portugal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHsMDKsT0aPcroM62PBFjkKGDW4tbo5DgBEwAybYk9dbqgVcV9yHdOcdfUVdde0PLj1B1vlGL9cuKxX1HUY84i1rq9HTM22cfRmczcwB3X-MkHkkT0mldVdogTn-0Bwmkn__kqQn7DMfjaXxIBDUW1zgsrOTBeJCGqUGQFzjLs8GaKtwxaqhz8H_U3QdnGGl7rMC4e8ZyIrhbt8AVjwsGnAO8oGplvbRGutkoRxefFF_rk-YLMuXJ4r0IeQBZPO5MNY64BdHz0LfCa",
    badgeLabel: null,
    badgeType: null,
    tags: ["Brutalist", "Coast"],
    category: "Residential",
  },
  {
    id: 6,
    title: "Echo Gallery",
    location: "Tokyo, Japan",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZP770g9yYBawLBfee3CKRvausatUUcUjBE0MMne602UmxEep2p_joKFrPo01NjmyoOJPtGJ4c2Gzwk_c7DFFEmku1WgqTrnuLG2YRlyRO4XNACBdJg1-vK1EqxncYb8WxoZhlwj2x1s7xQNaljKtQeu3C9kpyVHYqPbQkPjxSYGpheo8DDrPgnDhgFMsrEBEhDrFi5Y5DVmhg0rWA8Bi5vh6jDiEXWdSpT8Nbrbc4_rEsC0rohgfQ74EdKaMHpCVTKJSQ3mNleAt",
    badgeLabel: "Cultural Landmark",
    badgeType: "accent",
    tags: ["Parametric", "Culture"],
    category: "Commercial",
  },
];

export default function ProjectsGrid({ activeFilter, searchQuery }: ProjectsGridProps) {
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesFilter = activeFilter === "All Projects" || project.category === activeFilter;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      searchLower === "" ||
      project.title.toLowerCase().includes(searchLower) ||
      project.location.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower));
      
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-outline/50 mb-4">search_off</span>
            <p className="text-on-surface-variant font-medium">No projects found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col bg-surface-container-lowest md:bg-transparent rounded-xl md:rounded-none overflow-hidden md:overflow-visible shadow-sm md:shadow-none transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl md:rounded-xl shadow-none md:shadow-lg bg-surface-container-low mb-0 md:mb-6">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                />
                {project.badgeLabel && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase ${
                        project.badgeType === "primary"
                          ? "bg-secondary text-white"
                          : project.badgeType === "secondary"
                          ? "bg-[#4bdfa4] text-on-secondary-fixed"
                          : "bg-primary-container text-white"
                      }`}
                    >
                      {project.badgeLabel}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-0 flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-container font-headline group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs mt-1 md:mt-0">{project.location}</p>
                  <div className="flex gap-2 mt-3 block">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-on-tertiary-fixed-variant bg-tertiary-fixed px-3 py-1 rounded-full uppercase tracking-tighter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary-container p-0 md:p-2">
                  north_east
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Load More Section */}
      {filteredProjects.length > 0 && (
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-on-surface-variant text-xs md:text-sm font-medium mb-6 font-label">
            Discover 24 more projects in our archive
          </p>
          <button className="w-full md:w-auto px-12 py-4 border border-outline-variant hover:border-primary-container text-primary-container font-bold rounded-xl transition-all duration-300">
            View Full Archive
          </button>
        </div>
      )}
    </>
  );
}
