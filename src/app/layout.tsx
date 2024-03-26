import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import {
    Bell,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { UsermenuDropdown } from '@/components/usermenu-dropdown'
import { Navbar } from '@/components/navbar'

import SessionProvider from '@/context/auth-provider'
import ThemeProvider from '@/context/theme-provider'
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
                        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                            <div className="hidden border-r bg-muted/40 md:block">
                                <div className="flex h-full max-h-screen flex-col gap-2">
                                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                                        <Link
                                            href="/"
                                            className="flex items-center gap-2 font-semibold"
                                        >
                                            <Package2 className="h-6 w-6" />
                                            <span className="">Acme Inc</span>
                                        </Link>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="ml-auto h-8 w-8"
                                        >
                                            <Bell className="h-4 w-4" />
                                            <span className="sr-only">Toggle notifications</span>
                                        </Button>
                                    </div>
                                    <div className="flex-1">
                                        <Navbar type="desktop" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="shrink-0 md:hidden"
                                            >
                                                <Menu className="h-5 w-5" />
                                                <span className="sr-only">
                                                    Toggle navigation menu
                                                </span>
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent side="left" className="flex flex-col">
                                            <Navbar type="mobile" />
                                        </SheetContent>
                                    </Sheet>
                                    <div className="w-full flex-1">
                                        <form>
                                            <div className="relative">
                                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    type="search"
                                                    placeholder="Search products..."
                                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <UsermenuDropdown />
                                </header>
                                {children}
                            </div>
                        </div>
                    </SessionProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
