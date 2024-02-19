import Link from 'next/link'
import { Suspense } from 'react'

import { ProfileInfo } from '@/(components)/profile-info'
import { Feed } from '@/(components)/feed'

interface PageParams {
    params: {
        userid: string
    }
}

export default function Page({ params }: PageParams) {
    return (
        <section className="grid">
            <header className="p-5 grid gap-3">
                <Link href="/userlist">go to userlist</Link>
                <Link href="/">back to main</Link>
            </header>
            <Suspense fallback={<h1>Loading profile info...</h1>}>
                <ProfileInfo uid={params.userid} />
            </Suspense>
            <Suspense fallback={<h1>Loading feed...</h1>}>
                <Feed uid={params.userid} />
            </Suspense>
            <footer className="p-5">this is footer</footer>
        </section>
    )
}
