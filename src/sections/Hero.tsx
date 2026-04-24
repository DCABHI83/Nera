import { motion } from 'framer-motion';
import { ArrowRight, Signal, Wifi, BatteryFull, Heart, MessageCircle, Share2, Home, Search, BarChart3, User } from 'lucide-react';
import { heroLine, phoneSlide, barGrow } from '@/lib/animations/variants';

const barData = [
  { height: 40, delay: 0, color: 'bg-nera-accent' },
  { height: 65, delay: 0.05, color: 'bg-black/10' },
  { height: 45, delay: 0.1, color: 'bg-black/10' },
  { height: 80, delay: 0.15, color: 'bg-nera-accent' },
  { height: 55, delay: 0.2, color: 'bg-black/10' },
  { height: 35, delay: 0.25, color: 'bg-black/10' },
  { height: 70, delay: 0.3, color: 'bg-nera-accent' },
  { height: 50, delay: 0.35, color: 'bg-black/10' },
];

const rightBarData = [
  { height: 30, delay: 0.4, color: 'bg-nera-accent' },
  { height: 50, delay: 0.45, color: 'bg-black/10' },
  { height: 38, delay: 0.5, color: 'bg-black/10' },
  { height: 60, delay: 0.55, color: 'bg-nera-accent' },
  { height: 42, delay: 0.6, color: 'bg-black/10' },
];

export default function Hero() {
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
    <section className="relative bg-grid overflow-hidden" style={{ minHeight: '620px', paddingBottom: '2rem' }}>
      {/* Gradient Mesh Background */}
      <div 
        className="gradient-mesh bg-nera-accent" 
        style={{ width: '600px', height: '600px', top: '-200px', right: '-50px' }} 
      />
      <div 
        className="gradient-mesh bg-black" 
        style={{ width: '500px', height: '500px', bottom: '-200px', left: '-150px' }} 
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-[15rem] relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-lg">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-black/5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-nera-accent" />
              <span className="text-xs font-medium text-nera-textMuted">Digital Marketing Agency</span>
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-7 font-bold tracking-tight" style={{ lineHeight: 1.05, paddingBottom: '0.3em' }}>
            <motion.div 
              className="overflow-hidden"
              custom={0}
              variants={heroLine}
              initial="hidden"
              animate="visible"
            >
              <span className="text-[42px] sm:text-[48px] lg:text-[60px] inline-block">
                We don't just
              </span>
            </motion.div>
            <motion.div 
              className="overflow-hidden"
              custom={1}
              variants={heroLine}
              initial="hidden"
              animate="visible"
            >
              <span className="text-[42px] sm:text-[48px] lg:text-[60px] inline-block">
                market. We make
              </span>
            </motion.div>
            <motion.div 
              className="overflow-hidden"
              custom={2}
              variants={heroLine}
              initial="hidden"
              animate="visible"
            >
              <span className="text-[42px] sm:text-[48px] lg:text-[60px] inline-block gradient-text">
                brands unignorable.
              </span>
            </motion.div>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-nera-textMuted text-base lg:text-lg leading-relaxed max-w-lg"
          >
            From social content to performance ads to AI-powered growth — your complete digital ecosystem, built by one team that gives a damn.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-scale flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-lg font-medium text-sm hover:bg-[#222] transition-colors"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#packages"
              onClick={(e) => handleNavClick(e, '#packages')}
              className="flex items-center gap-3 border border-black/10 text-black px-7 py-3.5 rounded-lg font-medium text-sm hover:border-black/20 hover:bg-black/[0.02] transition-all"
            >
              View Packages
            </a>
          </motion.div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative flex-shrink-0 lg:ml-12">
          {/* Left Bars */}
          <div 
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-end gap-2 opacity-30"
            aria-hidden="true"
          >
            {barData.map((bar, i) => (
              <motion.div
                key={i}
                variants={barGrow(bar.delay)}
                initial="hidden"
                animate="visible"
                className={`w-3 ${bar.color} rounded-t origin-bottom`}
                style={{ height: `${bar.height}px` }}
              />
            ))}
          </div>

          {/* Right Bars */}
          <div 
            className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-end gap-2 opacity-20"
            aria-hidden="true"
          >
            {rightBarData.map((bar, i) => (
              <motion.div
                key={i}
                variants={barGrow(bar.delay)}
                initial="hidden"
                animate="visible"
                className={`w-2 ${bar.color} rounded-t origin-bottom`}
                style={{ height: `${bar.height}px` }}
              />
            ))}
          </div>

          {/* Phone Mockup */}
          <motion.div
            variants={phoneSlide}
            initial="hidden"
            animate="visible"
            className="animate-phone-float"
          >
            <div 
              className="w-[260px] sm:w-[280px] bg-black rounded-[36px] p-3 shadow-phone relative"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-10" />
              
              {/* Screen */}
              <div className="bg-white rounded-[28px] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-white px-5 pt-8 pb-3 flex items-center justify-between">
                  <span className="text-xs font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <BatteryFull className="w-3 h-3" />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-5 pb-3">
                  <div className="text-base font-bold">Social Analytics</div>
                  <div className="text-[10px] text-nera-textLight">Overview</div>
                </div>

                {/* App Content */}
                <div className="px-4">
                  {/* Followers Card */}
                  <div className="bg-nera-bg rounded-xl p-3.5 mb-3">
                    <div className="text-[10px] text-nera-textLight">Followers</div>
                    <div className="text-xl font-bold mt-0.5">12,438</div>
                    <div className="text-[10px] text-green-500 font-medium mt-0.5">+847 this month ↑</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-nera-bg rounded-xl p-3">
                      <div className="text-[10px] text-nera-textLight">Engagement</div>
                      <div className="text-lg font-bold mt-0.5">4.2%</div>
                    </div>
                    <div className="bg-nera-bg rounded-xl p-3">
                      <div className="text-[10px] text-nera-textLight">Reach</div>
                      <div className="text-lg font-bold mt-0.5">89K</div>
                    </div>
                  </div>

                  {/* Top Posts */}
                  <div className="text-[10px] font-semibold text-nera-textMuted mb-2">Top Posts</div>
                  
                  <div className="flex items-center gap-2.5 py-2 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-lg bg-nera-accent/10 flex items-center justify-center">
                      <Heart className="w-4 h-4 text-nera-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Brand Reel</div>
                      <div className="text-[10px] text-nera-textLight">142 likes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5 py-2 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Carousel Post</div>
                      <div className="text-[10px] text-nera-textLight">87 comments</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5 py-2">
                    <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Story Ad</div>
                      <div className="text-[10px] text-nera-textLight">65 shares</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-2 px-6 py-4 flex justify-between items-center border-t border-gray-100">
                  <Home className="w-5 h-5 text-nera-accent" />
                  <Search className="w-5 h-5 text-gray-300" />
                  <BarChart3 className="w-5 h-5 text-gray-300" />
                  <User className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
