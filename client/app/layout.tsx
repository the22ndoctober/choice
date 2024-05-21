import type { Metadata } from "next"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./globals.css"
import { Provider } from "./Provider"
import Footer from "./components/footer/Footer"
import BackdropLoading from "./components/basic/backdropLoading/BackdropLoading"
import Head from "next/head"

export const metadata: Metadata = {
    title: "Choice Shop",
    description: "Choice Shop",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Provider>
                    <BackdropLoading />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
