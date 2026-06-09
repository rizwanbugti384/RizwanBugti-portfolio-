import { User, Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { personalData, experiencesData } from '../data';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Completed Projects', value: '15+' },
    { label: 'Happy Clients', value: '100%' },
    { label: 'Commitment', value: 'Full-Time' }
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div id="about-container" className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-indigo-500 dark:text-indigo-400">
            <User size={16} />
            <span className="text-xs font-mono tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-900 dark:text-white">
            My background & experience
          </h2>
        </div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Detailed Paragraph & Short Stats */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-sans text-base">
              {personalData.aboutText}
            </p>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-sans text-base">
              Being fully client-aligned means I prioritize intuitive, delightful visuals alongside robust accessibility compliance. I build from the ground up prioritizing standard design-tokens, fluid media, and performant state managers so your application expands effortlessly.
            </p>

            {/* Quick Details List */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2.5 text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={16} className="text-indigo-500/75 dark:text-indigo-400/75" />
                <span>Based in {personalData.location}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-600 dark:text-slate-400">
                <Calendar size={16} className="text-indigo-500/75 dark:text-indigo-400/75" />
                <span>Available for contract</span>
              </div>
            </div>
          </div>

          {/* Stats Box list */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4 w-full">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-center hover:border-indigo-600/30 dark:hover:border-indigo-400/30 transition-all shadow-xs"
              >
                <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Timeline / Experience Breakdown */}
        <div className="space-y-8 pt-8 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2.5">
            <Briefcase size={18} className="text-indigo-500 dark:text-indigo-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Professional Timeline
            </h3>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3.5 pl-6 space-y-12">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Visual Circle Indicator */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-colors" />

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="text-slate-400 dark:text-slate-500 font-normal">at {exp.company}</span>
                    </h4>
                    <span className="inline-flex items-center text-xs font-mono bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-150/50 dark:border-indigo-900/30 px-2.5 py-1 rounded-md text-indigo-600 dark:text-indigo-400 w-fit font-bold">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc list-outside text-sm text-slate-600 dark:text-slate-400 space-y-2 pl-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
