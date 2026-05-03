import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Blackstones - Dịch Vụ Tang Lễ Trọn Gói',
  description: 'Dịch vụ tang lễ trọn gói chuyên nghiệp tại TP.HCM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="pt-[88px] min-h-screen bg-zinc-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}