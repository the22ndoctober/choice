import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { phone } = credentials

                try {
                    await connectMongoDB()
                    const user = await User.findOne({ phone })

                    if (!user) {
                        return null
                    }

                    return user
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
