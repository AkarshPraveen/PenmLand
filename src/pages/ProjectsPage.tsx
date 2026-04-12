import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsFilter from '../components/projects/ProjectsFilter';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <Navbar />
      
      <main className="pt-24 md:pt-40 pb-32 md:pb-24 px-6 md:px-12 max-w-md md:max-w-[1920px] mx-auto w-full">
        <ProjectsHero />
        <ProjectsFilter 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ProjectsGrid activeFilter={activeFilter} searchQuery={searchQuery} />
      </main>
      
      <Footer />
      <FloatingActions />
    </div>
  );
}
