import CompanyOverview from '@/components/about/CompanyOverview'
import VisionMission from '@/components/about/VisionMission'
import Leadership from '@/components/about/Leadership'

export const metadata = {
  title: 'About Us - SparkLab | Leading IT Solutions Provider',
  description: 'Learn about SparkLab, a leading global IT solutions provider with 500+ experts, delivering innovative software development and enterprise solutions worldwide.',
}

export default function About() {
  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">About SparkLab</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses worldwide with innovative IT solutions
          </p>
        </div>
      </div>
      <CompanyOverview />
      <VisionMission />
      <Leadership />
    </>
  )
}

