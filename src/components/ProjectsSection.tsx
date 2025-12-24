import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my skills and projects with modern design and animations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/shwetakkk21',
    live: '#',
  },
  {
    title: 'Competitive Programming',
    description: 'Collection of solved problems from various platforms including Codeforces and LeetCode.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/shwetakkk21',
    live: 'https://codolio.com/profile/shwetakkk',
  },
  {
    title: 'Web Development Projects',
    description: 'Various frontend projects exploring different frameworks and libraries.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/shwetakkk21',
  },
  {
    title: 'Learning Journey',
    description: 'Documenting my learning progress and sharing knowledge with the community.',
    tech: ['Git', 'Open Source', 'Documentation'],
    github: 'https://github.com/shwetakkk21',
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-card p-6 group hover-lift flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder size={24} className="text-primary" />
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
