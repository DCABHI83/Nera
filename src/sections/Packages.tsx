import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';

const packageTabs = [
  { id: 'setup', label: 'Digital Presence Setup' },
  { id: 'social', label: 'Social Media Management' },
  { id: 'web', label: 'Website Development' },
];

const setupPackages = [
  {
    tier: 'Tier 1',
    name: 'Basic Setup',
    description: 'Get your digital foundations in place across all essential platforms.',
    features: [
      { category: 'Platform Setup', items: [
        'Instagram business account setup',
        'Facebook business page creation',
        'Google Business profile setup',
        'WhatsApp Business setup',
      ]},
      { category: 'Brand Optimisation', items: [
        'Professional bio optimisation',
        '6 custom-designed post templates',
      ]},
    ],
  },
  {
    tier: 'Most Popular',
    name: 'Pro Setup',
    description: 'Complete digital launch with professional content production included.',
    featured: true,
    features: [
      { category: 'Platform Setup', items: [
        'Complete Instagram setup & optimisation',
        'Facebook business page creation',
        'Google Business profile optimisation',
        'WhatsApp Business with automated features',
      ]},
      { category: 'Content Delivery', items: [
        '7 custom-designed social media posts',
        '6 professionally produced reels',
      ]},
      { category: 'Brand Optimisation', items: [
        'Professional bio & highlight covers',
        'Content calendar template',
      ]},
    ],
  },
  {
    tier: 'Tier 3',
    badge: 'Premium',
    name: 'Pro Plus Setup',
    description: 'The ultimate launch package with cinematic content and lifestyle models.',
    features: [
      { category: 'Advanced Content Production', items: [
        'Extended professional photo shoot',
        'Cinematic video shoot',
      ]},
      { category: 'Content Delivery', items: [
        '10 custom social media posts',
        '8 high-quality reels',
      ]},
      { category: 'Lifestyle Reels With Models', items: [
        'Professional male & female lifestyle models',
        'Scripted brand storytelling videos',
      ]},
    ],
  },
];

const socialPackages = [
  {
    tier: 'Monthly',
    name: 'Starter',
    description: 'Consistent content presence to get you started on social.',
    features: [
      { label: 'Professional Reels', value: '4 / month' },
      { label: 'Social Media Posts', value: '4 / month' },
      { label: 'Instagram Stories', value: '2 / week' },
      { label: 'Content Shoot Days', value: '—' },
      { label: 'Caption & Hashtag Strategy', value: true },
      { label: 'Content Calendar', value: '—' },
      { label: 'Posting & Scheduling', value: '—' },
      { label: 'Community Engagement', value: '—' },
      { label: 'Trend Research', value: '—' },
      { label: 'Platforms Managed', value: '1' },
    ],
  },
  {
    tier: 'Most Popular',
    name: 'Growth',
    featured: true,
    description: 'Active growth with consistent content, scheduling, and reporting.',
    features: [
      { label: 'Professional Reels', value: '8 / month' },
      { label: 'Social Media Posts', value: '8 / month' },
      { label: 'Instagram Stories', value: 'Daily' },
      { label: 'Content Shoot Days', value: '1 / month' },
      { label: 'Caption & Hashtag Strategy', value: true },
      { label: 'Content Calendar', value: true },
      { label: 'Posting & Scheduling', value: true },
      { label: 'Community Engagement', value: 'Basic' },
      { label: 'Trend Research', value: true },
      { label: 'Platforms Managed', value: '2' },
    ],
  },
  {
    tier: 'Monthly',
    badge: 'Premium',
    name: 'Premium',
    description: 'Full-service management with dedicated support and multi-platform presence.',
    features: [
      { label: 'Professional Reels', value: '12 / month' },
      { label: 'Social Media Posts', value: '12 / month' },
      { label: 'Instagram Stories', value: 'Daily' },
      { label: 'Content Shoot Days', value: '2 / month' },
      { label: 'Caption & Hashtag Strategy', value: true },
      { label: 'Content Calendar', value: true },
      { label: 'Posting & Scheduling', value: true },
      { label: 'Community Engagement', value: 'Advanced' },
      { label: 'Trend Research', value: true },
      { label: 'Platforms Managed', value: '3+' },
    ],
  },
];

const webPackages = [
  {
    tier: 'One-time',
    name: 'Starter Website',
    description: 'Clean, professional single-page site to establish your digital presence.',
    features: [
      'Single-page responsive design',
      'Professional contact form',
      'WhatsApp chat integration',
      'Google Maps integration',
    ],
  },
  {
    tier: 'Recommended',
    name: 'Business Website',
    featured: true,
    description: 'Multi-page professional site built for credibility and conversions.',
    features: [
      'Up to 5 pages (Home, About, Services, etc.)',
      'Mobile-responsive design',
      'Contact forms & lead capture',
      'WhatsApp & social integrations',
      'Basic SEO setup',
      'Speed optimization',
    ],
  },
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState('setup');

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

  const renderSetupPackages = () => (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      {setupPackages.map((pkg, i) => (
        <motion.div
          key={pkg.name}
          variants={fadeUp}
          custom={i}
          className={`pkg-card ${pkg.featured ? 'featured' : ''}`}
          style={{ borderColor: pkg.featured ? 'rgba(255,106,0,0.15)' : undefined }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-nera-textLight uppercase tracking-[0.15em] font-medium">
              {pkg.tier}
            </span>
            {pkg.badge && <span className="badge-adv ml-1">{pkg.badge}</span>}
          </div>
          {pkg.featured && <span className="badge-pop mb-2 inline-block">Most Popular</span>}
          <h3 className="text-xl font-bold mt-1">{pkg.name}</h3>
          <p className="text-nera-textMuted text-xs mt-2 leading-relaxed">{pkg.description}</p>
          
          {pkg.features.map((section, j) => (
            <div key={j} className="mt-6 pt-6 border-t border-black/5">
              <div className="text-[10px] uppercase tracking-[0.12em] text-nera-textLight font-medium mb-3">
                {section.category}
              </div>
              <div className="space-y-2.5">
                {section.items.map((item, k) => (
                  <div key={k} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 text-nera-accent flex-shrink-0" />
                    <span className="text-sm text-nera-textMuted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-all ${
              pkg.featured
                ? 'bg-black text-white hover:bg-[#222]'
                : 'border border-black/10 hover:border-black/20 hover:bg-black/[0.02]'
            }`}
          >
            Let's Talk
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderSocialPackages = () => (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      {socialPackages.map((pkg, i) => (
        <motion.div
          key={pkg.name}
          variants={fadeUp}
          custom={i}
          className={`pkg-card ${pkg.featured ? 'featured' : ''}`}
          style={{ borderColor: pkg.featured ? 'rgba(255,106,0,0.15)' : undefined }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-nera-textLight uppercase tracking-[0.15em] font-medium">
              {pkg.tier}
            </span>
            {pkg.badge && <span className="badge-adv ml-1">{pkg.badge}</span>}
          </div>
          {pkg.featured && <span className="badge-pop mb-2 inline-block">Most Popular</span>}
          <h3 className="text-xl font-bold mt-1">{pkg.name}</h3>
          <p className="text-nera-textMuted text-xs mt-2 leading-relaxed">{pkg.description}</p>
          
          <div className="mt-6 pt-6 border-t border-black/5 space-y-2.5">
            {pkg.features.map((feature, j) => (
              <div key={j} className="flex items-center justify-between">
                <span className="text-sm text-nera-textMuted">{feature.label}</span>
                {typeof feature.value === 'boolean' ? (
                  <Check className="w-4 h-4 text-nera-accent" />
                ) : (
                  <span className={`text-sm font-medium ${feature.value === '—' ? 'text-nera-textLight' : 'text-nera-accent'}`}>
                    {feature.value}
                  </span>
                )}
              </div>
            ))}
          </div>
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-all ${
              pkg.featured
                ? 'bg-black text-white hover:bg-[#222]'
                : 'border border-black/10 hover:border-black/20 hover:bg-black/[0.02]'
            }`}
          >
            Let's Talk
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderWebPackages = () => (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
    >
      {webPackages.map((pkg, i) => (
        <motion.div
          key={pkg.name}
          variants={fadeUp}
          custom={i}
          className={`pkg-card ${pkg.featured ? 'featured' : ''}`}
          style={{ borderColor: pkg.featured ? 'rgba(59,130,246,0.15)' : undefined }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-nera-textLight uppercase tracking-[0.15em] font-medium">
              {pkg.tier}
            </span>
          </div>
          {pkg.featured && <span className="badge-rec mb-2 inline-block">Recommended</span>}
          <h3 className="text-xl font-bold mt-1">{pkg.name}</h3>
          <p className="text-nera-textMuted text-xs mt-2 leading-relaxed">{pkg.description}</p>
          
          <div className="mt-6 pt-6 border-t border-black/5 space-y-2.5">
            {pkg.features.map((feature, j) => (
              <div key={j} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 mt-0.5 text-nera-accent flex-shrink-0" />
                <span className="text-sm text-nera-textMuted">{feature}</span>
              </div>
            ))}
          </div>
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border border-black/10 hover:border-black/20 hover:bg-black/[0.02] transition-all"
          >
            Let's Talk
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="packages" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24">
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-14"
      >
        <motion.span 
          variants={fadeUp}
          className="text-[10px] text-nera-textLight uppercase tracking-[0.2em] font-medium"
        >
          Packages
        </motion.span>
        <motion.h2 
          variants={fadeUp}
          className="text-[36px] sm:text-[40px] lg:text-[48px] font-bold tracking-tight mt-4 leading-[1.1]"
        >
          Structured plans for<br />
          <span className="gradient-text">every growth stage.</span>
        </motion.h2>
        <motion.p 
          variants={fadeUp}
          className="text-nera-textMuted mt-5 max-w-lg mx-auto text-sm leading-relaxed"
        >
          Choose a package that fits where you are right now. Every plan is customizable — these are starting points, not rigid boxes.
        </motion.p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-black/5 shadow-sm overflow-x-auto max-w-full">
          {packageTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pkg-tab whitespace-nowrap ${activeTab === tab.id ? 'active' : ''}`}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 500,
                transition: 'all 0.3s',
                backgroundColor: activeTab === tab.id ? '#000' : 'transparent',
                color: activeTab === tab.id ? '#fff' : '#999',
                border: activeTab === tab.id ? '1px solid #000' : '1px solid transparent',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Package Panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeTab === 'setup' && renderSetupPackages()}
          {activeTab === 'social' && renderSocialPackages()}
          {activeTab === 'web' && renderWebPackages()}
        </motion.div>
      </AnimatePresence>

      {/* Footer Note */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <p className="text-nera-textMuted text-sm">
          Not sure which package fits?{' '}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="font-medium text-nera-accent hover:underline"
          >
            Let's talk
          </a>{' '}
          and we'll build a custom plan for you.
        </p>
      </motion.div>
    </section>
  );
}
