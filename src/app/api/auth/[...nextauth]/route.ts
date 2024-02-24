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
    callbacks: {
        async jwt({ token }) {
            return token
        }
    },
    pages: {
        signIn: '/signin'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
