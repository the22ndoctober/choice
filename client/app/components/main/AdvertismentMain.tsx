"use client"

import Grid from "@mui/material/Grid"
import { AdvertismentStyles } from "./styles/styles"
import Slider from "react-slick"

import { Box } from "@mui/material"

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
            <Grid container sx={{ ...AdvertismentStyles.wrapper }}>
                <Box sx={{ ...AdvertismentStyles.sliderWrapper }}>
                    <Slider {...settings}>
                        <Box
                            sx={{ width: "100%", height: 700, bgcolor: "gray" }}
                        >
                            1
                        </Box>
                        <Box
                            sx={{ width: "100%", height: 700, bgcolor: "gray" }}
                        >
                            2
                        </Box>
                        <Box
                            sx={{ width: "100%", height: 700, bgcolor: "gray" }}
                        >
                            3
                        </Box>
                        <Box
                            sx={{ width: "100%", height: 700, bgcolor: "gray" }}
                        >
                            4
                        </Box>
                        <Box
                            sx={{ width: "100%", height: 700, bgcolor: "gray" }}
                        >
                            5
                        </Box>
                    </Slider>
                </Box>
            </Grid>
        </>
    )
}

export default AdvertismentMain
