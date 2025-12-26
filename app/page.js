import HeroSection from '@/components/home/HeroSection'
import TrustedBy from '@/components/home/TrustedBy'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProductsOverview from '@/components/home/ProductsOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ProcessFlow from '@/components/home/ProcessFlow'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'SparkLab - Enterprise IT Solutions & Software Development',
  description: 'Leading IT solutions provider delivering cutting-edge software development, cloud services, and enterprise solutions for businesses worldwide.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesOverview />
      <ProductsOverview />
      <WhyChooseUs />
      <ProcessFlow />
      <Testimonials />
      <CTASection />
    </>
  )
}

