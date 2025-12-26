'use client'

import { motion } from 'framer-motion'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: '📍',
      title: 'Office Locations',
      details: [
        'Headquarters: 123 Tech Boulevard, San Francisco, CA 94105',
        'Development Center: 456 Innovation Drive, Austin, TX 78701',
        'Global Office: 789 Business Park, London, UK',
      ],
    },
    {
      icon: '📧',
      title: 'Email',
      details: [
        'General Inquiries: info@sparklab.com',
        'Sales: sales@sparklab.com',
        'Support: support@sparklab.com',
      ],
    },
    {
      icon: '📞',
      title: 'Phone',
      details: [
        'US: +1 (555) 123-4567',
        'UK: +44 20 1234 5678',
        '24/7 Support: +1 (555) 123-HELP',
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {contactDetails.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <div className="flex items-start">
            <div className="text-3xl mr-4">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

