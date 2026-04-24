import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';

const footerLinks = {
  services: [
    { label: 'Social Media', href: '#services' },
    { label: 'Performance Ads', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'AI Agents', href: '#services' },
  ],
  company: [
    { label: 'Packages', href: '#packages' },
    { label: 'Why NERA', href: '#why' },
    { label: 'Our Process', href: '#process' },
    { label: 'Insights', href: '#insights' },
  ],
  contact: [
    { label: 'hello@neradigitals.com', href: 'mailto:hello@neradigitals.com' },
    { label: '@NERA_Digital_Services', href: 'https://instagram.com/NERA_Digital_Services', external: true },
    { label: '+91 7061815776', href: 'https://wa.me/917061815776', external: true },
    { label: 'India', href: '#' },
  ],
};

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
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
    }
  };

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8"
        >
          {/* Logo & Description */}
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-none">NERA</span>
                <span className="text-[9px] text-nera-textLight tracking-[0.15em] uppercase leading-none mt-0.5">
                  Digital Services
                </span>
              </div>
            </a>
            <p className="text-nera-textMuted text-sm mt-4 leading-relaxed">
              Your complete digital growth partner. From content to conversions.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/NERA_Digital_Services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/5 flex items-center justify-center hover:border-black/15 hover:bg-black/[0.03] transition-all"
              >
                <Instagram className="w-4 h-4 text-nera-textMuted" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-black/5 flex items-center justify-center hover:border-black/15 hover:bg-black/[0.03] transition-all"
              >
                <Linkedin className="w-4 h-4 text-nera-textMuted" />
              </a>
              <a
                href="https://wa.me/917061815776"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/5 flex items-center justify-center hover:border-black/15 hover:bg-black/[0.03] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-nera-textMuted" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h5 className="text-[10px] uppercase tracking-[0.2em] text-nera-textLight font-medium mb-5">
              Services
            </h5>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-nera-textMuted hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h5 className="text-[10px] uppercase tracking-[0.2em] text-nera-textLight font-medium mb-5">
              Company
            </h5>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-nera-textMuted hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h5 className="text-[10px] uppercase tracking-[0.2em] text-nera-textLight font-medium mb-5">
              Contact
            </h5>
            <ul className="space-y-2.5">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={!link.external ? (e) => handleNavClick(e, link.href) : undefined}
                    className="text-sm text-nera-textMuted hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-7 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-xs text-nera-textLight">
            © 2024 NERA Digital Services. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-nera-textLight hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-nera-textLight hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
