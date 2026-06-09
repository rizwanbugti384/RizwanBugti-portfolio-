import { useState, useMemo } from 'react';
import * as Icons from 'lucide-react';
import { skillsData } from '../data';
import { Skill } from '../types';

// Simple helper to pick the right lucide icon from standard Lucide library
function SkillIcon({ name, size = 18, className = '' }: { name: string; size?: number; className?: string }) {
  // Map specific ones if needed, or fallback to Code
  const IconComponent = (Icons as any)[name] || Icons.Code;
  return <IconComponent size={size} className={className} />;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools' | 'Design'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Design'] as const;

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div id="skills-container" className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-indigo-500 dark:text-indigo-400">
            <Icons.Wrench size={16} />
            <span className="text-xs font-mono tracking-widest uppercase">My Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-900 dark:text-white">
            Skills & Core Technologies
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            A comprehensive overview of my current technology choices, frameworks, and visual styling tools. Use the search or categories to filter my skills.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800">
          {/* Category Filter Pills */}
          <div id="skills-categories" className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-slate-950 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:max-w-xs">
            <Icons.Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="skill-search"
              type="text"
              placeholder="Search specific skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <Icons.X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length > 0 ? (
          <div id="skills-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all group shadow-xs"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-550 dark:group-hover:text-white transition-colors">
                      <SkillIcon name={skill.iconName} size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-sans">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Level Progress Slider (Visual only, beautiful custom tracking) */}
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800/60 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-linear-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-300 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-0.5">
                    <span>{skill.category}</span>
                    <span>Level</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <Icons.Inbox size={32} className="mx-auto text-slate-300 dark:text-slate-600 mb-2" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No matching skills found. Try tweaking your keywords or category pill filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
