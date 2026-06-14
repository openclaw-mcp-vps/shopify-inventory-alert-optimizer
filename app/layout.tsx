import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Inventory Alert Optimizer — Smart Stockout Prevention',
  description: 'Analyzes Shopify sales velocity and sends intelligent low-stock alerts before you run out, with supplier reorder suggestions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ed04dda6-d9bf-421d-97d5-0d9b6e02d353"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
