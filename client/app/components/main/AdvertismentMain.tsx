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
                <Grid container sx={{ ...AdvertismentStyles.container }}>
                    <Box sx={{ ...AdvertismentStyles.sliderWrapper }}>
                        <Slider {...settings}>
                            <Box
                                sx={{
                                    width: 1136,
                                    height: 550,
                                    bgcolor: "gray",
                                }}
                            >
                                <Image
                                    src={banner1}
                                    alt=""
                                    width={1136}
                                    height={550}
                                    style={{ margin: "0 auto" }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: 1136,
                                    height: 550,
                                    bgcolor: "gray",
                                }}
                            >
                                <Image
                                    src={banner2}
                                    alt=""
                                    width={1136}
                                    height={550}
                                    style={{ margin: "0 auto" }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: 1136,
                                    height: 550,
                                    bgcolor: "gray",
                                }}
                            >
                                <Image
                                    src={banner3}
                                    alt=""
                                    width={1136}
                                    height={550}
                                    style={{ margin: "0 auto" }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: 1136,
                                    height: 550,
                                    bgcolor: "gray",
                                }}
                            >
                                <Image
                                    src={banner4}
                                    alt=""
                                    width={1136}
                                    height={550}
                                    style={{ margin: "0 auto" }}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default AdvertismentMain
