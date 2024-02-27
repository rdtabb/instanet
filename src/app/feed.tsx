import { getServerSession } from 'next-auth'

import { authOptions } from './api/auth/[...nextauth]/route'
import { fetchUserPosts } from '@/db/methods'

export const Feed = async () => {
    const session: Session = await getServerSession(authOptions)
    const posts = await fetchUserPosts(session?.user.id)

    if (!posts?.length) {
        return (
            <article className="text-center">
                <h2 className="text-3xl">no posts yet</h2>
            </article>
        )
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id} className="grid gap-2 bg-white text-black p-3 rounded-xl">
                    <div className="flex items-center gap-3 pb-2">
                        <h1 className="text-xl font-bold">{post.name}</h1>
                        <p>{post.updated_at.split('T')[0]}</p>
                    </div>
                    <article>
                        <p>{post.data.value}</p>
                    </article>
                </li>
            ))}
        </ul>
    )
}
