import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Contact from '@/sections/Contact'
import CTA from '@/sections/CTA'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Packages from '@/sections/Packages'
import Process from '@/sections/Process'
import Services from '@/sections/Services'
import WhyNera from '@/sections/WhyNera'

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #services)
    if (hash) {
      // Use a slight delay to ensure the DOM has fully rendered 
      // before we try to calculate the position
      const timeoutId = setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const headerOffset = 80; // Adjust this to match your Navbar height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [hash]); // This runs every time the URL hash changes

  return (
    <>
      <Hero />
      <Marquee />
      {/* Ensure these components have id="services", id="packages", etc. inside them */}
      <Services /> 
      <Packages />
      <WhyNera />
      <Process />
      <CTA />
      <Contact />
    </>
  )
}

export default Home