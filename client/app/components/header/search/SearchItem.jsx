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
            let result = productsData
                .filter((product) =>
                    product.title
                        .toUpperCase()
                        .includes(searchQuery.toUpperCase())
                )
                .slice(0, 4)

            setProducts(result)
            return
        }
        setProducts([])
    }, [searchQuery])

    useEffect(() => {
        if (searchQuery !== "") {
            let result = categoriesData
                .filter((category) =>
                    category.category.title
                        .toUpperCase()
                        .includes(searchQuery.toUpperCase())
                )
                .slice(0, 4)

            setCategories(result)
            return
        }
        setCategories([])
    }, [searchQuery])

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    flex: "5 1 0",
                    px: { lg: "32px" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        background: Colors.neutral,
                        direction: "row",
                        borderRadius: "15px",
                        height: "40px",
                        width: "100%",
                        px: "20px",
                        color: "#fff",
                        alignItems: "center",
                        justifyContent: "space-between",
                        zIndex: 500,
                    }}
                >
                    <InputBase
                        placeholder="Пошук"
                        value={searchQuery}
                        onChange={(e) => {
                            if (productsLoading !== "loading") {
                                return setSearchQuery(e.target.value)
                            }

                            setSearchQuery("")
                        }}
                        sx={{
                            color: Colors.white,
                        }}
                    />
                    <Box>
                        {searchQuery !== "" && (
                            <CloseIcon
                                sx={{ zIndex: 500 }}
                                onClick={() => {
                                    setSearchQuery("")
                                }}
                            />
                        )}
                        <SearchIcon sx={{ zIndex: 500 }} />
                    </Box>
                </Box>
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
