import { ArrowRight, Github, Linkedin, Mail, Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';
import { personalData } from '../data';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleContactClick = () => {
    setActiveSection('contact');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    setActiveSection('projects');
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-indigo-200/20 dark:bg-indigo-950/10 blur-[80px]" />
        <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-slate-200/30 dark:bg-slate-800/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-12 items-center">

        {/* Text Content */}
        <div className="md:col-span-8 flex flex-col space-y-6 text-center md:text-left items-center md:items-start w-full">

          <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/30 rounded-full px-3.5 py-1.5 w-fit">
            <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Software Developer
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-sans tracking-tight text-slate-900 dark:text-white leading-tight">
              {personalData.name.split(' ')[0]} <br />
              <span className="text-indigo-600 dark:text-indigo-400 bg-linear-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
                {personalData.name.split(' ').slice(1).join(' ') || 'Bugti'}.
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
              {personalData.title}
            </p>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-normal">
            {personalData.subTitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={handleContactClick}
              className="px-6 py-3 rounded-xl font-bold text-sm tracking-wide text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:text-slate-950 dark:hover:bg-indigo-400 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-indigo-100 dark:shadow-none"
            >
              <span>Get in touch</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={handleProjectsClick}
              className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 transition-all flex items-center justify-center cursor-pointer"
            >
              <span>View my work</span>
            </button>
          </div>

          {/* Social Icons - all platforms */}
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800/60 w-full">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer"
              title="GitHub"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <Github size={18} />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <Linkedin size={18} />
            </a>
            <a href={personalData.instagram} target="_blank" rel="noopener noreferrer"
              title="Instagram"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <Instagram size={18} />
            </a>
            <a href={personalData.facebook} target="_blank" rel="noopener noreferrer"
              title="Facebook"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <Facebook size={18} />
            </a>
            <a href={personalData.twitter} target="_blank" rel="noopener noreferrer"
              title="X (Twitter)"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <Twitter size={18} />
            </a>
            <a href={`mailto:${personalData.email}`}
              title="Email"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Profile Picture - ALL devices */}
        <div className="md:col-span-4 flex justify-center items-center w-full">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-400 opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-indigo-400 to-slate-300 dark:to-slate-700 shadow-xl">
              <img
                src={personalData.avatarUrl}
                alt={personalData.name}
                className="w-full h-full rounded-full object-cover object-top border-4 border-white dark:border-slate-950"
              />
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 flex items-center space-x-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full px-2.5 py-1 md:px-3 md:py-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Available</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
