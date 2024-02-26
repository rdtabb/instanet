import { supabase } from './db'

interface Post {
    id: string
    creator_id: string
    creator_name: string
    inserted_at: string
    updated_at: string
    data: string
    name: string
}

export const fetchUserPosts = async (uid?: string) => {
    if (!uid) {
        return undefined
    }

    const { data, error } = await supabase
        .from('posts')
        .select<'posts', { posts: Post[] }>('posts')
        .eq('creator_id', uid)

    if (error) {
        console.log(error)
    }
    console.log(data)

    return data
}

export type UserPosts = ReturnType<typeof fetchUserPosts>
