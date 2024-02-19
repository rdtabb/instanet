import { doc, getDoc, getDocs, collection } from 'firebase/firestore'

import { db } from '@/db/db.config'
import { Collections } from './constants'

import { User } from './types'

export const fetchUserlist = async (): Promise<User[]> => {
    const result: User[] = []

    const userCollection = collection(db, Collections.USERS)
    const userDocs = await getDocs(userCollection)
    userDocs.forEach((doc) => {
        result.push(doc.data() as User)
    })

    return result
}

export const fetchUserDataset = async (uid: string): Promise<User> => {
    const userDocument = doc(db, Collections.USERS, uid)
    return (await getDoc(userDocument)).data() as User
}
