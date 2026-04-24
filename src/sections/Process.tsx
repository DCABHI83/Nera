import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Layout, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    phase: 'PHASE 01',
    title: 'Audit & Discover',
    icon: Search,
    description: 'Deep-dive into your brand, audience, competitors, and current digital presence to uncover opportunities.',
    tags: ['BRAND AUDIT', 'COMPETITOR ANALYSIS', 'AUDIENCE MAPPING']
  },
  {
    phase: 'PHASE 02',
    title: 'Strategy & Plan',
    icon: Layout,
    description: 'Developing a tailored roadmap with clear objectives, messaging hierarchy, and channel selection.',
    tags: ['ROADMAP', 'CONTENT STRATEGY', 'KPI SETTING']
  },
  {
    phase: 'PHASE 03',
    title: 'Execute & Launch',
    icon: Rocket,
    description: 'Bringing the strategy to life through high-quality production and precise campaign deployment.',
    tags: ['PRODUCTION', 'ADS LAUNCH', 'CONTENT POSTING']
  },
  {
    phase: 'PHASE 04',
    title: 'Optimize & Scale',
    icon: TrendingUp,
    description: 'Analyzing performance data in real-time to refine tactics and double down on what works.',
    tags: ['DATA ANALYSIS', 'SCALING ADS', 'ROI REPORTING']
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 4000); // Changes every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Progress Line Background */}
        <div className="relative">
          <div className="absolute top-[40px] left-0 w-full h-[1px] bg-gray-100 z-0" />
          
          <div className="grid grid-cols-4 gap-4 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <div key={index} className="flex flex-col items-center">
                  
                  {/* Icon / Marker */}
                  <div 
                    onClick={() => setActiveStep(index)} // Allow manual click too
                    className={`w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 border-4 ${
                      isActive 
                        ? 'bg-orange-500 border-orange-100 scale-110 shadow-lg shadow-orange-200' 
                        : 'bg-white border-gray-50 text-gray-400 hover:border-gray-200'
                    }`}
                  >
                    <step.icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  </div>

                  {/* Phase Label */}
                  <span className={`mt-6 text-[10px] font-bold tracking-widest uppercase transition-colors duration-500 ${
                    isActive ? 'text-orange-500' : 'text-gray-400'
                  }`}>
                    {step.phase}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-gray-900 text-center">
                    {step.title}
                  </h3>

                  {/* Animated Card Area */}
                  <div className="h-[250px] mt-8 w-full relative">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-2xl p-6 absolute inset-0"
                        >
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {step.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.tags.map(tag => (
                              <span key={tag} className="text-[9px] font-bold tracking-wider bg-gray-50 text-gray-400 px-3 py-1.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional Page Indicators (The dots in your screenshot) */}
        <div className="flex justify-center gap-2 mt-12">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeStep === index ? 'w-8 bg-orange-500' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}