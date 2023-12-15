import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eng4',
  description: 'Eng4 là một trang website về trung tâm tiếng Anh.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} >
        <ThemeProvider attribute="class" defaultTheme="system">
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html >
  )
}
