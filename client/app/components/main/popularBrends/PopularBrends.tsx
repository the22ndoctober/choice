"use client"

import { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Colors } from "@/client"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ProductCard from "../../basic/productCard/ProductCard"
import Slider from "react-slick"
import "@/app/Slider.css"
import {
    appleIcon,
    lgIcon,
    motorollaIcon,
    realmeIcon,
    samsungIcon,
    vivoIcon,
} from "../../static/brandIcons"
import { cart } from "../../static/cart"

const cardsApi = [
    { id: 0, svg: appleIcon, title: "Apple" },
    { id: 1, svg: samsungIcon, title: "Samsung" },
    { id: 2, svg: realmeIcon, title: "Realme" },
    { id: 3, svg: lgIcon, title: "LG" },
    { id: 4, svg: motorollaIcon, title: "Motorola" },
    { id: 5, svg: vivoIcon, title: "Vivo" },
]

const PopularBrends = () => {
    const [width, setWidth] = useState(
        document.documentElement.clientWidth || 0
    )
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    })

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth
            setWidth(newWidth)
        }

        window.addEventListener("resize", updateWindowDimensions)

        return () =>
            window.removeEventListener("resize", updateWindowDimensions)
    }, [])

    useEffect(() => {
        console.log(width)
        if (width >= 1536) {
            setSettings((state: any) => {
                return { ...state, slidesToShow: 4, slidesToScroll: 4 }
            })
            return
        }
        if (width >= 1200 && width < 1536) {
            setSettings((state: any) => {
                return { ...state, slidesToShow: 4, slidesToScroll: 4 }
            })
            return
        }
        if (width < 1200) {
            setSettings((state: any) => {
                return { ...state, slidesToShow: 2, slidesToScroll: 2 }
            })
            return
        }
    }, [width])

    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: { xs: "27px", lg: "27px" },
                    width: { xs: 360, lg: 1368, xl: 1440 },
                    margin: "0 auto",
                    height: "auto",
                    pt: { xs: "20px", lg: "34px" },
                    pb: { xs: "30px", lg: "50px" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: { lg: "40px" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "18px", lg: "24px" },
                            fontWeight: 600,
                            color: Colors.black,
                        }}
                    >
                        Популярні бренди
                    </Typography>
                </Box>

                <Grid
                    container
                    sx={{
                        width: { xs: 360, lg: 1368, xl: 1440 },
                        height: "auto",
                        position: "relative",
                    }}
                >
                    <Box
                        className="slider-brands"
                        sx={{
                            width: { xs: "64%", lg: "calc(80%)" },
                            height: { xs: "auto" },
                        }}
                    >
                        <Slider {...settings}>
                            {cardsApi.map((card: any) => (
                                <Grid
                                    key={card.id}
                                    container
                                    sx={{
                                        flexDirection: "column",
                                    }}
                                >
                                    <Box
                                        key={card.id}
                                        sx={{
                                            background: Colors.paper,
                                            borderRadius: "15px",

                                            height: { xs: 80 },
                                            width: {
                                                xs: "102px",
                                                xl: "100%",
                                            },
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            WebkitBoxShadow:
                                                "3px 3px 11px -4px rgba(0,0,0,0.25)",
                                            MozBoxShadow:
                                                "3px 3px 11px -4px rgba(0,0,0,0.25)",
                                            boxShadow:
                                                "3px 3px 11px -4px rgba(0,0,0,0.25)",
                                            transformOrigin: "center",
                                            transitionDuration: "0.3s",
                                            ":hover": {
                                                scale: "1.05",
                                                WebkitBoxShadow:
                                                    "3px 3px 11px -4px rgba(0,0,0,0.56)",
                                                MozBoxShadow:
                                                    "3px 3px 11px -4px rgba(0,0,0,0.56)",
                                                boxShadow:
                                                    "3px 3px 11px -4px rgba(0,0,0,0.56)",
                                            },
                                        }}
                                    >
                                        {card.svg}
                                    </Box>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            textAlign: "center",
                                            mt: 2,
                                        }}
                                    >
                                        {card.title}
                                    </Box>
                                </Grid>
                            ))}
                        </Slider>
                    </Box>
                    <Box
                        sx={{
                            background: Colors.paper,
                            borderRadius: "15px",
                            height: { xs: 80 },
                            width: {
                                xs: "calc(33% - 2px)",
                                lg: "calc(20% - 12px)",
                            },
                            ml: "12px",
                            my: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: { xs: "18px", lg: "24px" },
                            fontWeight: 500,
                            color: Colors.grey,
                            WebkitBoxShadow:
                                "3px 3px 11px -4px rgba(0,0,0,0.25)",
                            MozBoxShadow: "3px 3px 11px -4px rgba(0,0,0,0.25)",
                            boxShadow: "3px 3px 11px -4px rgba(0,0,0,0.25)",
                            transformOrigin: "center",
                            transitionDuration: "0.3s",
                            ":hover": {
                                scale: "1.05",
                                WebkitBoxShadow:
                                    "3px 3px 11px -4px rgba(0,0,0,0.56)",
                                MozBoxShadow:
                                    "3px 3px 11px -4px rgba(0,0,0,0.56)",
                                boxShadow: "3px 3px 11px -4px rgba(0,0,0,0.56)",
                            },
                        }}
                    >
                        Всі бренди
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default PopularBrends
