"use client"

import Grid from "@mui/material/Grid"
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
            <Box
                sx={{
                    width: { xs: "100%" },
                    height: { xs: "280px", lg: "610px" },
                    mt: { xs: "50px", lg: 0 },
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: 360,
                            lg: 1368,
                            xl: 1440,
                        },
                        height: { xs: "280px", lg: "610px" },
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "right",
                    }}
                >
                    <Grid
                        container
                        sx={{
                            width: { xs: "100%", xl: 1105, lg: 1050 },
                            height: { xs: "280px", lg: "610px" },
                            py: "28px",
                            justifyContent: { xs: "center", sm: "right" },
                            alignItems: { xs: "center" },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: "100%" },
                            }}
                        >
                            <Slider {...settings}>
                                <Box
                                    sx={{
                                        width: "auto",
                                        height: "100%",
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
                                        width: {
                                            xs: "100%",
                                            lg: 900,
                                            xl: 1136,
                                        },
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
                                        width: {
                                            xs: "100%",
                                            lg: 900,
                                            xl: 1136,
                                        },
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
                                        width: {
                                            xs: "100%",
                                            lg: 900,
                                            xl: 1136,
                                        },
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
