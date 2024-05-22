"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Box, Grid } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "@/app/components/basic/productCard/ProductCard"
import { Colors } from "@/client"
import { GetCategoryProducts } from "@/api/test"
import { useMutation } from "@tanstack/react-query"

const CategoriesSearch = () => {
    const searchParams = useSearchParams()!
    const query = searchParams.get("query")
    const router = useRouter()
    const [startPivot, setStartPivot] = useState(0)
    const [endPivot, setEndPivot] = useState(7)
    const [selectedPage, setSelectedPage] = useState(0)
    const [productsToShow, setProductsToShow] = useState([])
    const [pagesAmount, setPagesAmount] = useState<any>([])

    //categories

    const [rootCat, setRootCat] = useState<any>(null)
    const [targetCat, setTargetCat] = useState<any>(null)

    const status = useSelector((state: any) => state.products.status)
    const categories = useSelector((state: any) => state.categories.data)
    const categoriesStatus = useSelector(
        (state: any) => state.categories.status
    )

    //tanstack

    const getProducts = useMutation({
        mutationKey: ["getproductsbycat"],
        mutationFn: (e) => GetCategoryProducts(e),
    })

    useEffect(() => {
        if (categoriesStatus === "success") {
            const targetCatTarget = categories.find(
                (cat: any) => cat.category.title === query
            )

            let rootCatTarget = structuredClone(targetCatTarget)

            while (rootCatTarget.category.parent !== null) {
                rootCatTarget = categories.find(
                    (cat: any) =>
                        cat.category.title ===
                        rootCatTarget.category.parent.title
                )
            }

            setRootCat(rootCatTarget)
            setTargetCat(targetCatTarget)
        }
    }, [categoriesStatus, query])

    useEffect(() => {
        if (targetCat !== null) {
            getProducts.mutate(targetCat.category.category_id)
        }
    }, [targetCat])

    useEffect(() => {
        setSelectedPage(0)
    }, [query])

    useEffect(() => {
        if (getProducts.isSuccess) {
            setPagesAmount(
                new Array(
                    Math.floor(
                        getProducts.data[0].length / (endPivot - startPivot + 1)
                    )
                ).fill(1)
            )
            console.log(getProducts.data[0])
        }
    }, [getProducts.isSuccess])

    useEffect(() => {
        setStartPivot(8 * (selectedPage + 1) - 8)
        setEndPivot(8 * (selectedPage + 1))
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
                sx={{
                    flexDirection: "column",
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
                        fontWeight: 600,
                    }}
                >
                    {categoriesStatus === "success" &&
                        rootCat !== null &&
                        rootCat.category.title}
                </Box>
                <Grid container sx={{ columnGap: "12px" }}>
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            flex: "1 1 0",
                            background: Colors.paper,
                            borderRadius: "15px",
                        }}
                    ></Grid>
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            flex: "4 1 0",
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                flexWrap: "wrap",
                                columnGap: "10px",
                                rowGap: "10px",
                                "& > div": {
                                    width: "calc(25% - 10px) !important",
                                },
                            }}
                        >
                            {getProducts.isPending ? (
                                <Box>Loading</Box>
                            ) : (
                                getProducts.isSuccess &&
                                getProducts.data[0].map(
                                    (product: any, id: number) => {
                                        if (id >= startPivot && id < endPivot) {
                                            return (
                                                <ProductCard
                                                    key={
                                                        product.product_id + id
                                                    }
                                                    title={product.title}
                                                    price={Math.round(
                                                        parseInt(product.price)
                                                    )}
                                                    currency={product.currency}
                                                    tags={[]}
                                                    img_path={
                                                        product.image_path
                                                    }
                                                    product={product}
                                                />
                                            )
                                        }
                                    }
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
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CategoriesSearch
