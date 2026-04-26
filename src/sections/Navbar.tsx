import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo.png'
const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/works', label: 'Our Works' },
  { href: '#packages', label: 'Packages' },
  { href: '#why', label: 'Why NERA' },
  { href: '#process', label: 'Process' },
  { href: '/blogs', label: 'Blogs' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 1. Handle actual page routes (like /blogs)
    if (href.startsWith('/')) {
      setIsMobileMenuOpen(false);
      return; // Let the default Link behavior work
    }

    // 2. Handle hash links (#services)
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // If we aren't on home, go home with the hash
      navigate(`/${href}`);
    } else {
      // If we are on home, scroll smoothly
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 border-b shadow-sm' : 'bg-white/80'
        }`}
        style={{ height: '70px' }}
      >
        <div className="max-w-container mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
             <img className='w-[7rem]' src={logo} alt="logo" />
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-black hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm"
            >
              Let's Talk <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            {/* Mobile Toggle Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {/* Bars Icon */}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu (Using same handleNavClick) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-8">
             {navLinks.map((link) => (
               <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl font-bold">
                 {link.label}
               </a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}