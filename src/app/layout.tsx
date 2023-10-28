import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Learn Jotai',
    description: 'Learn about jotai'
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
