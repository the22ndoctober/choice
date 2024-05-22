"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Box, Grid } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "@/app/components/basic/productCard/ProductCard"
import { Colors } from "@/client"
import BestOffers from "@/app/components/main/bestOffers/BestOffers"

const ProductsSearch = () => {
    const searchParams = useSearchParams()!
    const query = searchParams.get("query")
    const router = useRouter()
    const [startPivot, setStartPivot] = useState(0)
    const [endPivot, setEndPivot] = useState(7)
    const [selectedPage, setSelectedPage] = useState(0)
    const [productsToShow, setProductsToShow] = useState([])

    const [pagesAmount, setPagesAmount] = useState<any>([])

    const products = useSelector((state: any) => state.products.data)
    const status = useSelector((state: any) => state.products.status)

    useEffect(() => {
        console.log(endPivot, startPivot)
    }, [selectedPage])

    useEffect(() => {
        if (status === "success") {
            setProductsToShow(
                products.filter((item: any) =>
                    item.title.toUpperCase().includes(query?.toUpperCase())
                )
            )
        }
    }, [status, endPivot, query])

    useEffect(() => {
        setSelectedPage(0)
    }, [query])

    useEffect(() => {
        setPagesAmount(
            new Array(
                Math.ceil(productsToShow.length / (endPivot - startPivot + 1))
            ).fill(1)
        )
        console.log(productsToShow)
    }, [productsToShow])

    useEffect(() => {
        setStartPivot(8 * (selectedPage + 1) - 8)
        setEndPivot(8 * (selectedPage + 1) - 1)
    }, [selectedPage])

    return (
        <Box
            sx={{
                minHeight: "70svh",
                width: "100%",
                background: Colors.white,
            }}
        >
            <Grid
                container
                direction={"column"}
                sx={{
                    margin: "0 auto",
                    width: { xl: 1440, lg: 1368 },
                    minHeight: "70svh",
                    flexBasis: "auto",
                    py: "24px",
                }}
            >
                <Box
                    sx={{
                        fontSize: "24px",
                        py: "24px",
                        display: "flex",
                        columnGap: "12px",
                    }}
                >
                    Результати за пошуком:
                    <Box
                        sx={{
                            fontWeight: 600,
                        }}
                    >
                        {query}
                    </Box>
                </Box>
                <Grid
                    container
                    sx={{
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        "& > div": {
                            width: "calc(25% - 24px)",
                        },
                    }}
                >
                    {status === "loading" ? (
                        <Box>Loading</Box>
                    ) : (
                        productsToShow.map(
                            (product: any, id: number) =>
                                id >= startPivot &&
                                id <= endPivot && (
                                    <ProductCard
                                        key={
                                            product.product_id +
                                            product.store_id
                                        }
                                        title={product.title}
                                        price={Math.round(
                                            parseInt(product.price)
                                        )}
                                        currency={product.currency}
                                        tags={[]}
                                        img_path={product.image_path}
                                        product={product}
                                    />
                                )
                        )
                    )}
                </Grid>
                <Grid
                    container
                    sx={{
                        margin: "0 auto",
                        justifyContent: "center",
                        mt: "24px",
                        columnGap: "6px",
                    }}
                >
                    {pagesAmount.map((item: any, id: number) => {
                        return (
                            (id < 2 ||
                                (id >= selectedPage - 2 &&
                                    id <= selectedPage + 2) ||
                                id > pagesAmount.length - 5) && (
                                <Box
                                    sx={{
                                        width: "24px",
                                        height: "24px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background:
                                            selectedPage === id
                                                ? Colors.light
                                                : "none",
                                        color: Colors.black,
                                        borderRadius: "100%",
                                        border: `1px solid ${Colors.light}`,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setSelectedPage(id)
                                    }}
                                >
                                    {id + 1}
                                </Box>
                            )
                        )
                    })}
                </Grid>
                <BestOffers />
            </Grid>
        </Box>
    )
}

export default ProductsSearch
