import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../constants/types';

interface Props {
  item: Project;
  stackImages?: any;
  lang: any;
}

const CardItem: React.FC<Props> = ({ item, lang }) => {
  const [isHovered, setIsHovered] = useState(false);

  const varVideoID = lang.idiom === 'es' && item?.video_tutorial_es ? item?.video_tutorial_es?.split('v=')[1]?.split('&')[0]
    : lang.idiom === 'en' && item?.video_tutorial_en ? item?.video_tutorial_en?.split('v=')[1]?.split('&')[0] : null;

  const description = lang.idiom === 'es' ? item?.description_es : item?.description_en;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-fuchsia-500/50 shadow-2xl h-full flex flex-col"
    >
      {/* Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-15 transition duration-500 blur-xl"></div>

      <div className="relative p-6 flex-grow flex flex-col">
        {/* Media Section */}
        <div className="relative h-72 w-full mb-6 rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isHovered || !varVideoID ? (
              <motion.img
                key="poster"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={item?.poster_url || item?.image_url}
                alt={item?.name || 'Project image'}
                className="w-full h-full object-contain"
              />
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <YouTube
                  videoId={varVideoID}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      modestbranding: 1,
                      mute: 1,
                      loop: 1,
                      playlist: varVideoID,
                      suggestedQuality: 'hd1080'
                    }
                  }}
                  className="w-full h-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Tags over image */}
          <div className="absolute top-3 right-3 flex gap-2">
            {item?.domain && (
              <span className="px-3 py-1 bg-fuchsia-600 text-[10px] font-bold uppercase rounded-full text-white tracking-wider shadow-lg">Live</span>
            )}
          </div>
        </div>

        {/* Content Section */}
        {item?.name && (
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors">
            {item.name}
          </h3>
        )}

        <div className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description
              .replace(/\*\*(.*?)\*\*/g, '<br/><b class="text-fuchsia-400">$1</b>')
              .replace('<br/><b', '<b') // No poner br antes del primero
            }} />
          )}
        </div>

        {/* Tech Stack */}
        {(item?.frontend?.length || item?.backend?.length) ? (
          <div className="space-y-4 mb-6">
            {item.frontend?.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Frontend Stack</p>
                <div className="flex flex-wrap gap-3">
                  {item.frontend.slice(0, 5).map((tech: string, i: number) => (
                    <img key={i} src={tech} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" alt="tech" />
                  ))}
                </div>
              </div>
            )}
            {item.backend?.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Backend Stack</p>
                <div className="flex flex-wrap gap-3">
                  {item.backend.slice(0, 5).map((tech: string, i: number) => (
                    <img key={i} src={tech} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" alt="tech" />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
          {item?.domain && (
            <button
              onClick={() => window.open(item?.domain)}
              className="flex-1 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all border border-white/10 backdrop-blur-sm"
            >
              Demo
            </button>
          )}
          {(item?.github_f || item?.github) && (
            <button
              onClick={() => window.open(item?.github_f || item?.github)}
              className="flex-1 py-2 bg-fuchsia-600/20 hover:bg-fuchsia-600/40 text-fuchsia-400 text-xs font-bold rounded-xl transition-all border border-fuchsia-500/20"
            >
              Github
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CardItem;
