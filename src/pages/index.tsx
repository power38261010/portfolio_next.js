import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useDarkMode from '../hooks/useDarkMode';
import Header from '../components/Header/Header';
import SectionAboutMe from '../components/SectionAboutMe/SectionAboutMe';
import SectionStartups from '../components/SectionStartups/SectionStartups';
import SectionProjects from '../components/SectionProjects/SectionProjects';
import SectionLanguages from '../components/SectionLanguages/SectionLanguages';
import ContactCTA from '../components/ContactCTA/ContactCTA';
import { useState } from 'react';
import { Locales, Project, StackImages } from '../constants/types';
import Head from 'next/head';

interface Props {
  initialLanguage: string;
  texts: Locales;
  startups: Project[];
  projects: Project[];
  repositories: Project[];
  stackImages: StackImages;
}

const Home: React.FC<Props> = ({ initialLanguage, texts, startups, projects, repositories, stackImages }) => {
  const { theme, toggleTheme } = useDarkMode();
  const [language, setLanguage] = useState<string>(initialLanguage);

  const router = useRouter();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    router.push('/', '/', { locale: newLanguage });
  };

  return (
    <div className="w-full min-h-screen transition-colors duration-300" style={{ backgroundColor: theme === 'dark' ? '#0a0a0a' : '#f5f5f5', color: theme === 'dark' ? '#ffffff' : '#000000' }}>
      <Head>
        <title>Alejandro Arrua | Fullstack Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Alejandro Arrua, a Fullstack Engineer specialized in .NET, React, and Next.js. Designing scalable architectures since 2018." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        language={language}
        texts={texts}
      />
      
      <main className="relative min-h-screen overflow-hidden">
        {/* Video de Fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/bauty_miami_vice.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center">
          <SectionAboutMe 
            aboutText={texts.who_i_am} 
            welcome={texts.welcome_text} 
            resumeUrl={language === 'es' ? texts.contact_me.resume_es : texts.contact_me.resume_en}
            resumeText={language === 'es' ? texts.contact_me.resume_text_es : texts.contact_me.resume_text_en}
          />
          
          <SectionStartups startups={startups} lang={texts} />
          <SectionProjects projects={projects} lang={texts} />
          <SectionLanguages repositories={repositories} stackImages={stackImages} lang={texts} />
          <ContactCTA texts={texts} language={language} />
        </div>
        
        {/* Overlay para legibilidad */}
        <div className="fixed inset-0 bg-black/40 pointer-events-none z-0"></div>
      </main>

      <footer className="bg-black/90 py-12 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">© {new Date().getFullYear()} Alejandro Arrua. Built with Next.js & Tailwind CSS.</p>
          <p className="uppercase tracking-widest text-[10px] font-bold">Patagonia, Argentina</p>
        </div>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
  // Nota: require es común en Next.js para cargar JSONs estáticos en getStaticProps, 
  // pero usaremos import dinámico para mejor tipado si fuera necesario.
  const texts = (await import(`../locales/${locale}.json`)).default;
  const startups = (await import(`../constants/startups_arrua.json`)).default;
  const projects = (await import(`../constants/proyectos_arrua.json`)).default;
  const repositories = (await import(`../constants/repositorios_arrua.json`)).default;
  
  const stackImages: StackImages = {
    PHP: "./assets/php.png",
    TypeScript: "./assets/ts.webp",
    Python: "./assets/py.jpg",
    JavaScript: "./assets/js.png",
    'C#': "./assets/c_sharp.webp",
    Java: "./assets/java.png"
  };

  return {
    props: {
      initialLanguage: locale,
      texts,
      startups,
      projects,
      repositories,
      stackImages,
    },
  };
};

export default Home;
