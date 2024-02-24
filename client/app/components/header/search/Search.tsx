"use client"

import { GetProducts, TestAxiosReq } from "@/api/test"
import { Box, Button } from "@mui/material"
import { SearchStyles } from "./styles/styles"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import Categories from "./categories/Categories"
import { useQuery } from "@tanstack/react-query"

const Search = () => {
    const [isShowCatalog, setIsShowCatalog] = useState<boolean>(false)

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
            </Box>
        </>
    )
}

export default Search
