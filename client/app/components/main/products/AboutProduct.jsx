"use client"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Colors } from "@/client"
import Typography from "@mui/material/Typography"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { useDispatch } from "react-redux"
import { changeCart } from "@/app/redux/cart/cartSlice"
import { cart } from "../../static/cart"
import { favourites, favouritesBlue } from "../../static/favourites"
import { favouritesTeal } from "../../static/favouritesTeal"
import { useEffect, useState } from "react"
import Slider from "react-slick"

const AboutProduct = ({ product }) => {
    const [windowWidth, setWindowWidth] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        const handleResize = () => {
            // Function to handle window resize
            setWindowWidth(document ? document.documentElement.clientWidth : 0)
            // You can add your logic here to handle the resize event
        }

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            {windowWidth >= 1280 && (
                <Grid
                    container
                    direction="column"
                    sx={{
                        display: "flex",
                        rowGap: 2,
                        flex: "1 1 0",

                        py: "45px",
                    }}
                >
                    <Box
                        sx={{
                            width: { lg: 451 },
                            height: "323px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: Colors.paper,
                        }}
                    >
                        {product.image_path !== null ? (
                            <img
                                src={product.image_path}
                                alt=""
                                style={{ width: "auto", height: "100%" }}
                            />
                        ) : (
                            <svg
                                width="200"
                                height="217"
                                viewBox="0 0 200 217"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M65.2436 139.986L64.2358 107.586L62.8943 106.795C59.156 116.222 57.1663 126.32 57.0272 136.465L65.2436 139.986Z"
                                    fill="#706F6F"
                                    stroke="#706F6F"
                                    stroke-width="3.47755"
                                />
                                <path
                                    d="M129.782 139.833L130.79 107.433L132.131 106.642C135.869 116.069 137.859 126.166 137.998 136.312L129.782 139.833Z"
                                    fill="#706F6F"
                                    stroke="#706F6F"
                                    stroke-width="3.47755"
                                />
                                <path
                                    d="M129.65 133.527H115.211H110.196L97.3448 153.119L104.443 162.601H129.65V133.527Z"
                                    fill="#D9D9D9"
                                    stroke="#706F6F"
                                    stroke-width="3.47755"
                                />
                                <path
                                    d="M65.7817 133.527H110.193L90.9257 162.601H65.7817V133.527Z"
                                    fill="#F3F3F3"
                                    stroke="#706F6F"
                                    stroke-width="3.47755"
                                />
                                <path
                                    d="M144.408 82.7884V105.09H131.388H129.649V106.828V133.271C108.392 131.599 87.0362 131.599 65.779 133.271V106.828V105.09H64.0402H49.5396V82.8059L64.2379 81.1245L65.779 80.9482V79.397V63.7238C86.9835 61.0262 108.444 61.0262 129.649 63.7238V79.397V80.9306L131.171 81.1222L144.408 82.7884Z"
                                    fill="#F3F3F3"
                                    stroke="#706F6F"
                                    stroke-width="3.47755"
                                />
                                <path
                                    d="M111.102 116.592H83.8283V118.734L111.102 116.874V116.592Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M145.794 81.4351V107.047C113.331 103.756 80.6178 103.756 48.1544 107.047V81.4351C80.5567 77.1015 113.392 77.1015 145.794 81.4351Z"
                                    fill="#D9D9D9"
                                    stroke="#706F6F"
                                    stroke-width="3.47674"
                                />
                                <path
                                    d="M151.922 45.8589C181.014 76.0357 180.136 124.083 149.959 153.176C119.782 182.268 71.7347 181.389 42.6421 151.213C13.5494 121.036 14.4283 72.9886 44.605 43.896C74.7818 14.8034 122.829 15.6822 151.922 45.8589ZM53.2768 140.96C76.7071 165.263 115.403 165.971 139.706 142.541C164.01 119.111 164.717 80.4149 141.287 56.1116C117.857 31.8082 79.161 31.1004 54.8577 54.5307C30.5543 77.961 29.8465 116.657 53.2768 140.96Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M138.897 151.643L149.734 141.194L193.883 186.988C196.768 189.981 196.681 194.746 193.689 197.631C190.696 200.516 185.931 200.429 183.046 197.436L138.897 151.643Z"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="14.4062"
                                    y="30.1104"
                                    width="17.1901"
                                    height="17.1901"
                                    rx="3.76349"
                                    transform="rotate(-33.2688 14.4062 30.1104)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="56.5117"
                                    y="193.798"
                                    width="17.1901"
                                    height="17.1901"
                                    rx="3.76349"
                                    transform="rotate(-43.5156 56.5117 193.798)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="160.314"
                                    y="17.1553"
                                    width="33.6261"
                                    height="33.6261"
                                    rx="6.27249"
                                    transform="rotate(-6.17362 160.314 17.1553)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="182.508"
                                    y="125.894"
                                    width="20.2478"
                                    height="20.2478"
                                    rx="3.76349"
                                    transform="rotate(30.2377 182.508 125.894)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="2.18955"
                                    y="172.913"
                                    width="42.4647"
                                    height="42.4647"
                                    rx="4.39074"
                                    transform="rotate(-10.3631 2.18955 172.913)"
                                    stroke="#706F6F"
                                    stroke-width="3.76349"
                                />
                                <rect
                                    x="129.209"
                                    y="20.8166"
                                    width="21.3895"
                                    height="21.3895"
                                    rx="2.81566"
                                    transform="rotate(-66.1744 129.209 20.8166)"
                                    stroke="#706F6F"
                                    stroke-width="1.89567"
                                />
                            </svg>
                        )}
                    </Box>
                    {product.images.length > 0 && (
                        <Grid
                            container
                            sx={{
                                width: {
                                    lg: 451,
                                },
                                overflow: "hidden",
                                height: "80px",
                            }}
                        >
                            {(product.images || []).map((url, id) => (
                                <Box
                                    key={product.title + id}
                                    sx={{
                                        width: { sm: 140 },
                                        height: 80,
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        display: "flex",
                                        alignItems: "center",
                                        background: Colors.light,
                                    }}
                                >
                                    <img
                                        src={url}
                                        alt=""
                                        style={{
                                            width: 140,
                                            height: "auto",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Grid>
                    )}
                </Grid>
            )}
            <Grid
                container
                direction="column"
                sx={{
                    px: { xs: "0px", lg: "54px" },
                    py: { xs: "0px", lg: "45px" },
                    flex: "2 1 0",
                }}
            >
                <Grid
                    container
                    rowGap={2}
                    sx={{
                        borderBottom: `2px solid ${Colors.white}`,
                        flexDirection: { xs: "column", lg: "row" },
                        pb: "24px",
                    }}
                >
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            flex: "2 1 0",
                            rowGap: "12px",
                            justifyContent: { xs: "center", lg: "normal" },
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: "20px", lg: "30px" },
                                fontWeight: 600,
                                lineHeight: { xs: "22px", lg: "36.31px" },
                                color: Colors.black,
                            }}
                        >
                            {product.title}
                        </Box>
                        <Grid
                            container
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 500,
                                    lineHeight: "14.52px",
                                    color: Colors.grey,
                                }}
                            >
                                Штрихкод {product.code}
                            </Box>
                            {windowWidth < 1280 && (
                                <Box
                                    sx={{
                                        width: "24px",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {favouritesBlue}
                                </Box>
                            )}
                        </Grid>
                    </Grid>

                    {windowWidth < 1280 && (
                        <Box
                            sx={{
                                width: { xs: "360" },
                                height: "fit-content",
                                py: "24px",
                                "& .slick-list": {
                                    overflow: "hidden",
                                },
                            }}
                        >
                            {product.image_path !== null ? (
                                <Slider {...settings}>
                                    {product.images.map((link) => (
                                        <Box
                                            sx={{
                                                overflow: "hidden",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                background: Colors.paper,
                                                borderRadius: "15px",
                                                width: "300px",
                                                height: "300px",
                                            }}
                                        >
                                            <img
                                                src={link}
                                                alt="images"
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform:
                                                        "translate(-50%,-50%)",
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Slider>
                            ) : (
                                <svg
                                    width="200"
                                    height="217"
                                    viewBox="0 0 200 217"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M65.2436 139.986L64.2358 107.586L62.8943 106.795C59.156 116.222 57.1663 126.32 57.0272 136.465L65.2436 139.986Z"
                                        fill="#706F6F"
                                        stroke="#706F6F"
                                        stroke-width="3.47755"
                                    />
                                    <path
                                        d="M129.782 139.833L130.79 107.433L132.131 106.642C135.869 116.069 137.859 126.166 137.998 136.312L129.782 139.833Z"
                                        fill="#706F6F"
                                        stroke="#706F6F"
                                        stroke-width="3.47755"
                                    />
                                    <path
                                        d="M129.65 133.527H115.211H110.196L97.3448 153.119L104.443 162.601H129.65V133.527Z"
                                        fill="#D9D9D9"
                                        stroke="#706F6F"
                                        stroke-width="3.47755"
                                    />
                                    <path
                                        d="M65.7817 133.527H110.193L90.9257 162.601H65.7817V133.527Z"
                                        fill="#F3F3F3"
                                        stroke="#706F6F"
                                        stroke-width="3.47755"
                                    />
                                    <path
                                        d="M144.408 82.7884V105.09H131.388H129.649V106.828V133.271C108.392 131.599 87.0362 131.599 65.779 133.271V106.828V105.09H64.0402H49.5396V82.8059L64.2379 81.1245L65.779 80.9482V79.397V63.7238C86.9835 61.0262 108.444 61.0262 129.649 63.7238V79.397V80.9306L131.171 81.1222L144.408 82.7884Z"
                                        fill="#F3F3F3"
                                        stroke="#706F6F"
                                        stroke-width="3.47755"
                                    />
                                    <path
                                        d="M111.102 116.592H83.8283V118.734L111.102 116.874V116.592Z"
                                        fill="#706F6F"
                                    />
                                    <path
                                        d="M145.794 81.4351V107.047C113.331 103.756 80.6178 103.756 48.1544 107.047V81.4351C80.5567 77.1015 113.392 77.1015 145.794 81.4351Z"
                                        fill="#D9D9D9"
                                        stroke="#706F6F"
                                        stroke-width="3.47674"
                                    />
                                    <path
                                        d="M151.922 45.8589C181.014 76.0357 180.136 124.083 149.959 153.176C119.782 182.268 71.7347 181.389 42.6421 151.213C13.5494 121.036 14.4283 72.9886 44.605 43.896C74.7818 14.8034 122.829 15.6822 151.922 45.8589ZM53.2768 140.96C76.7071 165.263 115.403 165.971 139.706 142.541C164.01 119.111 164.717 80.4149 141.287 56.1116C117.857 31.8082 79.161 31.1004 54.8577 54.5307C30.5543 77.961 29.8465 116.657 53.2768 140.96Z"
                                        fill="#706F6F"
                                    />
                                    <path
                                        d="M138.897 151.643L149.734 141.194L193.883 186.988C196.768 189.981 196.681 194.746 193.689 197.631C190.696 200.516 185.931 200.429 183.046 197.436L138.897 151.643Z"
                                        fill="#706F6F"
                                    />
                                    <rect
                                        x="14.4062"
                                        y="30.1104"
                                        width="17.1901"
                                        height="17.1901"
                                        rx="3.76349"
                                        transform="rotate(-33.2688 14.4062 30.1104)"
                                        fill="#706F6F"
                                    />
                                    <rect
                                        x="56.5117"
                                        y="193.798"
                                        width="17.1901"
                                        height="17.1901"
                                        rx="3.76349"
                                        transform="rotate(-43.5156 56.5117 193.798)"
                                        fill="#706F6F"
                                    />
                                    <rect
                                        x="160.314"
                                        y="17.1553"
                                        width="33.6261"
                                        height="33.6261"
                                        rx="6.27249"
                                        transform="rotate(-6.17362 160.314 17.1553)"
                                        fill="#706F6F"
                                    />
                                    <rect
                                        x="182.508"
                                        y="125.894"
                                        width="20.2478"
                                        height="20.2478"
                                        rx="3.76349"
                                        transform="rotate(30.2377 182.508 125.894)"
                                        fill="#706F6F"
                                    />
                                    <rect
                                        x="2.18955"
                                        y="172.913"
                                        width="42.4647"
                                        height="42.4647"
                                        rx="4.39074"
                                        transform="rotate(-10.3631 2.18955 172.913)"
                                        stroke="#706F6F"
                                        stroke-width="3.76349"
                                    />
                                    <rect
                                        x="129.209"
                                        y="20.8166"
                                        width="21.3895"
                                        height="21.3895"
                                        rx="2.81566"
                                        transform="rotate(-66.1744 129.209 20.8166)"
                                        stroke="#706F6F"
                                        stroke-width="1.89567"
                                    />
                                </svg>
                            )}
                        </Box>
                    )}

                    <Grid
                        sx={{
                            px: "54px",
                            flex: "1 1 0",
                        }}
                        container
                        direction={"column"}
                        rowGap={"8px"}
                    >
                        {windowWidth >= 1280 ? (
                            <>
                                <Box
                                    sx={{
                                        borderRadius: "10px",
                                        fontSize: "35px",
                                        fontWeight: 800,
                                        lineHeight: "42.36px",

                                        color: Colors.neutral,

                                        minWidth: { sm: 250 },

                                        textAlign: "left",
                                    }}
                                >
                                    {product.price + "₴"}
                                </Box>

                                <Grid
                                    container
                                    sx={{
                                        columnGap: "10px",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            borderRadius: "10px",
                                            display: "flex",
                                            alignItems: "center",

                                            color: Colors.white,
                                            background: Colors.neutral,
                                            fontSize: "20px",
                                            fontWeight: 500,
                                            lineHeight: "24.2px",
                                            py: "11px",
                                            pr: "42px",
                                            pl: "36px",
                                            justifyContent: "start",
                                            textAlign: "center",
                                            columnGap: 2,
                                            cursor: "pointer",
                                            ":hover": {
                                                background: Colors.lightGreen,
                                            },
                                        }}
                                        onClick={() => {
                                            dispatch(
                                                changeCart({
                                                    type: "ADD_ITEM",
                                                    payload: product,
                                                })
                                            )
                                        }}
                                    >
                                        {cart}
                                        Купити
                                    </Box>
                                    <Box
                                        sx={{
                                            width: "39px",
                                            height: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {favouritesBlue}
                                    </Box>
                                </Grid>
                            </>
                        ) : (
                            <Box
                                sx={{
                                    background: Colors.paper,
                                    width: "100%",
                                    height: 80,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "fixed",
                                    top: "calc(100svh - 160px)",
                                    left: 0,
                                    zIndex: 302,
                                }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        justifyContent: "space-between",
                                        width: "360px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            borderRadius: "15px",
                                            fontSize: "24px",
                                            fontWeight: 800,
                                            lineHeight: "42.36px",
                                            p: "8px 21px",
                                            color: Colors.neutral,
                                            display: "flex",
                                            alignItems: "center",
                                            border: `1px solid ${Colors.neutral}`,
                                            textAlign: "center",
                                        }}
                                    >
                                        {parseInt(product.price) + "₴"}
                                    </Box>

                                    <Box
                                        sx={{
                                            borderRadius: "15px",
                                            display: "flex",
                                            alignItems: "center",

                                            color: Colors.white,
                                            background: Colors.neutral,
                                            fontSize: "20px",
                                            fontWeight: 500,
                                            lineHeight: "24.2px",
                                            py: "11px",
                                            pr: "42px",
                                            pl: "36px",
                                            justifyContent: "start",
                                            textAlign: "center",
                                            columnGap: 2,
                                            cursor: "pointer",
                                            ":hover": {
                                                background: Colors.lightGreen,
                                            },
                                        }}
                                        onClick={() => {
                                            dispatch(
                                                changeCart({
                                                    type: "ADD_ITEM",
                                                    payload: product,
                                                })
                                            )
                                        }}
                                    >
                                        {cart}
                                        Купити
                                    </Box>
                                </Grid>
                            </Box>
                        )}
                        <Box
                            sx={{
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: Colors.maxDark,
                                border: `2px solid ${Colors.neutral}`,
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "16.94px",
                                py: "11px",
                                px: "37.5px",
                                textAlign: "center",
                                columnGap: 2,
                            }}
                        >
                            Оплата частинами
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        py: "24px",
                        flexDirection: { xs: "column-reverse", lg: "row" },
                        rowGap: { xs: "32px", lg: "0px" },
                    }}
                >
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            flex: "2 1 0",
                            rowGap: "24px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                columnGap: "8px",

                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "16.94px",
                                color: Colors.grey,
                            }}
                        >
                            <svg
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.80658 10.9604H7.37282C7.31764 11.4388 7.51756 11.9205 7.91395 12.2178L8.50546 12.6614L10.425 14.0051H11.6951C12.2146 14.0051 12.7081 14.2321 13.0462 14.6265C13.4811 15.1339 14.1161 15.4259 14.7844 15.4259H14.8668C15.4819 15.4259 15.9805 14.9273 15.9805 14.3123V13.9954C15.9805 13.8052 16.0248 13.6177 16.1098 13.4477L16.8353 11.9967L17.3534 10.9604H12.6011C12.7909 10.7007 12.984 10.4286 13.1748 10.1484H18.0103H18.3078L18.3974 10.4322L20.8332 18.1454L21 18.6736H20.4461H0.553922H0L0.166803 18.1454L1.38469 14.2888L2.60258 10.4322L2.69217 10.1484H2.9897H7.04932H8.23282C8.42362 10.4286 8.61675 10.7007 8.80658 10.9604ZM2.30566 14.0687L3.28722 10.9604H6.55747C6.5048 11.6902 6.82202 12.4137 7.42679 12.8673L8.02363 13.3149L8.0235 13.3151L8.0344 13.3228L9.83852 14.5856C9.55075 15.5516 8.65816 16.2379 7.63704 16.2379H7.59761C7.2948 16.2379 7.04932 15.9924 7.04932 15.6896C7.04932 15.1023 6.61202 14.6069 6.02928 14.5341L2.30566 14.0687ZM17.5615 12.3598L17.9251 11.6326L19.8922 17.8617H1.10784L2.05708 14.8558L5.92858 15.3398C6.105 15.3618 6.23739 15.5118 6.23739 15.6896C6.23739 16.4408 6.84638 17.0498 7.59761 17.0498H7.63704C9.02551 17.0498 10.2289 16.1197 10.6168 14.817H11.6951C11.9776 14.817 12.2459 14.9404 12.4297 15.1549C13.0189 15.8423 13.8791 16.2379 14.7844 16.2379H14.8668C15.9303 16.2379 16.7924 15.3757 16.7924 14.3123V13.9954C16.7924 13.9313 16.8073 13.8681 16.836 13.8108L17.5615 12.3598Z"
                                    fill="#0C4178"
                                />
                                <path
                                    d="M3.24718 10.5547H6.90084L7.30681 12.1785L8.93066 13.3964L10.1485 14.6143L9.33662 16.2382L7.30681 16.6441L6.49488 15.0203L2.0293 14.6143L3.24718 10.5547Z"
                                    fill="#0C4178"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.7029 12.5231C10.7029 12.5231 15.1685 7.50723 15.1685 4.83625C15.1685 2.16526 13.1692 0 10.7029 0C8.23662 0 6.2373 2.16526 6.2373 4.83625C6.2373 7.50723 10.7029 12.5231 10.7029 12.5231ZM10.6537 7.7663C12.4498 7.7663 13.9058 6.31028 13.9058 4.51419C13.9058 2.7181 12.4498 1.26208 10.6537 1.26208C8.85763 1.26208 7.40161 2.7181 7.40161 4.51419C7.40161 6.31028 8.85763 7.7663 10.6537 7.7663Z"
                                    fill="#0C4178"
                                />
                            </svg>
                            Доставка&nbsp;<a href="#">у Черкаси</a>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "16.94px",
                                color: Colors.grey,
                            }}
                        >
                            <Box sx={{ display: "flex", columnGap: "8px" }}>
                                <svg
                                    width="23"
                                    height="18"
                                    viewBox="0 0 23 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.06001 0.92C2.77355 0.92 0.92 2.77354 0.92 5.06V14.72H2.76H2.79797C2.77287 14.8696 2.75981 15.0233 2.75981 15.18C2.75981 15.3367 2.77287 15.4904 2.79797 15.64H2.76H0.46H0V15.18V5.06C0 2.26544 2.26544 0 5.06001 0H14.26H14.72V0.46V5.98H15.5111C17.5875 5.98 19.425 7.2864 20.1205 9.21779C21.7388 9.38785 23 10.7566 23 12.42V15.18V15.64H22.54H21.1214C21.1465 15.4904 21.1596 15.3367 21.1596 15.18C21.1596 15.0233 21.1465 14.8696 21.1214 14.72H22.08V12.42C22.08 11.1497 21.0503 10.12 19.78 10.12H14.72V14.72H15.6778C15.6527 14.8696 15.6396 15.0233 15.6396 15.18C15.6396 15.3367 15.6527 15.4904 15.6778 15.64H14.26H8.24165C8.26675 15.4904 8.27981 15.3367 8.27981 15.18C8.27981 15.0233 8.26675 14.8696 8.24165 14.72H13.8V9.66V6.44V0.92H5.06001ZM14.72 9.2H19.1192C18.4748 7.8142 17.0765 6.9 15.5111 6.9H14.72V9.2Z"
                                        fill="#706F6F"
                                    />
                                    <circle
                                        cx="5.51977"
                                        cy="15.1799"
                                        r="2.3"
                                        stroke="#706F6F"
                                        stroke-width="0.92"
                                    />
                                    <circle
                                        cx="18.3996"
                                        cy="15.1799"
                                        r="2.3"
                                        stroke="#706F6F"
                                        stroke-width="0.92"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.05996 0.460938L1.83996 1.84094L0.459961 4.14094V14.7209H2.75996L3.67996 13.8009L5.51996 12.8809L6.89996 13.3409L8.27996 14.7209H13.8V0.460938H5.05996ZM3.68027 5.98089C3.42622 5.98089 3.22027 6.18684 3.22027 6.44089C3.22027 6.69494 3.42622 6.90089 3.68027 6.90089H11.9603C12.2143 6.90089 12.4203 6.69494 12.4203 6.44089C12.4203 6.18684 12.2143 5.98089 11.9603 5.98089H3.68027ZM3.22027 3.68089C3.22027 3.42684 3.42622 3.22089 3.68027 3.22089H11.9603C12.2143 3.22089 12.4203 3.42684 12.4203 3.68089C12.4203 3.93494 12.2143 4.14089 11.9603 4.14089H3.68027C3.42622 4.14089 3.22027 3.93494 3.22027 3.68089ZM3.68027 9.20089C3.42622 9.20089 3.22027 9.40684 3.22027 9.66089C3.22027 9.91494 3.42622 10.1209 3.68027 10.1209H11.9603C12.2143 10.1209 12.4203 9.91494 12.4203 9.66089C12.4203 9.40684 12.2143 9.20089 11.9603 9.20089H3.68027Z"
                                        fill="#706F6F"
                                    />
                                </svg>
                                Самовивіз з наших магазинів
                            </Box>
                            <Box sx={{ color: Colors.dark }}>Безкоштовно</Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "16.94px",
                                color: Colors.grey,
                            }}
                        >
                            <Box sx={{ display: "flex", columnGap: "8px" }}>
                                <svg
                                    width="23"
                                    height="18"
                                    viewBox="0 0 23 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.06001 0.92C2.77355 0.92 0.92 2.77354 0.92 5.06V14.72H2.76H2.79797C2.77287 14.8696 2.75981 15.0233 2.75981 15.18C2.75981 15.3367 2.77287 15.4904 2.79797 15.64H2.76H0.46H0V15.18V5.06C0 2.26544 2.26544 0 5.06001 0H14.26H14.72V0.46V5.98H15.5111C17.5875 5.98 19.425 7.2864 20.1205 9.21779C21.7388 9.38785 23 10.7566 23 12.42V15.18V15.64H22.54H21.1214C21.1465 15.4904 21.1596 15.3367 21.1596 15.18C21.1596 15.0233 21.1465 14.8696 21.1214 14.72H22.08V12.42C22.08 11.1497 21.0503 10.12 19.78 10.12H14.72V14.72H15.6778C15.6527 14.8696 15.6396 15.0233 15.6396 15.18C15.6396 15.3367 15.6527 15.4904 15.6778 15.64H14.26H8.24165C8.26675 15.4904 8.27981 15.3367 8.27981 15.18C8.27981 15.0233 8.26675 14.8696 8.24165 14.72H13.8V9.66V6.44V0.92H5.06001ZM14.72 9.2H19.1192C18.4748 7.8142 17.0765 6.9 15.5111 6.9H14.72V9.2Z"
                                        fill="#706F6F"
                                    />
                                    <circle
                                        cx="5.51977"
                                        cy="15.1799"
                                        r="2.3"
                                        stroke="#706F6F"
                                        stroke-width="0.92"
                                    />
                                    <circle
                                        cx="18.3996"
                                        cy="15.1799"
                                        r="2.3"
                                        stroke="#706F6F"
                                        stroke-width="0.92"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.05996 0.460938L1.83996 1.84094L0.459961 4.14094V14.7209H2.75996L3.67996 13.8009L5.51996 12.8809L6.89996 13.3409L8.27996 14.7209H13.8V0.460938H5.05996ZM3.68027 5.98089C3.42622 5.98089 3.22027 6.18684 3.22027 6.44089C3.22027 6.69494 3.42622 6.90089 3.68027 6.90089H11.9603C12.2143 6.90089 12.4203 6.69494 12.4203 6.44089C12.4203 6.18684 12.2143 5.98089 11.9603 5.98089H3.68027ZM3.22027 3.68089C3.22027 3.42684 3.42622 3.22089 3.68027 3.22089H11.9603C12.2143 3.22089 12.4203 3.42684 12.4203 3.68089C12.4203 3.93494 12.2143 4.14089 11.9603 4.14089H3.68027C3.42622 4.14089 3.22027 3.93494 3.22027 3.68089ZM3.68027 9.20089C3.42622 9.20089 3.22027 9.40684 3.22027 9.66089C3.22027 9.91494 3.42622 10.1209 3.68027 10.1209H11.9603C12.2143 10.1209 12.4203 9.91494 12.4203 9.66089C12.4203 9.40684 12.2143 9.20089 11.9603 9.20089H3.68027Z"
                                        fill="#706F6F"
                                    />
                                </svg>
                                Курʼєром за вашою адресою сьогодні
                            </Box>
                            <Box sx={{ color: Colors.dark }}>Безкоштовно</Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",

                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "16.94px",
                                color: Colors.grey,
                                justifyContent: "space-between",
                            }}
                        >
                            <Box sx={{ display: "flex", columnGap: "8px" }}>
                                <svg
                                    width="23"
                                    height="18"
                                    viewBox="0 0 23 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.06001 0.92C2.77355 0.92 0.92 2.77354 0.92 5.06V14.72H2.76H2.79797C2.77287 14.8696 2.75981 15.0233 2.75981 15.18C2.75981 15.3367 2.77287 15.4904 2.79797 15.64H2.76H0.46H0V15.18V5.06C0 2.26544 2.26544 0 5.06001 0H14.26H14.72V0.46V5.98H15.5111C17.5875 5.98 19.425 7.2864 20.1205 9.21779C21.7388 9.38785 23 10.7566 23 12.42V15.18V15.64H22.54H21.1214C21.1465 15.4904 21.1596 15.3367 21.1596 15.18C21.1596 15.0233 21.1465 14.8696 21.1214 14.72H22.08V12.42C22.08 11.1497 21.0503 10.12 19.78 10.12H14.72V14.72H15.6778C15.6527 14.8696 15.6396 15.0233 15.6396 15.18C15.6396 15.3367 15.6527 15.4904 15.6778 15.64H14.26H8.24165C8.26675 15.4904 8.27981 15.3367 8.27981 15.18C8.27981 15.0233 8.26675 14.8696 8.24165 14.72H13.8V9.66V6.44V0.92H5.06001ZM14.72 9.2H19.1192C18.4748 7.8142 17.0765 6.9 15.5111 6.9H14.72V9.2Z"
                                        fill="#706F6F"
                                    />
                                    <circle
                                        cx="5.51977"
                                        cy="15.1799"
                                        r="2.3"
                                        stroke="#706F6F"
                                        stroke-width="0.92"
                                    />
                                    <circle
                                        cx="18.3996"
                                        cy="15.1799"
                                        r="2.3"
                                        stroke="#706F6F"
                                        stroke-width="0.92"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.05996 0.460938L1.83996 1.84094L0.459961 4.14094V14.7209H2.75996L3.67996 13.8009L5.51996 12.8809L6.89996 13.3409L8.27996 14.7209H13.8V0.460938H5.05996ZM3.68027 5.98089C3.42622 5.98089 3.22027 6.18684 3.22027 6.44089C3.22027 6.69494 3.42622 6.90089 3.68027 6.90089H11.9603C12.2143 6.90089 12.4203 6.69494 12.4203 6.44089C12.4203 6.18684 12.2143 5.98089 11.9603 5.98089H3.68027ZM3.22027 3.68089C3.22027 3.42684 3.42622 3.22089 3.68027 3.22089H11.9603C12.2143 3.22089 12.4203 3.42684 12.4203 3.68089C12.4203 3.93494 12.2143 4.14089 11.9603 4.14089H3.68027C3.42622 4.14089 3.22027 3.93494 3.22027 3.68089ZM3.68027 9.20089C3.42622 9.20089 3.22027 9.40684 3.22027 9.66089C3.22027 9.91494 3.42622 10.1209 3.68027 10.1209H11.9603C12.2143 10.1209 12.4203 9.91494 12.4203 9.66089C12.4203 9.40684 12.2143 9.20089 11.9603 9.20089H3.68027Z"
                                        fill="#706F6F"
                                    />
                                </svg>
                                Доставка у відділення “Нова пошта”
                            </Box>

                            <Box sx={{ color: Colors.dark }}>Безкоштовно</Box>
                        </Box>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            flex: "1 1 0",
                            justifyContent: "space-between",
                            rowGap: { xs: "12px", lg: "0px" },
                            pr: { xs: "0px", lg: "72px" },
                            pl: { xs: "0px", lg: "54px" },
                        }}
                    >
                        <Box sx={{ display: "flex", columnGap: "10px" }}>
                            <svg
                                width="26"
                                height="32"
                                viewBox="0 0 26 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.42 2.95231C0.42 2.29315 0.917661 1.74037 1.5732 1.67138L2.54286 1.56933C9.7855 0.807095 17.0899 0.841624 24.325 1.67229C24.9051 1.73889 25.3429 2.22991 25.3429 2.81377V28.6985L13.4415 28.7033H13.4414H0.42V2.95231Z"
                                    stroke="#706F6F"
                                    stroke-width="0.84"
                                />
                                <path
                                    d="M0 27.626C8.56576 26.7591 17.1972 26.7591 25.7629 27.626V29.122C25.7629 30.3591 24.76 31.3621 23.5229 31.3622L12.8815 31.3628H2.24021C1.00298 31.3628 0 30.3599 0 29.1226V27.626Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M8.96094 3.73303L9.92993 3.64116C11.8932 3.45502 13.8696 3.45502 15.8328 3.64116L16.8018 3.73303V4.48105L12.8814 4.20367L8.96094 4.48146V3.73303Z"
                                    fill="#706F6F"
                                />
                            </svg>
                            <Grid
                                container
                                sx={{
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        lineHeight: "14.52px",
                                        color: Colors.grey,
                                    }}
                                >
                                    Стан товару
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        lineHeight: "16.94px",
                                        color: Colors.dark,
                                    }}
                                >
                                    10/10
                                </Box>
                            </Grid>
                        </Box>

                        <Box sx={{ display: "flex", columnGap: "10px" }}>
                            <svg
                                width="26"
                                height="32"
                                viewBox="0 0 26 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 29.5279V2.70314C1 1.76252 1.76252 1 2.70314 1H23.4817C24.4223 1 25.1848 1.76252 25.1848 2.70314V29.5279C25.1848 30.4685 24.4223 31.2311 23.4817 31.2311H2.70314C1.76252 31.2311 1 30.4685 1 29.5279Z"
                                    stroke="#706F6F"
                                    stroke-width="0.840461"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M18.4386 21.9032L18.5917 16.4682C19.1527 18.073 19.4534 19.7568 19.4828 21.4557L18.4386 21.9032Z"
                                    fill="#706F6F"
                                    stroke="#706F6F"
                                    stroke-width="0.840461"
                                />
                                <path
                                    d="M7.55079 16.3106L7.55057 16.3112C6.99042 17.9414 6.69061 19.6491 6.66165 21.3715L7.70596 21.819L7.55079 16.3106Z"
                                    fill="#706F6F"
                                    stroke="#706F6F"
                                    stroke-width="0.840461"
                                />
                                <path
                                    d="M18.1237 20.5198H15.9285H15.1928L13.2098 23.543L14.2572 24.942H18.1237V20.5198Z"
                                    stroke="#706F6F"
                                    stroke-width="0.840461"
                                />
                                <path
                                    d="M8.07648 20.5198H14.8583L11.9277 24.942H8.07648V20.5198Z"
                                    stroke="#706F6F"
                                    stroke-width="0.840461"
                                />
                                <path
                                    d="M18.5765 12.0485L20.7331 11.878V15.644H18.5433H18.1231V16.0643V20.1888C14.7789 19.9334 11.4201 19.9334 8.07585 20.1888V16.0643V15.644H7.65562H5.4505V11.8778L7.62271 12.0485L8.07585 12.0841V11.6296V9.21849C11.4121 8.80424 14.7868 8.80424 18.1231 9.21849V11.6296V12.0843L18.5765 12.0485Z"
                                    stroke="#706F6F"
                                    stroke-width="0.840461"
                                />
                                <path
                                    d="M10.8555 17.6426H15.2648V17.9888L10.8555 17.6881V17.6426Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M12.8049 14.2558L13.083 14.0216L13.3548 14.2631L14.8997 15.6364H20.6997V11.8987C15.6294 12.4022 10.5218 12.4022 5.45148 11.8987V15.6364H11.1654L12.8049 14.2558Z"
                                    stroke="#706F6F"
                                    stroke-width="0.840461"
                                />
                            </svg>

                            <Grid container sx={{ flexDirection: "column" }}>
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        lineHeight: "14.52px",
                                        color: Colors.grey,
                                    }}
                                >
                                    Комплектація
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        lineHeight: "16.94px",
                                        color: Colors.dark,
                                    }}
                                >
                                    Новий зарядний пристрій
                                </Box>
                            </Grid>
                        </Box>

                        <Box sx={{ display: "flex", columnGap: "10px" }}>
                            <svg
                                width="26"
                                height="31"
                                viewBox="0 0 26 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.1765 0.750561L12.8815 0.4862L13.5864 0.750561C16.8515 1.97497 20.3102 2.60215 23.7974 2.60215H25.3077V4.93507C25.3077 13.0793 21.9522 20.8637 16.0313 26.4558L12.8815 29.4306L9.73166 26.4558C3.8107 20.8637 0.455243 13.0793 0.455243 4.93507V2.60215H1.96558C5.45271 2.60215 8.91141 1.97497 12.1765 0.750561Z"
                                    stroke="#706F6F"
                                    stroke-width="0.910487"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M8.58789 12.8807L12.8817 17.1746L20.0381 8.58691"
                                    stroke="#706F6F"
                                    stroke-width="0.910487"
                                    stroke-linecap="round"
                                />
                            </svg>

                            <Grid container sx={{ flexDirection: "column" }}>
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        lineHeight: "14.52px",
                                        color: Colors.grey,
                                    }}
                                >
                                    Гарантія якості
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        lineHeight: "16.94px",
                                        color: Colors.dark,
                                    }}
                                >
                                    Перевірка проведена
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{
                        flexDirection: "column",
                        rowGap: "14px",
                        fontSize: "14px",
                        fontHeight: 500,
                        lineHeight: "16.94px",
                    }}
                >
                    <Box sx={{ color: Colors.grey }}>Приймаємо:</Box>
                    <Grid
                        container
                        sx={{ alignItems: "center", columnGap: "8px" }}
                    >
                        <svg
                            width="49"
                            height="32"
                            viewBox="0 0 49 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="49.0022"
                                height="31.3024"
                                rx="5"
                                fill="#F3F3F3"
                            />
                            <path
                                d="M23.2033 15.443V19.9546H21.7715V8.81348H25.5672C26.5292 8.81348 27.3495 9.13414 28.0206 9.77546C28.7067 10.4168 29.0497 11.1998 29.0497 12.1245C29.0497 13.0716 28.7067 13.8546 28.0206 14.4884C27.3569 15.1223 26.5367 15.4355 25.5672 15.4355H23.2033V15.443ZM23.2033 10.1856V14.0708H25.597C26.1638 14.0708 26.6411 13.8769 27.0139 13.4966C27.3942 13.1163 27.5881 12.6539 27.5881 12.1319C27.5881 11.6174 27.3942 11.1625 27.0139 10.7822C26.6411 10.387 26.1712 10.1931 25.597 10.1931H23.2033V10.1856Z"
                                fill="#3C4043"
                            />
                            <path
                                d="M32.7927 12.0811C33.8516 12.0811 34.6869 12.3644 35.2983 12.9312C35.9098 13.4979 36.2156 14.2735 36.2156 15.2578V19.9559H34.8509V18.897H34.7913C34.2021 19.7695 33.4117 20.202 32.4273 20.202C31.5846 20.202 30.8837 19.9559 30.3169 19.4563C29.7502 18.9566 29.4668 18.3377 29.4668 17.5919C29.4668 16.8015 29.7651 16.1751 30.3617 15.7127C30.9582 15.2429 31.7562 15.0117 32.748 15.0117C33.5981 15.0117 34.2991 15.1683 34.8435 15.4815V15.1534C34.8435 14.6538 34.6496 14.2362 34.2543 13.8857C33.8591 13.5352 33.3968 13.3637 32.8673 13.3637C32.0694 13.3637 31.4355 13.6993 30.9732 14.3779L29.7129 13.5874C30.4064 12.5807 31.4355 12.0811 32.7927 12.0811ZM30.9433 17.6143C30.9433 17.9872 31.0999 18.3004 31.4206 18.5465C31.7338 18.7926 32.1067 18.9193 32.5317 18.9193C33.1358 18.9193 33.6727 18.6956 34.1425 18.2482C34.6123 17.8007 34.8509 17.2787 34.8509 16.6747C34.4035 16.3242 33.7845 16.1452 32.9866 16.1452C32.4049 16.1452 31.9202 16.2869 31.5324 16.5628C31.1372 16.8537 30.9433 17.2042 30.9433 17.6143Z"
                                fill="#3C4043"
                            />
                            <path
                                d="M44.0021 12.3257L39.2295 23.3027H37.753L39.5278 19.4622L36.3809 12.3257H37.9394L40.2064 17.7993H40.2362L42.4436 12.3257H44.0021Z"
                                fill="#3C4043"
                            />
                            <path
                                d="M17.5076 14.533C17.5076 14.0662 17.4658 13.6195 17.3883 13.1899H11.3867V15.6508L14.8431 15.6516C14.7029 16.4704 14.2518 17.1684 13.5605 17.6337V19.2303H15.6179C16.8193 18.1184 17.5076 16.4748 17.5076 14.533Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M13.562 17.634C12.9893 18.0203 12.2517 18.2463 11.3889 18.2463C9.72225 18.2463 8.30836 17.1232 7.80201 15.6094H5.67969V17.2559C6.73116 19.3425 8.89226 20.7743 11.3889 20.7743C13.1145 20.7743 14.5642 20.2068 15.6194 19.2299L13.562 17.634Z"
                                fill="#34A853"
                            />
                            <path
                                d="M7.60182 14.3869C7.60182 13.9618 7.67267 13.5509 7.80168 13.1646V11.5181H5.67935C5.2446 12.3809 5 13.3548 5 14.3869C5 15.4189 5.24534 16.3929 5.67935 17.2557L7.80168 15.6091C7.67267 15.2228 7.60182 14.8119 7.60182 14.3869Z"
                                fill="#FABB05"
                            />
                            <path
                                d="M11.3889 10.528C12.3308 10.528 13.1742 10.8524 13.8401 11.4863L15.6634 9.66445C14.556 8.63312 13.1123 8 11.3889 8C8.89301 8 6.73116 9.43179 5.67969 11.5183L7.80201 13.1649C8.30836 11.6511 9.72225 10.528 11.3889 10.528Z"
                                fill="#E94235"
                            />
                        </svg>

                        <svg
                            width="48"
                            height="31"
                            viewBox="0 0 48 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="47.8969"
                                height="31"
                                rx="5"
                                fill="#F3F3F3"
                            />
                            <path
                                d="M12.1829 10.0788C12.6303 9.51917 12.9339 8.7678 12.8539 8C12.1989 8.03257 11.3997 8.43207 10.937 8.9921C10.5216 9.47168 10.1539 10.2545 10.2497 10.9901C10.9849 11.0539 11.7194 10.6226 12.1829 10.0788Z"
                                fill="black"
                            />
                            <path
                                d="M12.8445 11.1351C11.7768 11.0715 10.8691 11.7411 10.3592 11.7411C9.84905 11.7411 9.06829 11.1672 8.22383 11.1826C7.12471 11.1988 6.10486 11.8202 5.5471 12.8086C4.39989 14.7859 5.24435 17.7189 6.35995 19.3293C6.90171 20.126 7.55463 21.0032 8.41494 20.9717C9.22779 20.9398 9.5464 20.4454 10.5345 20.4454C11.5218 20.4454 11.8088 20.9717 12.6692 20.9558C13.5615 20.9398 14.1194 20.1587 14.6611 19.3612C15.2826 18.453 15.5371 17.576 15.5531 17.5279C15.5371 17.5119 13.8324 16.858 13.8166 14.8972C13.8005 13.2553 15.155 12.4744 15.2187 12.4259C14.4538 11.2947 13.2588 11.1672 12.8445 11.1351Z"
                                fill="black"
                            />
                            <path
                                d="M22.0365 8.91016C24.357 8.91016 25.9729 10.5097 25.9729 12.8386C25.9729 15.1757 24.3238 16.7836 21.9783 16.7836H19.409V20.8695H17.5527V8.91016L22.0365 8.91016ZM19.409 15.2254H21.539C23.1552 15.2254 24.075 14.3553 24.075 12.8469C24.075 11.3386 23.1552 10.4766 21.5473 10.4766H19.409V15.2254Z"
                                fill="black"
                            />
                            <path
                                d="M26.457 18.3904C26.457 16.8654 27.6256 15.9289 29.6977 15.8129L32.0844 15.672V15.0008C32.0844 14.031 31.4297 13.4509 30.3359 13.4509C29.2997 13.4509 28.6532 13.9481 28.4959 14.7272H26.8052C26.9046 13.1525 28.2471 11.9922 30.4021 11.9922C32.5154 11.9922 33.8662 13.1111 33.8662 14.8598V20.8684H32.1506V19.4347H32.1094C31.6039 20.4044 30.5015 21.0176 29.3579 21.0176C27.6505 21.0176 26.457 19.9568 26.457 18.3904ZM32.0844 17.6031V16.9153L29.9378 17.0478C28.8687 17.1224 28.2638 17.5948 28.2638 18.3407C28.2638 19.1031 28.8936 19.6004 29.855 19.6004C31.1064 19.6004 32.0844 18.7385 32.0844 17.6031Z"
                                fill="black"
                            />
                            <path
                                d="M35.487 24.0786V22.6282C35.6193 22.6613 35.9176 22.6613 36.0669 22.6613C36.8957 22.6613 37.3433 22.3132 37.6166 21.4182C37.6166 21.4016 37.7743 20.8878 37.7743 20.8795L34.625 12.1523H36.5641L38.7689 19.2468H38.8018L41.0066 12.1523H42.8962L39.6306 21.3269C38.885 23.4404 38.023 24.12 36.2163 24.12C36.0669 24.12 35.6193 24.1034 35.487 24.0786Z"
                                fill="black"
                            />
                        </svg>

                        <svg
                            width="49"
                            height="31"
                            viewBox="0 0 49 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="49"
                                height="31"
                                rx="5"
                                fill="#F3F3F3"
                            />
                            <path
                                d="M24.5521 4C30.8742 4 35.9988 9.12458 35.9988 15.4467C35.9988 21.7688 30.8742 26.8933 24.5521 26.8933C18.23 26.8933 13.1055 21.7688 13.1055 15.4467C13.1055 9.12458 18.23 4 24.5521 4Z"
                                fill="url(#paint0_linear_103_2409)"
                            />
                            <path
                                d="M24.5 4C18.1488 4 13 9.14882 13 15.5C13 21.8512 18.1488 27 24.5 27C30.8512 27 36 21.8512 36 15.5C36 9.14882 30.8512 4 24.5 4ZM24.5 25.7346C18.847 25.7346 14.2654 21.153 14.2654 15.5C14.2654 9.84696 18.847 5.26539 24.5 5.26539C30.153 5.26539 34.7346 9.84696 34.7346 15.5C34.7346 21.153 30.153 25.7346 24.5 25.7346Z"
                                fill="#8CBF5C"
                            />
                            <path
                                d="M28.5147 12.8875L25.95 16.6885H28.5147V12.8875ZM29.4892 11.3506V16.6933H30.6188V17.6581H29.4892V19.6556H28.5147V17.6581H24.893V16.6158L28.5438 11.3506H29.4892ZM23.8167 18.6811V19.6508H18.3867V19.6217C18.4352 18.7102 18.6728 18.046 19.1237 17.4981C19.4921 17.0473 19.9382 16.7079 20.8545 16.1358C20.8496 16.1358 21.1793 15.9322 21.2714 15.874C21.7659 15.5588 22.0811 15.3116 22.3283 15.0255C22.6435 14.6619 22.8083 14.2644 22.8083 13.7989C22.8083 12.8923 22.1683 12.2669 21.2423 12.2669C20.166 12.2669 19.6133 13.0863 19.5842 14.3129V14.3371H18.6194V14.3129L18.6097 14.0898C18.6097 12.4463 19.6812 11.3506 21.2908 11.3506C22.8665 11.3506 23.8895 12.3057 23.8895 13.7747C23.8895 14.5262 23.618 15.1322 23.104 15.6752C22.7113 16.0825 22.3138 16.3588 21.412 16.9067C21.4023 16.9115 21.3878 16.9212 21.3732 16.9309C21.3296 16.9551 21.1357 17.0715 21.0775 17.1054C20.646 17.3624 20.3842 17.5466 20.1515 17.7696C19.8654 18.0411 19.6812 18.3417 19.5891 18.6908H23.8167V18.6811Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_103_2409"
                                    x1="13.1055"
                                    y1="15.4467"
                                    x2="35.9988"
                                    y2="15.4467"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#313131" />
                                    <stop offset="1" stop-color="#0E0F0F" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg
                            width="48"
                            height="31"
                            viewBox="0 0 48 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="47.9977"
                                height="31"
                                rx="5"
                                fill="#F3F3F3"
                            />
                            <path
                                d="M27.5168 8.71973H20.4893V21.347H27.5168V8.71973Z"
                                fill="#FF5F00"
                            />
                            <path
                                d="M20.934 15.0334C20.934 12.5793 22.0718 10.2368 23.9904 8.7197C20.5101 5.97561 15.4458 6.57797 12.7017 10.0806C9.97993 13.5609 10.5823 18.6029 14.0849 21.347C17.0075 23.6449 21.0902 23.6449 24.0127 21.347C22.0718 19.8299 20.934 17.4874 20.934 15.0334Z"
                                fill="#EB001B"
                            />
                            <path
                                d="M36.9979 15.0334C36.9979 19.473 33.4061 23.0648 28.9664 23.0648C27.1593 23.0648 25.4192 22.4625 24.0137 21.347C27.494 18.6029 28.0963 13.5609 25.3523 10.0583C24.9507 9.56747 24.5045 9.09897 24.0137 8.7197C27.494 5.97561 32.5583 6.57797 35.2801 10.0806C36.3956 11.4861 36.9979 13.2263 36.9979 15.0334Z"
                                fill="#F79E1B"
                            />
                        </svg>

                        <svg
                            width="96"
                            height="31"
                            viewBox="0 0 96 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="96"
                                height="31"
                                rx="5"
                                fill="#F3F3F3"
                            />
                            <path
                                d="M13.1025 21.3623H10.4476C9.98089 21.3623 9.60254 20.9839 9.60254 20.5172V18.3623M13.1025 21.3623L9.60254 18.3623M13.1025 21.3623H24.1025M9.60254 18.3623V14.8623M9.60254 14.8623V12.2073C9.60254 11.7406 9.98089 11.3623 10.4476 11.3623H11.3525M9.60254 14.8623L13.1025 11.3623M13.1025 11.3623H24.1025M13.1025 11.3623H11.3525M24.1025 11.3623H26.7575C27.2242 11.3623 27.6025 11.7406 27.6025 12.2073V14.8623M24.1025 11.3623L27.6025 14.8623M27.6025 14.8623V18.1123M27.6025 18.1123L24.1025 21.3623M27.6025 18.1123V20.225M24.1025 21.3623H26.7575C27.2242 21.3623 27.6025 20.9839 27.6025 20.5172V20.225M11.3525 11.3623V10.4828C11.3525 10.016 11.7309 9.6377 12.1976 9.6377H28.552C29.0187 9.6377 29.3971 10.016 29.3971 10.4828V19.38C29.3971 19.8467 29.0187 20.225 28.552 20.225H27.6025"
                                stroke="#706F6F"
                                stroke-linecap="round"
                            />
                            <circle
                                cx="18.6025"
                                cy="16.3623"
                                r="1.5"
                                stroke="#706F6F"
                            />
                            <path
                                d="M39.798 11.2727V12.4062H35.673V20H34.3563V11.2727H39.798ZM42.9877 20.1321C42.374 20.1321 41.8385 19.9915 41.3811 19.7102C40.9237 19.429 40.5686 19.0355 40.3158 18.5298C40.0629 18.0241 39.9365 17.4332 39.9365 16.7571C39.9365 16.0781 40.0629 15.4844 40.3158 14.9759C40.5686 14.4673 40.9237 14.0724 41.3811 13.7912C41.8385 13.5099 42.374 13.3693 42.9877 13.3693C43.6013 13.3693 44.1368 13.5099 44.5942 13.7912C45.0516 14.0724 45.4067 14.4673 45.6595 14.9759C45.9124 15.4844 46.0388 16.0781 46.0388 16.7571C46.0388 17.4332 45.9124 18.0241 45.6595 18.5298C45.4067 19.0355 45.0516 19.429 44.5942 19.7102C44.1368 19.9915 43.6013 20.1321 42.9877 20.1321ZM42.9919 19.0625C43.3896 19.0625 43.7192 18.9574 43.9806 18.7472C44.2419 18.5369 44.4351 18.2571 44.5601 17.9077C44.6879 17.5582 44.7519 17.1733 44.7519 16.7528C44.7519 16.3352 44.6879 15.9517 44.5601 15.6023C44.4351 15.25 44.2419 14.9673 43.9806 14.7543C43.7192 14.5412 43.3896 14.4347 42.9919 14.4347C42.5914 14.4347 42.259 14.5412 41.9948 14.7543C41.7334 14.9673 41.5388 15.25 41.411 15.6023C41.286 15.9517 41.2235 16.3352 41.2235 16.7528C41.2235 17.1733 41.286 17.5582 41.411 17.9077C41.5388 18.2571 41.7334 18.5369 41.9948 18.7472C42.259 18.9574 42.5914 19.0625 42.9919 19.0625ZM46.6727 14.554V13.4545H52.1954V14.554H50.0605V20H48.8161V14.554H46.6727ZM53.5431 20V13.4545H54.8172V20H53.5431ZM54.1865 12.4446C53.9649 12.4446 53.7746 12.3707 53.6155 12.223C53.4593 12.0724 53.3811 11.8935 53.3811 11.6861C53.3811 11.4759 53.4593 11.2969 53.6155 11.1491C53.7746 10.9986 53.9649 10.9233 54.1865 10.9233C54.4081 10.9233 54.597 10.9986 54.7533 11.1491C54.9124 11.2969 54.9919 11.4759 54.9919 11.6861C54.9919 11.8935 54.9124 12.0724 54.7533 12.223C54.597 12.3707 54.4081 12.4446 54.1865 12.4446ZM56.5313 20V13.4545H59.2458C59.9845 13.4545 60.5697 13.6122 61.0015 13.9276C61.4333 14.2401 61.6492 14.6648 61.6492 15.2017C61.6492 15.5852 61.5271 15.8892 61.2828 16.1136C61.0384 16.3381 60.7146 16.4886 60.3112 16.5653C60.6038 16.5994 60.8722 16.6875 61.1166 16.8295C61.3609 16.9687 61.5569 17.1562 61.7046 17.392C61.8552 17.6278 61.9305 17.9091 61.9305 18.2358C61.9305 18.5824 61.841 18.8892 61.662 19.1562C61.483 19.4205 61.2231 19.6278 60.8822 19.7784C60.5441 19.9261 60.1365 20 59.6592 20H56.5313ZM57.7288 18.9347H59.6592C59.9745 18.9347 60.2217 18.8594 60.4007 18.7088C60.5796 18.5582 60.6691 18.3537 60.6691 18.0952C60.6691 17.7912 60.5796 17.5526 60.4007 17.3793C60.2217 17.2031 59.9745 17.1151 59.6592 17.1151H57.7288V18.9347ZM57.7288 16.1818H59.2586C59.4972 16.1818 59.7018 16.1477 59.8722 16.0795C60.0455 16.0114 60.1776 15.9148 60.2686 15.7898C60.3623 15.6619 60.4092 15.5114 60.4092 15.3381C60.4092 15.0852 60.3055 14.8878 60.0981 14.7457C59.8907 14.6037 59.6066 14.5327 59.2458 14.5327H57.7288V16.1818ZM63.3282 20V13.4545H64.6024V16.1989H65.216L67.3765 13.4545H68.9532L66.4177 16.6378L68.983 20H67.4021L65.4291 17.3835H64.6024V20H63.3282ZM72.4603 20.1321C71.8467 20.1321 71.3112 19.9915 70.8538 19.7102C70.3964 19.429 70.0413 19.0355 69.7884 18.5298C69.5356 18.0241 69.4092 17.4332 69.4092 16.7571C69.4092 16.0781 69.5356 15.4844 69.7884 14.9759C70.0413 14.4673 70.3964 14.0724 70.8538 13.7912C71.3112 13.5099 71.8467 13.3693 72.4603 13.3693C73.074 13.3693 73.6095 13.5099 74.0669 13.7912C74.5242 14.0724 74.8794 14.4673 75.1322 14.9759C75.385 15.4844 75.5115 16.0781 75.5115 16.7571C75.5115 17.4332 75.385 18.0241 75.1322 18.5298C74.8794 19.0355 74.5242 19.429 74.0669 19.7102C73.6095 19.9915 73.074 20.1321 72.4603 20.1321ZM72.4646 19.0625C72.8623 19.0625 73.1919 18.9574 73.4532 18.7472C73.7146 18.5369 73.9078 18.2571 74.0328 17.9077C74.1606 17.5582 74.2245 17.1733 74.2245 16.7528C74.2245 16.3352 74.1606 15.9517 74.0328 15.6023C73.9078 15.25 73.7146 14.9673 73.4532 14.7543C73.1919 14.5412 72.8623 14.4347 72.4646 14.4347C72.064 14.4347 71.7316 14.5412 71.4674 14.7543C71.2061 14.9673 71.0115 15.25 70.8836 15.6023C70.7586 15.9517 70.6961 16.3352 70.6961 16.7528C70.6961 17.1733 70.7586 17.5582 70.8836 17.9077C71.0115 18.2571 71.2061 18.5369 71.4674 18.7472C71.7316 18.9574 72.064 19.0625 72.4646 19.0625ZM80.2277 16.2244V17.3324H76.7377V16.2244H80.2277ZM77.7732 13.4545V20H76.499V13.4545H77.7732ZM82.222 20.1321C81.6141 20.1321 81.0828 19.9901 80.6283 19.706C80.1737 19.4219 79.8215 19.027 79.5715 18.5213C79.3215 18.0128 79.1965 17.4233 79.1965 16.7528C79.1965 16.0767 79.3215 15.4858 79.5715 14.9801C79.8215 14.4716 80.1737 14.0767 80.6283 13.7955C81.0828 13.5114 81.6141 13.3693 82.222 13.3693C82.8328 13.3693 83.3641 13.5114 83.8158 13.7955C84.2703 14.0767 84.6226 14.4716 84.8726 14.9801C85.1254 15.4858 85.2519 16.0767 85.2519 16.7528C85.2519 17.4233 85.1254 18.0128 84.8726 18.5213C84.6226 19.027 84.2703 19.4219 83.8158 19.706C83.3641 19.9901 82.8328 20.1321 82.222 20.1321ZM82.222 19.0412C82.634 19.0412 82.9706 18.9375 83.232 18.7301C83.4962 18.5199 83.6908 18.2415 83.8158 17.8949C83.9408 17.5483 84.0033 17.1676 84.0033 16.7528C84.0033 16.3352 83.9408 15.9531 83.8158 15.6065C83.6908 15.2571 83.4962 14.9773 83.232 14.767C82.9706 14.5568 82.634 14.4517 82.222 14.4517C81.8129 14.4517 81.4763 14.5568 81.2121 14.767C80.9479 14.9773 80.7533 15.2571 80.6283 15.6065C80.5033 15.9531 80.4408 16.3352 80.4408 16.7528C80.4408 17.1676 80.5033 17.5483 80.6283 17.8949C80.7533 18.2415 80.9479 18.5199 81.2121 18.7301C81.4763 18.9375 81.8129 19.0412 82.222 19.0412Z"
                                fill="#1A1A1A"
                            />
                        </svg>

                        <svg
                            width="198"
                            height="31"
                            viewBox="0 0 198 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="198"
                                height="31"
                                rx="5"
                                fill="#F3F3F3"
                            />
                            <path
                                d="M9 13.5V12.3451C9 11.8784 9.37835 11.5 9.84507 11.5H10.5M9 13.5H25M9 13.5V15.5M25 13.5V12.3451C25 11.8784 24.6216 11.5 24.1549 11.5H10.5M25 13.5V15.5M9 15.5V20.6549C9 21.1216 9.37835 21.5 9.84507 21.5H24.1549C24.6216 21.5 25 21.1216 25 20.6549V19M9 15.5H25M25 15.5V19M10.5 11.5V10.3451C10.5 9.87835 10.8784 9.5 11.3451 9.5H26.1549C26.6216 9.5 27 9.87835 27 10.3451V18.1549C27 18.6216 26.6216 19 26.1549 19H25"
                                stroke="#706F6F"
                                stroke-linecap="round"
                            />
                            <path
                                d="M12 18.5H15.5"
                                stroke="#706F6F"
                                stroke-linecap="round"
                            />
                            <path
                                d="M20 18.5H22"
                                stroke="#706F6F"
                                stroke-linecap="round"
                            />
                            <path
                                d="M32.9588 20V11.2727H38.4006V12.4062H34.2756V14.7926H36.2273C36.875 14.7926 37.4247 14.8977 37.8764 15.108C38.331 15.3182 38.6776 15.6151 38.9162 15.9986C39.1577 16.3821 39.2784 16.8338 39.2784 17.3537C39.2784 17.8736 39.1577 18.3324 38.9162 18.7301C38.6776 19.1278 38.331 19.4389 37.8764 19.6634C37.4247 19.8878 36.875 20 36.2273 20H32.9588ZM34.2756 18.892H36.2273C36.6023 18.892 36.919 18.8182 37.1776 18.6705C37.4389 18.5227 37.6364 18.331 37.7699 18.0952C37.9063 17.8594 37.9744 17.6065 37.9744 17.3366C37.9744 16.9446 37.8239 16.608 37.5227 16.3267C37.2216 16.0426 36.7898 15.9006 36.2273 15.9006H34.2756V18.892ZM43.5526 20.1321C42.9077 20.1321 42.3523 19.9943 41.8864 19.7188C41.4233 19.4403 41.0653 19.0497 40.8125 18.5469C40.5625 18.0412 40.4375 17.4489 40.4375 16.7699C40.4375 16.0994 40.5625 15.5085 40.8125 14.9972C41.0653 14.4858 41.4176 14.0866 41.8693 13.7997C42.3239 13.5128 42.8551 13.3693 43.4631 13.3693C43.8324 13.3693 44.1903 13.4304 44.5369 13.5526C44.8835 13.6747 45.1946 13.8665 45.4702 14.1278C45.7457 14.3892 45.9631 14.7287 46.1222 15.1463C46.2813 15.5611 46.3608 16.0653 46.3608 16.6591V17.1108H41.1577V16.1562H45.1122C45.1122 15.821 45.044 15.5241 44.9077 15.2656C44.7713 15.0043 44.5795 14.7983 44.3324 14.6477C44.0881 14.4972 43.8011 14.4219 43.4716 14.4219C43.1136 14.4219 42.8011 14.5099 42.5341 14.6861C42.2699 14.8594 42.0653 15.0866 41.9205 15.3679C41.7784 15.6463 41.7074 15.9489 41.7074 16.2756V17.0213C41.7074 17.4588 41.7841 17.831 41.9375 18.1378C42.0938 18.4446 42.3111 18.679 42.5895 18.8409C42.8679 19 43.1932 19.0795 43.5653 19.0795C43.8068 19.0795 44.027 19.0455 44.2259 18.9773C44.4247 18.9062 44.5966 18.8011 44.7415 18.6619C44.8864 18.5227 44.9972 18.3509 45.0739 18.1463L46.2798 18.3636C46.1832 18.7187 46.0099 19.0298 45.7599 19.2969C45.5128 19.5611 45.2017 19.767 44.8267 19.9148C44.4545 20.0597 44.0298 20.1321 43.5526 20.1321ZM47.3867 18.2699H48.6907C48.7077 18.5369 48.8285 18.7429 49.0529 18.8878C49.2802 19.0327 49.5742 19.1051 49.935 19.1051C50.3015 19.1051 50.614 19.027 50.8725 18.8707C51.131 18.7116 51.2603 18.4659 51.2603 18.1335C51.2603 17.9347 51.2106 17.7614 51.1112 17.6136C51.0146 17.4631 50.8768 17.3466 50.6978 17.2642C50.5217 17.1818 50.3129 17.1406 50.0714 17.1406H49.006V16.1392H50.0714C50.4322 16.1392 50.7021 16.0568 50.881 15.892C51.06 15.7273 51.1495 15.5213 51.1495 15.2741C51.1495 15.0071 51.0529 14.7926 50.8597 14.6307C50.6694 14.4659 50.4038 14.3835 50.0629 14.3835C49.7163 14.3835 49.4279 14.4616 49.1978 14.6179C48.9677 14.7713 48.8469 14.9702 48.8356 15.2145H47.5487C47.5572 14.848 47.668 14.527 47.881 14.2514C48.0969 13.973 48.3867 13.7571 48.7504 13.6037C49.1168 13.4474 49.533 13.3693 49.9989 13.3693C50.4847 13.3693 50.9052 13.4474 51.2603 13.6037C51.6154 13.7599 51.8896 13.9759 52.0827 14.2514C52.2788 14.527 52.3768 14.8437 52.3768 15.2017C52.3768 15.5625 52.2688 15.858 52.0529 16.0881C51.8398 16.3153 51.5614 16.4787 51.2177 16.5781V16.6463C51.4705 16.6634 51.695 16.7401 51.891 16.8764C52.087 17.0128 52.2404 17.1932 52.3512 17.4176C52.462 17.642 52.5174 17.8963 52.5174 18.1804C52.5174 18.581 52.4066 18.9276 52.185 19.2202C51.9663 19.5128 51.6623 19.7386 51.2731 19.8977C50.8867 20.054 50.445 20.1321 49.9478 20.1321C49.4648 20.1321 49.0316 20.0568 48.6481 19.9062C48.2674 19.7528 47.9648 19.5369 47.7404 19.2585C47.5188 18.9801 47.4009 18.6506 47.3867 18.2699ZM58.0178 13.4545V14.554H55.0902V20H53.8331V13.4545H58.0178ZM61.8168 20.1321C61.2031 20.1321 60.6676 19.9915 60.2102 19.7102C59.7528 19.429 59.3977 19.0355 59.1449 18.5298C58.892 18.0241 58.7656 17.4332 58.7656 16.7571C58.7656 16.0781 58.892 15.4844 59.1449 14.9759C59.3977 14.4673 59.7528 14.0724 60.2102 13.7912C60.6676 13.5099 61.2031 13.3693 61.8168 13.3693C62.4304 13.3693 62.9659 13.5099 63.4233 13.7912C63.8807 14.0724 64.2358 14.4673 64.4886 14.9759C64.7415 15.4844 64.8679 16.0781 64.8679 16.7571C64.8679 17.4332 64.7415 18.0241 64.4886 18.5298C64.2358 19.0355 63.8807 19.429 63.4233 19.7102C62.9659 19.9915 62.4304 20.1321 61.8168 20.1321ZM61.821 19.0625C62.2188 19.0625 62.5483 18.9574 62.8097 18.7472C63.071 18.5369 63.2642 18.2571 63.3892 17.9077C63.517 17.5582 63.581 17.1733 63.581 16.7528C63.581 16.3352 63.517 15.9517 63.3892 15.6023C63.2642 15.25 63.071 14.9673 62.8097 14.7543C62.5483 14.5412 62.2188 14.4347 61.821 14.4347C61.4205 14.4347 61.0881 14.5412 60.8239 14.7543C60.5625 14.9673 60.3679 15.25 60.2401 15.6023C60.1151 15.9517 60.0526 16.3352 60.0526 16.7528C60.0526 17.1733 60.1151 17.5582 60.2401 17.9077C60.3679 18.2571 60.5625 18.5369 60.8239 18.7472C61.0881 18.9574 61.4205 19.0625 61.821 19.0625ZM65.5018 14.554V13.4545H71.0245V14.554H68.8896V20H67.6452V14.554H65.5018ZM72.3722 20V13.4545H73.6463V20H72.3722ZM73.0156 12.4446C72.794 12.4446 72.6037 12.3707 72.4446 12.223C72.2884 12.0724 72.2102 11.8935 72.2102 11.6861C72.2102 11.4759 72.2884 11.2969 72.4446 11.1491C72.6037 10.9986 72.794 10.9233 73.0156 10.9233C73.2372 10.9233 73.4261 10.9986 73.5824 11.1491C73.7415 11.2969 73.821 11.4759 73.821 11.6861C73.821 11.8935 73.7415 12.0724 73.5824 12.223C73.4261 12.3707 73.2372 12.4446 73.0156 12.4446ZM75.3604 20V13.4545H78.0749C78.8136 13.4545 79.3988 13.6122 79.8306 13.9276C80.2624 14.2401 80.4783 14.6648 80.4783 15.2017C80.4783 15.5852 80.3562 15.8892 80.1119 16.1136C79.8675 16.3381 79.5437 16.4886 79.1403 16.5653C79.4329 16.5994 79.7013 16.6875 79.9457 16.8295C80.19 16.9687 80.386 17.1562 80.5337 17.392C80.6843 17.6278 80.7596 17.9091 80.7596 18.2358C80.7596 18.5824 80.6701 18.8892 80.4911 19.1562C80.3121 19.4205 80.0522 19.6278 79.7113 19.7784C79.3732 19.9261 78.9656 20 78.4883 20H75.3604ZM76.5579 18.9347H78.4883C78.8036 18.9347 79.0508 18.8594 79.2298 18.7088C79.4087 18.5582 79.4982 18.3537 79.4982 18.0952C79.4982 17.7912 79.4087 17.5526 79.2298 17.3793C79.0508 17.2031 78.8036 17.1151 78.4883 17.1151H76.5579V18.9347ZM76.5579 16.1818H78.0877C78.3263 16.1818 78.5309 16.1477 78.7013 16.0795C78.8746 16.0114 79.0067 15.9148 79.0977 15.7898C79.1914 15.6619 79.2383 15.5114 79.2383 15.3381C79.2383 15.0852 79.1346 14.8878 78.9272 14.7457C78.7198 14.6037 78.4357 14.5327 78.0749 14.5327H76.5579V16.1818ZM82.1573 20V13.4545H83.4315V16.1989H84.0451L86.2056 13.4545H87.7823L85.2468 16.6378L87.8121 20H86.2312L84.2582 17.3835H83.4315V20H82.1573ZM91.2894 20.1321C90.6758 20.1321 90.1403 19.9915 89.6829 19.7102C89.2255 19.429 88.8704 19.0355 88.6175 18.5298C88.3647 18.0241 88.2383 17.4332 88.2383 16.7571C88.2383 16.0781 88.3647 15.4844 88.6175 14.9759C88.8704 14.4673 89.2255 14.0724 89.6829 13.7912C90.1403 13.5099 90.6758 13.3693 91.2894 13.3693C91.9031 13.3693 92.4386 13.5099 92.896 13.7912C93.3533 14.0724 93.7085 14.4673 93.9613 14.9759C94.2141 15.4844 94.3406 16.0781 94.3406 16.7571C94.3406 17.4332 94.2141 18.0241 93.9613 18.5298C93.7085 19.0355 93.3533 19.429 92.896 19.7102C92.4386 19.9915 91.9031 20.1321 91.2894 20.1321ZM91.2937 19.0625C91.6914 19.0625 92.021 18.9574 92.2823 18.7472C92.5437 18.5369 92.7369 18.2571 92.8619 17.9077C92.9897 17.5582 93.0536 17.1733 93.0536 16.7528C93.0536 16.3352 92.9897 15.9517 92.8619 15.6023C92.7369 15.25 92.5437 14.9673 92.2823 14.7543C92.021 14.5412 91.6914 14.4347 91.2937 14.4347C90.8931 14.4347 90.5607 14.5412 90.2965 14.7543C90.0352 14.9673 89.8406 15.25 89.7127 15.6023C89.5877 15.9517 89.5252 16.3352 89.5252 16.7528C89.5252 17.1733 89.5877 17.5582 89.7127 17.9077C89.8406 18.2571 90.0352 18.5369 90.2965 18.7472C90.5607 18.9574 90.8931 19.0625 91.2937 19.0625ZM95.7628 20V13.4545H98.4773C99.2159 13.4545 99.8011 13.6122 100.233 13.9276C100.665 14.2401 100.881 14.6648 100.881 15.2017C100.881 15.5852 100.759 15.8892 100.514 16.1136C100.27 16.3381 99.946 16.4886 99.5426 16.5653C99.8352 16.5994 100.104 16.6875 100.348 16.8295C100.592 16.9687 100.788 17.1562 100.936 17.392C101.087 17.6278 101.162 17.9091 101.162 18.2358C101.162 18.5824 101.072 18.8892 100.893 19.1562C100.714 19.4205 100.455 19.6278 100.114 19.7784C99.7756 19.9261 99.3679 20 98.8906 20H95.7628ZM96.9602 18.9347H98.8906C99.206 18.9347 99.4531 18.8594 99.6321 18.7088C99.8111 18.5582 99.9006 18.3537 99.9006 18.0952C99.9006 17.7912 99.8111 17.5526 99.6321 17.3793C99.4531 17.2031 99.206 17.1151 98.8906 17.1151H96.9602V18.9347ZM96.9602 16.1818H98.4901C98.7287 16.1818 98.9332 16.1477 99.1037 16.0795C99.277 16.0114 99.4091 15.9148 99.5 15.7898C99.5938 15.6619 99.6406 15.5114 99.6406 15.3381C99.6406 15.0852 99.5369 14.8878 99.3295 14.7457C99.1222 14.6037 98.8381 14.5327 98.4773 14.5327H96.9602V16.1818ZM103.808 18.2145L106.693 13.4545H108.065V20H106.817V15.2358L103.945 20H102.56V13.4545H103.808V18.2145ZM111.027 18.2145L113.912 13.4545H115.284V20H114.036V15.2358L111.163 20H109.778V13.4545H111.027V18.2145ZM113.366 11.2386H114.415C114.415 11.7187 114.244 12.1094 113.903 12.4105C113.565 12.7088 113.108 12.858 112.531 12.858C111.957 12.858 111.501 12.7088 111.163 12.4105C110.825 12.1094 110.656 11.7187 110.656 11.2386H111.7C111.7 11.4517 111.763 11.6406 111.888 11.8054C112.013 11.9673 112.227 12.0483 112.531 12.0483C112.83 12.0483 113.043 11.9673 113.17 11.8054C113.301 11.6435 113.366 11.4545 113.366 11.2386ZM120.173 22.4545V13.4545H121.417V14.5156H121.524C121.598 14.3793 121.704 14.2216 121.843 14.0426C121.983 13.8636 122.176 13.7074 122.423 13.5739C122.67 13.4375 122.997 13.3693 123.403 13.3693C123.931 13.3693 124.403 13.5028 124.818 13.7699C125.233 14.0369 125.558 14.4219 125.794 14.9247C126.032 15.4276 126.152 16.0327 126.152 16.7401C126.152 17.4474 126.034 18.054 125.798 18.5597C125.562 19.0625 125.238 19.4503 124.826 19.723C124.414 19.9929 123.944 20.1278 123.416 20.1278C123.018 20.1278 122.693 20.0611 122.44 19.9276C122.19 19.794 121.994 19.6378 121.852 19.4588C121.71 19.2798 121.6 19.1207 121.524 18.9815H121.447V22.4545H120.173ZM121.422 16.7273C121.422 17.1875 121.488 17.5909 121.622 17.9375C121.755 18.2841 121.949 18.5554 122.201 18.7514C122.454 18.9446 122.764 19.0412 123.13 19.0412C123.511 19.0412 123.829 18.9403 124.085 18.7386C124.341 18.5341 124.534 18.2571 124.664 17.9077C124.798 17.5582 124.865 17.1648 124.865 16.7273C124.865 16.2955 124.799 15.9077 124.669 15.5639C124.541 15.2202 124.348 14.9489 124.089 14.75C123.833 14.5511 123.514 14.4517 123.13 14.4517C122.761 14.4517 122.449 14.5469 122.193 14.7372C121.94 14.9276 121.748 15.1932 121.618 15.5341C121.487 15.875 121.422 16.2727 121.422 16.7273ZM130.336 20.1321C129.723 20.1321 129.187 19.9915 128.73 19.7102C128.272 19.429 127.917 19.0355 127.664 18.5298C127.412 18.0241 127.285 17.4332 127.285 16.7571C127.285 16.0781 127.412 15.4844 127.664 14.9759C127.917 14.4673 128.272 14.0724 128.73 13.7912C129.187 13.5099 129.723 13.3693 130.336 13.3693C130.95 13.3693 131.485 13.5099 131.943 13.7912C132.4 14.0724 132.755 14.4673 133.008 14.9759C133.261 15.4844 133.387 16.0781 133.387 16.7571C133.387 17.4332 133.261 18.0241 133.008 18.5298C132.755 19.0355 132.4 19.429 131.943 19.7102C131.485 19.9915 130.95 20.1321 130.336 20.1321ZM130.341 19.0625C130.738 19.0625 131.068 18.9574 131.329 18.7472C131.591 18.5369 131.784 18.2571 131.909 17.9077C132.037 17.5582 132.1 17.1733 132.1 16.7528C132.1 16.3352 132.037 15.9517 131.909 15.6023C131.784 15.25 131.591 14.9673 131.329 14.7543C131.068 14.5412 130.738 14.4347 130.341 14.4347C129.94 14.4347 129.608 14.5412 129.343 14.7543C129.082 14.9673 128.887 15.25 128.76 15.6023C128.635 15.9517 128.572 16.3352 128.572 16.7528C128.572 17.1733 128.635 17.5582 128.76 17.9077C128.887 18.2571 129.082 18.5369 129.343 18.7472C129.608 18.9574 129.94 19.0625 130.341 19.0625ZM134.422 18.2699H135.726C135.743 18.5369 135.864 18.7429 136.088 18.8878C136.315 19.0327 136.609 19.1051 136.97 19.1051C137.337 19.1051 137.649 19.027 137.908 18.8707C138.166 18.7116 138.295 18.4659 138.295 18.1335C138.295 17.9347 138.246 17.7614 138.146 17.6136C138.05 17.4631 137.912 17.3466 137.733 17.2642C137.557 17.1818 137.348 17.1406 137.107 17.1406H136.041V16.1392H137.107C137.467 16.1392 137.737 16.0568 137.916 15.892C138.095 15.7273 138.185 15.5213 138.185 15.2741C138.185 15.0071 138.088 14.7926 137.895 14.6307C137.705 14.4659 137.439 14.3835 137.098 14.3835C136.751 14.3835 136.463 14.4616 136.233 14.6179C136.003 14.7713 135.882 14.9702 135.871 15.2145H134.584C134.592 14.848 134.703 14.527 134.916 14.2514C135.132 13.973 135.422 13.7571 135.786 13.6037C136.152 13.4474 136.568 13.3693 137.034 13.3693C137.52 13.3693 137.94 13.4474 138.295 13.6037C138.651 13.7599 138.925 13.9759 139.118 14.2514C139.314 14.527 139.412 14.8437 139.412 15.2017C139.412 15.5625 139.304 15.858 139.088 16.0881C138.875 16.3153 138.597 16.4787 138.253 16.5781V16.6463C138.506 16.6634 138.73 16.7401 138.926 16.8764C139.122 17.0128 139.276 17.1932 139.386 17.4176C139.497 17.642 139.553 17.8963 139.553 18.1804C139.553 18.581 139.442 18.9276 139.22 19.2202C139.001 19.5128 138.697 19.7386 138.308 19.8977C137.922 20.054 137.48 20.1321 136.983 20.1321C136.5 20.1321 136.067 20.0568 135.683 19.9062C135.303 19.7528 135 19.5369 134.776 19.2585C134.554 18.9801 134.436 18.6506 134.422 18.2699ZM140.868 22.4545V13.4545H142.113V14.5156H142.219C142.293 14.3793 142.4 14.2216 142.539 14.0426C142.678 13.8636 142.871 13.7074 143.118 13.5739C143.365 13.4375 143.692 13.3693 144.098 13.3693C144.627 13.3693 145.098 13.5028 145.513 13.7699C145.928 14.0369 146.253 14.4219 146.489 14.9247C146.728 15.4276 146.847 16.0327 146.847 16.7401C146.847 17.4474 146.729 18.054 146.493 18.5597C146.257 19.0625 145.934 19.4503 145.522 19.723C145.11 19.9929 144.64 20.1278 144.111 20.1278C143.713 20.1278 143.388 20.0611 143.135 19.9276C142.885 19.794 142.689 19.6378 142.547 19.4588C142.405 19.2798 142.296 19.1207 142.219 18.9815H142.142V22.4545H140.868ZM142.117 16.7273C142.117 17.1875 142.184 17.5909 142.317 17.9375C142.451 18.2841 142.644 18.5554 142.897 18.7514C143.15 18.9446 143.459 19.0412 143.826 19.0412C144.206 19.0412 144.525 18.9403 144.78 18.7386C145.036 18.5341 145.229 18.2571 145.36 17.9077C145.493 17.5582 145.56 17.1648 145.56 16.7273C145.56 16.2955 145.495 15.9077 145.364 15.5639C145.236 15.2202 145.043 14.9489 144.784 14.75C144.529 14.5511 144.209 14.4517 143.826 14.4517C143.456 14.4517 143.144 14.5469 142.888 14.7372C142.635 14.9276 142.444 15.1932 142.313 15.5341C142.182 15.875 142.117 16.2727 142.117 16.7273ZM150.179 20.1449C149.765 20.1449 149.39 20.0682 149.054 19.9148C148.719 19.7585 148.453 19.5327 148.257 19.2372C148.064 18.9418 147.968 18.5795 147.968 18.1506C147.968 17.7812 148.039 17.4773 148.181 17.2386C148.323 17 148.515 16.8111 148.756 16.6719C148.998 16.5327 149.267 16.4276 149.566 16.3565C149.864 16.2855 150.168 16.2315 150.478 16.1946C150.87 16.1491 151.188 16.1122 151.432 16.0838C151.676 16.0526 151.854 16.0028 151.965 15.9347C152.076 15.8665 152.131 15.7557 152.131 15.6023V15.5724C152.131 15.2003 152.026 14.9119 151.816 14.7074C151.608 14.5028 151.299 14.4006 150.887 14.4006C150.458 14.4006 150.12 14.4957 149.873 14.6861C149.628 14.8736 149.459 15.0824 149.365 15.3125L148.168 15.0398C148.31 14.642 148.517 14.321 148.79 14.0767C149.066 13.8295 149.382 13.6506 149.74 13.5398C150.098 13.4261 150.475 13.3693 150.87 13.3693C151.131 13.3693 151.408 13.4006 151.701 13.4631C151.996 13.5227 152.272 13.6335 152.527 13.7955C152.786 13.9574 152.998 14.1889 153.162 14.4901C153.327 14.7884 153.409 15.1761 153.409 15.6534V20H152.165V19.1051H152.114C152.032 19.2699 151.908 19.4318 151.743 19.5909C151.578 19.75 151.367 19.8821 151.108 19.9872C150.85 20.0923 150.54 20.1449 150.179 20.1449ZM150.456 19.1222C150.809 19.1222 151.11 19.0526 151.36 18.9134C151.613 18.7741 151.804 18.5923 151.935 18.3679C152.069 18.1406 152.135 17.8977 152.135 17.6392V16.7955C152.09 16.8409 152.002 16.8835 151.871 16.9233C151.743 16.9602 151.597 16.9929 151.432 17.0213C151.267 17.0469 151.107 17.071 150.951 17.0938C150.794 17.1136 150.664 17.1307 150.559 17.1449C150.311 17.1761 150.086 17.2287 149.881 17.3026C149.679 17.3764 149.517 17.483 149.395 17.6222C149.276 17.7585 149.216 17.9403 149.216 18.1676C149.216 18.483 149.333 18.7216 149.566 18.8835C149.799 19.0426 150.096 19.1222 150.456 19.1222ZM156.112 13.4545L157.557 16.0028L159.014 13.4545H160.408L158.366 16.7273L160.425 20H159.031L157.557 17.554L156.087 20H154.689L156.726 16.7273L154.714 13.4545H156.112ZM162.521 22.4545C162.331 22.4545 162.158 22.4389 162.001 22.4077C161.845 22.3793 161.729 22.348 161.652 22.3139L161.959 21.2699C162.192 21.3324 162.399 21.3594 162.581 21.3509C162.763 21.3423 162.923 21.2741 163.062 21.1463C163.205 21.0185 163.33 20.8097 163.438 20.5199L163.595 20.0852L161.2 13.4545H162.564L164.222 18.5341H164.29L165.947 13.4545H167.315L164.618 20.8736C164.493 21.2145 164.334 21.5028 164.141 21.7386C163.947 21.9773 163.717 22.1563 163.45 22.2756C163.183 22.3949 162.874 22.4545 162.521 22.4545ZM172.949 16.1776V17.2812H169.403V16.1776H172.949ZM169.761 13.4545V20H168.513V13.4545H169.761ZM173.839 13.4545V20H172.595V13.4545H173.839ZM178.301 20.1321C177.688 20.1321 177.152 19.9915 176.695 19.7102C176.237 19.429 175.882 19.0355 175.629 18.5298C175.376 18.0241 175.25 17.4332 175.25 16.7571C175.25 16.0781 175.376 15.4844 175.629 14.9759C175.882 14.4673 176.237 14.0724 176.695 13.7912C177.152 13.5099 177.688 13.3693 178.301 13.3693C178.915 13.3693 179.45 13.5099 179.908 13.7912C180.365 14.0724 180.72 14.4673 180.973 14.9759C181.226 15.4844 181.352 16.0781 181.352 16.7571C181.352 17.4332 181.226 18.0241 180.973 18.5298C180.72 19.0355 180.365 19.429 179.908 19.7102C179.45 19.9915 178.915 20.1321 178.301 20.1321ZM178.305 19.0625C178.703 19.0625 179.033 18.9574 179.294 18.7472C179.555 18.5369 179.749 18.2571 179.874 17.9077C180.001 17.5582 180.065 17.1733 180.065 16.7528C180.065 16.3352 180.001 15.9517 179.874 15.6023C179.749 15.25 179.555 14.9673 179.294 14.7543C179.033 14.5412 178.703 14.4347 178.305 14.4347C177.905 14.4347 177.572 14.5412 177.308 14.7543C177.047 14.9673 176.852 15.25 176.724 15.6023C176.599 15.9517 176.537 16.3352 176.537 16.7528C176.537 17.1733 176.599 17.5582 176.724 17.9077C176.852 18.2571 177.047 18.5369 177.308 18.7472C177.572 18.9574 177.905 19.0625 178.305 19.0625ZM182.775 20V13.4545H184.049V16.1989H184.662L186.823 13.4545H188.4L185.864 16.6378L188.429 20H186.848L184.875 17.3835H184.049V20H182.775Z"
                                fill="#1A1A1A"
                            />
                        </svg>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutProduct
