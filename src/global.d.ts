import { type Session as ServerSession } from 'next-auth'

declare global {
    type Session = (ServerSession & { user: { id?: string } }) | null
}
