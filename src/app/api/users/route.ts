import { NextResponse } from 'next/server'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '@/db/db.config'
import { Collections } from '@/models/constants'
import { User } from '@/models/types'

export async function GET() {
    const result: User[] = []

    const usersCollection = collection(db, Collections.USERS)
    const usersDocuments = await getDocs(usersCollection)
    usersDocuments.forEach((doc) => result.push(doc.data() as User))

    return NextResponse.json(result)
}
