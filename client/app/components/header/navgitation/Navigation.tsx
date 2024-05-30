"use client"

import { Grid, Typography, Box } from "@mui/material"
import { NavStyles } from "./styles/styles"
import Image from "next/image"
import logo_src from "@/public/logo_nav.png"

import { useRouter } from "next/navigation"
import NavPhoneComponent from "./NavPhoneComponent"
import { logoNav } from "../../static/logo"
import { Colors } from "@/client"

const Navigtaion = () => {
    const router = useRouter()

    const NavButtons = [
        // {
        //     key: "store",
        //     value: "Магазин",
        //     handle: () => {
        //         router.push("/")
        //     },
        // },
        {
            key: "about",
            value: "Про нас",
            handle: () => {
                router.push("/about")
            },
        },
        {
            key: "trade",
            value: "Обмін",
            handle: () => {
                router.push("/trade")
            },
        },
        {
            key: "save_the_world",
            value: "Врятувати світ",
            handle: () => {
                router.push("/savetheworld")
            },
        },
        {
            key: "delivery",
            value: "Доставка",
            handle: () => {
                router.push("/delivery")
            },
        },
        {
            key: "help",
            value: "Допомога",
            handle: () => {
                router.push("/help")
            },
        },
    ]

    return (
        <>
            <Box
                sx={{
                    width: { sm: "100%" },
                    background: "#F9FAFD",
                    height: "85px",
                }}
            >
                <Grid
                    container
                    sx={{
                        margin: "0 auto",
                        width: { xl: 1440, lg: 1368 },
                        py: { sm: "19px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        direction: { sm: "row" },
                    }}
                >
                    <Grid
                        container
                        sx={{
                            heigth: { sm: "43,91px" },

                            flex: "2 1 0",
                        }}
                        onClick={() => {
                            router.push("/")
                        }}
                    >
                        {logoNav}
                    </Grid>
                    <Grid
                        container
                        sx={{
                            alignItems: { sm: "center" },
                            width: { sm: "auto" },
                            display: "flex",
                            direction: "row",

                            flex: "5 1 0",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",

                                pl: "46px",
                                width: "600px",
                                justifyContent: "space-between",
                            }}
                        >
                            {NavButtons.map(
                                (button: {
                                    key: string
                                    value: string
                                    handle: any
                                }) => (
                                    <Typography
                                        key={button.key}
                                        sx={{
                                            boxSizing: "content-box",
                                            fontSize: {
                                                lg: "18px",
                                                xl: "18px",
                                            },
                                            fontWeight: 300,
                                            letterSpacing: "0em",
                                            textAlign: "left",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: Colors.teal,
                                            },
                                        }}
                                        // onClick={button.handle}
                                    >
                                        {button.value}
                                    </Typography>
                                )
                            )}
                        </Box>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "row",
                            width: "auto",

                            alignItems: "center",

                            flex: "3 1 0",
                            justifyContent: "space-between",
                        }}
                    >
                        <NavPhoneComponent />
                        <Box
                            sx={{
                                display: "flex",
                                columnGap: "12px",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        lg: "18px",
                                        xl: "18px",
                                        fontWeight: 600,
                                    },
                                }}
                            >
                                УКР
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        lg: "18px",
                                        xl: "18px",
                                        fontWeight: 300,
                                    },
                                }}
                            >
                                РУС
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Navigtaion
