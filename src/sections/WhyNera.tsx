import { motion } from 'framer-motion';
import { Link2, BarChart3, ShieldCheck, Zap, Brain, ArrowRight } from 'lucide-react';
import { fadeUp, fadeRight, staggerContainer } from '@/lib/animations/variants';

const differentiators = [
  {
    icon: Link2,
    title: 'Full-Stack, One Team',
    description: 'Social + Ads + Website + AI — all under one roof. No handoffs, no miscommunication.',
  },
  {
    icon: BarChart3,
    title: 'Revenue-First Approach',
    description: "We don't chase followers. We chase conversions, leads, and revenue.",
  },
  {
    icon: ShieldCheck,
    title: 'No BS Reporting',
    description: 'Transparent dashboards, honest numbers, and clear next steps.',
  },
  {
    icon: Zap,
    title: 'Built for Speed',
    description: 'Strategy in days, not weeks. Creative turnaround that keeps up with your calendar.',
  },
  {
    icon: Brain,
    title: 'AI-Native Thinking',
    description: 'We build AI agents that actually work — automating what should be automated.',
  },
];

export default function WhyNera() {
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
    <section id="why" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Content - Sticky */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:sticky lg:top-24"
        >
          <motion.span 
            variants={fadeUp}
            className="text-[10px] text-nera-textLight uppercase tracking-[0.2em] font-medium"
          >
            Why NERA
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-[36px] sm:text-[40px] lg:text-[48px] font-bold tracking-tight mt-4 leading-[1.1]"
          >
            Not another agency.<br />
            <span className="gradient-text">Your growth partner.</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-nera-textMuted mt-6 leading-relaxed"
          >
            Most agencies give you pretty posts and fake metrics. We give you a growth system — where every reel, every ad rupee, and every website visit is connected to a larger strategy.
          </motion.p>
          <motion.p 
            variants={fadeUp}
            className="text-nera-textMuted mt-4 leading-relaxed"
          >
            We don't outsource. We don't template. We don't disappear after the first month. That's not a tagline — it's how we operate.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-scale inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#222] transition-colors"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Differentiators */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeRight}
              custom={i}
              className="diff-card group"
            >
              <div className="flex items-start gap-4">
                <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-black/[0.03] group-hover:bg-nera-accent/10 transition-colors">
                  <item.icon className="w-5 h-5 group-hover:text-nera-accent transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-nera-textMuted text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
