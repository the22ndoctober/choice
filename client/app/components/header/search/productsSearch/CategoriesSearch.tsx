"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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
import PriceFIlter from "@/app/components/basic/filters/PriceFIlter"

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
                key={rootCat[id].category.title + "1"}
                placeholder="Виберіть категорію"
                indicator={<KeyboardArrowDown />}
                defaultValue={rootCat[id].category.title}
                onChange={handleChange}
                sx={{
                    width: "100%",
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
                    key={rootCat[id].category.title}
                    placeholder="Виберіть категорію"
                    indicator={<KeyboardArrowDown />}
                    onChange={handleChange}
                    sx={{
                        width: "100%",
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
    const [filtredItems, setFiltredItems] = useState([])
    const [pagesAmount, setPagesAmount] = useState<any>([])
    const [suitProducts, setSuitProducts] = useState<any>([])

    //responsive

    const [width, setWidth] = useState(1281)
    const [amountToShow, setAmountToShow] = useState(8)
    const [itemsToShow, setItemsToShow] = useState([])
    const [filtersOpen, setFiltersOpen] = useState(false)

    useEffect(() => {
        if (window) {
            setWidth(document.documentElement.clientWidth)
        }

        const updateWindowDimensions = () => {
            const newWidth = document ? document.documentElement.clientWidth : 0
            setWidth(newWidth)
        }

        window.addEventListener("resize", updateWindowDimensions)

        return () =>
            window.removeEventListener("resize", updateWindowDimensions)
    }, [])

    const handleScroll = () => {
        console.log(window.innerHeight)
        // if (
        //     window.innerHeight + document.documentElement.scrollTop !==
        //     document.documentElement.offsetHeight
        // ) {
        //     return
        // }
        // setAmountToShow((state: number) => state + 8)
    }

    useEffect(() => {
        setItemsToShow([...filtredItems])
    }, [amountToShow, filtredItems])

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // sort options

    const [openSorts, setOpenSorts] = useState<boolean>(false)
    const sortRef = useRef<any>()

    type SortStatuses = {
        priceUp: string
        priceDown: string
        popular: string
    }

    const sortStatuses: SortStatuses = {
        priceUp: "за зростанням ціни",
        priceDown: "за зменьшенням ціни",
        popular: "за популярністю",
    }

    const [sortStatus, setSortStatus] = useState<string>(sortStatuses.popular)

    useEffect(() => {
        function recursiveItemsSortPriceUp(array: any): any {
            if (array.length <= 1) {
                return array
            }
            let pivotIndex = Math.floor(array.length / 2)
            let pivot = array[pivotIndex]
            let less = []
            let greater = []
            let nonAvailable = []
            for (let i = 0; i < array.length; i++) {
                if (i === pivotIndex) continue
                if (parseInt(array[i].balance) === 0) {
                    nonAvailable.push(array[i])
                    continue
                }
                if (parseInt(array[i].price) <= parseInt(pivot.price)) {
                    less.push(array[i])
                } else {
                    greater.push(array[i])
                }
            }
            if (parseInt(pivot.balance) === 0) {
                return [
                    ...recursiveItemsSortPriceUp(less),
                    ...recursiveItemsSortPriceUp(greater),
                    pivot,
                    ...nonAvailable,
                ]
            }

            return [
                ...recursiveItemsSortPriceUp(less),
                pivot,
                ...recursiveItemsSortPriceUp(greater),
                ...nonAvailable,
            ]
        }

        function recursiveItemsSortPriceDown(array: any): any {
            if (array.length <= 1) {
                return array
            }
            let pivotIndex = Math.floor(array.length / 2)
            let pivot = array[pivotIndex]
            let less = []
            let greater = []
            let nonAvailable = []
            for (let i = 0; i < array.length; i++) {
                if (i === pivotIndex) continue
                if (parseInt(array[i].balance) === 0) {
                    nonAvailable.push(array[i])
                    continue
                }
                if (parseInt(array[i].price) > parseInt(pivot.price)) {
                    greater.push(array[i])
                } else {
                    less.push(array[i])
                }
            }

            if (parseInt(pivot.balance) === 0) {
                return [
                    ...recursiveItemsSortPriceDown(greater),

                    ...recursiveItemsSortPriceDown(less),
                    pivot,
                    ...nonAvailable,
                ]
            }

            return [
                ...recursiveItemsSortPriceDown(greater),
                pivot,
                ...recursiveItemsSortPriceDown(less),
                ...nonAvailable,
            ]
        }

        if (!filtredItems) {
            return
        }
        if (status !== "success") {
            return
        }
        if (sortStatus === sortStatuses.priceUp) {
            const items = recursiveItemsSortPriceUp(filtredItems)
            setFiltredItems(items)
        }
        if (sortStatus === sortStatuses.priceDown) {
            const items = recursiveItemsSortPriceDown(filtredItems)
            setFiltredItems(items)
        }
        if (sortStatus === sortStatuses.popular) {
            setFiltredItems(
                suitProducts.filter(
                    (product: any) =>
                        product.price >= currentMin &&
                        product.price <= currentMax
                )
            )
        }
    }, [sortStatus])

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setOpenSorts(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        // Cleanup the event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [openSorts])

    //

    //price filters

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)

    const [currentMin, setCurrentMin] = useState<number>(0)
    const [currentMax, setCurrentMax] = useState<number>(0)
    //categories

    const [rootCat, setRootCat] = useState<any>([])
    const [targetCat, setTargetCat] = useState<any>(null)

    const products = useSelector((state: any) => state.products.data)
    const status = useSelector((state: any) => state.products.status)

    const categories = useSelector((state: any) => state.categories.data)
    const categoriesStatus = useSelector(
        (state: any) => state.categories.status
    )

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
        if (targetCat !== null && status === "success") {
            let target = products.filter((product: any) =>
                targetCat.category.category_id.some(
                    (id: string) => id === product.category_id
                )
            )
            setSuitProducts(target)
        }
    }, [targetCat, status])

    useEffect(() => {
        setSelectedPage(0)
    }, [query])

    useEffect(() => {
        setPagesAmount(
            new Array(
                Math.ceil(filtredItems.length / (endPivot - startPivot + 1))
            ).fill(1)
        )
    }, [filtredItems])

    useEffect(() => {
        setStartPivot(8 * (selectedPage + 1) - 8)
        setEndPivot(8 * (selectedPage + 1) - 1)
    }, [selectedPage])

    useEffect(() => {
        let lowest: number = 0
        let highest: number = 0

        suitProducts.map((product: any, id: number) => {
            const price = parseInt(product.price)
            if (id === 0) {
                setMax(price)
                setMin(price)
                highest = price
                lowest = price
                return
            }
            if (price > highest) {
                setMax(price)
                highest = price
            }
            if (price < lowest) {
                setMin(price)
                lowest = price
            }
        })
    }, [suitProducts])

    useEffect(() => {
        setCurrentMax(max)
        setCurrentMin(min)
    }, [min, max])

    useEffect(() => {
        setSelectedPage(0)
    }, [filtredItems])

    //price filtration

    useEffect(() => {
        setFiltredItems(suitProducts)
    }, [suitProducts])

    useEffect(() => {
        setFiltredItems(
            suitProducts.filter(
                (product: any) =>
                    product.price >= currentMin && product.price <= currentMax
            )
        )
    }, [currentMin, currentMax])

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
                    width: { xl: 1440, lg: 1368, xs: 360 },
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
                        background: width > 1280 ? Colors.paper : "none",
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
                    {width > 1280 && (
                        <Box
                            sx={{
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: Colors.grey,

                                position: "relative",
                            }}
                            onMouseEnter={() => {
                                setOpenSorts(true)
                            }}
                            onMouseLeave={() => {
                                setOpenSorts(false)
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    alignItems: "center",
                                    columnGap: "10px",
                                }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.5 21C5.5 21.2761 5.72386 21.5 6 21.5C6.27614 21.5 6.5 21.2761 6.5 21L5.5 21ZM6.35355 1.64645C6.15829 1.45119 5.84171 1.45119 5.64645 1.64645L2.46447 4.82843C2.2692 5.02369 2.2692 5.34027 2.46447 5.53553C2.65973 5.7308 2.97631 5.7308 3.17157 5.53553L6 2.70711L8.82843 5.53553C9.02369 5.7308 9.34027 5.7308 9.53553 5.53553C9.7308 5.34027 9.7308 5.02369 9.53553 4.82843L6.35355 1.64645ZM6.5 21L6.5 2L5.5 2L5.5 21L6.5 21Z"
                                        fill="#706F6F"
                                    />
                                    <path
                                        d="M17.5 2C17.5 1.72386 17.7239 1.5 18 1.5C18.2761 1.5 18.5 1.72386 18.5 2L17.5 2ZM18.3536 21.3536C18.1583 21.5488 17.8417 21.5488 17.6464 21.3536L14.4645 18.1716C14.2692 17.9763 14.2692 17.6597 14.4645 17.4645C14.6597 17.2692 14.9763 17.2692 15.1716 17.4645L18 20.2929L20.8284 17.4645C21.0237 17.2692 21.3403 17.2692 21.5355 17.4645C21.7308 17.6597 21.7308 17.9763 21.5355 18.1716L18.3536 21.3536ZM18.5 2L18.5 21L17.5 21L17.5 2L18.5 2Z"
                                        fill="#706F6F"
                                    />
                                </svg>
                                Сортування:
                                <Box
                                    sx={{
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "17px",
                                        textDecorationLine: "underline",
                                        color: Colors.neutral,
                                        cursor: "pointer",
                                    }}
                                >
                                    {sortStatus}
                                </Box>
                            </Grid>

                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                }}
                            >
                                {openSorts && (
                                    <Grid
                                        container
                                        sx={{
                                            flexDirection: "column",
                                            borderRadius: "15px",
                                            background: Colors.paper,
                                            p: "20px",
                                            position: "absolute",
                                            zIndex: 250,
                                            rowGap: "21px",
                                            top: 0,
                                            left: 0,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "12px",
                                                cursor: "pointer",
                                                color:
                                                    sortStatus ===
                                                    sortStatuses.popular
                                                        ? Colors.neutral
                                                        : Colors.grey,
                                            }}
                                            onClick={() => {
                                                setSortStatus(
                                                    sortStatuses.popular
                                                )
                                                setOpenSorts(false)
                                            }}
                                        >
                                            {sortStatuses.popular}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "12px",
                                                cursor: "pointer",
                                                color:
                                                    sortStatus ===
                                                    sortStatuses.priceUp
                                                        ? Colors.neutral
                                                        : Colors.grey,
                                            }}
                                            onClick={() => {
                                                setSortStatus(
                                                    sortStatuses.priceUp
                                                )
                                                setOpenSorts(false)
                                            }}
                                        >
                                            {sortStatuses.priceUp}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "12px",
                                                cursor: "pointer",
                                                color:
                                                    sortStatus ===
                                                    sortStatuses.priceDown
                                                        ? Colors.neutral
                                                        : Colors.grey,
                                            }}
                                            onClick={() => {
                                                setSortStatus(
                                                    sortStatuses.priceDown
                                                )
                                                setOpenSorts(false)
                                            }}
                                        >
                                            {sortStatuses.priceDown}
                                        </Box>
                                    </Grid>
                                )}
                            </Box>
                        </Box>
                    )}
                </Grid>

                {width <= 1280 && (
                    <Box
                        sx={{
                            background: width <= 1280 ? Colors.paper : "none",
                            px: "12px",
                            borderRadius: "15px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            ref={sortRef}
                            sx={{
                                flex: "1.4 1 0",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "12px",
                                lineHeight: "17px",
                                color: Colors.grey,

                                position: "relative",
                            }}
                            onMouseDown={() => {
                                setOpenSorts(true)
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    alignItems: "center",
                                    columnGap: "10px",
                                }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.5 21C5.5 21.2761 5.72386 21.5 6 21.5C6.27614 21.5 6.5 21.2761 6.5 21L5.5 21ZM6.35355 1.64645C6.15829 1.45119 5.84171 1.45119 5.64645 1.64645L2.46447 4.82843C2.2692 5.02369 2.2692 5.34027 2.46447 5.53553C2.65973 5.7308 2.97631 5.7308 3.17157 5.53553L6 2.70711L8.82843 5.53553C9.02369 5.7308 9.34027 5.7308 9.53553 5.53553C9.7308 5.34027 9.7308 5.02369 9.53553 4.82843L6.35355 1.64645ZM6.5 21L6.5 2L5.5 2L5.5 21L6.5 21Z"
                                        fill="#706F6F"
                                    />
                                    <path
                                        d="M17.5 2C17.5 1.72386 17.7239 1.5 18 1.5C18.2761 1.5 18.5 1.72386 18.5 2L17.5 2ZM18.3536 21.3536C18.1583 21.5488 17.8417 21.5488 17.6464 21.3536L14.4645 18.1716C14.2692 17.9763 14.2692 17.6597 14.4645 17.4645C14.6597 17.2692 14.9763 17.2692 15.1716 17.4645L18 20.2929L20.8284 17.4645C21.0237 17.2692 21.3403 17.2692 21.5355 17.4645C21.7308 17.6597 21.7308 17.9763 21.5355 18.1716L18.3536 21.3536ZM18.5 2L18.5 21L17.5 21L17.5 2L18.5 2Z"
                                        fill="#706F6F"
                                    />
                                </svg>
                                <Box>
                                    Сортування:
                                    <Box
                                        sx={{
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            fontSize: "12px",
                                            lineHeight: "17px",
                                            textDecorationLine: "underline",
                                            color: Colors.neutral,
                                            cursor: "pointer",
                                        }}
                                    >
                                        {sortStatus}
                                    </Box>
                                </Box>
                            </Grid>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                }}
                            >
                                {openSorts && (
                                    <Grid
                                        container
                                        sx={{
                                            flexDirection: "column",
                                            borderRadius: "15px",
                                            background: Colors.paper,
                                            p: "20px",
                                            position: "absolute",
                                            zIndex: 250,
                                            rowGap: "21px",
                                            top: 0,
                                            left: 0,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "12px",
                                                cursor: "pointer",
                                                color:
                                                    sortStatus ===
                                                    sortStatuses.popular
                                                        ? Colors.neutral
                                                        : Colors.grey,
                                            }}
                                            onClick={() => {
                                                setSortStatus(
                                                    sortStatuses.popular
                                                )

                                                setOpenSorts(false)
                                            }}
                                        >
                                            {sortStatuses.popular}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "12px",
                                                cursor: "pointer",
                                                color:
                                                    sortStatus ===
                                                    sortStatuses.priceUp
                                                        ? Colors.neutral
                                                        : Colors.grey,
                                            }}
                                            onClick={() => {
                                                setSortStatus(
                                                    sortStatuses.priceUp
                                                )
                                                setOpenSorts(false)
                                            }}
                                        >
                                            {sortStatuses.priceUp}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "12px",
                                                cursor: "pointer",
                                                color:
                                                    sortStatus ===
                                                    sortStatuses.priceDown
                                                        ? Colors.neutral
                                                        : Colors.grey,
                                            }}
                                            onClick={() => {
                                                setSortStatus(
                                                    sortStatuses.priceDown
                                                )
                                                setOpenSorts(false)
                                            }}
                                        >
                                            {sortStatuses.priceDown}
                                        </Box>
                                    </Grid>
                                )}
                            </Box>
                        </Box>

                        <Grid
                            container
                            sx={{
                                flex: "1 1 0",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "12px",
                                lineHeight: "12px",
                                display: "flex",
                                alignItems: "center",
                                columnGap: "6px",
                                color: Colors.grey,
                                width: "fit-content",
                            }}
                            onClick={() => {
                                6
                                setFiltersOpen(true)
                            }}
                        >
                            <svg
                                width="18"
                                height="21"
                                viewBox="0 0 18 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.465 3.49657C0.465 2.33322 1.40808 1.39014 2.57143 1.39014H15.4286C16.5919 1.39014 17.535 2.33322 17.535 3.49657V7.18351C17.535 7.92342 17.1468 8.60907 16.5123 8.98976L12.5806 11.3488C11.666 11.8975 11.1064 12.8859 11.1064 13.9525V17.1842C11.1064 18.0455 10.582 18.8201 9.78231 19.14L8.4966 19.6543C7.11296 20.2077 5.60786 19.1887 5.60786 17.6985V13.7823C5.60786 12.8265 5.15788 11.9266 4.39329 11.3531L1.30757 9.03885C0.777161 8.64105 0.465 8.01673 0.465 7.35371V3.49657Z"
                                    stroke="#706F6F"
                                    stroke-width="0.93"
                                />
                                <rect
                                    y="14"
                                    width="4"
                                    height="1"
                                    rx="0.5"
                                    fill="#706F6F"
                                />
                                <rect
                                    y="16"
                                    width="4"
                                    height="1"
                                    rx="0.5"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="13"
                                    y="14"
                                    width="5"
                                    height="1"
                                    rx="0.5"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="13"
                                    y="16"
                                    width="5"
                                    height="1"
                                    rx="0.5"
                                    fill="#706F6F"
                                />
                            </svg>
                            Фільтр
                        </Grid>
                    </Box>
                )}

                <Grid container sx={{ columnGap: "12px" }}>
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            flex: "1 1 0",
                            background: Colors.paper,
                            borderRadius: "15px",
                            display:
                                width > 1280
                                    ? "flex"
                                    : filtersOpen
                                    ? "flex"
                                    : "none",
                            p: "16px",
                            rowGap: "12px",
                            position: { xs: "fixed", lg: "static" },
                            left: { xs: 0 },
                            top: { xs: 50 },
                            minHeight: { xs: "100svh", lg: 0 },
                            overflowY: "scroll",
                            zIndex: 300,
                        }}
                    >
                        <Box
                            sx={{
                                fontWeight: 600,
                                fontSize: "20px",
                                lineHeight: "24px",
                                color: Colors.maxDark,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            Фільтр
                            {width < 1280 && (
                                <Box
                                    onClick={() => {
                                        setFiltersOpen(false)
                                    }}
                                >
                                    X
                                </Box>
                            )}
                        </Box>
                        <Grid
                            container
                            sx={{
                                flexDirection: "column",
                                rowGap: "12px",
                            }}
                        >
                            <PriceFIlter
                                key="price-filter-cat"
                                min={min}
                                max={max}
                                currentMin={currentMin}
                                currentMax={currentMax}
                                setCurrentMin={setCurrentMin}
                                setCurrentMax={setCurrentMax}
                                setFiltersOpen={setFiltersOpen}
                                screenWidth={width}
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
                                    width: {
                                        xs: "calc(50% - 18px)",
                                        lg: "calc(25% - 18px)",
                                    },
                                },
                                "& > div:not(:nth-child(4n))": {
                                    marginRight: { lg: "24px" },
                                },
                                "& > div:not(:nth-child(2n))": {
                                    marginRight: { xs: "24px" },
                                },
                            }}
                        >
                            {status === "loading" ? (
                                <Box>Loading</Box>
                            ) : (
                                status === "success" &&
                                filtredItems.map(
                                    (product: any, id: number) =>
                                        id >= startPivot &&
                                        id <= endPivot && (
                                            <ProductCard
                                                key={product.product_id + id}
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
                            {pagesAmount.map(
                                (item: any, id: number) =>
                                    (id <= 2 ||
                                        (id >= selectedPage - 2 &&
                                            id <= selectedPage + 2) ||
                                        id >= pagesAmount.length - 3) && (
                                        <Box
                                            key={id}
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
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                <BestOffers />
            </Grid>
        </Box>
    )
}

export default CategoriesSearch
