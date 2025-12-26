import ContactFormUI from '@/components/contact/ContactFormUI'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata = {
  title: 'Contact Us - SparkLab | Get in Touch',
  description: 'Contact SparkLab for IT solutions, software development, and enterprise services. Reach out via email, phone, or our contact form.',
}

export default function Contact() {
  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">Get in Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactFormUI />
          </div>
        </div>
      </section>
    </>
  )
}

