import { Project, StackImages } from '../../constants/types';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  repositories: Project[];
  stackImages: StackImages;
  lang: any;
}

const SectionLanguages: React.FC<Props> = ({ repositories, stackImages, lang }) => {
  // Group repositories by language
  const groupedRepos = repositories.reduce((acc: { [key: string]: Project[] }, repo: Project) => {
    if (repo.language_code) {
      if (!acc[repo.language_code]) {
        acc[repo.language_code] = [];
      }
      acc[repo.language_code].push(repo);
    }
    return acc;
  }, {});

  const languages = Object.keys(groupedRepos);

  return (
    <section id="stack" className="py-20 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">
            {lang.my_lang_stack}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((langCode, index) => (
            <motion.div
              key={langCode}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black/40 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <img 
                    src={stackImages[langCode]} 
                    alt={langCode} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{langCode}</h3>
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest">{groupedRepos[langCode].length} Proyectos</p>
                </div>
              </div>

              <div className="space-y-3">
                {groupedRepos[langCode].map((repo: Project) => (
                  <a 
                    key={repo.id}
                    href={repo.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-xl bg-black/20 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all text-sm text-gray-400 hover:text-white flex items-center justify-between group/item"
                  >
                    <span className="truncate mr-2 italic opacity-80 group-hover/item:opacity-100">
                      {repo.github?.split('/').pop() || 'Repository'}
                    </span>
                    <svg className="w-4 h-4 text-gray-600 group-hover/item:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionLanguages;
