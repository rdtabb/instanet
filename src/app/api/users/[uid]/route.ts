import { doc, getDoc } from 'firebase/firestore'

import { Collections } from '@/models/constants'
import { db } from '@/db/db.config'
import { NextResponse } from 'next/server'

interface UserRouteParams {
    params: {
        uid: string
    }
}

export async function GET(request: Request, { params }: UserRouteParams) {
    const userDocument = doc(db, Collections.USERS, params.uid)
    const userData = (await getDoc(userDocument)).data()

    return NextResponse.json(userData)
}
