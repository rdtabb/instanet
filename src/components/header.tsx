'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

export const Header = () => {
    const { data: user } = useSession()

    return (
        <header className="max-w-[70rem] w-full mx-auto flex justify-between items-center p-3">
            <h2 className="text-4xl text-white font-bold">instanet</h2>
            <div className="flex gap-3 justify-between items-center">
                {user ? (
                    <>
                        <div className="flex gap-3 items-center justify-between">
                            <img
                                src={user.user?.image ?? ''}
                                alt="avatar"
                                width={30}
                                height={30}
                                className="rounded-full object-cover object-center"
                            />
                            <p className="font-bold italic text-sm">{user.user?.name}</p>
                        </div>
                        <button
                            className="py-2 px-4 bg-white text-black rounded-lg"
                            onClick={() => signOut()}
                        >
                            Signout
                        </button>
                    </>
                ) : (
                    <button
                        className="py-2 px-4 bg-white text-black rounded-lg"
                        onClick={() => signIn()}
                    >
                        Signin
                    </button>
                )}
            </div>
        </header>
    )
}
