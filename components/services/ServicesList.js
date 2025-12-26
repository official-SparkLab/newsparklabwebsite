'use client'

import ServiceCard from './ServiceCard'

export default function ServicesList() {
  const services = [
    {
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs. We build scalable, maintainable applications using modern technologies and best practices.',
      icon: '💻',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'API development & integration',
        'Microservices architecture',
        'Code quality & best practices',
      ],
    },
    {
      title: 'Web Development',
      description:
        'Responsive, high-performance web applications that deliver exceptional user experiences across all devices and platforms.',
      icon: '🌐',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'Content Management Systems',
        'Performance optimization',
      ],
    },
    {
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android, built with the latest frameworks and technologies.',
      icon: '📱',
      features: [
        'iOS & Android native apps',
        'React Native development',
        'Flutter applications',
        'App store optimization',
        'Mobile UI/UX design',
      ],
    },
    {
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud services including migration, infrastructure setup, and DevOps practices for scalable operations.',
      icon: '☁️',
      features: [
        'Cloud migration & strategy',
        'AWS, Azure, GCP expertise',
        'DevOps & CI/CD pipelines',
        'Container orchestration',
        'Cloud security & compliance',
      ],
    },
    {
      title: 'AI & Automation',
      description:
        'Intelligent automation solutions and AI-powered applications to streamline operations and drive innovation.',
      icon: '🤖',
      features: [
        'Machine Learning solutions',
        'Process automation',
        'Chatbots & virtual assistants',
        'Data analytics & insights',
        'AI strategy consulting',
      ],
    },
    {
      title: 'Enterprise Solutions',
      description:
        'Comprehensive enterprise software solutions and system integrations to streamline business operations.',
      icon: '🏢',
      features: [
        'ERP & CRM integration',
        'Enterprise architecture',
        'System integration',
        'Digital transformation',
        'Enterprise security',
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  )
}

