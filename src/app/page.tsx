import { Suspense } from 'react'
import { getServerSession } from 'next-auth'

import { authOptions } from './api/auth/[...nextauth]/route'

import { Feed } from './feed'

export default async function Profile() {
    const session: Session = await getServerSession(authOptions)

    if (!session) {
        return <h2 className="text-3xl font-bold place-self-center">You are not logged in</h2>
    }

    return (
        <section className="grid gap-3 items-start justify-center auto-rows-min w-full pt-16">
            <div className="flex gap-2 items-center justify-center w-full">
                <h2 className="text-3xl font-bold">Hello, {session?.user?.name}</h2>
                <img
                    src={session?.user?.image ?? ''}
                    alt={`${session?.user?.name} avatar`}
                    height={88}
                    width={88}
                    className="rounded-full object-cover object-center"
                />
            </div>
            <Suspense
                fallback={<p className="place-self-center font-bold italic">Loading posts...</p>}
            >
                <Feed />
            </Suspense>
        </section>
    )
}
