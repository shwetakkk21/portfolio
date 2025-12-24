import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'Online Course',
    date: '2024',
    description: 'Comprehensive training in HTML, CSS, and JavaScript',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Algorithmic problem solving and data structures',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="glass-card p-6 flex gap-5 group hover-lift"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Award size={24} className="text-secondary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-secondary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink size={18} className="text-muted-foreground" />
                  </motion.button>
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
