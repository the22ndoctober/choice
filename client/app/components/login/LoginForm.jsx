"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"

import Box from "@mui/material/Box"
import { Colors } from "@/client"
import InputBase from "@mui/material/InputBase"
import Button from "@mui/material/Button"

import Grid from "@mui/material/Grid"
import CloseIcon from "@mui/icons-material/Close"
import { SendOTP, VerifyOtpRequest } from "@/api/test"

export default function LoginForm({ setOpen }) {
    const [phone, setPhone] = useState("+380")
    const [otpQuery, setOtpQuery] = useState("")
    const [verifyOtp, setVerifyOtp] = useState(false)

    const [error, setError] = useState("")

    useEffect(() => {
        if (!(phone.slice(0, 4) === "+380")) {
            setError("Неправильний номер")
            return
        }
        setError("")
    }, [phone])

    const handleSubmit = async () => {
        const resp = await SendOTP(phone)
        if (resp) {
            setVerifyOtp(true)
        }
    }

    const handleOtpVerify = async () => {
        const resp = await VerifyOtpRequest(phone, otpQuery)
        console.log(resp)
        if (resp) {
            localStorage.setItem("CHOICE_JWT", resp.jwt)
            setOpen(false)
        } else {
            alert("something went wrong")
        }
    }

    const otpContent = (
        <>
            <InputBase
                placeholder="ХХХХХХ"
                value={otpQuery}
                onChange={(e) => setOtpQuery(e.target.value)}
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
                disabled={error.length > 0 ? true : false}
                onClick={handleOtpVerify}
                sx={{
                    borderRadius: "15px",
                    width: "100%",
                    color: Colors.white,
                    background: error.length > 0 ? Colors.grey : Colors.neutral,
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "22px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    height: "54px",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                        backgroundColor: Colors.lightGreen,
                    },
                }}
            >
                Підтвердити
            </Button>
        </>
    )

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
                        height: 300,
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
                        sx={{
                            flexDirection: "column",
                            rowGap: "20px",
                            justifyContent: "center",
                            height: "100%",
                        }}
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
                                {verifyOtp ? "Введіть 6-значний код" : "Вхід"}
                            </Box>
                            <CloseIcon
                                onClick={() => {
                                    setOpen(false)
                                }}
                            />
                        </Grid>

                        {verifyOtp ? (
                            otpContent
                        ) : (
                            <>
                                {" "}
                                <InputBase
                                    placeholder="Номер телефону"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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
                                    disabled={error.length > 0 ? true : false}
                                    onClick={handleSubmit}
                                    sx={{
                                        borderRadius: "15px",
                                        width: "100%",
                                        color: Colors.white,
                                        background:
                                            error.length > 0
                                                ? Colors.grey
                                                : Colors.neutral,
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        lineHeight: "22px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                        height: "54px",
                                        textTransform: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        "&:hover": {
                                            backgroundColor: Colors.lightGreen,
                                        },
                                    }}
                                >
                                    Увійти
                                </Button>
                            </>
                        )}
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
