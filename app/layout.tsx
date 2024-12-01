import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Whois - Next Generation Domain Lookup',
  description: 'Whois is a next generation domain lookup tool created by Mayo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
