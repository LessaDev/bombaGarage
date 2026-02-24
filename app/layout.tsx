import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Bomba Garage Oficina Automotiva | Socorro 24h',
  description:
    'Oficina Bomba Garage - Especialista em mecânica geral, manutenção preventiva e corretiva, e socorro 24 horas. Sua confiança é nossa prioridade.',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
