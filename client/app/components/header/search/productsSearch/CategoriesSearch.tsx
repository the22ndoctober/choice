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

// MUI IMPORTS
import Select, { selectClasses } from "@mui/joy/Select"
import Option from "@mui/joy/Option"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import BestOffers from "@/app/components/main/bestOffers/BestOffers"
//
import PriceFilter from "@/app/components/basic/filters/PriceFilter"

const RecursiveSelect = ({
    rootCat,
    handleChange,
    id,
    categories,
    last,
}: any) => {
    return (
        <>
            <Select
                placeholder="Виберіть категорію"
                indicator={<KeyboardArrowDown />}
                defaultValue={rootCat[id].category.title}
                onChange={handleChange}
                sx={{
                    width: 240,
                    py: "12px",
                    [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                            transform: "rotate(-180deg)",
                        },
                    },
                }}
            >
                {id === 0
                    ? categories.map(
                          (cat: any) =>
                              cat.category.parent === null && (
                                  <Option value={cat.category.title}>
                                      {cat.category.title}
                                  </Option>
                              )
                      )
                    : rootCat[id - 1].child.map((child: any) => (
                          <Option
                              value={child.category.title}
                              onSelect={(e) => {
                                  console.log(e.target)
                              }}
                          >
                              {child.category.title}
                          </Option>
                      ))}
            </Select>

            {(last || rootCat.length === 1) && rootCat[id].child !== null && (
                <Select
                    placeholder="Виберіть категорію"
                    indicator={<KeyboardArrowDown />}
                    onChange={handleChange}
                    sx={{
                        width: 240,
                        py: "12px",
                        [`& .${selectClasses.indicator}`]: {
                            transition: "0.2s",
                            [`&.${selectClasses.expanded}`]: {
                                transform: "rotate(-180deg)",
                            },
                        },
                    }}
                >
                    {rootCat[id].child.map((child: any) => (
                        <Option value={child.category.title}>
                            {child.category.title}
                        </Option>
                    ))}
                </Select>
            )}

            {rootCat[id + 1] &&
                (rootCat.length - 1 === id + 1 ? (
                    <RecursiveSelect
                        key={rootCat[id + 1].category.title}
                        rootCat={rootCat}
                        handleChange={handleChange}
                        id={id + 1}
                        last={true}
                    />
                ) : (
                    <RecursiveSelect
                        key={rootCat[id + 1].category.title}
                        rootCat={rootCat}
                        handleChange={handleChange}
                        id={id + 1}
                    />
                ))}
        </>
    )
}

const CategoriesSearch = () => {
    const searchParams = useSearchParams()!
    const query = searchParams.get("query")
    const router = useRouter()
    const [startPivot, setStartPivot] = useState(0)
    const [endPivot, setEndPivot] = useState(7)
    const [selectedPage, setSelectedPage] = useState(0)
    const [productsToShow, setProductsToShow] = useState([])
    const [pagesAmount, setPagesAmount] = useState<any>([])

    //price filters

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)

    const [currentMin, setCurrentMin] = useState<number>()
    const [currentMax, setCurrentMax] = useState<number>()
    //categories

    const [rootCat, setRootCat] = useState<any>([])
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

    const handleChange = (event: any, newValue: any) => {
        router.push(`categories?query=${newValue}`)
    }

    useEffect(() => {
        if (categoriesStatus === "success") {
            const targetCatTarget = categories.find(
                (cat: any) => cat.category.title === query
            )

            let result = []
            let rootCatTarget = structuredClone(targetCatTarget)
            result.push(rootCatTarget)

            while (rootCatTarget.category.parent !== null) {
                rootCatTarget = categories.find(
                    (cat: any) =>
                        cat.category.title ===
                        rootCatTarget.category.parent.title
                )
                result.push(rootCatTarget)
            }

            setRootCat(result.reverse())
            setTargetCat(targetCatTarget)
        }
        return () => {
            setRootCat([])
            setTargetCat(null)
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
                    Math.ceil(
                        getProducts.data.length / (endPivot - startPivot + 1)
                    )
                ).fill(1)
            )
            console.log(getProducts.data)
        }
    }, [getProducts.isSuccess])

    useEffect(() => {
        setStartPivot(8 * (selectedPage + 1) - 8)
        setEndPivot(8 * (selectedPage + 1) - 1)
    }, [selectedPage])

    useEffect(() => {
        if (getProducts.isSuccess) {
            let lowest: number = +Infinity
            let highest: number = -Infinity

            getProducts.data.map((product: any) => {
                const price = parseInt(product.price)
                if (price > highest) {
                    setMax(highest)
                    highest = price
                }
                if (price < lowest) {
                    setMin(lowest)
                    lowest = price
                }
            })
        }
    }, [getProducts.isSuccess, getProducts.data])

    useEffect(() => {
        setCurrentMax(max)
        setCurrentMin(min)
    }, [min, max])

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
                    rowGap: "15px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        columnGap: "6px",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            router.push("/")
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.1534 9.74023C14.9116 9.74023 14.7216 9.93023 14.7216 10.172V15.5609H12.5281V13.2292C12.5281 11.9856 11.509 10.9666 10.2654 10.9666C9.02184 10.9666 8.00279 11.9856 8.00279 13.2292V15.5609H5.8265V10.172C5.8265 9.93023 5.6365 9.74023 5.39469 9.74023C5.15288 9.74023 4.96289 9.93023 4.96289 10.172V15.9927C4.96289 16.2346 5.15288 16.4245 5.39469 16.4245H8.43459C8.6764 16.4245 8.86639 16.2346 8.86639 15.9927V13.2292C8.86639 12.452 9.48819 11.8302 10.2654 11.8302C11.0427 11.8302 11.6645 12.452 11.6645 13.2292V15.9927C11.6645 16.2346 11.8545 16.4245 12.0963 16.4245H15.1534C15.3953 16.4245 15.5853 16.2346 15.5853 15.9927V10.172C15.5853 9.93023 15.378 9.74023 15.1534 9.74023Z"
                                fill="#706F6F"
                            />
                            <path
                                d="M17.8837 9.44593L10.5431 3.59068C10.3876 3.46977 10.1631 3.46977 10.0076 3.59068L2.66699 9.44593C2.47699 9.60138 2.44245 9.86046 2.5979 10.0505C2.68426 10.1541 2.80516 10.2059 2.94334 10.2059C3.0297 10.2059 3.13333 10.1714 3.21969 10.1195L10.284 4.48883L17.3483 10.1195C17.5383 10.275 17.8146 10.2404 17.9528 10.0505C18.091 9.87774 18.0737 9.60138 17.8837 9.44593Z"
                                fill="#706F6F"
                            />
                        </svg>
                    </Box>

                    <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />

                    {rootCat.map((cat: any, id: number) => (
                        <>
                            <Box
                                sx={{
                                    color: Colors.grey,
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    router.push(
                                        `categories?query=${cat.category.title}`
                                    )
                                }}
                            >
                                {cat.category.title}
                            </Box>
                            {id !== rootCat.length - 1 && (
                                <ArrowForwardIosIcon
                                    sx={{ fontSize: "12px" }}
                                />
                            )}
                        </>
                    ))}
                </Box>
                <Grid
                    container
                    sx={{
                        justifyContent: "space-between",
                        borderRadius: "15px",
                        background: Colors.paper,
                        px: "16px",
                        py: "6px",
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "24px",
                            color: Colors.maxDark,
                            display: "flex",
                            columnGap: "12px",
                            fontWeight: 600,
                        }}
                    >
                        {categoriesStatus === "success" &&
                            targetCat !== null &&
                            targetCat.category.title}
                    </Box>
                </Grid>

                <Grid container sx={{ columnGap: "12px" }}>
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            flex: "1 1 0",
                            background: Colors.paper,
                            borderRadius: "15px",
                            p: "16px",
                            rowGap: "12px",
                        }}
                    >
                        <Box
                            sx={{
                                fontWeight: 600,
                                fontSize: "20px",
                                lineHeight: "24px",
                                color: Colors.maxDark,
                            }}
                        >
                            Фільтр
                        </Box>
                        <Grid
                            container
                            sx={{
                                flexDirection: "column",
                                rowGap: "12px",
                            }}
                        >
                            <PriceFilter
                                key="price-filter-cat"
                                min={min}
                                max={max}
                                currentMin={currentMin}
                                currentMax={currentMax}
                                setCurrentMin={setCurrentMin}
                                setCurrentMax={setCurrentMax}
                            />
                            {rootCat.length > 0 && (
                                <RecursiveSelect
                                    key={
                                        rootCat[0]
                                            ? rootCat[0].category.title
                                            : "123"
                                    }
                                    rootCat={rootCat}
                                    handleChange={handleChange}
                                    id={0}
                                    categories={categories}
                                />
                            )}
                        </Grid>
                    </Grid>
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
                                rowGap: "24px",
                                "& > div": {
                                    width: "calc(25% - 18px)",
                                },
                                "& > div:not(:nth-child(4n))": {
                                    marginRight: "24px",
                                },
                            }}
                        >
                            {getProducts.isPending ? (
                                <Box>Loading</Box>
                            ) : (
                                getProducts.isSuccess &&
                                getProducts.data.map(
                                    (product: any, id: number) => {
                                        if (
                                            id >= startPivot &&
                                            id <= endPivot
                                        ) {
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
                <BestOffers />
            </Grid>
        </Box>
    )
}

export default CategoriesSearch
