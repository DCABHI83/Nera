import Photos from '@/components/Works/Photos'
import Posts from '@/components/Works/Posts'
import Videos from '@/components/Works/Videos'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  { id: 'photos', label: 'Photos' },
  { id: 'posts', label: 'Posts' },
  { id: 'videos', label: 'Videos' },
]

const OurWorks = () => {
  const [activeTab, setActiveTab] = useState('photos')

  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24">
      
      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-black/5 shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="whitespace-nowrap"
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 500,
                transition: 'all 0.3s',
                backgroundColor: activeTab === tab.id ? '#000' : 'transparent',
                color: activeTab === tab.id ? '#fff' : '#999',
                border: activeTab === tab.id ? '1px solid #000' : '1px solid transparent',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeTab === 'photos' && <Photos />}
          {activeTab === 'videos' && <Videos />}
          {activeTab === 'posts' && <Posts />}
        </motion.div>
      </AnimatePresence>

    </section>
  )
}

export default OurWorks