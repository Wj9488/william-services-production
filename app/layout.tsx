import './globals.css'
import type { Metadata } from 'next'
import localFont from "next/font/local"

const degularFont = localFont({ src: "./Fonts/Degular-Regular.woff"}) 

export const metadata: Metadata = {
  title: 'william.services',
  description: 'Bilingual English & French creative front end developer studying business management at Exeter University. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${degularFont.className}`}>{children}</body>
    </html>
  )
}
