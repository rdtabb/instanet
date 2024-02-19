import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

import { auth, db } from '@/db/db.config'
import { Collections } from '@/models/constants'
import { User } from '@/models/types'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Enter email...' },
                password: { label: 'Password', type: 'password', placeholder: 'Enter password...' }
            },
            async authorize(credentials, req): Promise<User | null> {
                if (!credentials?.password || !credentials.email) {
                    return null
                }

                const {
                    user: { uid }
                } = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                const userDocReference = doc(db, Collections.USERS, uid)
                const user = (await getDoc(userDocReference)).data() as User

                return user
            }
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
