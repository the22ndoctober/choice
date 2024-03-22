"use client"

import { Colors } from "@/client"
import { Box, Grid, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { changeCart, getCart } from "@/app/redux/cart/cartSlice"

const CartComp = ({ setOpen }: any) => {
    const cart = useSelector(getCart)
    const dispatch = useDispatch<any>()

    return (
        <Grid
            container
            sx={{
                width: "100%",
                height: "100%",
                zIndex: 1999,
                backdropFilter: `blur(8px)`,
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: 0,
                left: 0,
            }}
        >
            <Box
                sx={{
                    background: Colors.paper,
                    borderRadius: "15px",
                    width: { lg: 892 },
                    height: "85svh",
                    p: "32px 28px",
                    boxShadow: `10px 10px 10px -11px rgba(0,0,0,0.75)`,
                }}
            >
                <Grid
                    container
                    sx={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <Grid container sx={{ justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                fontFamily: "Inter",
                                fontSize: "24px",
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                            }}
                        >
                            Кошик
                        </Box>
                        <CloseIcon
                            sx={{ cursor: "pointer" }}
                            onClick={() => {
                                setOpen(false)
                            }}
                        />
                    </Grid>
                    <Box sx={{ overflowY: "scroll", height: 345 }}>
                        <Grid
                            container
                            sx={{
                                flexDirection: "column",

                                width: 836,
                                rowGap: "20px",
                            }}
                        >
                            {cart.map((item: any) => (
                                <CartItem
                                    key={item.product_id}
                                    setCart={() => {
                                        if (
                                            localStorage.getItem("cart") !==
                                            null
                                        ) {
                                            let local: any =
                                                localStorage.getItem("cart")
                                            const data = JSON.parse(local)
                                            dispatch(
                                                changeCart<any>({
                                                    type: "REMOVE_ITEM",
                                                    payload: item.product_id,
                                                })
                                            )
                                        }
                                    }}
                                    id={item.product_id}
                                    title={item.title}
                                    image={item.image_path}
                                    price={parseInt(item.price)}
                                    currency={item.currency}
                                />
                            ))}
                        </Grid>
                    </Box>
                    <Grid
                        container
                        sx={{
                            justifyContent: "right",
                            alignItems: "ceter",
                            columnGap: "93px",
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: "20px",
                                fonWeight: 500,
                                lineHeight: "24px",
                                letterSpacing: "0em",
                                textAlign: "left",
                                color: Colors.black,
                            }}
                        >
                            Разом:
                        </Box>
                        <Box
                            sx={{
                                fontSize: "24px",
                                fontWeight: 800,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "right",
                                color: Colors.dark,
                            }}
                        >
                            {cart.reduce(
                                (accumulator: number, currentItem: any) =>
                                    accumulator + parseInt(currentItem.price),
                                0
                            ) + " ₴"}
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
                                borderRadius: "15px",
                                width: { lg: 240 },
                                color: Colors.grey,
                                outline: `2px solid ${Colors.grey}`,
                                fontSize: "16px",
                                fontWeight: "500",
                                lineHeight: "22px",
                                letterSpacing: "0em",
                                textAlign: "center",
                                height: "54px",
                                textTransform: "none",
                            }}
                        >
                            Продовжити покупки
                        </Button>
                        <Grid
                            container
                            sx={{ columnGap: "16px", width: "auto" }}
                        >
                            <Button
                                sx={{
                                    borderRadius: "15px",
                                    width: { lg: 240 },
                                    color: Colors.maxDark,
                                    outline: `2px solid ${Colors.maxDark}`,
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    lineHeight: "22px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                    height: "54px",
                                    textTransform: "none",
                                }}
                            >
                                Оплата частинами
                            </Button>
                            <Button
                                sx={{
                                    borderRadius: "15px",
                                    width: { lg: 240 },
                                    color: Colors.white,
                                    background: Colors.maxDark,
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    lineHeight: "22px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                    height: "54px",
                                    textTransform: "none",
                                }}
                            >
                                Оформити замовлення
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default CartComp
