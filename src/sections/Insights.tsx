import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=375&fit=crop',
    category: 'Ads',
    date: 'Dec 2024',
    title: 'Why Your Instagram Ads Are Burning Money (And the 3-Step Fix)',
    description: "Most brands waste 60% of their ad budget on the wrong audience. Here's the framework we use.",
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=375&fit=crop',
    category: 'AI',
    date: 'Nov 2024',
    title: 'AI Agents for Small Brands: A No-BS Guide for 2025',
    description: 'Forget chatbots. Real AI agents can handle leads, support, and content — here\'s how.',
  },
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=375&fit=crop',
    category: 'Social',
    date: 'Nov 2024',
    title: 'The Reel Strategy That Got a D2C Brand 10L Views/Week',
    description: 'A breakdown of the exact content system — not just one viral reel, but a repeatable machine.',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24">
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
            Insights
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-[36px] sm:text-[40px] lg:text-[48px] font-bold tracking-tight mt-4"
          >
            What we're thinking.
          </motion.h2>
        </div>
        <motion.a 
          variants={fadeUp}
          href="#" 
          className="flex items-center gap-2 text-sm text-nera-textMuted hover:text-black transition-colors group"
        >
          View all
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            variants={fadeUp}
            custom={i}
            className="blog-card group cursor-pointer"
          >
            {/* Image */}
            <div className="blog-img-wrapper rounded-2xl aspect-[16/10]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="mt-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-[0.1em] font-medium text-nera-accent">
                  {article.category}
                </span>
                <span className="text-nera-textLight">·</span>
                <span className="text-[11px] text-nera-textLight">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-nera-textMuted transition-colors">
                {article.title}
              </h3>
              <p className="text-nera-textMuted text-sm mt-2 leading-relaxed line-clamp-2">
                {article.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
