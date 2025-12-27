import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollProgress from '@/components/common/ScrollProgress'

export const metadata = {
  title: 'SparkLab - Enterprise IT Solutions & Software Development',
  description: 'Leading IT solutions provider delivering cutting-edge software development, cloud services, and enterprise solutions for businesses worldwide.',
  keywords: 'IT solutions, software development, cloud services, enterprise solutions, web development, mobile apps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

