import ServicesList from '@/components/services/ServicesList'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export const metadata = {
  title: 'Our Services - SparkLab | Software Development & IT Solutions',
  description: 'Comprehensive IT services including software development, web development, mobile apps, cloud solutions, AI & automation, and enterprise solutions.',
}

export default function Services() {
  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">Our Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions to transform your business
          </p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ServicesList />
          <div className="text-center mt-12">
            <Button href="/contact/" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

