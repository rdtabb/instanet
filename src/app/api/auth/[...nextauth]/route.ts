import NextAuth, { NextAuthOptions } from 'next-auth'
import { SupabaseAdapter } from '@auth/supabase-adapter'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })
    ],
    // @ts-ignore -- weird type mismatch
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    }),
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                //@ts-ignore
                session.user.id = token.sub
            }
            return session
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.uid = user.id
            }

            return token
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 // 30 days
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
