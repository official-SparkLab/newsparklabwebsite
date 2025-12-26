'use client'

import { motion } from 'framer-motion'

export default function Leadership() {
  const leaders = [
    {
      name: 'John Anderson',
      role: 'Chief Executive Officer',
      bio: '20+ years of experience in technology leadership and business strategy.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Chief Technology Officer',
      bio: 'Expert in cloud architecture and enterprise software solutions.',
    },
    {
      name: 'David Chen',
      role: 'Chief Operating Officer',
      bio: 'Specialized in operational excellence and global delivery.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering',
      bio: 'Passionate about innovation and building high-performing teams.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600">
            Meet the experts driving our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-2xl">
                  {leader.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-primary-600 font-semibold mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

