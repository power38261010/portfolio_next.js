import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Switcher from '../Switcher/Switcher';
import { motion, AnimatePresence } from 'framer-motion';
import { Locales } from '../../constants/types';

interface Props {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleLanguage: () => void;
  language: string;
  texts: Locales;
}

const Header: React.FC<Props> = ({
  toggleLanguage,
  language,
  texts,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioElement = new Audio('/assets/neon-nights.mp3');
      audioElement.loop = true;
      setAudio(audioElement);
      audioRef.current = audioElement;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => console.error('Failed to play audio:', error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="flex flex-col">
          <span className="text-xl font-black text-white tracking-tighter uppercase">
            Arrua<span className="text-fuchsia-500">.dev</span>
          </span>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none opacity-80">
            Fullstack Engineer
          </span>
        </div>

        {/* Social & Contact - Hidden on tiny mobile, visible on small+ */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <a 
              href={texts.contact_me.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-60 hover:opacity-100 transition-opacity p-1"
              aria-label="GitHub Profile"
            >
              <Image src="/assets/github_logo.png" alt="" width={18} height={18} className="invert" />
            </a>
            <a 
              href={texts.contact_me.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-60 hover:opacity-100 transition-opacity p-1"
              aria-label="LinkedIn Profile"
            >
              <Image src="/assets/linkedin_logo.webp" alt="" width={18} height={18} />
            </a>
            <a 
              href={`mailto:${texts.contact_me.email}`} 
              className="opacity-60 hover:opacity-100 transition-opacity p-1"
              aria-label="Send Email"
            >
              <Image src="/assets/email_logo.jpg" alt="" width={18} height={18} className="rounded-sm" />
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Music Toggle */}
          <button 
            onClick={togglePlay}
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border transition-all ${
              isPlaying ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'bg-white/5 border-white/10 text-gray-400'
            }`}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  className="flex gap-0.5 items-end h-3"
                >
                  <motion.div animate={{ height: [8, 12, 6, 12, 8] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-current rounded-full" />
                  <motion.div animate={{ height: [12, 6, 12, 8, 12] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-current rounded-full" />
                  <motion.div animate={{ height: [6, 12, 8, 12, 6] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-0.5 bg-current rounded-full" />
                </motion.div>
              ) : (
                <motion.svg 
                  key="paused" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  exit={{ scale: 0 }} 
                  className="w-4 h-4 sm:w-5 sm:h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>

          {/* Language Switcher */}
          <div className="bg-white/5 border border-white/10 rounded-full px-2 sm:px-3 py-1 backdrop-blur-md">
            <Switcher
              leftLabel="EN"
              rightLabel="ES"
              value={language === 'en'}
              onChange={toggleLanguage}
            />
          </div>
        </div>

      </div>
    </motion.header>
  );
};

export default Header;
