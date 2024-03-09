"use client"

import { GetCatSorted, SearchProducts, TestAxiosReq } from "@/api/test"
import { Box, Button, Input, Grid, Typography } from "@mui/material"

import { SearchStyles } from "./styles/styles"

import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import Categories from "./categories/Categories"
import { useQuery } from "@tanstack/react-query"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SearchItem from "./SearchItem"
import { geoIcon } from "../../static/geoIcon"
import { Colors } from "@/client"
import { profile } from "../../static/profile"
import { favourites } from "../../static/favourites"
import { cart } from "../../static/cart"

const Search = () => {
    const [isShowCatalog, setIsShowCatalog] = useState<boolean>(false)

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["sortedCats"],
        queryFn: GetCatSorted,
    })

    return (
        <>
            <Box sx={{ ...SearchStyles.container }}>
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
                        {!isLoading && isShowCatalog && (
                            <Categories categories={data} />
                        )}
                    </Box>
                    <SearchItem key={"search-component"} />
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
                            }}
                        >
                            {cart}
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Search
