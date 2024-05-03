"use client"

import React from "react"
import Box from "@mui/material/Box"
import { Colors } from "@/client"
import Grid from "@mui/material/Grid"

import SearchProductItem from "./searchDropDown/SearchProductItem"
import { useRouter } from "next/navigation"

const SearchDropDrown = ({
    query,
    products,
    productsIsLoading,
    setQuery,
    setOpenCat,
    categories,
    categoriesIsLoading,
}: any) => {
    const router = useRouter()

    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    background: Colors.paper,
                    width: "100%",
                    height: { sm: 600 },
                    left: 0,

                    zIndex: 400,
                    py: "25px",
                }}
            >
                <Box
                    sx={{ width: "100%", height: "100%", overflowY: "scroll" }}
                >
                    <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                        Результати за пошуком: <Box>{query}</Box>
                    </Box>
                    <Grid container sx={{ direction: "column" }}>
                        <Grid
                            container
                            direction={"column"}
                            rowGap={2}
                            p={2}
                            sx={{ borderTop: `2px solid ${Colors.light}` }}
                        >
                            <Box
                                sx={{
                                    color: Colors.grey,

                                    fontSize: "16px",
                                    fontWeight: 500,
                                    lineHeight: "19.36px",
                                }}
                            >
                                Популярні товари
                            </Box>
                            {productsIsLoading ? (
                                <div>Завантажується</div>
                            ) : (
                                products.length > 0 &&
                                products.map((product: any, id: number) => {
                                    return (
                                        <SearchProductItem
                                            setOpenCat={setOpenCat}
                                            setQuery={setQuery}
                                            product={product}
                                            key={product.title}
                                        />
                                    )
                                })
                            )}
                        </Grid>

                        <Grid
                            container
                            direction={"column"}
                            rowGap={2}
                            p={2}
                            sx={{
                                borderTop: `2px solid ${Colors.light}`,
                                borderBottom: `2px solid ${Colors.light}`,
                            }}
                        >
                            <Box>Категорії</Box>
                            {categoriesIsLoading !== "success" ? (
                                <div>Завантажується</div>
                            ) : (
                                categories.length > 0 &&
                                categories.map((category: any, id: number) => {
                                    return (
                                        <>
                                            <Grid
                                                container
                                                sx={{
                                                    alignItems: "center",
                                                    columnGap: 2,
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 50,
                                                        height: 50,
                                                        overflow: "hidden",
                                                        background:
                                                            Colors.paper,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                    }}
                                                >
                                                    <img
                                                        src={category.image}
                                                        alt=""
                                                        style={{
                                                            width: 50,
                                                            height: "auto",
                                                            maxHeight: 50,
                                                        }}
                                                    />
                                                </Box>
                                                <Box>{category.title}</Box>
                                            </Grid>
                                        </>
                                    )
                                })
                            )}
                        </Grid>
                        <Box
                            sx={{
                                p: 2,
                                color: Colors.lightBlue,
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                router.refresh
                                router.push("/search")
                            }}
                        >
                            Дивитися всі результати
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SearchDropDrown
