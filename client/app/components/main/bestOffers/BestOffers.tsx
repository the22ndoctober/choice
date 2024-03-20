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
        if (width >= 1536) {
            setSettings((state: any) => {
                return { ...state, slidesToShow: 5, slidesToScroll: 5 }
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
                        Найкращі пропозиції
                    </Typography>
                </Box>

                <Grid
                    container
                    sx={{
                        justifyContent: "space-between",
                        width: { lg: 1140, xl: 1440 },
                        height: "auto",
                        position: "relative",
                    }}
                >
                    <Box
                        className="small-slider"
                        sx={{
                            width: { lg: 1140, xl: 1440 },
                            height: { sm: "auto" },
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
