'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ShoppingCart, Package, Users, LineChart, Package2 } from 'lucide-react'

interface NavbarProps {
    type: 'desktop' | 'mobile'
}

export const Navbar = ({ type }: NavbarProps): JSX.Element => {
    const pathname = usePathname()

    if (type === 'desktop') {
        return (
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                    href="/"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname === '/' ? 'text-primary bg-muted' : 'text-muted-foreground'} text-muted-foreground transition-all hover:text-primary`}
                >
                    <Home className="h-4 w-4" />
                    Feed
                </Link>
                <Link
                    href="/create-post"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname === '/create-post' ? 'text-primary bg-muted' : 'text-muted-foreground'}  transition-all hover:text-primary`}
                >
                    <ShoppingCart className="h-4 w-4" />
                    Create post
                </Link>
                <Link
                    href="#"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                >
                    <Package className="h-4 w-4" />
                    Products{' '}
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <Users className="h-4 w-4" />
                    Customers
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <LineChart className="h-4 w-4" />
                    Analytics
                </Link>
            </nav>
        )
    }

    return (
        <nav className="grid gap-2 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
                href="/"
                className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${pathname === '/' ? 'text-foreground bg-muted' : 'text-muted-foreground'}  hover:text-foreground`}
            >
                <Home className="h-5 w-5" />
                Feed
            </Link>
            <Link
                href="/create-post"
                className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl  px-3 py-2 ${pathname === '/create-post' ? 'text-foreground bg-muted' : 'text-muted-foreground'} hover:text-foreground`}
            >
                <ShoppingCart className="h-5 w-5" />
                Create post
            </Link>
            <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <Package className="h-5 w-5" />
                Products
            </Link>
            <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <Users className="h-5 w-5" />
                Customers
            </Link>
            <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <LineChart className="h-5 w-5" />
                Analytics
            </Link>
        </nav>
    )
}
