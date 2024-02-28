"use client"

import Grid from "@mui/material/Grid"
import { AdvertismentStyles } from "./styles/styles"
import Slider from "react-slick"

import { Box } from "@mui/material"
import { Colors } from "@/client"

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
                            sx={{
                                width: "100%",
                                height: 700,
                                bgcolor: "gray",

                                fontSize: "210px",
                                color: Colors.paper,
                                textAlign: "center",
                            }}
                        >
                            Реклама 1
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: 700,
                                bgcolor: "gray",

                                fontSize: "210px",
                                color: Colors.paper,
                                textAlign: "center",
                            }}
                        >
                            Блок 2
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: 700,
                                bgcolor: "gray",

                                fontSize: "210px",
                                color: Colors.paper,
                                textAlign: "center",
                            }}
                        >
                            Блок 3
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: 700,
                                bgcolor: "gray",

                                fontSize: "210px",
                                color: Colors.paper,
                                textAlign: "center",
                            }}
                        >
                            Блок 4
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: 700,
                                bgcolor: "gray",

                                fontSize: "210px",
                                color: Colors.paper,
                                textAlign: "center",
                            }}
                        >
                            Блок 5
                        </Box>
                    </Slider>
                </Box>
            </Grid>
        </>
    )
}

export default AdvertismentMain
