"use client"

import { Colors } from "@/client"
import { Box, Grid, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { changeCart, getCart } from "@/app/redux/cart/cartSlice"
import { cartNoProducts } from "../static/cartNoProducts"
import { useRouter } from "next/navigation"
import { useState } from "react"

const ClearModal = ({ open, setOpen, handler }: any) => {
    return (
        <>
            {open && (
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        zIndex: 2000,
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
                            width: { lg: 409 },
                            height: 186,
                            p: "32px 28px",
                            boxShadow: `10px 10px 10px -11px rgba(0,0,0,0.75)`,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    color: Colors.neutral,
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    lineHeight: "21.78px",
                                }}
                            >
                                Видалити всі товари із кошику?
                            </Box>
                            <CloseIcon
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                    setOpen(false)
                                }}
                            />
                        </Grid>
                        <Box
                            sx={{
                                color: Colors.grey,
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "16.94px",
                            }}
                        >
                            Відмінити цю дію буде не можливо.
                        </Box>
                        <Grid container sx={{ columnGap: "8px" }}>
                            <Box
                                sx={{
                                    border: `2px solid ${Colors.neutral}`,
                                    color: Colors.neutral,
                                    borderRadius: "15px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "16.94px",
                                    flex: "1 1 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    py: "14px",
                                }}
                                onClick={() => {
                                    setOpen(false)
                                }}
                            >
                                Залишити
                            </Box>
                            <Box
                                onClick={() => {
                                    handler()
                                    setOpen(false)
                                }}
                                sx={{
                                    background: Colors.neutral,
                                    color: Colors.white,
                                    borderRadius: "15px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "16.94px",
                                    flex: "1 1 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    py: "14px",
                                }}
                            >
                                Видалити
                            </Box>
                        </Grid>
                    </Box>
                </Box>
            )}
        </>
    )
}

const CartComp = ({ setOpen }: any) => {
    const cart = useSelector(getCart)
    const dispatch = useDispatch<any>()
    const router = useRouter()
    const [clearModal, setClearModal] = useState(false)

    const removeAllHandle = () => {
        dispatch(
            changeCart<any>({
                type: "REMOVE_ALL",
                payload: null,
            })
        )
    }

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
                    height: cart.length > 0 ? "85svh" : 443,
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
                    <Grid
                        container
                        sx={{
                            justifyContent: "space-between",
                        }}
                    >
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
                    {cart.length > 0 ? (
                        <>
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
                                                    localStorage.getItem(
                                                        "cart"
                                                    ) !== null
                                                ) {
                                                    let local: any =
                                                        localStorage.getItem(
                                                            "cart"
                                                        )
                                                    const data =
                                                        JSON.parse(local)
                                                    dispatch(
                                                        changeCart<any>({
                                                            type: "REMOVE_ITEM",
                                                            payload:
                                                                item.product_id,
                                                        })
                                                    )
                                                }
                                            }}
                                            id={item.product_id}
                                            title={item.title}
                                            image={item.image_path}
                                            price={parseInt(item.price)}
                                            currency={item.currency}
                                            code={item.code}
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
                                        color: Colors.neutral,
                                        pr: "34px",
                                    }}
                                >
                                    {cart.reduce(
                                        (
                                            accumulator: number,
                                            currentItem: any
                                        ) =>
                                            accumulator +
                                            parseInt(currentItem.price),
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
                                    onClick={() => {
                                        setOpen(false)
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
                                            color: Colors.neutral,
                                            outline: `2px solid ${Colors.neutral}`,
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            lineHeight: "22px",
                                            letterSpacing: "0em",
                                            textAlign: "center",
                                            height: "54px",
                                            textTransform: "none",
                                        }}
                                        onClick={() => {
                                            setClearModal(true)
                                        }}
                                    >
                                        Очистити всі
                                    </Button>
                                    <Button
                                        sx={{
                                            borderRadius: "15px",
                                            width: { lg: 240 },
                                            color: Colors.white,
                                            background: Colors.neutral,
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            lineHeight: "22px",
                                            letterSpacing: "0em",
                                            textAlign: "center",
                                            height: "54px",
                                            textTransform: "none",
                                        }}
                                        onClick={() => {
                                            router.push("/order")
                                        }}
                                    >
                                        Оформити замовлення
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <Grid
                            container
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: "36px",
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    width: { lg: 250 },
                                    flexDirection: "column",
                                    rowGap: "36px",
                                }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        flexDirection: "column",
                                        rowGap: "28px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            lineHeight: "29.05px",
                                            textAlign: "left",
                                            color: Colors.maxDark,
                                        }}
                                    >
                                        Твій кошик порожній
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            lineHeight: "19.36px",
                                            textAlign: "left",
                                            color: Colors.grey,
                                        }}
                                    >
                                        Короткий текст відносно порожнього
                                        кошику
                                    </Box>
                                </Grid>
                                <button
                                    className="button-cart-home"
                                    onClick={() => {
                                        router.push("/")
                                        setOpen(false)
                                    }}
                                >
                                    Перейти до головної
                                </button>
                            </Grid>
                            <Box sx={{ width: { lg: 306 }, mt: "-80px" }}>
                                {cartNoProducts}
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <ClearModal
                open={clearModal}
                setOpen={setClearModal}
                handler={removeAllHandle}
            />
        </Grid>
    )
}

export default CartComp
