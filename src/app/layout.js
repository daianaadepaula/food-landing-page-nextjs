import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food Landing Page',
  description: 'Landing Page using Next Js',
	author: 'Daiana de Paula',
	keywords: 'Next Js, Tailwindcss and Tailblocks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
				<Navbar />
				{children}
			</body>
    </html>
  )
}
