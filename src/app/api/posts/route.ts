import { NextResponse } from 'next/server'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { randomUUID } from 'crypto'

import { User } from '@/models/types'
import { Collections, uid } from '@/models/constants'
import { db } from '@/db/db.config'

interface CreatePostBody {
    url: string
    place: string
}

export async function POST(request: Request) {
    const res = (await request.json()) as CreatePostBody
    const userdoc = doc(db, Collections.USERS, uid)
    const userdata = (await getDoc(userdoc)).data() as User

    const newPosts = [
        {
            city: res.place,
            id: randomUUID().toString(),
            imgsrc: res.url,
            likes: [],
            comments: []
        },
        ...userdata.newPosts
    ]

    await updateDoc(userdoc, {
        newPosts
    })

    return NextResponse.json(res)
}
