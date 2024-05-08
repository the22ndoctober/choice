"use client"

import { Box, Grid } from "@mui/material"
import OrderNav from "./OrderNav"
import { Colors } from "@/client"
import { useSelector } from "react-redux"
import { getCart } from "@/app/redux/cart/cartSlice"
import { useState } from "react"

const Order = () => {
    const [userName, setUserName] = useState("")
    const cart = useSelector(getCart)
    console.log(cart)

    return (
        <>
            <OrderNav />
            <Box
                sx={{
                    width: "100%",
                    minHeight: "70svh",
                    background: Colors.white,
                }}
            >
                <Grid
                    container
                    sx={{
                        width: { xl: 1440, lg: 1140 },
                        margin: "0 auto",
                        flexDirection: "column",
                        py: "38px",
                        rowGap: "17px",
                    }}
                >
                    <Box
                        sx={{
                            color: Colors.dark,
                            fontSize: "32px",
                            fontWeight: 600,
                            lineHeight: "38.73px",
                            px: "34px",
                        }}
                    >
                        Оформлення замовлення
                    </Box>
                    <Grid container sx={{ columnGap: "17px" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                background: Colors.paper,
                                borderRadius: "15px",
                                flex: "3 1 0",
                                p: "46px 34px",
                                rowGap: "19px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: "14px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        lineHeight: "14.52px",
                                        color: Colors.maxDark,
                                        border: `1px solid ${Colors.maxDark}`,
                                        borderRadius: "100%",
                                        width: "24px",
                                        height: "24px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    1
                                </Box>
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        lineHeight: "21.78px",
                                    }}
                                >
                                    Ваші дані
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: "14px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        lineHeight: "14.52px",
                                        color: Colors.maxDark,
                                        border: `1px solid ${Colors.grey}`,
                                        borderRadius: "100%",
                                        width: "24px",
                                        height: "24px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    2
                                </Box>
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        lineHeight: "21.78px",
                                    }}
                                >
                                    Доставка
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: "14px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        lineHeight: "14.52px",
                                        color: Colors.grey,
                                        border: `1px solid ${Colors.grey}`,
                                        borderRadius: "100%",
                                        width: "24px",
                                        height: "24px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    3
                                </Box>
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        lineHeight: "21.78px",
                                    }}
                                >
                                    Оплата
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                background: Colors.paper,
                                borderRadius: "15px",
                                flex: "1 1 0",
                                p: "46px 34px",
                                rowGap: "20px",
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29.05px",
                                    color: Colors.dark,
                                }}
                            >
                                Склад замовлення
                            </Box>
                            <Box
                                sx={{
                                    maxHeight: "200px",
                                    overflowY: "scroll",
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: "20px",
                                }}
                            >
                                {cart.map((item: any) => (
                                    <Grid container sx={{ columnGap: "13px" }}>
                                        <Box
                                            sx={{
                                                width: { sm: 80 },
                                                height: { sm: 80 },
                                                overflow: "hidden",
                                                display: "flex",
                                                justifyContent: "center",
                                                flex: "1 1 0",
                                            }}
                                        >
                                            <img
                                                src={item.image_path}
                                                alt=""
                                                style={{
                                                    width: "auto",
                                                    height: "100%",
                                                }}
                                            />
                                        </Box>
                                        <Grid
                                            container
                                            sx={{
                                                flexDirection: "column",
                                                flex: "2.5 1 0",
                                                pr: "25px",
                                                justifyContent: "center",
                                                rowGap: "9px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    textWrap: "break-word",
                                                    color: Colors.maxDark,

                                                    fontSize: "14px",
                                                    fontWight: 600,
                                                    lineHeight: "16.94px",
                                                }}
                                            >
                                                {item.title}
                                            </Box>
                                            <Box
                                                sx={{
                                                    textWrap: "break-word",
                                                    color: Colors.maxDark,
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    lineHeight: "24.2px",
                                                }}
                                            >
                                                {item.price + item.currency}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Order
