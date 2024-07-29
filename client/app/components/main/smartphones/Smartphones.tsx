"use client"

import { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Colors } from "@/client"
import ProductCard from "../../basic/productCard/ProductCard"
import Slider from "react-slick"
import "@/app/Slider.css"
import { useSelector } from "react-redux"
import CircularProgress from "@mui/material/CircularProgress"

const Smartphones = () => {
    const [width, setWidth] = useState(0)
    const [cards, setCards] = useState<any[]>([])
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    })

    const smarphonesApi = useSelector((state: any) => state.products.data)
    const status = useSelector((state: any) => state.products.status)

    useEffect(() => {
        if (status === "success") {
            let dataAmount = 8
            let result: any[] = []
            smarphonesApi.map((product: any) => {
                if (result.length < dataAmount) {
                    if (
                        product.category.title.includes("Смартфони") &&
                        !product.title.includes("Телевізор") &&
                        parseInt(product.balance) > 0 &&
                        product.image_path !== null
                    ) {
                        result.push(product)
                    }
                }
                return
            })
            console.log(result)
            setCards(result)
        }
    }, [status, smarphonesApi])

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
                        Смартфони
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
                        {status === "success" ? (
                            <>
                                <Slider {...settings}>
                                    {cards.map((card: any) => (
                                        <ProductCard
                                            key={card.product_id}
                                            title={card.title}
                                            price={parseInt(card.price)}
                                            img_path={card.image_path}
                                            product={card}
                                        />
                                    ))}
                                </Slider>
                            </>
                        ) : status === "loading" ? (
                            <CircularProgress />
                        ) : (
                            <Box>No data</Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Smartphones
