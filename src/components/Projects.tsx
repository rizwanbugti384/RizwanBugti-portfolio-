import { useState } from 'react';
import { ExternalLink, Github, Layers, X, Eye } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div id="projects-container" className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-indigo-500 dark:text-indigo-400">
            <Layers size={16} />
            <span className="text-xs font-mono tracking-widest uppercase">My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            A curated collection of client-aligned layout prototypes, full-stack tools, and digital solutions I have designed in my development journey.
          </p>
        </div>

        {/* Project Card Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col h-full rounded-2xl border border-slate-200/60 dark:border-slate-850 bg-white dark:bg-slate-900/40 overflow-hidden hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all duration-300 shadow-xs cursor-pointer"
              onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
            >
              {/* Card Image Cover */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Visual hovering card deck */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold font-sans flex items-center space-x-1.5 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ExternalLink size={14} />
                    <span>Visit Live Website</span>
                  </div>
                </div>

                {/* Featured indicator tag */}
                {project.featured && (
                  <span className="absolute top-3 left-3 bg-indigo-600 dark:bg-indigo-500 text-white dark:text-slate-950 px-2.5 py-0.5 rounded-md text-[10px] font-mono tracking-widest uppercase font-bold z-10">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0 ml-2" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[10px] font-mono bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/30 dark:border-indigo-900/30 px-2 py-0.5 rounded-sm text-indigo-700 dark:text-indigo-400 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Grid controls */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60 text-xs">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                    Visit Live Demo &rarr;
                  </span>

                  <div className="flex items-center space-x-3 pt-0.5 text-slate-500 dark:text-slate-400" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener"
                        className="hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 text-xs font-semibold cursor-pointer border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-md bg-slate-50/50 dark:bg-slate-900/50 transition-colors"
                      title="Read details report"
                    >
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Interactive Case Study Modal Overlay */}
        {selectedProject && (
          <div 
            id="project-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              id="project-modal"
              className="relative w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Cover Image */}
              <div className="relative w-full h-48 sm:h-64 bg-slate-100 dark:bg-slate-800">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-950 transition-all cursor-pointer font-sans"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-sans">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-[10px] font-mono bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/30 dark:border-indigo-900/30 px-2.5 py-0.5 rounded-md text-indigo-700 dark:text-indigo-400 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Overview & Tech Scope
                  </h4>
                  <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Bottom link bars */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-indigo-500 dark:text-slate-950 dark:hover:bg-indigo-400 rounded-lg text-xs font-bold flex items-center space-x-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Live Preview</span>
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold flex items-center space-x-1.5 cursor-pointer transition-colors"
                    >
                      <Github size={14} />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
