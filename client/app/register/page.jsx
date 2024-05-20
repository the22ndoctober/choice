import RegisterForm from "@/app/components/login/RegisterForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Register() {
    return <RegisterForm />
}
