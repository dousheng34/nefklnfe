import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'MINDFLOW - AI Automation Platform',
    template: '%s | MINDFLOW',
  },
  description: 'MINDFLOW: AI-powered automation platform that reduces manual work by 80%. Automate complex workflows and scale your business effortlessly.',
  keywords: ['AI automation', 'workflow automation', 'business automation', 'SaaS', 'AI platform'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindflow.ai',
    siteName: 'MINDFLOW',
    title: 'MINDFLOW - AI Automation Platform',
    description: 'AI-powered automation platform that reduces manual work by 80%.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MINDFLOW - AI Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MINDFLOW - AI Automation Platform',
    description: 'AI-powered automation platform that reduces manual work by 80%.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
