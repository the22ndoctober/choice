"use client"

import { useState } from "react"
import src from "@/public/test_item.png"
import Image from "next/image"
import { Box, Grid, Typography, Button } from "@mui/material"
import { Colors } from "@/client"
import { favouritesTeal } from "../../static/favouritesTeal"
import { cartCard } from "../../static/cartCard"
import { useDispatch } from "react-redux"
import { changeCart } from "@/app/redux/cart/cartSlice"

const tagsWrapperStyles = {
    columnGap: { lg: "8px", xl: "10px" },
    justifyContent: "left",
}

const tagStyles = {
    color: Colors.white,
    borderRadius: "15px",
    p: { lg: "8px", xl: "8px" },
    fontSize: { lg: "12px" },
}

const cartButtonStyles = {
    background: Colors.teal,
    borderRadius: "15px",
    py: { lg: 1 },
    px: { lg: "12px" },
}

const ProductCard = ({
    title,
    price,
    currency,
    tags,
    img_path,
    product,
}: any) => {
    const [active, setActive] = useState<boolean>(false)
    const dispatch = useDispatch()

    return (
        <>
            <Grid
                container
                sx={{
                    width: "fit-content",
                    flexDirection: "column",
                    background: Colors.white,
                    borderRadius: "15px",
                    rowGap: { lg: "10px" },
                    p: { lg: "20px", xl: "22px" },
                }}
            >
                <Grid container sx={tagsWrapperStyles}>
                    {tags.map((tag: any) => (
                        <Box
                            key={tag.title}
                            sx={{ ...tagStyles, background: tag.color }}
                        >
                            {tag.title}
                        </Box>
                    ))}
                </Grid>
                <Box
                    sx={{
                        width: { lg: 200, xl: 224 },
                        height: { lg: "250px" },
                        display: "flex",
                        justifyContent: "center",
                        background: Colors.paper,
                        margin: "0 auto",
                        overflow: "hidden",
                    }}
                >
                    {img_path === undefined ? (
                        <Image
                            src={src}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                margin: "0 auto",
                            }}
                        />
                    ) : img_path !== null ? (
                        <img
                            src={img_path}
                            alt=""
                            style={{
                                width: "auto",
                                height: "100%",
                                margin: "0 auto",
                            }}
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
                <Grid container sx={{ flexDirection: "column", mt: "12px" }}>
                    <Box
                        sx={{
                            color: Colors.grey,
                            fontSize: "12px",
                            maxWidth: "270px",
                        }}
                    >
                        {product ? product.code : ""}
                    </Box>
                    <Box
                        sx={{
                            color: Colors.black,
                            fontSize: "16px",
                            fontWeight: 500,
                            minHeight: "70px",
                            maxWidth: "240px",
                        }}
                    >
                        {title}
                    </Box>
                </Grid>
                <Grid
                    container
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Button
                        sx={{
                            fontSize: { lg: "24px" },
                            color: Colors.dark,
                            background: "none",
                            border: `1px solid ${Colors.dark}`,
                            borderRadius: "15px",
                            textAlign: "center",
                            px: { lg: 2 },
                            py: { lg: 1 },
                            lineHeight: "1",
                            fontWeight: 800,
                        }}
                    >
                        {price + " " + "₴"}
                    </Button>
                    <Box
                        sx={{
                            p: "7px",
                            "& path": {
                                stroke: Colors.dark,
                            },
                        }}
                    >
                        {favouritesTeal}
                    </Box>
                    <Box
                        onMouseEnter={() => {
                            setActive(true)
                        }}
                        onMouseLeave={() => {
                            setActive(false)
                        }}
                        onClick={() => {
                            if (product) {
                                dispatch(
                                    changeCart<any>({
                                        type: "ADD_ITEM",
                                        payload: product,
                                    })
                                )
                            }
                        }}
                        sx={{
                            ...cartButtonStyles,

                            background: active ? Colors.teal : Colors.dark,
                        }}
                    >
                        {cartCard}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductCard
