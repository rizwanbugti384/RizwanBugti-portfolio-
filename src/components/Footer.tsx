import { Github, Linkedin, Mail, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';
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

  const socials = [
    { href: personalData.github, title: 'GitHub', icon: <Github size={16} />, color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
    { href: personalData.linkedin, title: 'LinkedIn', icon: <Linkedin size={16} />, color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
    { href: personalData.instagram, title: 'Instagram', icon: <Instagram size={16} />, color: 'hover:text-pink-500 dark:hover:text-pink-400' },
    { href: personalData.facebook, title: 'Facebook', icon: <Facebook size={16} />, color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { href: personalData.twitter, title: 'X (Twitter)', icon: <Twitter size={16} />, color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
    { href: `mailto:${personalData.email}`, title: 'Email', icon: <Mail size={16} />, color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
  ];

  return (
    <footer id="footer" className="py-12 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/20 text-slate-600 dark:text-slate-400 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {personalData.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Frontend & UI Developer • Pakistan
            </p>
          </div>

          {/* All Social Links */}
          <div className="flex items-center flex-wrap justify-center gap-1">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={s.title}
                className={`p-2 rounded-lg ${s.color} hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors cursor-pointer"
            title="Scroll back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Footnote */}
        <div className="pt-8 border-t border-slate-200/30 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p className="font-mono text-[10px]">Based in {personalData.location} • Built with React & Tailwind</p>
        </div>

      </div>
    </footer>
  );
}
