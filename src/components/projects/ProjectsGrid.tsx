import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../../data/projects';

interface ProjectsGridProps {
  activeFilter: string;
  searchQuery: string;
}

export default function ProjectsGrid({ activeFilter, searchQuery }: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter, searchQuery]);

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

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const remainingProjects = filteredProjects.length - visibleCount;

  return (
    <>
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-outline/50 mb-4">search_off</span>
            <p className="text-on-surface-variant font-medium">No projects found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {visibleProjects.map((project) => (
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
      {remainingProjects > 0 && (
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-on-surface-variant text-xs md:text-sm font-medium mb-6 font-label">
            Discover {remainingProjects} more {remainingProjects === 1 ? 'project' : 'projects'} in our archive
          </p>
          <button 
            onClick={() => setVisibleCount(filteredProjects.length)}
            className="w-full md:w-auto px-12 py-4 border border-outline-variant hover:border-primary-container text-primary-container font-bold rounded-xl transition-all duration-300"
          >
            View Full Archive
          </button>
        </div>
      )}
    </>
  );
}
