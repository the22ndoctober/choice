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

    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ["categoriesList"],
        queryFn: TestAxiosReq,
    })

    const handleShowCatalog = async () => {
        console.log(data)
        setIsShowCatalog((state: boolean) => !state)
    }

    return (
        <>
            <Box sx={{ ...SearchStyles.wrapper }}>
                <Button
                    onClick={handleShowCatalog}
                    sx={{ ...SearchStyles.catalog__button }}
                >
                    <MenuIcon sx={{ fontSize: 30 }} />
                    Каталог
                </Button>

                {isShowCatalog ? <Categories categories={data} /> : ""}
            </Box>
        </>
    )
}

export default Search
