import { notFound } from 'next/navigation'
import { getProductBySlug, getAllProducts } from '@/data/products'
import ProductDetail from '@/components/products/ProductDetail'

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found - SparkLab',
    }
  }

  return {
    title: `${product.name} - SparkLab | ${product.category}`,
    description: product.longDescription || product.description,
  }
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}

