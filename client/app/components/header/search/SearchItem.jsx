"use client"

import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import Box from "@mui/material/Box"

import SearchIcon from "@mui/icons-material/Search"
import { SearchStyles } from "./styles/styles"

import SearchDropDrown from "./SearchDropDrown"
import { useMutation, useQuery } from "@tanstack/react-query"
import { SearchProducts } from "@/api/test"
import { useState, useEffect } from "react"
import CloseIcon from "@mui/icons-material/Close"
import { Colors } from "@/client"
import { useDispatch, useSelector } from "react-redux"
import {
    productsLoading,
    getProducts,
} from "@/app/redux/products/productsSlice"

const SearchItem = ({ pageName, setOpenCat }) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const productsData = useSelector((state) => state.products.data)
    const productsLoading = useSelector((state) => state.products.status)

    const categoriesData = useSelector((state) => state.categories.data)
    const categoriesLoading = useSelector((state) => state.categories.status)

    //Use Effect
    if (productsLoading === "idle") {
        dispatch(getProducts())
    }

    useEffect(() => {
        if (searchQuery !== "") {
            let result = productsData.filter(
                function (product) {
                    if (
                        this.count < 4 &&
                        product.title
                            .toUpperCase()
                            .includes(searchQuery.toUpperCase())
                    ) {
                        this.count++
                        return true
                    }
                    return false
                },
                { count: 0 }
            )

            setProducts(result)
            return
        }
        setProducts([])
    }, [searchQuery])

    useEffect(() => {
        if (searchQuery !== "") {
            let result = categoriesData.filter(
                function (category) {
                    if (
                        this.count < 4 &&
                        category.category.title
                            .toUpperCase()
                            .includes(searchQuery.toUpperCase())
                    ) {
                        this.count++
                        return true
                    }
                    return false
                },
                { count: 0 }
            )

            setCategories(result)
            return
        }
        setCategories([])
    }, [searchQuery])

    //STYLED
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        width: "100%",

        "& input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            width: "100%",
            borderRadius: "50px",
            px: "20px",
        },
    }))

    const SearchComp = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: { xs: "100%", lg: "554px" },
        zIndex: 500,
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: { xs: "100%", lg: "554px" },
        },
    }))

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    flex: "5 1 0",
                }}
            >
                <SearchComp
                    sx={{
                        ml: { xs: "0", lg: "46px !important" },
                        display: "flex",
                        background: Colors.neutral,
                        direction: "row",
                        borderRadius: "15px",
                        height: "40px",
                        width: { xs: "100%", lg: "554px" },
                        px: "20px",
                        color: "#fff",
                        alignItems: "center",
                        zIndex: 500,
                    }}
                >
                    <StyledInputBase
                        className="search-placeholder"
                        placeholder="Пошук"
                        value={searchQuery}
                        onChange={(e) => {
                            if (productsLoading !== "loading")
                                return setSearchQuery(e.target.value)
                            setSearchQuery("")
                        }}
                    />

                    {searchQuery !== "" && (
                        <CloseIcon
                            sx={{ zIndex: 500 }}
                            onClick={() => {
                                setSearchQuery("")
                            }}
                        />
                    )}
                    <SearchIcon sx={{ zIndex: 500 }} />
                </SearchComp>
                {searchQuery !== "" && pageName !== "search" && (
                    <SearchDropDrown
                        query={searchQuery}
                        setOpenCat={setOpenCat}
                        setQuery={setSearchQuery}
                        products={products}
                        productsIsLoading={productsLoading}
                        categories={categories}
                        categoriesIsLoading={categoriesLoading}
                    />
                )}
            </Box>
        </>
    )
}

export default SearchItem
