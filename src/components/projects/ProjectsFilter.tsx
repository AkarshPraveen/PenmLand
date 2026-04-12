interface ProjectsFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ProjectsFilter({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }: ProjectsFilterProps) {
  const filters = [
    "All Projects",
    "Residential",
    "Commercial",
    "Sustainable",
    "Restoration"
  ];

  return (
    <section className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0">
      <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 px-1 md:px-0 no-scrollbar">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-primary-container text-white shadow-lg shadow-primary-container/20"
                  : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="relative group hidden md:block">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="search">
            search
          </span>
        </div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-80 pl-12 pr-6 py-3 bg-surface-container-low border-none rounded-xl focus:ring-1 focus:ring-primary-container/20 focus:bg-surface-container-lowest transition-all"
          placeholder="Search by location or style..."
          type="text"
        />
      </div>
    </section>
  );
}
