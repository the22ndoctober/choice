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
    {
        id: 0,
        title: "Iphone 13",
        price: 5000,
        currency: "₴",
        tags: [
            { color: Colors.lightBlue, title: "Найкраща ціна" },
            { color: Colors.maxDark, title: "Відмінний стан" },
        ],
    },
    {
        id: 1,
        title: "Iphone 7",
        price: 3500,
        currency: "₴",
        tags: [
            { color: Colors.lightBlue, title: "Найкраща ціна" },
            { color: Colors.maxDark, title: "Відмінний стан" },
        ],
    },
    {
        id: 2,
        title: "Samsung G9",
        price: 3000,
        currency: "₴",
        tags: [
            { color: Colors.lightBlue, title: "Найкраща ціна" },
            { color: Colors.maxDark, title: "Відмінний стан" },
        ],
    },
    {
        id: 3,
        title: "Motorolla 4/64",
        price: 3000,
        currency: "₴",
        tags: [
            { color: Colors.lightBlue, title: "Найкраща ціна" },
            { color: Colors.maxDark, title: "Відмінний стан" },
        ],
    },
    {
        id: 4,
        title: "Redmi Note 9A 4/64",
        price: 2500,
        currency: "₴",
        tags: [
            { color: Colors.lightBlue, title: "Найкраща ціна" },
            { color: Colors.maxDark, title: "Відмінний стан" },
        ],
    },
]

const BestOffers = () => {
    const [width, setWidth] = useState<any>(0)
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    })

    useEffect(() => {
        if (window) {
            setWidth(document.documentElement.clientWidth)
        }
        const updateWindowDimensions = () => {
            const newWidth = document ? document.documentElement.clientWidth : 0
            setWidth(newWidth)
        }

        window.addEventListener("resize", updateWindowDimensions)

        return () =>
            window.removeEventListener("resize", updateWindowDimensions)
    }, [])

    useEffect(() => {
        if (width < 1280) {
            setSettings((state: any) => {
                return { ...state, slidesToShow: 2, slidesToScroll: 2 }
            })
            return
        }
        if (width >= 1280) {
            setSettings((state: any) => {
                return { ...state, slidesToShow: 5, slidesToScroll: 5 }
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
                    rowGap: { xs: "12px", lg: "27px" },
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
                        Найкращі пропозиції
                    </Typography>
                </Box>

                <Grid
                    container
                    sx={{
                        justifyContent: "space-between",
                        width: { xs: 360, lg: 1368, xl: 1440 },
                        height: "auto",
                        position: "relative",
                    }}
                >
                    <Box
                        className="small-slider"
                        sx={{
                            width: { xs: 360, lg: 1368, xl: 1440 },
                            height: { xs: "auto" },
                        }}
                    >
                        <Slider {...settings}>
                            {cardsApi.map((card: any) => (
                                <ProductCard
                                    key={card.id}
                                    title={card.title}
                                    price={card.price}
                                    currency={card.currency}
                                    tags={card.tags}
                                />
                            ))}
                        </Slider>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default BestOffers
