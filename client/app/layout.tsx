import type { Metadata } from "next"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./globals.css"
import { Provider } from "./Provider"

import Footer from "./components/footer/Footer"
import { getServerSession } from "next-auth"

import authOptions from "./api/auth/[...nextauth]/options"

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const session = await getServerSession<any>(authOptions)

    if (session) {
        console.log("YES!")
    }
    return (
        <html lang="en">
            <body>
                <Provider>
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
