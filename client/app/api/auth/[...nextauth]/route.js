import NextAuth from "next-auth/next"
import { SendOTP, VerifyOtpRequest } from "@/api/test"
import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { phone, OTP } = credentials

                try {
                    await connectMongoDB()
                    const user = await User.findOne({ phone })

                    if (!user) {
                        return null
                    }

                    const verifyOtp = await VerifyOtpRequest(phone, OTP)

                    if (!verifyOtp.data.success) {
                        return null
                    }
                    console.log("успішно!")

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

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
