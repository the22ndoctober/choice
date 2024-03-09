"use client"

import { Grid, Typography, Box } from "@mui/material"
import { NavStyles } from "./styles/styles"
import Image from "next/image"
import logo_src from "@/public/logo_nav.png"

import { useRouter } from "next/navigation"
import NavPhoneComponent from "./NavPhoneComponent"
import { logoNav } from "../../static/logo"

const Navigtaion = () => {
    const router = useRouter()

    const NavButtons = [
        {
            key: "store",
            value: "Магазин",
            handle: () => {
                router.push("/")
            },
        },
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
            <Box sx={{ ...NavStyles.container }}>
                <Grid container sx={{ ...NavStyles.bodyWrapper }}>
                    <Grid container sx={{ ...NavStyles.logoWrapper }}>
                        {logoNav}
                    </Grid>
                    <Grid container sx={{ ...NavStyles.buttonsWrapper }}>
                        {NavButtons.map(
                            (button: {
                                key: string
                                value: string
                                handle: any
                            }) => (
                                <Typography
                                    key={button.key}
                                    sx={{ ...NavStyles.buttonWrapper__item }}
                                    onClick={button.handle}
                                >
                                    {button.value}
                                </Typography>
                            )
                        )}
                    </Grid>
                    <Grid container sx={{ ...NavStyles.infoWrapper }}>
                        <NavPhoneComponent />
                        <Box sx={{ display: "flex", columnGap: "12px" }}>
                            <Typography
                                sx={{
                                    fontSize: { lg: "18px", fontWeight: 600 },
                                }}
                            >
                                УКР
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { lg: "18px", fontWeight: 300 },
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
