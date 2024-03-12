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

const cardsApi = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
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
                        justifyContent: "space-between",
                        width: { lg: 1140, xl: 1440 },
                        height: "auto",
                    }}
                >
                    <Box
                        className="small-slider"
                        sx={{
                            width: { lg: 960, xl: 1155 },
                            height: { sm: "auto" },
                            position: "relative",
                        }}
                    >
                        <Slider {...settings}>
                            {cardsApi.map((card: any) => (
                                <Box
                                    key={card.id}
                                    sx={{
                                        background: Colors.paper,
                                        borderRadius: "15px",
                                        height: { lg: 80 },
                                        width: {
                                            lg: "190px !important",
                                            xl: "272px !important",
                                        },
                                    }}
                                ></Box>
                            ))}
                        </Slider>
                    </Box>
                    <Box
                        sx={{
                            background: Colors.paper,
                            borderRadius: "15px",
                            height: { lg: 80 },
                            width: {
                                lg: "190px !important",
                                xl: "272px !important",
                            },
                        }}
                    ></Box>
                </Grid>
            </Grid>
        </>
    )
}

export default PopularBrends
