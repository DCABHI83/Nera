import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'
import { ArrowUpRight, Clock, Tag, X, ChevronLeft } from 'lucide-react'

const blogs = [
  {
    id: 1,
    badge: '🤖 AI & Automation',
    title: 'AI Agents for Brands: How Delhi NCR Businesses Are Using AI to Grow Faster in 2025',
    excerpt: 'Discover how AI agents are transforming brands in Delhi NCR — from 24/7 customer support to automated lead qualification.',
    readTime: '8 min read',
    tag: 'AI Agents',
    keyword: 'AI Agents for Brands Delhi NCR',
    color: 'from-orange-50 to-white',
    accentColor: 'bg-orange-100 text-orange-600',
    content: {
      intro: "Imagine having a team member who responds to every customer enquiry within seconds — at 2am on a Sunday, during Diwali, during a product launch surge that overwhelms your human team. They never get tired, never miss a lead, speak perfectly to your brand tone, and get smarter with every interaction. That's an AI agent — and in 2025, it's one of the most powerful competitive advantages available to businesses of every size across Delhi NCR.",
      sections: [
        {
          heading: 'What Is an AI Agent — and How Is It Different from a Chatbot?',
          body: "An AI agent is a system that can perceive, decide, and act. It doesn't just respond to a limited menu of pre-programmed inputs. It understands natural language, learns from interactions, integrates with your business systems, and executes real tasks — not just replies.",
          table: {
            headers: ['Basic Chatbot', 'AI Agent'],
            rows: [
              ['Follows fixed decision trees', 'Understands context and intent'],
              ['Gives pre-written responses', 'Generates dynamic, personalised replies'],
              ['Cannot act or integrate', 'Can book appointments, qualify leads, update CRMs'],
              ['Gets confused by new questions', 'Learns and improves over time'],
              ['Available during business hours', '24/7 without degradation'],
            ],
          },
        },
        {
          heading: 'Why AI Agents Are a Game-Changer for Delhi NCR Brands in 2025',
          body: "Delhi NCR is one of India's most fast-paced, competitive business environments. Customers here expect instant responses, personalised experiences, and seamless service.",
          stats: [
            { value: '59%', label: 'of Indian SMBs already implementing AI-driven solutions' },
            { value: '80%', label: 'of routine customer queries can be handled by AI' },
            { value: '3–5x', label: 'operational efficiency gains within 3–6 months' },
            { value: '20%', label: 'increase in customer retention rates' },
          ],
        },
        {
          heading: 'What Can AI Agents Actually Do for Your Brand?',
          body: 'Here are the most impactful ways AI agents are being deployed by brands in Delhi NCR right now:',
          bullets: [
            { title: '24/7 Customer Support', desc: 'Handle enquiries around the clock, responding instantly with accurate information about your products, services, pricing, and policies.' },
            { title: 'Automated Lead Qualification', desc: 'Immediately engage potential customers, ask qualifying questions, and escalate high-intent leads to your sales team.' },
            { title: 'WhatsApp & Instagram Integration', desc: 'Automate responses, send appointment reminders, share catalogues, and follow up with leads — all at scale.' },
            { title: 'Appointment & Reservation Management', desc: 'Handle booking, confirmation, rescheduling, and reminders entirely autonomously.' },
            { title: 'Feedback & Reputation Management', desc: 'Automatically follow up for reviews after every interaction — building your Google reputation systematically.' },
          ],
        },
        {
          heading: "The Agentic AI Shift: What's Coming Next",
          body: 'The global AI agent market is projected to grow from USD 7 billion in 2025 to over USD 93 billion by 2032, at a compound annual growth rate of 44.6%. The window to gain a first-mover advantage is right now.',
        },
      ],
      conclusion: "AI agents aren't a technology novelty — they're a business infrastructure upgrade. NERA Digital Services helps brands across Delhi NCR implement AI agents that work — saving time, capturing leads, and delivering the premium customer experience that turns first-time buyers into loyal advocates.",
    },
  },
  {
    id: 2,
    badge: '🌐 Web Development',
    title: "Professional Website Development in Delhi NCR: Why Your Business Can't Afford to Wait in 2025",
    excerpt: 'Learn why a professional business website is your most powerful sales tool — and what separates a high-converting website from an ordinary one.',
    readTime: '7 min read',
    tag: 'Website Development',
    keyword: 'Website Development Company Delhi NCR',
    color: 'from-blue-50 to-white',
    accentColor: 'bg-blue-100 text-blue-600',
    content: {
      intro: "Every morning in Delhi NCR, thousands of potential customers are searching for businesses like yours. They find a website. They make a judgement in about 3 seconds. And then they either call — or they don't. In 2025, your website isn't just a digital brochure. It's your most powerful salesperson: available 24/7, never asking for a commission, capable of reaching anyone in Delhi, India, or the world.",
      sections: [
        {
          heading: 'What Makes a Professional Website Different from a Basic One?',
          body: "There's a significant difference between a website that exists and a website that works.",
          bullets: [
            { title: 'Speed & Performance', desc: 'Google uses page speed as a ranking signal. A professional website is built with clean code and compressed images — loading fast on every device.' },
            { title: 'Mobile-First Design', desc: 'With the majority of your customers browsing on smartphones, professional websites are designed mobile-first.' },
            { title: 'Clear Conversion Architecture', desc: 'Strategic placement of CTAs, lead capture forms, WhatsApp buttons that turn visitors into paying customers.' },
            { title: 'SEO-Ready Structure', desc: 'Proper heading structures, clean URLs, metadata, schema markup — all built in from day one.' },
            { title: 'Brand-Consistent Design', desc: 'Your website should feel like an extension of your brand — colours, typography, and tone all reinforcing who you are.' },
          ],
        },
        {
          heading: 'The State of Business Websites in Delhi NCR in 2025',
          body: "Most business websites in India are slow, hard to navigate on mobile, and completely disconnected from the business's actual brand.",
          stats: [
            { value: '75%', label: 'of consumers judge credibility based on website design' },
            { value: '60%+', label: 'of web traffic in India comes from mobile devices' },
            { value: '7%', label: 'drop in conversions per 1-second page load delay' },
            { value: '3 sec', label: 'is all you get to make a first impression' },
          ],
        },
        {
          heading: 'Why Ads + Website = A Complete Conversion System',
          body: 'Running ads without a professional website is like driving traffic to a closed shop. The most successful digital marketing setups combine strategic ad campaigns, professional landing pages, and clear follow-up systems.',
          table: {
            headers: ['Website Type', 'Typical Range'],
            rows: [
              ['Basic Business Website (5–8 pages)', '₹15,000 – ₹40,000'],
              ['Premium Business Website with SEO', '₹40,000 – ₹80,000'],
              ['E-Commerce Website', '₹50,000 – ₹2,00,000+'],
              ['Custom Landing Page', '₹8,000 – ₹25,000'],
            ],
          },
        },
      ],
      conclusion: "In Delhi NCR's competitive digital landscape, a professional website isn't a luxury — it's the foundation every serious business needs to compete, grow, and be taken seriously. A fast, beautiful, conversion-focused website is one of the smartest investments you can make.",
    },
  },
  {
    id: 3,
    badge: '📱 Social Media',
    title: 'Why Every Business in Delhi NCR Needs a Social Media Management Agency in 2025',
    excerpt: "Delhi NCR's digital revolution is happening right now. Discover why smart businesses are outsourcing social media — and what it actually does for growth.",
    readTime: '9 min read',
    tag: 'Social Media',
    keyword: 'Social Media Management Agency Delhi NCR',
    color: 'from-purple-50 to-white',
    accentColor: 'bg-purple-100 text-purple-600',
    content: {
      intro: "Walk into any café in Connaught Place, any boutique in Rajouri Garden, or any restaurant in Sector 18 Noida — and you'll find one thing in common. Every business owner is on their phone, trying to post a story, reply to a comment, or figure out why their Instagram engagement dropped last week. Social media isn't optional anymore. It's oxygen.",
      sections: [
        {
          heading: 'What Is Social Media Management — and Why Does It Go Beyond "Posting"?',
          body: 'Many business owners think social media management means scheduling a few posts every week. A proper social media management strategy is far more comprehensive.',
          bullets: [
            { title: 'Content Strategy', desc: 'Understanding your audience, your brand voice, and what kind of content actually gets results.' },
            { title: 'Content Creation', desc: 'Designing posts, carousels, Reels, and Stories that are visually compelling and on-brand.' },
            { title: 'Community Management', desc: 'Responding to comments, DMs, and mentions in a way that builds loyalty and trust.' },
            { title: 'Analytics & Reporting', desc: 'Measuring what\'s working and doubling down on it with real data — not intuition.' },
            { title: 'Brand Consistency', desc: 'Making sure every post, every caption, and every story reinforces your brand identity.' },
          ],
        },
        {
          heading: 'The Delhi NCR Social Media Landscape in 2025',
          body: 'Delhi NCR businesses face a unique challenge. The market is intensely competitive across every category — food, fashion, real estate, education, healthcare, and retail.',
          stats: [
            { value: '63.9%', label: 'of the global population are active social media users' },
            { value: '5x', label: 'ROI from social campaigns vs. businesses with no strategy' },
            { value: '95%', label: 'of NCR companies now combine paid + organic social' },
            { value: '70%', label: 'year-on-year growth of Reels in the Delhi NCR market' },
          ],
        },
        {
          heading: '7 Reasons Delhi NCR Businesses Are Hiring Social Media Agencies',
          body: 'Smart businesses in Delhi NCR are partnering with professional agencies for very specific, measurable reasons.',
          bullets: [
            { title: 'Dedicated Creative Team Without Full-Time Costs', desc: 'You get a strategist, designer, copywriter, and analyst — all working on your brand for a fraction of in-house hiring costs.' },
            { title: 'Consistency That Drives Algorithm Growth', desc: 'The biggest killer of organic growth is inconsistency. Agencies maintain your content calendar every single week, no matter what.' },
            { title: 'Data-Driven Decisions, Not Guesswork', desc: 'Every content decision is backed by reach, saves, shares, follower growth, and conversion tracking.' },
            { title: 'Reel Production That Actually Performs', desc: 'Instagram\'s algorithm heavily prioritises Reels. Agencies produce content engineered for discovery and engagement.' },
            { title: 'Premium Brand Aesthetic', desc: 'Consumers make judgements in 3 seconds. A cohesive feed, well-written bio, and quality visuals signal a brand worth trusting.' },
          ],
        },
        {
          heading: 'Industries in Delhi NCR That Benefit Most',
          body: 'Social media management delivers ROI across virtually every industry, but the impact is particularly strong in these sectors.',
          industries: [
            { name: 'Restaurants & Cafés', desc: 'Food content drives massive engagement. Professional photography and Reels build a local following that translates to footfall.' },
            { name: 'Retail & Fashion', desc: "Delhi's fashion market is enormous. Instagram is where trends are discovered, outfits are saved, and purchase decisions begin." },
            { name: 'Real Estate', desc: 'Property buyers in Noida and Gurugram research heavily on social. Walkthrough videos and testimonials build credibility.' },
            { name: 'Education', desc: 'Coaching institutes use social media to reach parents and students at the exact moment they\'re making decisions.' },
          ],
        },
      ],
      conclusion: "Delhi NCR's digital market isn't slowing down. Every week that your brand isn't showing up consistently on social media, your competitors are filling that space. Professional social media management isn't an expense — it's one of the highest-ROI investments a growing business can make.",
    },
  },
]

type Blog = typeof blogs[0]
type Section = Blog['content']['sections'][0]

// Placeholder illustration components
const AIIllustration = () => (
  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br flex items-center justify-center mb-8">
    <div className="absolute inset-0 opacity-10">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-orange-400"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
    <div className="relative z-10 text-center">
      <div className="text-5xl mb-2">🤖</div>
      <p className="text-xs font-medium text-orange-600 uppercase tracking-wider">AI-Powered Growth</p>
    </div>
  </div>
)

const WebIllustration = () => (
  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br flex items-center justify-center mb-8">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-4 left-4 right-4 h-6 bg-blue-200 rounded" />
      <div className="absolute top-14 left-4 right-4 bottom-4 bg-blue-200 rounded" />
      <div className="absolute top-14 left-4 w-1/3 bottom-4 bg-blue-300 rounded" />
    </div>
    <div className="relative z-10 text-center">
      <div className="text-5xl mb-2">🌐</div>
      <p className="text-xs font-medium text-blue-600 uppercase tracking-wider">Web Development</p>
    </div>
  </div>
)

const SocialIllustration = () => (
  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br  flex items-center justify-center mb-8">
    <div className="absolute inset-0 flex items-center justify-center opacity-10 gap-3">
      {['📸', '▶️', '💬', '❤️'].map((icon, i) => (
        <div
          key={i}
          className="text-4xl"
          style={{ transform: `translateY(${i % 2 === 0 ? '-10px' : '10px'})` }}
        >
          {icon}
        </div>
      ))}
    </div>
    <div className="relative z-10 text-center">
      <div className="text-5xl mb-2">📱</div>
      <p className="text-xs font-medium text-purple-600 uppercase tracking-wider">Social Media</p>
    </div>
  </div>
)

const illustrations = [AIIllustration, WebIllustration, SocialIllustration]

function BlogModal({ blog, onClose }: { blog: Blog; onClose: () => void }) {
  const Illustration = illustrations[blog.id - 1]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-3xl mx-4 my-10 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-black/5 px-8 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm text-nera-textMuted hover:text-black transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blogs
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Banner */}
        <div className={`w-full px-8 pt-8 bg-gradient-to-b ${blog.color}`}>
          <Illustration />
        </div>

        {/* Content */}
        <div className="px-8 py-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${blog.accentColor}`}>
              {blog.tag}
            </span>
            <span className="text-[11px] text-nera-textLight flex items-center gap-1">
              <Clock className="w-3 h-3" /> {blog.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-[1.2] mb-4">
            {blog.title}
          </h1>

          <p className="text-nera-textMuted text-sm leading-relaxed mb-10 pb-10 border-b border-black/5">
            {blog.content.intro}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {blog.content.sections.map((section: Section, i: number) => (
              <div key={i}>
                <h2 className="text-lg font-bold tracking-tight mb-3">{section.heading}</h2>
                <p className="text-nera-textMuted text-sm leading-relaxed mb-5">{section.body}</p>

                {'stats' in section && section.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                    {section.stats.map((stat, j: number) => (
                      <div key={j} className={`p-4 rounded-xl border border-black/5 bg-gradient-to-b ${blog.color} text-center`}>
                        <div className="text-xl font-bold text-nera-accent">{stat.value}</div>
                        <div className="text-[11px] text-nera-textMuted mt-1 leading-snug">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {'bullets' in section && section.bullets && (
                  <div className="space-y-3 my-5">
                    {section.bullets.map((b, j: number) => (
                      <div key={j} className="flex items-start gap-3 p-4 rounded-xl border border-black/5 bg-black/[0.01] hover:bg-black/[0.02] transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-nera-accent mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-semibold">{b.title}: </span>
                          <span className="text-sm text-nera-textMuted">{b.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {'industries' in section && section.industries && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
                    {section.industries.map((ind, j: number) => (
                      <div key={j} className={`p-4 rounded-xl border border-black/5 bg-gradient-to-br ${blog.color}`}>
                        <div className="text-sm font-semibold mb-1">{ind.name}</div>
                        <div className="text-[12px] text-nera-textMuted leading-relaxed">{ind.desc}</div>
                      </div>
                    ))}
                  </div>
                )}

                {'table' in section && section.table && (
                  <div className="overflow-x-auto my-5 rounded-xl border border-black/5">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-black/[0.03]">
                          {section.table.headers.map((h: string, j: number) => (
                            <th key={j} className="text-left px-5 py-3 text-[11px] uppercase tracking-wider text-nera-textLight font-medium">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row: string[], j: number) => (
                          <tr key={j} className="border-t border-black/5 hover:bg-black/[0.01] transition-colors">
                            {row.map((cell: string, k: number) => (
                              <td key={k} className={`px-5 py-3 text-sm ${k === 0 ? 'text-nera-textMuted' : 'text-nera-accent font-medium'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className={`mt-10 pt-8 border-t border-black/5 p-6 rounded-xl bg-gradient-to-br ${blog.color}`}>
            <p className="text-nera-textMuted text-sm leading-relaxed italic mb-6">
              {blog.content.conclusion}
            </p>
            <a>
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-[#222] transition-all"
              Let's Talk <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  return (
    <div>

      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="text-[10px] text-nera-textLight uppercase tracking-[0.2em] font-medium"
          >
            Insights & Resources
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[36px] sm:text-[40px] lg:text-[48px] font-bold tracking-tight mt-4 leading-[1.1]"
          >
            Ideas that move<br />
            <span className="gradient-text">brands forward.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-nera-textMuted mt-5 max-w-md text-sm leading-relaxed"
          >
            Deep-dives on digital marketing, AI, and growth strategy — written for business owners who want real answers.
          </motion.p>
        </motion.div>

        {/* Blog Cards Grid — first card spans full width, next two side by side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          {/* Featured card — full width */}
          <motion.div
            variants={fadeUp}
            custom={0}
            onClick={() => setSelectedBlog(blogs[2])}
            className={`group relative p-6 sm:p-8 rounded-2xl border border-black/5 bg-gradient-to-br  cursor-pointer card-lift transition-all hover:border-black/10 md:flex md:items-center md:gap-10`}
          >
            {/* Left text */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${blogs[2].accentColor}`}>
                  {blogs[2].tag}
                </span>
                <span className="text-[11px] text-nera-textLight flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {blogs[2].readTime}
                </span>
              </div>
              <div className="text-[11px] text-nera-textLight mb-2 font-medium">{blogs[2].badge}</div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-[1.25] mb-3">
                {blogs[2].title}
              </h3>
              <p className="text-nera-textMuted text-sm leading-relaxed mb-6">
                {blogs[2].excerpt}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-black/10">
                <div className="flex items-center gap-1.5 text-[11px] text-nera-textLight">
                  <Tag className="w-3 h-3" />
                  {blogs[2].keyword}
                </div>
                <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden md:flex flex-shrink-0 w-56 h-40 rounded-xl  items-center justify-center flex-col gap-2 border border-purple-100">
              <div className="text-4xl">📱</div>
              <div className="flex gap-2">
                {['❤️', '💬', '🔁'].map((icon, i) => (
                  <span key={i} className="text-lg">{icon}</span>
                ))}
              </div>
              <p className="text-[10px] text-purple-500 font-medium uppercase tracking-wider">Social Media</p>
            </div>
          </motion.div>

          {/* Two cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.slice(0, 2).map((blog, i) => (
              <motion.div
                key={blog.id}
                variants={fadeUp}
                custom={i + 1}
                onClick={() => setSelectedBlog(blog)}
                className={`group relative p-6 sm:p-8 rounded-2xl border border-black/5 bg-gradient-to-br  cursor-pointer card-lift transition-all hover:border-black/10`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider `}>
                    {blog.tag}
                  </span>
                  <span className="text-[11px] text-nera-textLight flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>

                <div className="text-[11px] text-nera-textLight mb-2 font-medium">{blog.badge}</div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-[1.25] mb-3">
                  {blog.title}
                </h3>

                <p className="text-nera-textMuted text-sm leading-relaxed mb-6">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-black/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-nera-textLight">
                    <Tag className="w-3 h-3" />
                    {blog.keyword}
                  </div>
                  <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedBlog && (
          <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Blogs