'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function ITWithoutHeadache() {
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
            IT Without Headache
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Understanding technology made simple. No jargon, no confusion—just clear explanations for business owners.
          </motion.p>
        </div>
      </div>

      {/* What is React? Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="What is React?"
            subtitle="Think of it like Lego blocks"
            center
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">🧱</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Building Blocks</h3>
                      <p className="text-gray-700">
                        React is like Lego blocks. Each block (component) is reusable. You build a house, car, or spaceship using the same blocks in different ways.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">🔄</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Reusable Pieces</h3>
                      <p className="text-gray-700">
                        Once you create a button block, you can use it everywhere. Change it once, and all buttons update automatically.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-6xl">⚡</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast Updates</h3>
                      <p className="text-gray-700">
                        When something changes, React only updates that specific block—not the entire page. Like fixing one Lego piece without rebuilding everything.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-2xl p-8 text-white font-mono">
                <div className="mb-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-green-400"
                    >
                      {'<Button />'}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-blue-400"
                    >
                      {'<Header />'}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="text-purple-400"
                    >
                      {'<Card />'}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="text-yellow-400"
                    >
                      {'<Footer />'}
                    </motion.div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm mt-6">
                  Each component is a reusable block
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-blue-100 border-2 border-blue-300 rounded-xl px-6 py-4">
              <p className="text-lg font-semibold text-blue-900">
                💡 Takeaway: React makes websites faster and easier to build, like using Lego blocks instead of carving from wood.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website vs Web App Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Website vs Web App"
            subtitle="Visiting vs Using"
            center
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Website */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">📄</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Website</h3>
                <p className="text-gray-600">Like a Digital Brochure</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👀</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">You Visit It</h4>
                    <p className="text-gray-600 text-sm">Read information, see photos, learn about the business</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📖</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Static Content</h4>
                    <p className="text-gray-600 text-sm">Pages don't change much—like a printed brochure</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Examples</h4>
                    <p className="text-gray-600 text-sm">Restaurant menu, company info, portfolio</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Web App */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border-2 border-primary-200 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">⚙️</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Web App</h3>
                <p className="text-gray-600">Like a Digital Tool</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🖱️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">You Use It</h4>
                    <p className="text-gray-600 text-sm">Interact, input data, get results, perform tasks</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dynamic & Interactive</h4>
                    <p className="text-gray-600 text-sm">Changes based on what you do—like a calculator</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Examples</h4>
                    <p className="text-gray-600 text-sm">Gmail, banking portal, project management tool</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-primary-100 border-2 border-primary-300 rounded-xl px-6 py-4">
              <p className="text-lg font-semibold text-primary-900">
                💡 Takeaway: Need to show info? Get a website. Need customers to do something? Build a web app.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Static vs Dynamic Websites Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Static vs Dynamic Websites"
            subtitle="Fixed vs Changing"
            center
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Static */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200"
              >
                <div className="text-6xl mb-4 text-center">📌</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Static Website</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Same content for everyone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Faster loading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Cheaper to build</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Like a printed book</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Portfolios, landing pages, simple business sites
                  </p>
                </div>
              </motion.div>

              {/* Dynamic */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-green-50 rounded-2xl p-8 border-2 border-green-200"
              >
                <div className="text-6xl mb-4 text-center">🔄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Dynamic Website</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Content changes per user</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">User accounts & login</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Database integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Like a smart assistant</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> E-commerce, social media, dashboards, user portals
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Visual Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-100 rounded-2xl p-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Real-World Example</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">📰</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Static: News Article</h5>
                  <p className="text-gray-600 text-sm">Everyone sees the same article. It's published and stays the same.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">🛒</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Dynamic: Shopping Cart</h5>
                  <p className="text-gray-600 text-sm">Your cart shows YOUR items. Different for each customer.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-green-100 border-2 border-green-300 rounded-xl px-6 py-4">
                <p className="text-lg font-semibold text-green-900">
                  💡 Takeaway: Static = same for everyone. Dynamic = personalized experience. Choose based on what your business needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How SEO Actually Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="How SEO Actually Works"
            subtitle="Getting Found on Google"
            center
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto">
            {/* SEO Process Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Crawls Your Site</h3>
                    <p className="text-gray-700 mb-4">
                      Think of Google as a librarian. It visits your website, reads all the pages, and catalogs what you offer. This happens automatically—you don't need to do anything.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Simple version:</strong> Google's robot visits your site and takes notes about what you sell or offer.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Indexes Your Content</h3>
                    <p className="text-gray-700 mb-4">
                      After reading your site, Google stores it in its massive library (index). When someone searches, Google looks through this library to find relevant results.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Simple version:</strong> Google files your website in its catalog so it can find you when people search.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Ranks Based on Quality</h3>
                    <p className="text-gray-700 mb-4">
                      Google decides your ranking based on: <strong>Relevance</strong> (does your content match the search?), <strong>Quality</strong> (is it helpful?), and <strong>User Experience</strong> (is it fast and easy to use?).
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Simple version:</strong> Google shows the best, most helpful results first. Be helpful, be fast, be relevant.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* SEO Factors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border-2 border-primary-200"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Actually Matters for SEO</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">✅</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Good Content</h5>
                  <p className="text-gray-600 text-sm">Answer people's questions clearly and helpfully</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">⚡</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Fast Loading</h5>
                  <p className="text-gray-600 text-sm">People don't wait for slow websites</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">📱</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h5>
                  <p className="text-gray-600 text-sm">Most people search on phones</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">🔗</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Backlinks</h5>
                  <p className="text-gray-600 text-sm">Other sites linking to you = trust signal</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-purple-100 border-2 border-purple-300 rounded-xl px-6 py-4">
                <p className="text-lg font-semibold text-purple-900">
                  💡 Takeaway: SEO isn't magic—it's about being helpful, fast, and relevant. Google rewards sites that serve users well.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to explain technology in terms you understand. Let's talk about your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/try-it-yourself/" size="lg">
                Try IT Yourself
              </Button>
              <Button href="/contact/" size="lg">
                Get in Touch
              </Button>
              <Button href="/services/" variant="accent" size="lg">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

