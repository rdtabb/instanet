'use client'
import { useCallback, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'

import { Card, CardFooter, CardTitle, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Signin() {
    const session = useSession()
    const router = useRouter()

    const signinWithGoogle = useCallback(async (): Promise<void> => {
        await signIn('google')
    }, [])

    useEffect(() => {
        if (session.data) {
            router.push('/')
        }
    }, [session.data])

    return (
        <Card className="w-min h-min place-self-center">
            <CardHeader>
                <CardTitle>Signin</CardTitle>
            </CardHeader>
            <CardFooter>
                <Button onClick={signinWithGoogle}>
                    <LogIn className="mr-3" />
                    Signin with google
                </Button>
            </CardFooter>
        </Card>
    )
}
