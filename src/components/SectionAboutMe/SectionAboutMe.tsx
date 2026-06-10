import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  aboutText: string;
  welcome: string;
  resumeUrl: string;
  resumeText: string;
}

const SectionAboutMe: React.FC<Props> = ({ aboutText, welcome, resumeUrl, resumeText }) => {
  return (
    <section className="w-[90%] md:w-[80%] mt-20 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="max-w-5xl mx-auto p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Imagen de Perfil con Efectos */}
            <div className="md:col-span-5 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-inner">
                  <Image
                    src="/assets/perfil_foto_arrua.png"
                    alt="Alejandro Arrua"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* Texto y Contenido */}
            <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400"
              >
                {welcome.split(' ').slice(0, -2).join(' ')} <span className="text-white">{welcome.split(' ').slice(-2).join(' ')}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light"
              >
                {aboutText}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold rounded-full transition-all shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transform hover:-translate-y-1"
                >
                  {resumeText}
                </a>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-md border border-white/10"
                >
                  Contactame
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionAboutMe;
