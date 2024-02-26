import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Montserrat } from 'next/font/google'
import './globals.css'

import SessionProvider from '@/context/auth-provider'
import ThemeProvider from '@/context/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cn } from '@/utils/cn'

const monte = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'instanet',
    description: 'network for photo-sharing'
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const session = await getServerSession()

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(monte.className, 'flex flex-col min-h-[100vh]')}>
                <ThemeProvider>
                    <SessionProvider session={session}>
                        <Header />
                        <main className="max-w-[70rem] w-full mx-auto grid flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </SessionProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
