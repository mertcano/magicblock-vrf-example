import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Character Generator',
  description: 'Demo using MagicBlock Verifiable Randomness',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-['Helvetica_Neue'] antialiased">
        {children}
      </body>
    </html>
  )
}
