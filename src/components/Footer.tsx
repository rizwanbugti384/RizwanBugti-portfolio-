import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalData } from '../data';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const handleScrollToTop = () => {
    setActiveSection('home');
    const header = document.getElementById('home');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-12 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/20 text-slate-600 dark:text-slate-400 font-sans transition-colors duration-300">
      <div id="footer-container" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand/Signature */}
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {personalData.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Frontend & UI Developer • Custom Layout Architect
            </p>
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-3.5">
            <a
              id="footer-github"
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-650 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              id="footer-linkedin"
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-650 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              id="footer-email"
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-lg hover:text-indigo-650 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Back to top scroll button */}
          <button
            id="footer-top-btn"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 hover:border-indigo-500/50 dark:hover:border-indigo-405/50 transition-colors cursor-pointer"
            title="Scroll back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Footnote */}
        <div className="pt-8 border-t border-slate-200/30 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p className="font-mono text-[10px]">Locale: {personalData.location} • Latent Design Space</p>
        </div>

      </div>
    </footer>
  );
}
