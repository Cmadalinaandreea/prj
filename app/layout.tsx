import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarC from './components/NavbarC';
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home - e-learning',
  description: 'Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarC/>

        {children}
      <Footer />  
      </body>
      
    </html>
  )
}
