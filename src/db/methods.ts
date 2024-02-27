import { supabase } from './db'

export interface Post {
    id: string
    creator_id: string
    creator_name: string
    inserted_at: string
    updated_at: string
    data: {
        value: string
    }
    name: string
}

export const fetchUserPosts = async (uid?: string) => {
    if (!uid) {
        return undefined
    }

    const { data, error } = await supabase
        .from('posts')
        .select<'posts', Post>()
        .eq('creator_id', uid)

    if (error) {
        console.log(error)
    }
    console.log(data)

    return data
}

export type UserPosts = ReturnType<typeof fetchUserPosts>
