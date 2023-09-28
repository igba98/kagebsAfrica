import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KAGEBS',
  description: 'Kagebs a safety equipment supply company, that help companies to have supply safety equipments for engineerinf,office and any official activities on daily bases , when supply from small ear bugs and large items and quality services daily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
