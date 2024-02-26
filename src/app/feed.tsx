'use client'
import { use } from 'react'

import { UserPosts } from '@/db/methods'

interface FeedProps {
    postsPromise: UserPosts
}

export const Feed = ({ postsPromise }: FeedProps) => {
    const postsData = use(postsPromise)

    if (!postsData) {
        return (
            <article className="text-center">
                <h2 className="text-3xl">no posts yet</h2>
            </article>
        )
    }

    return (
        <ul>
            <li>you have some posts</li>
        </ul>
    )
}
