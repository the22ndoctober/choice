"use client"

import { GetCatSorted, SearchProducts, TestAxiosReq } from "@/api/test"
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
import { useSession } from "next-auth/react"
import Cart from "../../order/Cart"

const items = [
    {
        id: 0,
        image: "/test_item.png",
        title: "Redmi Note 8T 4/64",
        price: 3200,
        currency: " ₴",
        amount: 35,
    },
    {
        id: 1,
        image: "/test_item.png",
        title: "Samsung 7j 4/64",
        price: 4200,
        currency: " ₴",
        amount: 1,
    },
    {
        id: 2,
        image: "/test_item.png",
        title: "Motorola 4/64",
        price: 5200,
        currency: " ₴",
        amount: 2,
    },
]

const Search = ({ params }: any) => {
    const [openCat, setOpenCat] = useState<boolean>(true)
    const [openLogin, setOpenLogin] = useState<boolean>(false)
    const [openCart, setOpenCart] = useState<boolean>(false)
    const [cartAmount, setCartAmount] = useState<number>(0)

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["sortedCats"],
        queryFn: GetCatSorted,
    })

    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        setCartAmount(items.length)
    }, [items.length])

    useEffect(() => {
        if (params !== "") {
            setOpenCat(false)
        }
    }, [params])

    return (
        <>
            <Box sx={{ ...SearchStyles.container }}>
                <Box sx={{ ...SearchStyles.wrapper }}>
                    <Box>
                        <Button sx={{ ...SearchStyles.catalog__button }}>
                            <MenuIcon sx={{ fontSize: 30 }} />
                            Каталог
                        </Button>
                        {!isLoading && openCat && (
                            <Categories categories={data} />
                        )}
                    </Box>
                    <SearchItem
                        key={"search-component"}
                        setOpenCat={setOpenCat}
                    />
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
                                console.log(status)
                                if (status === "unauthenticated") {
                                    setOpenLogin(true)
                                }
                                if (status === "authenticated") {
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
            {openLogin && <LoginForm setOpen={setOpenLogin} />}
            {openCart && (
                <Cart
                    setOpen={setOpenCart}
                    setCartAmount={setCartAmount}
                    items={items}
                />
            )}
        </>
    )
}

export default Search
