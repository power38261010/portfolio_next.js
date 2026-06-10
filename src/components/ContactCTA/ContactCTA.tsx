import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  texts: any;
  language: string;
}

const ContactCTA: React.FC<Props> = ({ texts, language }) => {
  const resumeUrl = language === 'es' ? texts.contact_me.resume_es : texts.contact_me.resume_en;
  const resumeText = language === 'es' ? texts.contact_me.resume_text_es : texts.contact_me.resume_text_en;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-fuchsia-900/40 to-cyan-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          {/* Decorative Glows */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-fuchsia-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
              {language === 'es' ? '¿Listo para escalar tu próximo producto?' : 'Ready to scale your next product?'}
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {language === 'es' 
                ? 'Busco mi próximo gran desafío técnico. Si necesitas un ingeniero que piense en el negocio tanto como en el código, hablemos.'
                : 'I am looking for my next great technical challenge. If you need an engineer who thinks about the business as much as the code, let’s talk.'}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={`mailto:${texts.contact_me.email}`}
                className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-fuchsia-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl"
              >
                {language === 'es' ? 'Hablemos' : 'Let\'s talk'}
              </a>
              <a 
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1"
              >
                {resumeText}
              </a>
            </div>

            <div className="mt-16 flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
               <a href={texts.contact_me.github} target="_blank" rel="noopener noreferrer">
                  <img src="/assets/github_logo.png" alt="GitHub" className="h-8 invert" />
               </a>
               <a href={texts.contact_me.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="/assets/linkedin_logo.webp" alt="LinkedIn" className="h-8" />
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
