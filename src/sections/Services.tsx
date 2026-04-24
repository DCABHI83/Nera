import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Target, Globe, BarChart3, TrendingUp, Palette, Bot, ChevronDown, ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer, cardReveal } from '@/lib/animations/variants';

const mainServices = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Social Media & Content',
    description: 'End-to-end social media management — from strategy and content creation to community building and brand storytelling.',
    subItems: ['Content Strategy', 'Reel Creation', 'Post & Carousel Design', 'Story Design', 'Social Media Mgmt', 'Content Calendar', 'Brand Storytelling'],
    span: 'md:col-span-2',
  },
  {
    num: '02',
    icon: Target,
    title: 'Performance Marketing',
    description: 'Data-driven ad campaigns that turn spend into measurable revenue.',
    subItems: ['Instagram & Facebook Ads', 'Google Ads (Search)', 'Lead Generation', 'Ad Creative Strategy', 'Campaign Optimization'],
    span: '',
  },
  {
    num: '03',
    icon: Globe,
    title: 'Website Development',
    description: 'Ads + Website = full conversion system. Business websites, landing pages for ads, portfolio sites, and e-commerce — all built to make you look premium instantly.',
    badge: '🔥 High Value',
    tags: ['Business Websites', 'Landing Pages', 'Portfolio Sites', 'E-commerce', 'UI Design', 'Speed Optimization'],
    span: 'md:col-span-3',
    highlight: true,
  },
];

const hiddenServices = [
  {
    num: '04',
    icon: BarChart3,
    title: 'Growth Strategy',
    description: 'Strategic roadmap for sustainable growth, not just spikes.',
    subItems: ['Audience Targeting', 'Platform Selection', 'Budget Planning', 'Competitor Analysis', 'Monthly Growth Strategy'],
  },
  {
    num: '05',
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Clear, actionable insights — no vanity metrics, just truth.',
    subItems: ['Monthly Reports', 'Social Insights', 'Ad Tracking', 'ROI Tracking', 'Growth Tracking'],
  },
  {
    num: '06',
    icon: Palette,
    title: 'Brand Experience',
    description: 'Mini UX that makes your brand look premium instantly.',
    subItems: ['Profile Optimization', 'Bio Writing', 'Highlight Covers', 'Feed Aesthetic', 'Landing Page Ideas'],
  },
  {
    num: '07',
    icon: Bot,
    title: 'AI Agents for Brands',
    description: 'The future of brand interaction. Custom AI agents that handle customer queries, generate content, automate responses, and create personalized experiences at scale — 24/7, without hiring more people.',
    badge: '🔥🔥 Very Advanced',
    tags: ['Automated Support', 'Smart Content', 'Lead Qualification', '24/7 Availability'],
    span: 'md:col-span-3',
    highlight: true,
  },
];

export default function Services() {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <section id="services" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
      >
        <div>
          <motion.span 
            variants={fadeUp}
            className="text-[10px] text-nera-textLight uppercase tracking-[0.2em] font-medium"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-[36px] sm:text-[40px] lg:text-[48px] font-bold tracking-tight mt-4 leading-[1.1]"
          >
            Everything your brand<br />needs to grow online.
          </motion.h2>
        </div>
        <motion.p 
          variants={fadeUp}
          className="text-nera-textMuted text-sm max-w-xs leading-relaxed"
        >
          Every service is designed to work together — creating a full-stack growth engine.
        </motion.p>
      </motion.div>

      {/* Main Services Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {mainServices.map((service) => (
          <motion.div
            key={service.num}
            variants={fadeUp}
            // Ensure "relative" is here so the arrow can pin to bottom-right
            className={`service-card relative card-lift cursor-pointer group p-6 sm:p-8 rounded-2xl border border-black/5 bg-white ${service.span || ''} ${service.highlight ? 'highlight-card' : ''}`}
            style={{ borderColor: service.highlight ? 'rgba(255,106,0,0.1)' : undefined }}
          >
            <span className="svc-num absolute top-6 right-8 text-5xl font-bold opacity-[0.03] select-none">{service.num}</span>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center bg-black/[0.03]">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
              </div>
              
              {service.badge && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-new text-[10px] font-bold bg-nera-accent/10 text-nera-accent px-2 py-1 rounded uppercase tracking-wider">{service.badge}</span>
                </div>
              )}
              
              <p className="text-nera-textMuted text-sm leading-relaxed max-w-md mb-6">
                {service.description}
              </p>
              
              {service.subItems && (
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {service.subItems.map((item, j) => (
                    <span key={j} className="text-[12px] text-nera-textLight flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-black/20" /> {item}
                    </span>
                  ))}
                </div>
              )}
              
              {service.tags && (
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-[11px] font-medium bg-black/[0.03] px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              )}
            </div>
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              // ALIGNMENT FIX: Absolute positioning to the corner
              className="svc-arrow-btn absolute right-6 bottom-6 w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#FFF0E5] group-hover:text-black transition-all duration-300"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
      

      {/* Hidden Services - Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
            >
              {hiddenServices.map((service, idx) => (
                <motion.div
                  key={service.num}
                  variants={cardReveal}
                  custom={idx}
                  className={`service-card relative card-lift cursor-pointer group p-6 sm:p-8 rounded-2xl border border-black/5 bg-white ${service.span || ''} ${service.highlight ? 'highlight-card' : ''}`}
                >
                  <span className="svc-num absolute top-6 right-8 text-5xl font-bold opacity-[0.03] select-none">{service.num}</span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center bg-black/[0.03]">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                    </div>
                    
                    {service.badge && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="badge-adv text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded uppercase tracking-wider">{service.badge}</span>
                      </div>
                    )}
                    
                    <p className="text-nera-textMuted text-sm leading-relaxed max-w-md mb-6">
                      {service.description}
                    </p>
                    
                    {service.subItems && (
                      <div className="grid grid-cols-1 gap-y-2 mb-8">
                        {service.subItems.map((item, j) => (
                          <span key={j} className="text-[12px] text-nera-textLight flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-black/20" /> {item}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {service.tags && (
                      <div className="flex flex-wrap items-center gap-2 mb-8">
                        {service.tags.map((tag, j) => (
                          <span key={j} className="text-[11px] font-medium bg-black/[0.03] px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    // ALIGNMENT FIX: Absolute positioning to the corner
                    className="svc-arrow-btn absolute right-6 bottom-6 w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#FFF0E5] group-hover:text-black transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand Button (Now pushes down when expanded) */}
      <div className="flex justify-center mt-12">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium border transition-all duration-300 ${
            isExpanded 
              ? 'border-nera-accent/20 text-nera-accent bg-white' 
              : 'border-black/5 text-nera-textMuted hover:text-black hover:border-black/10 hover:bg-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{isExpanded ? 'Show Less' : 'View All Services'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}