"use client"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Colors } from "@/client"
import CommentItem from "./ProductReviews/CommentItem"
import Slider from "react-slick"

const ProductReviews = ({ cat }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    }

    return (
        <>
            <Box
                sx={{
                    py: { xs: "12px", lg: "48px" },
                }}
            >
                <Grid
                    container
                    sx={{
                        columnGap: "21px",
                        flexDirection: "column",
                        rowGap: "16px",
                    }}
                >
                    <Box
                        sx={{
                            flex: "1 1 0",
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                alignItems: "center",
                                columnGap: "8px",
                                px: "24px",
                                mb: "15px",
                            }}
                        >
                            <Box
                                sx={{
                                    color: Colors.maxDark,
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "29px",
                                }}
                            >
                                Відгуки клуєнтів про
                            </Box>

                            <Box
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "29px",
                                    textDecorationLine: "underline",
                                    color: Colors.grey,
                                }}
                            >
                                {cat.title}
                            </Box>
                        </Grid>

                        <Grid
                            container
                            sx={{
                                columnGap: "6px",
                                px: "24px",
                            }}
                        >
                            <Box
                                sx={{
                                    fontFamily: "Inter",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                    color: Colors.grey,
                                }}
                            >
                                Сортування
                            </Box>
                            <Box
                                sx={{
                                    color: Colors.maxDark,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                    textDecorationLine: "underline",
                                }}
                            >
                                найпопулярніші
                            </Box>
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            flex: "1 1 0",
                            borderRadius: "15px",
                            background: Colors.paper,
                            display: "flex",
                            alignItems: "center",
                            p: { xs: "12px 12px", lg: "20px 75px" },
                            columnGap: { xs: "12px", lg: "0px" },
                        }}
                    >
                        <Box
                            sx={{
                                width: "50%",
                                textWrap: "wrap",
                                color: Colors.grey,
                                fontFamily: "Inter",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: { xs: "16px", lg: "20px" },
                                lineHeight: "24px",
                            }}
                        >
                            Нам важлива ваша думка про якість обслуговування.
                        </Box>
                        <Box
                            sx={{
                                color: Colors.dark,
                                background: Colors.light,
                                borderRadius: "15px",
                                fontFamily: "Inter",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "20px",
                                lineHeight: "24px",
                                textAlign: "center",
                                width: "fit-content",
                                cursor: "pointer",
                                p: { xs: "12px 24px", lg: "14px 58px" },
                                "&:hover": {
                                    background: Colors.lightGreen,
                                    color: Colors.white,
                                },
                            }}
                        >
                            Залишити відгук
                        </Box>
                    </Box>
                </Grid>
                <Box
                    container
                    sx={{
                        width: "100%",
                        height: "250px",
                    }}
                >
                    <Slider {...settings}>
                        <CommentItem
                            key="cat-item-01"
                            name="Fedir"
                            rating="5"
                            text="Excellent service, prompt, friendly staff, clean ambiance, highly recommended!"
                        />
                        <CommentItem
                            key="cat-item-02"
                            name="Edward"
                            rating="5"
                            text="Outstanding experience, courteous team, delightful atmosphere, exceeded expectations, worth revisiting!"
                        />
                        <CommentItem
                            key="cat-item-03"
                            name="Alexander"
                            rating="5"
                            text="Excellent service, prompt, friendly staff, clean ambiance, highly recommended!"
                        />
                    </Slider>
                </Box>
            </Box>
        </>
    )
}

export default ProductReviews
