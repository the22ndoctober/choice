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
    const [width, setWidth] = useState(0)
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
    }, [width])

    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "27px",
                    width: { lg: 1140, xl: 1440 },
                    margin: "0 auto",
                    height: "auto",
                    pt: "34px",
                    pb: "50px",
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
                            fontSize: { lg: "24px", fontWeight: 600 },
                            color: Colors.black,
                        }}
                    >
                        Популярні бренди
                    </Typography>
                </Box>

                <Grid
                    container
                    sx={{
                        width: { lg: 1140, xl: 1440 },
                        height: "auto",
                        position: "relative",
                    }}
                >
                    <Box
                        className="slider-brands"
                        sx={{
                            width: { lg: 912, xl: 1150 },
                            height: { sm: "auto" },
                        }}
                    >
                        <Slider {...settings}>
                            {cardsApi.map((card: any) => (
                                <Grid
                                    container
                                    sx={{
                                        flexDirection: "column",
                                        width: {
                                            lg: "218px !important",
                                            xl: `270px !important`,
                                        },
                                    }}
                                >
                                    <Box
                                        key={card.id}
                                        sx={{
                                            background: Colors.paper,
                                            borderRadius: "15px",

                                            height: { lg: 80 },
                                            width: {
                                                lg: "100%",
                                                xl: "100%",
                                            },
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
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
                            height: { lg: 80 },
                            width: {
                                lg: "218px !important",
                                xl: "270px !important",
                            },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "24px",
                            fontWeight: 500,
                            color: Colors.grey,
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
