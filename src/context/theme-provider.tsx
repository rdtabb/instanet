'use client'
import { PropsWithChildren } from 'react'
import { ThemeProvider as ServerThemeProvider } from 'next-themes'

export default function ThemeProvider({ children }: PropsWithChildren) {
    return <ServerThemeProvider>{children}</ServerThemeProvider>
}
