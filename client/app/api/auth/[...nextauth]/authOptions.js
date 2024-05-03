import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                phone: "+380932131",
            },

            async authorize(credentials) {
                const { phone } = credentials

                try {
                    return phone
                } catch (error) {
                    console.log("Error: ", error)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
        signOut: "/",
    },
}
export default authOptions
