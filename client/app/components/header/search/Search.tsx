"use client"

import { Box, Button, Input, Grid, Typography } from "@mui/material"
import { SearchStyles } from "./styles/styles"
import { useRouter } from "next/navigation"

import MenuIcon from "@mui/icons-material/Menu"
import { useState, useEffect } from "react"
import Categories from "./categories/Categories"
import { useQuery } from "@tanstack/react-query"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SearchItem from "./SearchItem"
import { geoIcon } from "../../static/geoIcon"
import { Colors } from "@/client"
import { profile } from "../../static/profile"
import { favourites } from "../../static/favourites"
import { cart } from "../../static/cart"
import LoginForm from "@/app/components/login/LoginForm"
import { getCart } from "@/app/redux/cart/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import CartComp from "../../order/Cart"
import { getCategories } from "@/app/redux/categories/categoriesSlice"
import CircularProgress from "@mui/joy/CircularProgress"
import { logoSmall } from "../../static/logoSmall"

const Search = ({ params, session }: any) => {
    const cartList = useSelector(getCart)

    const [openCat, setOpenCat] = useState<boolean>(true)
    const [openLogin, setOpenLogin] = useState<boolean>(false)
    const [openCart, setOpenCart] = useState<boolean>(false)
    const [cartAmount, setCartAmount] = useState<number>(0)
    const [windowWidth, setWindowWidth] = useState<number>(0)

    const router = useRouter()
    const dispacth = useDispatch()
    const data = useSelector((state: any) => state.categories.data)
    const getStatus = useSelector((state: any) => state.categories.status)

    if (getStatus === "idle") {
        dispacth<any>(getCategories())
    }

    useEffect(() => {
        const handleResize = () => {
            // Function to handle window resize
            setWindowWidth(document.documentElement.clientWidth)
            // You can add your logic here to handle the resize event
        }

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        console.log(windowWidth)
    }, [windowWidth])

    useEffect(() => {
        setCartAmount(cartList !== null ? cartList.length : 0)
    }, [cartList])

    useEffect(() => {
        if (params !== "") {
            setOpenCat(false)
        }
    }, [params])

    return (
        <>
            {windowWidth >= 1280 ? (
                <Box
                    sx={{
                        background: { sm: Colors.maxDark },
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            width: { xl: 1440, lg: 1368 },
                            margin: "0 auto",
                            height: { sm: "69px" },
                            alignItems: "center",
                            position: "relative",
                            display: "flex",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                flex: "2 1 0",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                            }}
                            onMouseEnter={() => {
                                if (params !== "") {
                                    setOpenCat(true)
                                }
                            }}
                            onMouseLeave={() => {
                                if (params !== "") {
                                    setOpenCat(false)
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    background: Colors.dark,
                                    color: Colors.white,
                                    textTransform: "none !important",
                                    width: { lg: 248, xl: 261 },
                                    pl: { sm: "42px" },
                                    pr: { sm: "56px" },
                                    height: "40px",
                                    fontSize: { sm: "18px" },
                                    display: "flex",
                                    columnGap: { sm: "17px" },
                                    borderRadius: "15px",
                                    fontWeight: 500,
                                    lineHeight: "22px",
                                    letterSpacing: "0.75px",
                                    textAlign: "left",
                                    alignItems: "center",
                                }}
                            >
                                <MenuIcon sx={{ fontSize: 30 }} />
                                Каталог
                            </Box>
                            {getStatus === "success" && openCat && (
                                <Categories categories={data} />
                            )}
                        </Box>
                        <SearchItem
                            pageName={params}
                            key={"search-component"}
                            setOpenCat={setOpenCat}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flex: "3 1 0",
                            }}
                        >
                            <Grid container sx={{ alignItems: "center" }}>
                                {geoIcon}
                                <Typography sx={{ color: Colors.white }}>
                                    Черкаси
                                </Typography>
                                <ExpandMoreIcon sx={{ color: Colors.white }} />
                            </Grid>
                            <Grid
                                container
                                sx={{
                                    alignItems: "center",
                                    columnGap: "8px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        "& > svg:hover": {
                                            stroke: Colors.teal,
                                            fill: Colors.teal,
                                        },
                                    }}
                                    onClick={() => {
                                        if (
                                            localStorage.getItem(
                                                "CHOICE_JWT"
                                            ) === null
                                        ) {
                                            setOpenLogin(true)
                                        } else {
                                            router.push("/dashboard")
                                        }
                                    }}
                                >
                                    {profile}
                                </Box>
                                <Box
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        "& > svg:hover": {
                                            stroke: Colors.teal,
                                            fill: Colors.teal,
                                        },
                                    }}
                                >
                                    {favourites}
                                </Box>
                                <Box
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative",
                                        "& > svg:hover": {
                                            fill: Colors.teal,
                                        },
                                    }}
                                    onClick={() => {
                                        setOpenCart(true)
                                    }}
                                >
                                    {cartAmount > 0 && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                background: Colors.paper,
                                                color: Colors.maxDark,
                                                bottom: 0,
                                                right: 5,
                                                width: "15px",
                                                height: "15px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: "100%",
                                                p: "8px",
                                                fontSize: "10px",
                                            }}
                                        >
                                            {cartAmount}
                                        </Box>
                                    )}
                                    {cart}
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        background: Colors.dark,
                        width: "100%",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 301,
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 360 },
                            margin: "0 auto",
                            display: "flex",
                            alignItems: "center",
                            columnGap: "14px",
                            p: "10px",
                            background: Colors.dark,
                        }}
                    >
                        <Box
                            onClick={() => {
                                router.push("/")
                            }}
                        >
                            {logoSmall}
                        </Box>

                        <SearchItem
                            pageName={params}
                            key={"search-component"}
                            setOpenCat={setOpenCat}
                        />
                    </Box>
                </Box>
            )}
            {openLogin && <LoginForm setOpen={setOpenLogin} />}
            {openCart && <CartComp setOpen={setOpenCart} />}
            {params !== "" && openCat && (
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 154,
                        left: 0,
                        background: "black",
                        zIndex: 100,
                        opacity: 0.5,
                        transitionDuration: "0.5s",
                    }}
                />
            )}
        </>
    )
}

export default Search
