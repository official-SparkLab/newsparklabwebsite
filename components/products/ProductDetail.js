'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/common/Button'

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: `What is ${product.name}?`,
      answer: `${product.longDescription || product.description} It provides comprehensive features to help businesses streamline their operations and achieve better results.`,
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply sign up for a free trial, no credit card required. You can explore all features for 14 days and upgrade to a paid plan when you\'re ready.',
    },
    {
      question: 'What integrations are available?',
      answer: `${product.name} integrates with ${product.integrations.slice(0, 3).join(', ')}, and many more popular business tools. Check our integrations page for the complete list.`,
    },
    {
      question: 'Can I customize it for my business?',
      answer: 'Yes! Our platform offers extensive customization options. You can configure workflows, customize dashboards, set up custom fields, and tailor the solution to match your specific business needs.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including email support, live chat, knowledge base, video tutorials, and dedicated account managers for enterprise customers. Response times vary by plan.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security measures including end-to-end encryption, regular security audits, SOC 2 compliance, and data backup. Your data is stored securely and never shared with third parties.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your billing period.',
    },
    {
      question: 'Do you offer training?',
      answer: 'Yes! We provide comprehensive onboarding, video tutorials, webinars, and documentation. Enterprise customers also receive dedicated training sessions with our team.',
    },
  ]

  const screenshots = [
    { id: 1, title: 'Dashboard Overview', description: 'Main dashboard with key metrics' },
    { id: 2, title: 'Analytics View', description: 'Detailed analytics and reporting' },
    { id: 3, title: 'Settings Panel', description: 'Configuration and settings' },
    { id: 4, title: 'User Management', description: 'Team and user management' },
  ]

  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom">
          <Link
            href="/products/"
            className="inline-flex items-center text-primary-700 hover:text-accent-600 mb-6 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-700 font-semibold text-sm uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {product.longDescription || product.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Button href="/contact/" size="lg">
                  Get Started Free
                </Button>
                <Button
                  href="#live-demo"
                  variant="accent"
                  size="lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Live Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center group">
                  <svg
                    className="w-5 h-5 text-primary-600 mr-2 group-hover:text-accent-600 transition-colors"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Free Trial Available
                </div>
                <div className="flex items-center group">
                  <svg
                    className="w-5 h-5 text-primary-600 mr-2 group-hover:text-accent-600 transition-colors"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  No Credit Card Required
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white text-2xl">{product.icon}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{product.name}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-16 bg-gray-50 rounded border border-gray-200"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white" id="screenshots">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Screenshots
            </h2>
            <p className="text-lg text-gray-600">
              Explore the interface and features of {product.name}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-xl p-2 mb-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-3xl">{product.icon}</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {screenshots[selectedImage].title}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {screenshots[selectedImage].description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.id}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-video rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 bg-gray-50 hover:border-accent-300'
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl">{product.icon}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                <ul className="space-y-3 mb-6">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5 group-hover:text-accent-600 transition-colors"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact/" size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50" id="video-demo">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Watch Product Demo
            </h2>
            <p className="text-lg text-gray-600">
              See {product.name} in action with our comprehensive video walkthrough
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg group"
                >
                  <svg
                    className="w-10 h-10 text-primary-600 ml-1 group-hover:text-accent-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {product.name} - Complete Walkthrough
                </h3>
                <p className="text-white/80 text-sm">
                  Learn how to get started and explore all features in 10 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Product Demo Video</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg">Video Demo Placeholder</p>
                <p className="text-sm text-gray-400 mt-2">
                  Replace with actual video embed (YouTube, Vimeo, etc.)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="section-padding bg-white" id="live-demo">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience {product.name} Live
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Get hands-on experience with our interactive live demo. Explore all features
                and see how it can transform your workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact/"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-gray-50 border-2 border-white/30"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Launch Live Demo
                </Button>
                <Button
                  href="/contact/"
                  variant="accent"
                  size="lg"
                >
                  Schedule Demo Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">All Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 group hover:border-accent-300 transition-colors"
                    >
                      <span className="text-primary-600 font-bold text-lg flex-shrink-0 group-hover:text-accent-600 transition-colors">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
                <div className="space-y-4">
                  {product.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="p-4 border-l-4 border-primary-500 hover:border-accent-500 bg-white rounded-r-lg shadow-sm transition-colors"
                    >
                      <p className="text-gray-700 font-medium">{useCase}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Integrations</h2>
                <div className="flex flex-wrap gap-3">
                  {product.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 text-primary-700 rounded-lg font-medium text-sm hover:border-accent-300 hover:text-accent-700 transition-colors"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Details</h2>
                <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Architecture & Infrastructure</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {product.name} is built on a modern, scalable microservices architecture that ensures high availability and performance. The platform leverages containerization technology with Kubernetes orchestration, enabling seamless horizontal scaling and automatic load balancing. Our infrastructure is hosted on multiple cloud providers, ensuring 99.9% uptime SLA and global redundancy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance & Scalability</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The system is designed to handle millions of transactions per second with sub-millisecond response times. Our distributed architecture allows for automatic scaling based on demand, ensuring optimal performance during peak usage. The platform supports horizontal scaling across multiple data centers, providing unlimited scalability for enterprise deployments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Compliance</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Security is built into every layer of {product.name}. We implement end-to-end encryption for data in transit and at rest, multi-factor authentication, role-based access control, and comprehensive audit logging. The platform is compliant with SOC 2 Type II, GDPR, HIPAA, and ISO 27001 standards, ensuring your data meets the highest security and compliance requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Management</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our advanced data management system provides automated backups, point-in-time recovery, and disaster recovery capabilities. Data is replicated across multiple geographic regions for redundancy. The platform supports both SQL and NoSQL databases, with intelligent data partitioning and indexing for optimal query performance.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
                <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Technologies</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {product.name} features a modern, responsive user interface built with React.js and Next.js, providing a seamless user experience across all devices. The frontend utilizes TypeScript for type safety, Tailwind CSS for styling, and Redux for state management. Real-time updates are powered by WebSocket connections, ensuring instant data synchronization across all user sessions.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {[
                        { name: 'React', icon: '⚛️', color: 'bg-blue-50 border-blue-200' },
                        { name: 'Next.js', icon: '▲', color: 'bg-gray-50 border-gray-200' },
                        { name: 'TypeScript', icon: '📘', color: 'bg-blue-50 border-blue-200' },
                        { name: 'Tailwind CSS', icon: '💨', color: 'bg-cyan-50 border-cyan-200' },
                        { name: 'Redux', icon: '🔄', color: 'bg-purple-50 border-purple-200' },
                      ].map((tech, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${tech.color}`}
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="font-medium text-gray-700 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Technologies</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our backend is built on Node.js and Express.js, with microservices architecture using Docker containers. We use PostgreSQL for relational data and MongoDB for document storage, with Redis for caching and session management. The API layer follows RESTful principles and GraphQL for flexible data querying, ensuring efficient data retrieval and manipulation.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {[
                        { name: 'Node.js', icon: '🟢', color: 'bg-green-50 border-green-200' },
                        { name: 'Express.js', icon: '🚂', color: 'bg-gray-50 border-gray-200' },
                        { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-50 border-blue-200' },
                        { name: 'MongoDB', icon: '🍃', color: 'bg-green-50 border-green-200' },
                        { name: 'Redis', icon: '🔴', color: 'bg-red-50 border-red-200' },
                        { name: 'GraphQL', icon: '🔷', color: 'bg-pink-50 border-pink-200' },
                      ].map((tech, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${tech.color}`}
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="font-medium text-gray-700 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud & DevOps</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The platform is deployed on AWS, Azure, and Google Cloud Platform, leveraging their managed services for databases, message queues, and storage. We use Kubernetes for container orchestration, Terraform for infrastructure as code, and Jenkins for CI/CD pipelines. Monitoring and logging are handled through Prometheus, Grafana, and ELK stack for comprehensive observability.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {[
                        { name: 'AWS', icon: '☁️', color: 'bg-orange-50 border-orange-200' },
                        { name: 'Azure', icon: '🔵', color: 'bg-blue-50 border-blue-200' },
                        { name: 'GCP', icon: '🌐', color: 'bg-blue-50 border-blue-200' },
                        { name: 'Kubernetes', icon: '⚓', color: 'bg-blue-50 border-blue-200' },
                        { name: 'Docker', icon: '🐳', color: 'bg-blue-50 border-blue-200' },
                        { name: 'Terraform', icon: '🏗️', color: 'bg-purple-50 border-purple-200' },
                        { name: 'Jenkins', icon: '🤖', color: 'bg-blue-50 border-blue-200' },
                      ].map((tech, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${tech.color}`}
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="font-medium text-gray-700 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration & APIs</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {product.name} provides comprehensive REST APIs and webhooks for seamless integration with third-party systems. Our API gateway handles authentication, rate limiting, and request routing. We support OAuth 2.0, SAML, and API key authentication methods. The platform includes pre-built connectors for popular business tools and supports custom integrations through our developer portal.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {[
                        { name: 'REST API', icon: '🔌', color: 'bg-green-50 border-green-200' },
                        { name: 'OAuth 2.0', icon: '🔐', color: 'bg-blue-50 border-blue-200' },
                        { name: 'SAML', icon: '🛡️', color: 'bg-indigo-50 border-indigo-200' },
                        { name: 'Webhooks', icon: '🪝', color: 'bg-purple-50 border-purple-200' },
                        { name: 'GraphQL API', icon: '🔷', color: 'bg-pink-50 border-pink-200' },
                      ].map((tech, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${tech.color}`}
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="font-medium text-gray-700 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg sticky top-24 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="text-sm text-gray-600 mb-2">Starter</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {product.pricing.starter.price}
                      <span className="text-lg font-normal text-gray-600">
                        {product.pricing.starter.period}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{product.pricing.starter.users}</div>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <div className="text-sm text-gray-600 mb-2">Professional</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {product.pricing.professional.price}
                      <span className="text-lg font-normal text-gray-600">
                        {product.pricing.professional.period}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.pricing.professional.users}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Enterprise</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {product.pricing.enterprise.price}
                      <span className="text-lg font-normal text-gray-600">
                        {product.pricing.enterprise.period}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.pricing.enterprise.users}
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <Button href="/contact/" size="lg" className="w-full">
                    Get Started Free
                  </Button>
                  <Button href="/contact/" variant="accent" size="lg" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50" id="faq">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about {product.name}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-primary-700 transition-colors">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 flex-shrink-0 transition-all duration-300 ${
                        openFAQ === index 
                          ? 'rotate-180 text-accent-600' 
                          : 'text-primary-600 group-hover:text-accent-600'
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed mt-4">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Please reach out to our friendly team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact/" size="lg">
                    Contact Support
                  </Button>
                  <Button href="/contact/" variant="accent" size="lg">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
