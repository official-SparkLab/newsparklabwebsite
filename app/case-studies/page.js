'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      client: 'EcoRetail - E-commerce Platform',
      industry: 'Retail',
      problem: {
        title: 'The Problem',
        description: 'EcoRetail was losing 60% of customers at checkout. Their website took 8 seconds to load, and mobile users couldn\'t complete purchases. Sales were dropping 15% month-over-month.',
        metrics: ['8 second load time', '60% cart abandonment', '15% monthly sales decline'],
      },
      wrongApproach: {
        title: 'What Others Did Wrong',
        description: 'Competitors tried quick fixes: adding more servers, compressing images, or switching to cheaper hosting. These band-aid solutions didn\'t address the root cause—poor code architecture and database design.',
        examples: [
          'Threw more servers at the problem (cost doubled, speed improved only 10%)',
          'Compressed images without optimizing code (still slow)',
          'Switched to cheaper hosting (downtime increased)',
        ],
      },
      thinking: {
        title: 'Our Thinking Process',
        steps: [
          {
            step: '1. Root Cause Analysis',
            description: 'We analyzed the entire user journey. Found that the database was querying 50+ tables on every page load. The real issue wasn\'t hosting—it was inefficient code.',
          },
          {
            step: '2. Architecture Decision',
            description: 'Instead of patching, we redesigned the data structure. Created a caching layer and optimized database queries. This required upfront investment but solved the problem permanently.',
          },
          {
            step: '3. Technology Choice',
            description: 'We chose Next.js for server-side rendering (faster initial load) and Redis for caching (instant repeat visits). Not the cheapest option, but the right one for scale.',
          },
          {
            step: '4. Mobile-First Approach',
            description: 'Redesigned checkout flow specifically for mobile. Reduced steps from 5 to 2, added one-click payment options. Mobile wasn\'t an afterthought—it was the priority.',
          },
        ],
      },
      technology: {
        title: 'Technology Choice & Reasoning',
        choices: [
          {
            tech: 'Next.js',
            reason: 'Server-side rendering cuts load time by 70%. Pre-renders pages so users see content instantly.',
          },
          {
            tech: 'Redis Caching',
            reason: 'Stores frequently accessed data in memory. Reduces database queries from 50+ to 2-3 per page.',
          },
          {
            tech: 'Stripe Payment Gateway',
            reason: 'One-click checkout. PCI-compliant. Handles 99.9% uptime. Worth the 2.9% fee for reliability.',
          },
          {
            tech: 'PostgreSQL Database',
            reason: 'Better than MySQL for complex queries. Handles concurrent users without slowing down.',
          },
        ],
      },
      result: {
        title: 'Final Results',
        metrics: [
          { label: 'Load Time', before: '8 seconds', after: '1.2 seconds', improvement: '85% faster' },
          { label: 'Cart Abandonment', before: '60%', after: '18%', improvement: '70% reduction' },
          { label: 'Mobile Conversions', before: '12%', after: '38%', improvement: '217% increase' },
          { label: 'Monthly Revenue', before: 'Declining 15%', after: 'Growing 25%', improvement: '40% swing' },
        ],
        timeline: '3 months to full implementation',
      },
      learnings: {
        title: 'What YOU Can Learn From This',
        points: [
          'Quick fixes don\'t solve architectural problems. Invest in proper foundation.',
          'Mobile isn\'t optional—it\'s where 70% of e-commerce happens. Design mobile-first.',
          'Caching is crucial for scale. A $50/month Redis instance can save thousands in server costs.',
          'Technology choice matters. Next.js costs more upfront but saves money long-term through better performance.',
          'Measure everything. We tracked load time, abandonment, and revenue to prove ROI.',
        ],
      },
    },
    {
      id: 2,
      client: 'HealthCare Plus - Patient Portal',
      industry: 'Healthcare',
      problem: {
        title: 'The Problem',
        description: 'HealthCare Plus needed a patient portal but had strict HIPAA compliance requirements. Previous attempts failed because developers didn\'t understand healthcare regulations. Patients couldn\'t access records, and staff spent hours on phone calls.',
        metrics: ['0% patient portal adoption', '40 hours/week on phone support', 'HIPAA compliance failures'],
      },
      wrongApproach: {
        title: 'What Others Did Wrong',
        description: 'Other agencies built generic portals without understanding healthcare workflows. They focused on features, not compliance. Result: beautiful apps that couldn\'t be used legally.',
        examples: [
          'Built without HIPAA compliance (had to rebuild from scratch)',
          'Ignored healthcare workflows (doctors couldn\'t use it)',
          'Used generic authentication (failed security audits)',
        ],
      },
      thinking: {
        title: 'Our Thinking Process',
        steps: [
          {
            step: '1. Compliance First',
            description: 'We started with HIPAA requirements, not features. Every decision was filtered through: "Does this meet compliance?" If no, we didn\'t build it.',
          },
          {
            step: '2. User Research',
            description: 'Spent 2 weeks observing doctors, nurses, and patients. Learned that doctors need quick access, patients need simplicity, and admins need audit trails.',
          },
          {
            step: '3. Security Architecture',
            description: 'Built encryption at every layer: data at rest, data in transit, and data in use. Used role-based access so patients only see their data.',
          },
          {
            step: '4. Workflow Integration',
            description: 'Integrated with existing EMR system. Doctors didn\'t need to learn new software—it worked with their current tools.',
          },
        ],
      },
      technology: {
        title: 'Technology Choice & Reasoning',
        choices: [
          {
            tech: 'AWS HIPAA-Compliant Infrastructure',
            reason: 'AWS has BAA (Business Associate Agreement) for HIPAA. We don\'t have to build compliance—AWS provides it.',
          },
          {
            tech: 'End-to-End Encryption',
            reason: 'All data encrypted with AES-256. Even if someone intercepts data, they can\'t read it without keys.',
          },
          {
            tech: 'OAuth 2.0 Authentication',
            reason: 'Industry-standard security. Two-factor authentication required. Meets HIPAA access control requirements.',
          },
          {
            tech: 'Audit Logging System',
            reason: 'Every access is logged. HIPAA requires audit trails. We built logging into the architecture, not as an afterthought.',
          },
        ],
      },
      result: {
        title: 'Final Results',
        metrics: [
          { label: 'Patient Adoption', before: '0%', after: '68%', improvement: '68% of patients using portal' },
          { label: 'Phone Support Hours', before: '40 hours/week', after: '12 hours/week', improvement: '70% reduction' },
          { label: 'HIPAA Compliance', before: 'Failed audits', after: '100% compliant', improvement: 'Zero violations' },
          { label: 'Doctor Satisfaction', before: 'Low', after: '92% satisfied', improvement: 'Integrated workflow' },
        ],
        timeline: '4 months including compliance testing',
      },
      learnings: {
        title: 'What YOU Can Learn From This',
        points: [
          'Compliance isn\'t optional in regulated industries. Build it in from day one, not as an add-on.',
          'User research saves money. Understanding workflows before coding prevents expensive rewrites.',
          'Security architecture matters more than features. A secure simple app beats an insecure complex one.',
          'Cloud providers offer compliance frameworks. Use AWS, Azure, or GCP for healthcare—don\'t build your own.',
          'Integration beats replacement. Working with existing systems is cheaper than replacing them.',
        ],
      },
    },
    {
      id: 3,
      client: 'FinanceFlow - Banking App',
      industry: 'Finance',
      problem: {
        title: 'The Problem',
        description: 'FinanceFlow wanted to launch a mobile banking app but had zero mobile development experience. Their web app was desktop-only, and competitors were stealing customers with better mobile experiences. They needed to move fast but couldn\'t afford mistakes.',
        metrics: ['0% mobile users', '30% customer loss to competitors', '6-month development timeline needed'],
      },
      wrongApproach: {
        title: 'What Others Did Wrong',
        description: 'Competitors built separate iOS and Android apps. This meant two codebases, two teams, and double the bugs. Maintenance costs were high, and features took twice as long to ship.',
        examples: [
          'Built separate iOS and Android apps (2x development cost)',
          'Hired two separate teams (communication overhead)',
          'Features took 6 months to reach both platforms (slow iteration)',
        ],
      },
      thinking: {
        title: 'Our Thinking Process',
        steps: [
          {
            step: '1. Platform Strategy',
            description: 'We chose React Native—one codebase for iOS and Android. This cut development time in half and reduced maintenance costs by 60%.',
          },
          {
            step: '2. MVP Approach',
            description: 'Launched with core features: balance check, transfers, and bill pay. Didn\'t build everything—just what 80% of users need. Launched in 3 months, not 6.',
          },
          {
            step: '3. Security First',
            description: 'Banking apps need bank-level security. We used biometric authentication, encrypted storage, and secure API communication. Security wasn\'t negotiable.',
          },
          {
            step: '4. Performance Optimization',
            description: 'Mobile users expect instant responses. We optimized images, lazy-loaded content, and cached frequently accessed data. App loads in under 2 seconds.',
          },
        ],
      },
      technology: {
        title: 'Technology Choice & Reasoning',
        choices: [
          {
            tech: 'React Native',
            reason: 'One codebase for iOS and Android. 80% code sharing means faster development and lower costs. Native performance.',
          },
          {
            tech: 'Biometric Authentication',
            reason: 'Fingerprint and Face ID. More secure than passwords, faster for users. Required for banking apps.',
          },
          {
            tech: 'Redux for State Management',
            reason: 'Banking apps have complex state (accounts, transactions, balances). Redux keeps it organized and predictable.',
          },
          {
            tech: 'Firebase for Push Notifications',
            reason: 'Real-time transaction alerts. Users need instant notifications for security. Firebase handles this reliably.',
          },
        ],
      },
      result: {
        title: 'Final Results',
        metrics: [
          { label: 'Development Time', before: '6 months (estimated)', after: '3 months', improvement: '50% faster' },
          { label: 'Mobile Users', before: '0%', after: '45% of customers', improvement: '45% adoption in 6 months' },
          { label: 'Customer Retention', before: 'Losing 30%', after: 'Retaining 95%', improvement: '65% improvement' },
          { label: 'App Store Rating', before: 'N/A', after: '4.7/5 stars', improvement: 'High user satisfaction' },
        ],
        timeline: '3 months to launch, 6 months to 45% adoption',
      },
      learnings: {
        title: 'What YOU Can Learn From This',
        points: [
          'Cross-platform frameworks save time and money. React Native, Flutter, or Xamarin—choose one, not two separate apps.',
          'MVP approach works. Launch with core features, add more based on user feedback. Don\'t build everything upfront.',
          'Security is non-negotiable in finance. Biometric auth, encryption, and secure APIs are requirements, not nice-to-haves.',
          'Performance matters on mobile. Users abandon slow apps. Optimize images, cache data, lazy-load content.',
          'One codebase is easier to maintain. Bug fixes and features reach all platforms simultaneously.',
        ],
      },
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
            Case Studies
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real projects, real problems, real solutions. Learn from our thinking process, not just our results.
          </motion.p>
        </div>
      </div>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-24 last:mb-0"
            >
              {/* Case Study Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                  <span className="text-gray-400">Case Study #{study.id}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {study.client}
                </h2>
              </div>

              {/* Problem Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-red-700 mb-3">{study.problem.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{study.problem.description}</p>
                <div className="flex flex-wrap gap-3">
                  {study.problem.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Wrong Approach Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-yellow-700 mb-3">{study.wrongApproach.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{study.wrongApproach.description}</p>
                <ul className="space-y-2">
                  {study.wrongApproach.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-yellow-600 mt-1">✗</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Thinking Process Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-4">{study.thinking.title}</h3>
                <div className="space-y-6">
                  {study.thinking.steps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white rounded-lg p-5 border border-blue-200"
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{step.step}</h4>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technology Choice Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-purple-700 mb-4">{study.technology.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.technology.choices.map((choice, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-purple-200"
                    >
                      <h4 className="font-bold text-gray-900 mb-2">{choice.tech}</h4>
                      <p className="text-sm text-gray-700">{choice.reason}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-green-700 mb-4">{study.result.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {study.result.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-lg p-5 border border-green-200"
                    >
                      <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-red-600 line-through text-sm">{metric.before}</span>
                        <span className="text-2xl font-bold text-green-600">→</span>
                        <span className="text-green-600 font-bold">{metric.after}</span>
                      </div>
                      <div className="text-sm font-semibold text-green-700">{metric.improvement}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 italic">
                  Timeline: {study.result.timeline}
                </div>
              </motion.div>

              {/* Learnings Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-4">{study.learnings.title}</h3>
                <ul className="space-y-3">
                  {study.learnings.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-800"
                    >
                      <span className="text-primary-600 mt-1 font-bold">💡</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Solve Your Business Problem?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every project starts with understanding your problem. Let's discuss your unique challenges and find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact/" size="lg">
                Start Your Project
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

