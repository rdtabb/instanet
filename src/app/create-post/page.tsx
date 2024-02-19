import Link from 'next/link'
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

import { tags } from '@/models/constants'

export default function Page() {
    async function createPost(data: FormData) {
        'use server'
        const { ok, status, statusText } = await fetch(`http://localhost:3000/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: data.get('url'),
                place: data.get('place')
            })
        })
        if (!ok) {
            throw new Error(`Error in createPost: ${status} ${statusText}`)
        }
        revalidateTag(tags.userposts)
        redirect('/')
    }

    return (
        <>
            <Link href="/">Profile</Link>
            <form action={createPost} className="grid gap-4 w-[10rem] mt-36">
                <input
                    name="url"
                    type="url"
                    placeholder="Enter url"
                    className="bg-black border-2 border-white  border-solid p-4 rounded"
                />
                <input
                    name="place"
                    type="text"
                    placeholder="Enter place"
                    className="bg-black border-2 border-white border-solid  p-4 rounded"
                />
                <button type="submit" className="border-white border-2 border-solid">
                    submit
                </button>
            </form>
        </>
    )
}
