import Link from 'next/link'
import { Suspense } from 'react'

import { Feed } from '@/(components)/feed'
import { ProfileInfo } from '@/(components)/profile-info'

import { uid } from '@/models/constants'

export const revalidate = 1

export default async function Profile() {
    return (
        <section className="grid">
            <header className="p-5">
                <Link href="/userlist">go to userlist</Link>
                <Link href="/create-post">create post</Link>
            </header>
            <Suspense fallback={<h1>Loading profile info...</h1>}>
                <ProfileInfo uid={uid} />
            </Suspense>
            <Suspense fallback={<h1>Loading feed...</h1>}>
                <Feed uid={uid} />
            </Suspense>
            <footer className="p-5">this is footer</footer>
        </section>
    )
}
