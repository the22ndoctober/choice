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
import { useSelector } from "react-redux"

const SearchItem = ({ pageName, setOpenCat }) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [open, setOpen] = useState(false)

    //TANSTACK
    const { data, isLoading } = useQuery({
        queryKey: ["search", "product"],
        queryFn: SearchProducts,
    })

    const categoriesData = useSelector((state) => state.categories.data)
    const categoriesLoading = useSelector((state) => state.categories.status)

    //Use Effect

    useEffect(() => {
        if (searchQuery !== "") {
            let result = data.filter(
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
        console.log(categoriesData)
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
            paddingLeft: "20px",
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
        width: "auto",
        zIndex: 500,
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    }))

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    minWidth: { lg: "440px", xl: "680px" },
                }}
            >
                <SearchComp sx={{ ...SearchStyles.search__wrapper }}>
                    <StyledInputBase
                        autoFocus={true}
                        className="search-placeholder"
                        placeholder="Пошук"
                        value={searchQuery}
                        onChange={(e) => {
                            if (!isLoading)
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
                        productsIsLoading={isLoading}
                        categories={categories}
                        categoriesIsLoading={categoriesLoading}
                    />
                )}
            </Box>
        </>
    )
}

export default SearchItem
