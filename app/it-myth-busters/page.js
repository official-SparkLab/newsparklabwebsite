'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function ITMythBusters() {
  const myths = [
    {
      myth: 'Website is just a visiting card',
      reality: 'Website is a lead-generating machine',
      icon: '💼',
      explanation: 'Aaj kal website sirf contact info dakhvayla nahi. Te 24/7 tumchya business la leads generate karta. Forms, CTAs, landing pages—he sab use kara ani leads badha.',
      details: 'A good website converts visitors into customers. It\'s not just about showing your address—it\'s about capturing leads, building trust, and making sales even when you\'re sleeping.',
    },
    {
      myth: 'SEO is one-time work',
      reality: 'SEO is an ongoing process',
      icon: '📈',
      explanation: 'Ekda SEO kela mhanje kaam sampala? Nahi! Google algorithms badaltat, competitors ahet, content update karna lagta. SEO is like fitness—regular work chahiye.',
      details: 'SEO needs constant attention. New content, backlinks, technical updates, competitor analysis—ye sab regular chahiye. One-time SEO is like eating once and expecting to stay fit forever.',
    },
    {
      myth: 'WordPress is best for everything',
      reality: 'Right tool depends on use case',
      icon: '🛠️',
      explanation: 'WordPress changla ahe, but har project sathi nahi. Blog? Perfect. E-commerce? Shopify better. Complex app? React/Next.js. Right tool = right results.',
      details: 'WordPress is great for blogs and simple sites. But for complex applications, custom solutions work better. We tell you what you actually need, not what\'s popular.',
    },
    {
      myth: 'More features = better website',
      reality: 'Simple, focused websites convert better',
      icon: '🎯',
      explanation: 'Jast features mhanje confusion. Users la kay chahiye te dakhva—simple, clear, focused. Less is more when it comes to conversions.',
      details: 'A website with 50 features but no clear purpose will fail. A simple website with one clear goal will succeed. Focus on what matters to your users.',
    },
    {
      myth: 'Mobile version is optional',
      reality: 'Mobile-first is essential',
      icon: '📱',
      explanation: '60%+ traffic mobile pasun yeto. Mobile-friendly nahi asel tr users jatinat. Mobile-first design is not optional—it\'s mandatory.',
      details: 'If your website doesn\'t work well on mobile, you\'re losing more than half your potential customers. Mobile-first design ensures everyone can use your site.',
    },
    {
      myth: 'Website speed doesn\'t matter',
      reality: 'Speed directly affects conversions',
      icon: '⚡',
      explanation: '3 seconds pasun jast vel lagel tr 40% users jatinat. Fast website = happy users = better ranking = more sales. Speed matters a lot!',
      details: 'Every second of delay can drop conversions by 7%. Google also ranks faster sites higher. Optimize images, use CDN, minimize code—speed is crucial.',
    },
    {
      myth: 'Free hosting is enough',
      reality: 'You get what you pay for',
      icon: '☁️',
      explanation: 'Free hosting madhe limitations ahet—slow speed, downtime, no support. Business sathi paid hosting is worth it. Quality matters.',
      details: 'Free hosting works for personal projects, not businesses. Slow speed, frequent downtime, and no customer support will hurt your business. Invest in good hosting.',
    },
    {
      myth: 'Once built, website is done',
      reality: 'Website needs regular updates',
      icon: '🔄',
      explanation: 'Website build kela mhanje kaam sampala? Nahi! Security updates, content updates, feature additions—regular maintenance chahiye.',
      details: 'Websites need care like any other tool. Security patches, content updates, bug fixes, feature improvements—regular maintenance keeps your site healthy and secure.',
    },
    {
      myth: 'All websites cost the same',
      reality: 'Cost depends on requirements',
      icon: '💰',
      explanation: 'Simple blog = ₹20k. E-commerce = ₹2L+. Complex app = ₹10L+. Requirements varun cost change hoto. Right budget = right expectations.',
      details: 'A simple 5-page website costs different than a full e-commerce platform. Understand your needs, then budget accordingly. Cheap doesn\'t mean good, expensive doesn\'t mean necessary.',
    },
    {
      myth: 'DIY website builders are always cheaper',
      reality: 'Hidden costs add up quickly',
      icon: '🔧',
      explanation: 'DIY builders cheap vatatat, but templates, plugins, hosting, maintenance—ye sab add hota. Custom solution sometimes better value deta.',
      details: 'DIY builders seem cheap initially, but premium templates, plugins, and hosting add up. Plus, you spend time learning and maintaining. Sometimes professional help saves money.',
    },
    {
      myth: 'More colors = better design',
      reality: 'Consistent color palette is key',
      icon: '🎨',
      explanation: 'Jast colors = confusion. 2-3 consistent colors use kara. Brand identity strong hota, users la easy vatat. Less is more.',
      details: 'Too many colors confuse users and weaken your brand. A consistent 2-3 color palette creates a professional, memorable brand identity. Stick to your brand colors.',
    },
    {
      myth: 'Social media replaces website',
      reality: 'Website is your digital home',
      icon: '🏠',
      explanation: 'Social media is marketing channel, website is your business. Social media rules change, but website tumchya control madhe ahe. Both are important.',
      details: 'Social media is great for marketing, but you don\'t own it. Algorithms change, accounts get banned. Your website is your digital property—you control it completely.',
    },
    {
      myth: 'Website is only for big businesses',
      reality: 'Small businesses need websites too',
      icon: '🏪',
      explanation: 'Small business la pan website chahiye. Local search, credibility, 24/7 availability—he sab small businesses la pan important ahe.',
      details: 'Even small local businesses benefit from websites. Google My Business, local SEO, online reviews—all work better with a website. It\'s not just for big companies.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 gradient-bg relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            IT Myth Busters 💥
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Common IT misconceptions break kara. Honest facts, simple language, no fluff.
          </motion.p>
        </div>
      </div>

      {/* Myths Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Myths vs Reality"
            subtitle="Common Misconceptions"
            center
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {myths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="text-5xl flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    {/* Myth */}
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-2">
                        ❌ MYTH
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.myth}
                      </h3>
                    </div>

                    {/* Reality */}
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-2">
                        ✅ REALITY
                      </div>
                      <h4 className="text-lg font-bold text-primary-700 mb-2">
                        {item.reality}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    {item.explanation}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    {item.details}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>💡</span>
                    <span>Remember: {item.reality}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Key Takeaways 🎯
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    point: 'Right tool for right job',
                    description: 'WordPress, React, Shopify—each has its place. Use what fits your needs.',
                  },
                  {
                    point: 'Website is investment, not cost',
                    description: 'Good website generates leads and revenue. It pays for itself.',
                  },
                  {
                    point: 'SEO is continuous process',
                    description: 'One-time SEO doesn\'t work. Regular updates and monitoring are essential.',
                  },
                  {
                    point: 'Simple beats complex',
                    description: 'Focused, simple websites convert better than feature-heavy ones.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-2xl flex-shrink-0">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.point}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ajun questions ahet?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Chala, discuss kara. Myths break kara, facts share kara. No sales pitch, just honest talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact/" size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                Discuss Your Idea 💬
              </Button>
              <Button href="/it-without-headache/" size="lg" variant="secondary" className="border-2 border-white text-white hover:bg-white/10">
                Learn More About IT 📚
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

