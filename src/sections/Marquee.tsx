import { motion } from 'framer-motion';

const services = [
  'Social Media',
  'Performance Ads',
  'Web Development',
  'Brand Strategy',
  'AI Agents',
  'Growth Strategy',
  'Content Production',
];

export default function Marquee() {
  return (
    <div className="border-y border-black/5 py-6 overflow-hidden bg-white">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"], // Moves halfway because the second half is a duplicate
        }}
        transition={{
          duration: 20, // Adjust speed here (higher = slower)
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First set */}
        <div className="flex items-center gap-12 px-6">
          {services.map((service, i) => (
            <div key={`a-${i}`} className="flex items-center gap-12">
              <span className="text-xl font-bold text-[#999999] uppercase tracking-tight">
                {service}
              </span>
              <span className="w-2 h-2 rounded-full bg-orange-500" />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 px-6">
          {services.map((service, i) => (
            <div key={`b-${i}`} className="flex items-center gap-12">
              <span className="text-xl font-bold text-black uppercase tracking-tight">
                {service}
              </span>
              <span className="w-2 h-2 rounded-full bg-orange-500" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}