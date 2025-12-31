'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TechByteOfTheDay({ variant = 'default' }) {
  const [currentTip, setCurrentTip] = useState(null)

  const techBytes = [
    'Website speed under 3 seconds = better Google ranking. Every second counts!',
    'Too many colors = weak branding. Stick to 2-3 main colors for recognition.',
    'Mobile-first design isn\'t optional. 70% of users browse on phones.',
    'SSL certificate (HTTPS) is free and improves SEO. Always use it.',
    'White space isn\'t empty space. It guides user attention and improves readability.',
    'Consistent fonts create trust. Use maximum 2 font families per website.',
    'Fast loading sites keep 95% of visitors. Slow sites lose 60%.',
    'Clear call-to-action buttons increase conversions by 121%. Make them obvious.',
    'Contact forms with fewer fields get more submissions. Less is more.',
    'Social proof (testimonials) increases trust by 34%. Show customer success.',
    'Email newsletters have 4200% ROI. Start collecting emails early.',
    'Blog posts with images get 94% more views. Visual content wins.',
    '404 error pages can be fun. Turn mistakes into opportunities.',
    'Accessibility isn\'t optional. 15% of users have disabilities.',
    'Backup your website weekly. One hack can destroy years of work.',
    'Password strength matters. Use 12+ characters with mixed types.',
    'Two-factor authentication prevents 99.9% of account hacks.',
    'Regular updates fix security holes. Update plugins and themes monthly.',
    'Analytics show what works. Track user behavior to improve.',
    'A/B testing finds winners. Test headlines, colors, and layouts.',
    'SEO takes 3-6 months. Be patient, consistent content wins.',
    'Internal linking helps SEO. Link related pages together.',
    'Meta descriptions should be 120-160 characters. Google cuts longer ones.',
    'Image alt text helps SEO and accessibility. Always describe images.',
    'Page titles should be 30-60 characters. Include your main keyword.',
    'Local SEO matters for businesses. Claim your Google Business profile.',
    'Video content increases engagement by 80%. Add videos to key pages.',
    'Chatbots answer 80% of questions. Reduce support workload.',
    'Dark mode reduces eye strain. Offer it as an option.',
    'Progressive Web Apps work offline. Better than native apps for many use cases.',
    'CDN speeds up global sites. Serve content from nearest server.',
    'Caching reduces server load. Cache static content for 1 year.',
    'Minify CSS and JavaScript. Smaller files = faster loading.',
    'Lazy loading images saves bandwidth. Load images when needed.',
    'Database optimization speeds up sites. Clean old data regularly.',
    'Error monitoring catches bugs early. Use tools like Sentry.',
    'User testing finds UX issues. Test with 5 users, find 85% of problems.',
    'Heatmaps show where users click. Optimize based on behavior.',
    'Exit-intent popups recover 10-15% of leaving visitors.',
    'Live chat increases conversions by 20%. Be available when users need help.',
    'Free trials convert better than demos. Let users try before buying.',
    'Customer reviews build trust. Display them prominently.',
    'FAQ pages reduce support tickets. Answer common questions.',
    'Search functionality helps users. Add search to large sites.',
    'Breadcrumbs improve navigation. Show users where they are.',
    'Sitemaps help Google index pages. Submit XML sitemap to Google Search Console.',
    'Schema markup shows rich results. Get stars, prices, and more in search.',
    'Core Web Vitals affect ranking. Focus on LCP, FID, and CLS.',
    'Mobile usability is a ranking factor. Test on real devices.',
    'Page speed insights show issues. Fix problems Google finds.',
  ]

  useEffect(() => {
    // Get day of year (1-365/366) to rotate tips daily
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = now - start
    const oneDay = 1000 * 60 * 60 * 24
    const dayOfYear = Math.floor(diff / oneDay)
    
    // Use day of year to select tip (cycles through all tips)
    const tipIndex = dayOfYear % techBytes.length
    setCurrentTip(techBytes[tipIndex])
  }, [])

  if (!currentTip) return null

  const isCompact = variant === 'compact' || variant === 'footer'

  if (variant === 'footer') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-2 sm:p-3 lg:p-4 rounded-lg"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 lg:gap-3">
          <div className="flex-shrink-0">
            <span className="text-lg sm:text-xl lg:text-2xl">💡</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-wider mb-0.5 sm:mb-1 opacity-90">
              Tech Byte of the Day
            </div>
            <div className="text-[10px] sm:text-xs lg:text-sm leading-tight sm:leading-relaxed">
              {currentTip}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={isCompact ? 'py-8' : 'section-padding bg-gradient-to-br from-primary-50 to-accent-50'}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 border-2 border-primary-200 shadow-xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-4xl"
                >
                  💡
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-primary-700 uppercase tracking-wider">
                    Tech Byte of the Day
                  </h3>
                  <p className="text-xs text-gray-500">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTip}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed"
                >
                  {currentTip}
                </motion.p>
              </AnimatePresence>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <span>✨</span>
                <span>New tip every day • Visit tomorrow for more insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

