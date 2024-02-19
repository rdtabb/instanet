import { Userlist } from '@/(components)/userlist'
import Link from 'next/link'
import { Suspense } from 'react'

export default function UserlistPage() {
    return (
        <section>
            <header className="p-5">
                <Link href="/">Back to main</Link>
            </header>
            <h1>Userlist</h1>
            <Suspense fallback={<h2>Loading userlist...</h2>}>
                <Userlist />
            </Suspense>
        </section>
    )
}
