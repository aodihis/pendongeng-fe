import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sang Pendongeng',
  description: 'Selamat datang di Sang Pendongeng: Aplikasi untuk Menghadiran Dunia DOngeng ke Imajinasi Anak-anak.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body suppressHydrationWarning={true} >{children}</body>
    </html>
  )
}
