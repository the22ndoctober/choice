"use client"

import { GetProducts } from "@/api/test"
import { Box, Grid } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"
import ProductItem from "@/app/components/main/products/ProductItem"
import DeliveryInfo from "../deliveryInfo/DeliveryInfo"
import { Colors } from "@/client"
import parse from "html-react-parser"
import { logoSquare } from "../../static/logo"
import CircularProgress from "@mui/joy/CircularProgress/CircularProgress"
import { useRouter } from "next/navigation"
import BestOffers from "../bestOffers/BestOffers"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ProductReviews from "./ProductReviews"

export default function Product({ params }: any) {
    // const { isLoading, error, data, isSuccess }: any = useQuery({
    //     queryKey: ["product", params.product],
    //     queryFn: () => GetProducts(params.product),
    //     retry: false,
    // })

    const [data, setData] = useState<any>(null)

    const [rootCat, setRootCat] = useState<any>([])
    const [targetCat, setTargetCat] = useState<any>(null)

    const products = useSelector((state: any) => state.products.data)
    const status = useSelector((state: any) => state.products.status)

    const categories = useSelector((state: any) => state.categories.data)
    const categoriesStatus = useSelector(
        (state: any) => state.categories.status
    )

    const router = useRouter()

    useEffect(() => {
        if (status === "success" && categoriesStatus === "success") {
            const destination = products.find(
                (product: any) => product.product_id === params.product
            )
            setData(destination)
        }
    }, [status, categoriesStatus])

    useEffect(() => {
        if (categoriesStatus === "success" && data !== null && data) {
            const targetCatTarget = categories.find(
                (cat: any) => cat.category.title === data.category.title
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
    }, [categoriesStatus, data])

    if (status === "loading")
        return (
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    background: Colors.white,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                    rowGap: 3,
                }}
            >
                {logoSquare}
                <CircularProgress size="lg" />
            </Box>
        )

    if (status === "error" || !data || data === null) {
        return (
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    background: Colors.white,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                    rowGap: 3,
                }}
            >
                Продукт не знайдений
                <Box
                    sx={{
                        color: Colors.dark,
                        textDecoration: "underline",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        router.push("/")
                    }}
                >
                    Повернутися на головну
                </Box>
            </Box>
        )
    }

    return (
        <>
            <Box sx={{ width: "100%", background: Colors.white }}>
                <Box
                    sx={{
                        width: { xl: "1440px", lg: 1368 },
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 auto",
                        rowGap: "39px",
                        py: { sm: "28px" },
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
                                            `/categories?query=${cat.category.title}`
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
                        <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
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
                                router.push(`/products/${data.product_id}`)
                            }}
                        >
                            {data.title}
                        </Box>
                    </Box>
                    <ProductItem product={data} />

                    <Grid container sx={{ justifyContent: "space-between" }}>
                        <Grid
                            container
                            direction={"column"}
                            sx={{ flex: "1", rowGap: "36px" }}
                        >
                            <Box
                                sx={{
                                    color: Colors.black,

                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29.05px",
                                    textAlign: "left",
                                    pl: "23px",
                                }}
                            >
                                Характеристики
                            </Box>
                            <Grid
                                container
                                sx={{
                                    pl: "23px",
                                    borderRadius: "15px",
                                    background: Colors.paper,
                                }}
                            ></Grid>
                        </Grid>
                        <Grid
                            container
                            direction={"column"}
                            sx={{ flex: "1", rowGap: "36px" }}
                        >
                            <Box
                                sx={{
                                    color: Colors.black,
                                    pl: "23px",
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29.05px",
                                    textAlign: "left",
                                }}
                            >
                                Перевірка від спеціаліста "Чойс":
                            </Box>
                            <Grid
                                container
                                sx={{
                                    p: "54px 43px ",
                                    borderRadius: "15px",
                                    background: Colors.paper,
                                }}
                            >
                                <div className="discription">
                                    {/* {status === "success" &&
                                        parse(data.products.description)} */}
                                </div>
                                <Grid
                                    container
                                    direction={"column"}
                                    sx={{ flex: "1 1 0", rowGap: "16px" }}
                                >
                                    <Box
                                        sx={{
                                            width: "129px",
                                            height: "129px",
                                        }}
                                    >
                                        {" "}
                                        <svg
                                            width="129"
                                            height="129"
                                            viewBox="0 0 129 129"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="129"
                                                height="129"
                                                rx="64.5"
                                                fill="url(#paint0_linear_120_752)"
                                            />
                                            <mask
                                                id="path-2-outside-1_120_752"
                                                maskUnits="userSpaceOnUse"
                                                x="30"
                                                y="28.416"
                                                width="70"
                                                height="73"
                                                fill="black"
                                            >
                                                <rect
                                                    fill="white"
                                                    x="30"
                                                    y="28.416"
                                                    width="70"
                                                    height="73"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M86.4969 33.8198C72.4598 31.9482 58.2364 31.9482 44.1993 33.8198V44.7604C40.9872 44.533 37.7778 44.2535 34.5725 43.9219L34 43.8627V61.8232H42.2062L42.0751 62.2269C39.8375 69.1118 38.6977 76.3061 38.6977 83.5455L44.1993 85.9034V97.9696H61.6694L65.3479 92.4188L69.0263 97.9696H86.4964V86.1376L91.7836 83.8716C91.7836 76.6322 90.6439 69.4379 88.4063 62.5529L88.1691 61.8232H96.5026V43.8627L95.9301 43.9219C92.7892 44.2468 89.6444 44.5217 86.4969 44.7466V33.8198Z"
                                                />
                                            </mask>
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M86.4969 33.8198C72.4598 31.9482 58.2364 31.9482 44.1993 33.8198V44.7604C40.9872 44.533 37.7778 44.2535 34.5725 43.9219L34 43.8627V61.8232H42.2062L42.0751 62.2269C39.8375 69.1118 38.6977 76.3061 38.6977 83.5455L44.1993 85.9034V97.9696H61.6694L65.3479 92.4188L69.0263 97.9696H86.4964V86.1376L91.7836 83.8716C91.7836 76.6322 90.6439 69.4379 88.4063 62.5529L88.1691 61.8232H96.5026V43.8627L95.9301 43.9219C92.7892 44.2468 89.6444 44.5217 86.4969 44.7466V33.8198Z"
                                                fill="#F9FAFD"
                                            />
                                            <path
                                                d="M44.1993 33.8198L43.745 30.4124L40.7618 30.8102V33.8198H44.1993ZM86.4969 33.8198H89.9345V30.8102L86.9512 30.4124L86.4969 33.8198ZM44.1993 44.7604L43.9566 48.1894L47.6369 48.4499V44.7604H44.1993ZM34.5725 43.9219L34.9262 40.5026L34.9262 40.5026L34.5725 43.9219ZM34 43.8627L34.3537 40.4433L30.5624 40.0511V43.8627H34ZM34 61.8232H30.5624V65.2608H34V61.8232ZM42.2062 61.8232L45.4755 62.8857L46.938 58.3856H42.2062V61.8232ZM42.0751 62.2269L38.8058 61.1643L38.8058 61.1643L42.0751 62.2269ZM38.6977 83.5455H35.2601V85.8123L37.3436 86.7052L38.6977 83.5455ZM44.1993 85.9034H47.6369V83.6367L45.5535 82.7437L44.1993 85.9034ZM44.1993 97.9696H40.7618V101.407H44.1993V97.9696ZM61.6694 97.9696V101.407H63.5152L64.5349 99.8685L61.6694 97.9696ZM65.3479 92.4188L68.2133 90.5199L65.3479 86.196L62.4824 90.5199L65.3479 92.4188ZM69.0263 97.9696L66.1609 99.8685L67.1805 101.407H69.0263V97.9696ZM86.4964 97.9696V101.407H89.9339V97.9696H86.4964ZM86.4964 86.1376L85.1422 82.9779L83.0588 83.8708V86.1376H86.4964ZM91.7836 83.8716L93.1378 87.0312L95.2212 86.1383V83.8716H91.7836ZM88.4063 62.5529L91.6755 61.4904L91.6755 61.4904L88.4063 62.5529ZM88.1691 61.8232V58.3856H83.4373L84.8999 62.8857L88.1691 61.8232ZM96.5026 61.8232V65.2608H99.9402V61.8232H96.5026ZM96.5026 43.8627H99.9402V40.0511L96.1489 40.4433L96.5026 43.8627ZM95.9301 43.9219L95.5764 40.5026L95.5764 40.5026L95.9301 43.9219ZM86.4969 44.7466H83.0593V48.4385L86.7419 48.1754L86.4969 44.7466ZM44.6537 37.2273C58.3892 35.3959 72.307 35.3959 86.0426 37.2273L86.9512 30.4124C72.6126 28.5006 58.0836 28.5006 43.745 30.4124L44.6537 37.2273ZM47.6369 44.7604V33.8198H40.7618V44.7604H47.6369ZM44.4421 41.3313C41.267 41.1066 38.0946 40.8303 34.9262 40.5026L34.2188 47.3412C37.4611 47.6767 40.7074 47.9594 43.9566 48.1894L44.4421 41.3313ZM34.9262 40.5026L34.3537 40.4433L33.6463 47.282L34.2188 47.3412L34.9262 40.5026ZM30.5624 43.8627V61.8232H37.4376V43.8627H30.5624ZM34 65.2608H42.2062V58.3856H34V65.2608ZM45.3443 63.2894L45.4755 62.8857L38.937 60.7607L38.8058 61.1643L45.3443 63.2894ZM42.1353 83.5455C42.1353 76.6669 43.2182 69.8312 45.3443 63.2894L38.8058 61.1643C36.4567 68.3924 35.2601 75.9453 35.2601 83.5455H42.1353ZM45.5535 82.7437L40.0518 80.3859L37.3436 86.7052L42.8452 89.063L45.5535 82.7437ZM47.6369 97.9696V85.9034H40.7618V97.9696H47.6369ZM61.6694 94.532H44.1993V101.407H61.6694V94.532ZM62.4824 90.5199L58.8039 96.0706L64.5349 99.8685L68.2133 94.3178L62.4824 90.5199ZM71.8918 96.0706L68.2133 90.5199L62.4824 94.3178L66.1609 99.8685L71.8918 96.0706ZM86.4964 94.532H69.0263V101.407H86.4964V94.532ZM83.0588 86.1376V97.9696H89.9339V86.1376H83.0588ZM90.4295 80.712L85.1422 82.9779L87.8505 89.2972L93.1378 87.0312L90.4295 80.712ZM85.137 63.6154C87.2631 70.1572 88.346 76.993 88.346 83.8716H95.2212C95.2212 76.2713 94.0247 68.7185 91.6755 61.4904L85.137 63.6154ZM84.8999 62.8857L85.137 63.6154L91.6755 61.4904L91.4384 60.7607L84.8999 62.8857ZM88.1691 65.2608H96.5026V58.3856H88.1691V65.2608ZM99.9402 61.8232V43.8627H93.065V61.8232H99.9402ZM96.1489 40.4433L95.5764 40.5026L96.2839 47.3412L96.8563 47.282L96.1489 40.4433ZM95.5764 40.5026C92.4717 40.8237 89.3631 41.0955 86.2519 41.3177L86.7419 48.1754C89.9256 47.948 93.1067 47.6699 96.2839 47.3412L95.5764 40.5026ZM83.0593 33.8198V44.7466H89.9345V33.8198H83.0593Z"
                                                fill="#F9FAFD"
                                                mask="url(#path-2-outside-1_120_752)"
                                            />
                                            <path
                                                d="M87.368 62.8906C89.4961 69.4387 90.6152 76.2712 90.6881 83.1533L85.5215 85.3675L86.1696 62.3626L86.8599 61.3271L87.368 62.8906Z"
                                                fill="#051B32"
                                                stroke="#051B32"
                                                stroke-width="2.18408"
                                            />
                                            <path
                                                d="M43.1134 62.5644C40.9853 69.1126 39.8662 75.945 39.7934 82.8271L44.9599 85.0414L44.3119 62.0364L43.6216 61.0009L43.1134 62.5644Z"
                                                fill="#051B32"
                                                stroke="#051B32"
                                                stroke-width="2.18408"
                                            />
                                            <path
                                                d="M85.4041 78.6194H57.5116L69.6124 96.8791H85.4041V78.6194Z"
                                                fill="#0944D5"
                                                stroke="#051B32"
                                                stroke-width="2.18408"
                                            />
                                            <path
                                                d="M45.2913 78.6194H73.1837L61.0829 96.8791H45.2913V78.6194Z"
                                                fill="#36C3BB"
                                                stroke="#051B32"
                                                stroke-width="2.18408"
                                            />
                                            <path
                                                d="M45.2913 34.7788C58.6087 33.0846 72.0872 33.0846 85.4047 34.7788V78.4581C72.0542 77.4079 58.6418 77.4079 45.2913 78.4581V34.7788Z"
                                                fill="#F9FAFD"
                                                stroke="#051B32"
                                                stroke-width="2.18408"
                                            />
                                            <path
                                                d="M56.625 67.9824H73.7539V69.3273L56.625 68.1594V67.9824Z"
                                                fill="#051B32"
                                            />
                                            <path
                                                d="M34 43.8617V61.8223H58.4263L65.2513 56.0749L71.7171 61.8223H96.5026V43.8617L95.9301 43.921C75.532 46.0311 54.9706 46.0311 34.5725 43.921L34 43.8617Z"
                                                fill="#29B6F9"
                                                stroke="#051B32"
                                                stroke-width="2.18347"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_120_752"
                                                    x1="129"
                                                    y1="-9.79445"
                                                    x2="-26.0986"
                                                    y2="138.197"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#36C3BB" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#29B6F9"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 600,
                                            lineHeight: "19.36px",
                                            color: Colors.grey,
                                        }}
                                    >
                                        Менеджер Антон
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {targetCat !== null && (
                        <ProductReviews cat={targetCat.category} />
                    )}
                    <BestOffers />
                </Box>
                <DeliveryInfo />
            </Box>
        </>
    )
}
