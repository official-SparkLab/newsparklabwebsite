import ProductsGrid from '@/components/products/ProductsGrid'
import SectionTitle from '@/components/common/SectionTitle'

export const metadata = {
  title: 'Our Products - SparkLab | Enterprise SaaS Solutions',
  description: 'Explore SparkLab\'s comprehensive suite of enterprise SaaS products. Discover cloud management, analytics, security, and business solutions designed for modern businesses.',
}

export default function Products() {
  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">Explore Our Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of enterprise software solutions to transform the way you work
          </p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Featured Products"
            subtitle="Our Solutions"
            center
            className="mb-12"
          />
          <ProductsGrid />
        </div>
      </section>
    </>
  )
}
