import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../../components/header'
import { Theme } from '../../components/theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to My Portfolio',
  description: 'Let me show you what i can do',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Theme>
        <body className={inter.className}>
            <Header />
            {children}
        </body>
      </Theme>
    </html>
  )
}
