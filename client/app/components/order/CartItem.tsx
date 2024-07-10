import { Colors } from "@/client"
import { Box, Grid } from "@mui/material"
import React from "react"
import { trashCart } from "../static/trashCart"

const CartItem = ({
    id,
    setCart,
    title,
    image,
    price,
    currency,
    code,
}: any) => {
    const removeItemFromCart = () => {
        setCart()
    }

    return (
        <Grid
            container
            sx={{
                p: { lg: "27px 35px" },
                background: Colors.white,
                borderRadius: "15px",
                columnGap: "12px",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    width: { xs: "92px", lg: "130px" },
                    height: { xs: "92px", lg: "130px" },
                    borderRadius: "15px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {image !== null ? (
                    <img
                        src={image}
                        alt=""
                        style={{ width: "auto", height: "100%" }}
                    />
                ) : (
                    <svg
                        width="130"
                        height="130"
                        viewBox="0 0 130 130"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="130" height="130" fill="#F3F3F3" />
                        <path
                            d="M49.042 63.9216C47.4345 67.9754 46.579 72.3172 46.5191 76.6797L50.0522 78.1938L49.6188 64.262L49.042 63.9216Z"
                            fill="#706F6F"
                            stroke="#706F6F"
                            stroke-width="1.49533"
                        />
                        <path
                            d="M78.8155 63.8547C80.4229 67.9085 81.2785 72.2503 81.3383 76.6128L77.8053 78.1269L78.2386 64.1951L78.8155 63.8547Z"
                            fill="#706F6F"
                            stroke="#706F6F"
                            stroke-width="1.49533"
                        />
                        <path
                            d="M63.8574 83.8401L66.9094 87.917H77.7484V75.4154H71.5397H69.3832L63.8574 83.8401Z"
                            fill="#F3F3F3"
                            stroke="#706F6F"
                            stroke-width="1.49533"
                        />
                        <path
                            d="M50.2848 75.4154H69.3814L61.0966 87.917H50.2848V75.4154Z"
                            fill="#F3F3F3"
                            stroke="#706F6F"
                            stroke-width="1.49533"
                        />
                        <path
                            d="M50.2852 63.9352V63.1876H49.5376H43.3024V53.6056L49.6226 52.8826L50.2852 52.8068V52.1398V45.4004C59.4031 44.2405 68.6312 44.2405 77.7491 45.4004V52.1398V52.7993L78.4034 52.8816L84.0954 53.5981V63.1876H78.4967H77.7491V63.9352V75.3056C68.6086 74.5866 59.4257 74.5866 50.2852 75.3056V63.9352Z"
                            fill="#F3F3F3"
                            stroke="#706F6F"
                            stroke-width="1.49533"
                        />
                        <path
                            d="M69.7734 68.1333H58.0461V69.054L69.7734 68.2545V68.1333Z"
                            fill="#706F6F"
                        />
                        <path
                            d="M84.6912 53.0162V64.0291C70.732 62.6141 56.6656 62.6141 42.7065 64.0291V53.0162C56.6393 51.1527 70.7583 51.1527 84.6912 53.0162Z"
                            fill="#F3F3F3"
                            stroke="#706F6F"
                            stroke-width="1.49498"
                        />
                        <path
                            d="M87.3276 37.7192C99.8373 50.6951 99.4594 71.3552 86.4835 83.8649C73.5077 96.3746 52.8475 95.9967 40.3378 83.0209C27.8281 70.045 28.206 49.3849 41.1819 36.8752C54.1577 24.3655 74.8179 24.7434 87.3276 37.7192ZM44.9107 78.6123C54.9856 89.0626 71.6246 89.367 82.0749 79.2921C92.5253 69.2172 92.8296 52.5781 82.7547 42.1278C72.6798 31.6775 56.0408 31.3731 45.5905 41.448C35.1401 51.5229 34.8358 68.162 44.9107 78.6123Z"
                            fill="#706F6F"
                        />
                        <path
                            d="M81.7269 83.2057L86.387 78.713L105.371 98.4042C106.611 99.691 106.574 101.74 105.287 102.981C104 104.221 101.951 104.184 100.711 102.897L81.7269 83.2057Z"
                            fill="#706F6F"
                        />
                        <rect
                            x="28.1934"
                            y="30.9473"
                            width="7.39168"
                            height="7.39168"
                            rx="1.61828"
                            transform="rotate(-33.2688 28.1934 30.9473)"
                            fill="#706F6F"
                        />
                        <rect
                            x="46.3027"
                            y="101.332"
                            width="7.39168"
                            height="7.39168"
                            rx="1.61828"
                            transform="rotate(-43.5156 46.3027 101.332)"
                            fill="#706F6F"
                        />
                        <rect
                            x="90.9336"
                            y="25.3762"
                            width="14.4591"
                            height="14.4591"
                            rx="2.69714"
                            transform="rotate(-6.17362 90.9336 25.3762)"
                            fill="#706F6F"
                        />
                        <rect
                            x="100.479"
                            y="72.1331"
                            width="8.70647"
                            height="8.70647"
                            rx="1.61828"
                            transform="rotate(30.2377 100.479 72.1331)"
                            fill="#706F6F"
                        />
                        <rect
                            x="22.9415"
                            y="92.3513"
                            width="18.2596"
                            height="18.2596"
                            rx="1.888"
                            transform="rotate(-10.3631 22.9415 92.3513)"
                            stroke="#706F6F"
                            stroke-width="1.61828"
                        />
                        <rect
                            x="77.559"
                            y="26.951"
                            width="9.19737"
                            height="9.19737"
                            rx="1.21072"
                            transform="rotate(-66.1744 77.559 26.951)"
                            stroke="#706F6F"
                            stroke-width="0.815129"
                        />
                    </svg>
                )}
            </Box>
            <Grid
                container
                sx={{
                    flexDirection: "column",

                    justifyContent: "space-between",
                    flex: "1 1 0",
                    width: "150px",
                }}
            >
                <Grid container sx={{ flexDirection: "column", rowGap: "3px" }}>
                    <Grid
                        container
                        sx={{
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: "14px", lg: "20px" },
                                fontWeight: 600,
                                lineHeight: "24px",
                                letterSpacing: "0em",
                                textAlign: "left",
                                width: "auto",
                                maxWidth: { xs: "100px", lg: "none" },
                            }}
                        >
                            {title}
                        </Box>
                        <Box onClick={removeItemFromCart}>{trashCart}</Box>
                    </Grid>
                    <Box
                        sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "15px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: Colors.grey,
                            width: "fit-content",
                        }}
                    >
                        Штрихкод: {code}
                    </Box>
                </Grid>
                <Grid container sx={{ justifyContent: "space-between" }}>
                    <Box
                        sx={{
                            fontSize: { xs: "16px", lg: "24px" },
                            fontWeight: 800,
                            lineHeight: "29px",
                            letterSpacing: "0em",
                            textAlign: "right",
                            color: Colors.neutral,
                            border: `2px solid ${Colors.neutral}`,
                            p: "5px 12px",
                            borderRadius: "15px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {price + " ₴"}
                    </Box>
                    <Grid
                        container
                        sx={{
                            width: "fit-content",
                            justifyContent: "space-between",
                            minWidth: { xs: "120px", lg: "300px" },
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                border: `2px solid ${Colors.grey}`,
                                borderRadius: "15px",
                                width: "auto",
                                alignItems: "center",
                                display: { xs: "none", lg: "flex" },
                            }}
                        >
                            <Box
                                sx={{
                                    borderRight: `2px solid ${Colors.grey}`,
                                    fontSize: { xs: "14px", lg: "20px" },
                                    fontWeight: 500,
                                    lineHeight: "12px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.grey,
                                    px: "11px",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                -
                            </Box>
                            <Box
                                sx={{
                                    fontSize: { xs: "14px", lg: "20px" },
                                    fontWeight: 500,
                                    lineHeight: "12px",
                                    letterSpacing: "0em",
                                    color: Colors.grey,
                                    px: "15px",
                                    width: "50px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                }}
                            >
                                1
                            </Box>
                            <Box
                                sx={{
                                    borderLeft: `2px solid ${Colors.grey}`,
                                    fontSize: { xs: "14px", lg: "20px" },
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.grey,
                                    px: "9px",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                +
                            </Box>
                        </Grid>
                        <Box
                            sx={{
                                fontSize: { xs: "16px", lg: "24px" },
                                fontWeight: 800,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "right",
                                color: Colors.neutral,
                                display: { xs: "none", lg: "block" },
                                py: "12px",
                            }}
                        >
                            {price + " ₴"}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CartItem
