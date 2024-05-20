import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

export async function POST(req) {
    try {
        const { name, phone } = await req.json()
        const uiid = uuidv4()

        await connectMongoDB()
        await User.create({
            id: uiid,
            name,
            phone,
            createdAt: new Date(),
            updateAt: new Date(),
            orders: [],
        })

        return NextResponse.json(
            { message: "User registered." },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        )
    }
}
