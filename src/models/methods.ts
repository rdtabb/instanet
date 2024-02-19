import { User, Post } from './types'
import { tags } from './constants'

export const fetchUserlist = async (): Promise<User[] | undefined> => {
    try {
        const result = await fetch(`http://localhost:3000/api/users`)

        if (!result.ok) {
            throw new Error(`Error fetching from api/users`)
        }

        const data: User[] = await result.json()
        return data
    } catch (error) {
        console.log('Error in fetchUserlist: ', error)
    }
}

export const fetchUserPosts = async (uid: string): Promise<Post[] | undefined> => {
    try {
        const result = await fetch(`http://localhost:3000/api/users/${uid}`, {
            next: { tags: [tags.userposts] }
        })
        if (!result.ok) {
            throw new Error(`Error fetching from api/users/${uid}`)
        }
        const data: User = await result.json()
        return data.newPosts
    } catch (error) {
        console.log('Error in fetchUserDataset: ', error)
    }
}

export const fetchUserinfo = async (
    uid: string
): Promise<Omit<User, 'newPosts' | 'liked'> | undefined> => {
    try {
        const result = await fetch(`http://localhost:3000/api/users/${uid}`, {
            next: { tags: [tags.userinfo] }
        })
        if (!result.ok) {
            throw new Error(`Error fetching from api/users/${uid}`)
        }
        const { newPosts, liked, ...userdata } = (await result.json()) as User
        return userdata
    } catch (error) {
        console.log('Error in fetchUserDataset: ', error)
    }
}
