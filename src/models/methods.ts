import { User } from './types'

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

export const fetchUserDataset = async (uid: string): Promise<User | undefined> => {
    try {
        const result = await fetch(`http://localhost:3000/api/users/${uid}`)
        if (!result.ok) {
            throw new Error(`Error fetching from api/users/${uid}`)
        }
        const data: User = await result.json()
        return data
    } catch (error) {
        console.log('Error in fetchUserDataset: ', error)
    }
}
