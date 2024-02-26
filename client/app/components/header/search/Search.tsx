"use client"

import { TestAxiosReq } from "@/api/test"
import { Box, Button, Input } from "@mui/material"
import { styled, alpha } from "@mui/material/styles"
import { SearchStyles } from "./styles/styles"
import InputBase from "@mui/material/InputBase"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import Categories from "./categories/Categories"
import { useQuery } from "@tanstack/react-query"
import SearchIcon from "@mui/icons-material/Search"

const Search = () => {
    const [isShowCatalog, setIsShowCatalog] = useState<boolean>(false)

    const SearchComp = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    }))

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        width: "100%",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            [theme.breakpoints.up("sm")]: {
                width: "12ch",
                "&:focus": {
                    width: "20ch",
                },
            },
        },
    }))

    // GetProducts

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["categoriesList"],
        queryFn: TestAxiosReq,
    })

    if (isLoading) return <div>Loading</div>

    return (
        <>
            <Box
                onMouseLeave={() => {
                    setIsShowCatalog(false)
                }}
                sx={{ ...SearchStyles.wrapper }}
            >
                <Box>
                    <Button
                        onMouseEnter={() => {
                            setIsShowCatalog(true)
                        }}
                        sx={{ ...SearchStyles.catalog__button }}
                    >
                        <MenuIcon sx={{ fontSize: 30 }} />
                        Каталог
                    </Button>
                    {isShowCatalog ? <Categories categories={data} /> : ""}
                </Box>
                <SearchComp sx={{ ...SearchStyles.search__wrapper }}>
                    <StyledInputBase
                        className="search-placeholder"
                        placeholder="Пошук"
                        inputProps={{ "aria-label": "search" }}
                    />
                    <SearchIcon />
                </SearchComp>
            </Box>
        </>
    )
}

export default Search
