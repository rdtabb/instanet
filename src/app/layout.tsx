import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const monte = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Meets network',
    description: 'Share your photos'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={monte.className}>
                <main className="w-[50rem] mx-auto">{children}</main>
            </body>
        </html>
    )
}
