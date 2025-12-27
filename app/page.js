import HeroSection from '@/components/home/HeroSection'
import TrustedBy from '@/components/home/TrustedBy'
import Counters from '@/components/home/Counters'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProductsOverview from '@/components/home/ProductsOverview'
import AboutSparklab from '@/components/about/AboutSparklab'
import CaseStudies from '@/components/home/CaseStudies'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ProcessFlow from '@/components/home/ProcessFlow'
import Testimonials from '@/components/home/Testimonials'
import Blogs from '@/components/home/Blogs'
import CTASection from '@/components/home/CTASection'
import ProblemSolutionCards from '@/components/home/ProblemSolutionCards'
import TechByteOfTheDay from '@/components/common/TechByteOfTheDay'

export const metadata = {
  title: 'SparkLab - Enterprise IT Solutions & Software Development',
  description: 'Leading IT solutions provider delivering cutting-edge software development, cloud services, and enterprise solutions for businesses worldwide.',
}

export default function Home() {
  return (
    <>
      {/* 1. Hero Section - First Impression & Value Proposition */}
      <HeroSection />
      
      {/* 2. Trusted By - Immediate Social Proof (Logos) */}
      <TrustedBy />
      
      {/* 3. Problem Solution Cards - Show Value & Learning */}
      <ProblemSolutionCards />
      
      {/* 4. Services Overview - What We Offer */}
      <ServicesOverview />
      
      {/* 5. Products Overview - Our Products/Solutions */}
      <ProductsOverview />
      
      {/* 6. Why Choose Us - Competitive Advantages */}
      <WhyChooseUs />
      
      {/* 7. Process Flow - How We Work */}
      <ProcessFlow />
      
      {/* 8. Counters - Proof Through Numbers */}
      <Counters />
      
      {/* 9. About SparkLab - Who We Are */}
      <AboutSparklab />
      
      {/* 10. Case Studies - Success Stories & Social Proof */}
      <CaseStudies />
      
      {/* 11. Testimonials - Customer Voices */}
      <Testimonials />
      
      {/* 12. Tech Byte of the Day - Daily Engagement */}
      <TechByteOfTheDay />
      
      {/* 13. Blogs - Content Marketing & Thought Leadership */}
      <Blogs />
      
      {/* 14. CTA Section - Final Conversion Point */}
      <CTASection />
    </>
  )
}

