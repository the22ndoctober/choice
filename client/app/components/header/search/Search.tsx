"use client"

import { TestAxiosReq } from "@/api/test"
import { Box, Button, Input } from "@mui/material"

import { SearchStyles } from "./styles/styles"

import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import Categories from "./categories/Categories"
import { useQuery } from "@tanstack/react-query"

import SearchItem from "./SearchItem"

const Search = () => {
    const [isShowCatalog, setIsShowCatalog] = useState<boolean>(false)

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["categoriesList"],
        queryFn: TestAxiosReq,
    })

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
                    {isShowCatalog && !isLoading ? (
                        <Categories categories={data} />
                    ) : (
                        ""
                    )}
                </Box>
                <SearchItem key={"search-component"} />
            </Box>
        </>
    )
}

export default Search
