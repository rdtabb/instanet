'use client'
import { useCallback } from 'react'
import { redirect } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function Signin() {
    const signinWithGoogle = useCallback(async (): Promise<void> => {
        await signIn('google')
        redirect('/')
    }, [])

    return (
        <section className="flex flex-col gap-6 p-6 rounded-2xl bg-zinc-900 w-full max-w-[20rem] place-self-center">
            <h2 className="text-xl font-bold">Signin</h2>
            <button
                type="button"
                className="px-4 py-2 border-white border-2 border-solid rounded-lg bg-white text-black hover:bg-black hover:text-white transition-all duration-150"
                onClick={signinWithGoogle}
            >
                Signin with google
            </button>
        </section>
    )
}
