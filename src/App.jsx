import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <Navbar onOpenCvModal={() => setIsCvOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenCvModal={() => setIsCvOpen(true)} />
        <About onOpenCvModal={() => setIsCvOpen(true)} />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Contact />
      </main>

      <Footer onOpenCvModal={() => setIsCvOpen(true)} />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Full CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />
    </div>
  );
}
