import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

const technologies = [
  { 
    icon: Code2, 
    name: 'Languages', 
    skills: ['C++', 'Python', 'JavaScript'],
    color: 'from-blue-500/20 to-blue-600/10'
  },
  { 
    icon: Globe, 
    name: 'Frontend', 
    skills: ['HTML', 'CSS', 'React'],
    color: 'from-green-500/20 to-green-600/10'
  },
  { 
    icon: Database, 
    name: 'Backend', 
    skills: ['Node.js', 'SQL', 'REST APIs'],
    color: 'from-purple-500/20 to-purple-600/10'
  },
  { 
    icon: Terminal, 
    name: 'Tools', 
    skills: ['Git', 'VS Code', 'Linux'],
    color: 'from-orange-500/20 to-orange-600/10'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const TechSection = () => {
  return (
    <section id="technologies" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 hover-lift cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}>
                <tech.icon size={28} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">{tech.name}</h3>
              <ul className="space-y-2">
                {tech.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
