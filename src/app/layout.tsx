import './globals.css'
import type { Metadata } from 'next'
import { Header } from '../../components/header'
import { Theme } from '../../components/theme';
import { Footer } from '../../components/footer';

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
          <Header />
          <div style={{minHeight: '100vh'}}>{children}</div>
          <Footer />
      </Theme>
    </html>
  )
}
