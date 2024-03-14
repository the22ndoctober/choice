"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Box from "@mui/material/Box"
import { Colors } from "@/client"
import InputBase from "@mui/material/InputBase"
import Button from "@mui/material/Button"

export default function LoginForm({ setOpen }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async () => {
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })

            if (res.error) {
                setError("Invalid Credentials")
                return
            }
            setOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 2000,
                    m: 0,
                }}
            >
                <Box
                    sx={{
                        width: 401,
                        height: 451,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        px: "35px",
                        py: "45px",
                        borderRadius: "15px",
                        background: Colors.paper,
                    }}
                >
                    <InputBase
                        defaultValue={"+380"}
                        placeholder="Номер телефону"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            width: "100%",
                            border: `2px solid ${Colors.grey}`,
                            borderRadius: "15px",
                            "& .MuiInputBase-input": {
                                ml: "-10px",
                                textAlign: "center",
                            },
                        }}
                    />
                    <InputBase
                        defaultValue={"+380"}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            width: "100%",
                            border: `2px solid ${Colors.grey}`,
                            borderRadius: "15px",
                            "& .MuiInputBase-input": {
                                ml: "-10px",
                                textAlign: "center",
                            },
                        }}
                    />

                    <Button
                        onClick={handleSubmit}
                        className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
                    >
                        Login
                    </Button>
                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link
                        className="text-sm mt-3 text-right"
                        href={"/register"}
                    >
                        Don't have an account?{" "}
                        <span className="underline">Register</span>
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    background: "rgb(0,0,0,0.2)",
                    backdropFilter: "blur(8px)",
                    zIndex: 1999,
                }}
            />
        </>
    )
}
