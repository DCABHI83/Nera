import { motion } from 'framer-motion';
import { scaleUp } from '@/lib/animations/variants';

export default function CTA() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24">
      <motion.div
        variants={scaleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="bg-black rounded-3xl p-10 sm:p-12 lg:p-16 text-center relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 bg-nera-accent rounded-full filter blur-[120px] opacity-20"
        />
        <div 
          className="absolute bottom-0 left-0 w-48 h-48 bg-nera-accent rounded-full filter blur-[100px] opacity-10"
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[32px] sm:text-[36px] lg:text-[48px] font-bold text-white tracking-tight mb-4"
          >
            Ready to make your brand<br />
            <span className="text-nera-accent">unignorable?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base mb-8 max-w-md mx-auto"
          >
            Join 50+ brands that trust NERA for fast, strategic, and result-driven digital growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-scale inline-flex items-center gap-3 bg-nera-accent text-white font-semibold rounded-xl px-8 py-4 text-sm hover:bg-nera-accentLight transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
