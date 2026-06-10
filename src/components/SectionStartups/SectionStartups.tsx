import { Project } from '../../constants/types';
import CardItem from '../CardItem/CardItem';
import { motion } from 'framer-motion';

interface Props {
  startups: Project[];
  lang: any;
}

const SectionStartups: React.FC<Props> = ({ startups, lang }) => {
  return (
    <section id="startups" className="py-20 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">
            {lang.my_startups}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {startups.map((startup, index) => (
            <motion.div 
              key={startup.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <CardItem item={startup} lang={lang} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionStartups;
