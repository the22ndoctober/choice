"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"

import Box from "@mui/material/Box"
import { Colors } from "@/client"
import InputBase from "@mui/material/InputBase"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import CloseIcon from "@mui/icons-material/Close"

const useStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: Colors.lightGreen,
        },
    },
})

export default function LoginForm({ setOpen }) {
    const classes = useStyles()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

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
                    <Grid
                        container
                        sx={{ flexDirection: "column", rowGap: "20px" }}
                    >
                        <Grid
                            container
                            sx={{ justifyContent: "space-between" }}
                        >
                            <Box
                                sx={{
                                    fontFamily: "Inter",
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}
                            >
                                Вхід
                            </Box>
                            <CloseIcon
                                onClick={() => {
                                    setOpen(false)
                                }}
                            />
                        </Grid>
                        <InputBase
                            placeholder="Номер телефону"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                width: "100%",
                                height: "54px",
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
                                height: "54px",
                                border: `2px solid ${Colors.grey}`,
                                borderRadius: "15px",
                                "& .MuiInputBase-input": {
                                    ml: "-10px",
                                    textAlign: "center",
                                },
                            }}
                        />

                        <Button
                            className={classes.root}
                            onClick={handleSubmit}
                            sx={{
                                borderRadius: "15px",
                                width: "100%",
                                color: Colors.white,
                                background: Colors.teal,
                                fontSize: "18px",
                                fontWeight: "600",
                                lineHeight: "22px",
                                letterSpacing: "0em",
                                textAlign: "center",
                                height: "54px",
                                textTransform: "none",
                            }}
                        >
                            Увійти
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
                    </Grid>
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
