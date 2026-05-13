import type { Metadata } from 'next'
import { Orbitron, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ui/ClientProviders'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron-var',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zanão Print | Comunicação Visual & Reformas',
  description:
    'Especialistas em fachadas em ACM, letra caixa, luminosos, sinalizações e toldos. +10 anos de experiência em comunicação visual em São Paulo.',
  keywords: [
    'comunicação visual',
    'fachada ACM',
    'letra caixa',
    'luminosos',
    'sinalizações',
    'toldos',
    'São Paulo',
    'Zanão Print',
  ],
  authors: [{ name: 'Zanão Print' }],
  openGraph: {
    title: 'Zanão Print | Comunicação Visual',
    description: 'Transformamos marcas em referência visual.',
    url: 'https://zanaoprint.com.br',
    siteName: 'Zanão Print',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanão Print | Comunicação Visual',
    description: 'Transformamos marcas em referência visual.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-text-primary antialiased">
        <ClientProviders />
        {children}
      </body>
    </html>
  )
}
