"use client"

import Grid from "@mui/material/Grid"
import { AdvertismentStyles } from "./styles/styles"
import Slider from "react-slick"
import { Box } from "@mui/material"
import { Colors } from "@/client"
import Image from "next/image"
import banner1 from "@/public/Banner1.jpg"
import banner2 from "@/public/Banner2.jpg"
import banner3 from "@/public/Banner3.jpg"
import banner4 from "@/public/Banner4.jpg"

const AdvertismentMain = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <>
            <Box sx={{ ...AdvertismentStyles.wrapper }}>
                <Box
                    sx={{
                        width: {
                            lg: 1140,
                            xl: 1440,
                            margin: "0 auto",
                            display: "flex",
                            justifyContent: "right",
                        },
                    }}
                >
                    <Grid container sx={{ ...AdvertismentStyles.container }}>
                        <Box sx={{ ...AdvertismentStyles.sliderWrapper }}>
                            <Slider {...settings}>
                                <Box
                                    sx={{
                                        width: { lg: 900, xl: 1136 },
                                        height: "auto",
                                        bgcolor: "gray",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <Image
                                        src={banner1}
                                        alt=""
                                        style={{
                                            margin: "0 auto",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: { lg: 900, xl: 1136 },
                                        height: "auto",
                                        bgcolor: "gray",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <Image
                                        src={banner2}
                                        alt=""
                                        style={{
                                            margin: "0 auto",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: { lg: 900, xl: 1136 },
                                        height: "auto",
                                        bgcolor: "gray",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <Image
                                        src={banner3}
                                        alt=""
                                        style={{
                                            margin: "0 auto",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: { lg: 900, xl: 1136 },
                                        height: "auto",
                                        bgcolor: "gray",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <Image
                                        src={banner4}
                                        alt=""
                                        style={{
                                            margin: "0 auto",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </Box>
                            </Slider>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default AdvertismentMain
