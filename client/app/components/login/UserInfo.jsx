"use client"

import { Box, Grid } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Colors } from "@/client"
import BestOffers from "@/app/components/main/bestOffers/BestOffers"
import DeliveryInfo from "@/app/components/main/deliveryInfo/DeliveryInfo"
import { getDashboardOrders, getProfileByJWT } from "@/api/dashboard"
import { useQuery } from "@tanstack/react-query"
import MyOrders from "./DashboarItems/MyOrders"
import MyCabinet from "./DashboarItems/MyCabinet"
import PersonalData from "./DashboarItems/PersonalData"

export default function UserInfo() {
    const sideBarOptions = {
        MyCabinet: "Мій кабінет",
        MyOrders: "Мої замовлення",
        ChosenProducts: "Обрані товари",
        Reviews: "Мої відгуки",
        ReviewedProducts: "Переглянуті товари",
        Exchange: "Обмін",
        PersonalData: "Персональні дані",
    }
    const router = useRouter()
    const [activeSideBar, setActiveSideBar] = useState(sideBarOptions.MyCabinet)
    const [renderedInfo, setRenderedInfo] = useState("")

    const { isLoading, error, data, isSuccess } = useQuery({
        queryKey: ["dashboard"],
        queryFn: () =>
            getProfileByJWT({
                JWT:
                    global?.window?.localStorage?.getItem("CHOICE_JWT") !== null
                        ? localStorage.getItem("CHOICE_JWT")
                        : "",
            }),
    })

    if (isSuccess) {
        console.log(data.orders)
    }

    useEffect(() => {
        if (isSuccess) {
            if (activeSideBar === sideBarOptions.MyCabinet) {
                setRenderedInfo(<MyCabinet />)
            }
            if (activeSideBar === sideBarOptions.MyOrders) {
                setRenderedInfo(<MyOrders orders={data.orders} />)
            }
            if (activeSideBar === sideBarOptions.ChosenProducts) {
                setRenderedInfo(<MyCabinet />)
            }
            if (activeSideBar === sideBarOptions.Reviews) {
                setRenderedInfo(<MyCabinet />)
            }
            if (activeSideBar === sideBarOptions.ReviewedProducts) {
                setRenderedInfo(<MyCabinet />)
            }
            if (activeSideBar === sideBarOptions.Exchange) {
                setRenderedInfo(<MyCabinet />)
            }
            if (activeSideBar === sideBarOptions.PersonalData) {
                setRenderedInfo(<PersonalData user={data} />)
            }
        }
    }, [activeSideBar])

    if (global?.window?.localStorage?.getItem("CHOICE_JWT") === null) {
        router.replace("/")
    }

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    minHeight: "70svh",
                    background: Colors.white,
                }}
            >
                <Grid
                    container
                    sx={{
                        width: { xl: 1440, lg: 1140 },
                        height: "fit-content",
                        margin: "0 auto",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            background: Colors.paper,
                        }}
                    >
                        <Grid
                            container
                            sx={{ borderBottom: `2px solid ${Colors.light}` }}
                        >
                            <Box
                                sx={{
                                    flex: "3 1 0",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: "64px",
                                    borderRight: `1px solid ${Colors.light}`,
                                    columnGap: "20px",
                                }}
                            >
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
                                <Grid
                                    container
                                    sx={{ flexDirection: "column" }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 600,
                                            lineHeight: "24.2px",
                                            color: Colors.black,
                                        }}
                                    >
                                        {isSuccess &&
                                            `${data.name} ${data.surname}`}
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: "24.2px",
                                            color: Colors.grey,
                                        }}
                                    >
                                        {isSuccess && data.phone}
                                    </Box>
                                </Grid>
                            </Box>
                            <Box
                                sx={{
                                    flex: "1 1 0",
                                    p: "64px",
                                    display: "flex",

                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        maxWidth: "200px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            lineHeight: "24.2px",
                                            color: Colors.grey,
                                        }}
                                    >
                                        Мої замовлення
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            lineHeight: "24.2px",
                                        }}
                                    >
                                        0
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        maxWidth: "200px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            lineHeight: "24.2px",
                                            color: Colors.grey,
                                        }}
                                    >
                                        Мої обрані
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            lineHeight: "24.2px",
                                        }}
                                    >
                                        0
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        maxWidth: "200px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            lineHeight: "24.2px",
                                            color: Colors.grey,
                                        }}
                                    >
                                        Мої коментарі
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            lineHeight: "24.2px",
                                        }}
                                    >
                                        0
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid container sx={{}}>
                            <Box
                                sx={{
                                    flex: "1.5 1 0",

                                    borderRight: `2px solid ${Colors.light}`,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "12px",
                                        px: "40px",
                                        py: "17px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                        alignItems: "center",
                                    }}
                                    onClick={() => {
                                        setActiveSideBar(
                                            sideBarOptions.MyCabinet
                                        )
                                    }}
                                >
                                    <svg
                                        width="27"
                                        height="24"
                                        viewBox="0 0 27 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.09966 8.43918V20.8378C4.09966 22.2073 5.20987 23.3175 6.57939 23.3175H10.0612C10.1925 23.3175 10.299 23.2111 10.299 23.0798V17.7382C10.299 16.0263 11.6867 14.6385 13.3986 14.6385V14.6385C15.1105 14.6385 16.4983 16.0263 16.4983 17.7382V23.0798C16.4983 23.2111 16.6048 23.3175 16.7361 23.3175H20.2179C21.5874 23.3175 22.6976 22.2073 22.6976 20.8378V8.43918M4.09966 8.43918L13.3986 1L22.6976 8.43918M4.09966 8.43918L1 10.9189M22.6976 8.43918L25.7973 10.9189"
                                            stroke="#706F6F"
                                            stroke-width="1.23986"
                                            stroke-linecap="round"
                                        />
                                    </svg>

                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.MyCabinet
                                                    ? 600
                                                    : 400,
                                        }}
                                    >
                                        {sideBarOptions.MyCabinet}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "12px",
                                        px: "40px",
                                        py: "17px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                        alignItems: "center",
                                    }}
                                    onClick={() => {
                                        setActiveSideBar(
                                            sideBarOptions.MyOrders
                                        )
                                    }}
                                >
                                    <svg
                                        width="27"
                                        height="24"
                                        viewBox="0 0 27 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 11.4451H3.53193M26.3193 11.4451H23.7874M3.53193 11.4451L4.7979 22.8388H22.5214L23.7874 11.4451M3.53193 11.4451H6.06386M23.7874 11.4451H21.2554M6.06386 11.4451L11.1277 1.31738M6.06386 11.4451H21.2554M21.2554 11.4451L16.1916 1.31738"
                                            stroke="#706F6F"
                                            stroke-width="1.26597"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M9.86133 15.2432H17.4571"
                                            stroke="#706F6F"
                                            stroke-width="1.26597"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M9.86133 17.7744H17.4571"
                                            stroke="#706F6F"
                                            stroke-width="1.26597"
                                            stroke-linecap="round"
                                        />
                                    </svg>

                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.MyOrders
                                                    ? 600
                                                    : 400,
                                        }}
                                    >
                                        {sideBarOptions.MyOrders}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "12px",
                                        px: "40px",
                                        py: "17px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                        alignItems: "center",
                                    }}
                                    onClick={() => {
                                        setActiveSideBar(
                                            sideBarOptions.ChosenProducts
                                        )
                                    }}
                                >
                                    <svg
                                        width="25"
                                        height="23"
                                        viewBox="0 0 25 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.6866 4.35238L12.1376 4.85306L12.5885 4.35242C15.1732 1.48299 17.9407 1.1339 20.0199 2.00585C22.1454 2.89717 23.6683 5.10292 23.6683 7.5901C23.6683 8.92075 23.0249 10.4633 21.9579 12.0758C20.8999 13.6748 19.4723 15.2729 18.0102 16.6994C16.5503 18.1238 15.0707 19.3629 13.921 20.244C13.3457 20.6849 12.858 21.0324 12.5004 21.267C12.3512 21.3649 12.23 21.4397 12.1377 21.4924C12.0453 21.4397 11.924 21.3649 11.7748 21.2669C11.4172 21.0323 10.9295 20.6848 10.3542 20.2439C9.20451 19.3627 7.72491 18.1237 6.26503 16.6993C4.80294 15.2728 3.37529 13.6747 2.31727 12.0758C1.25032 10.4633 0.60688 8.92072 0.60688 7.59007C0.60688 4.79862 2.14479 2.61244 4.24062 1.79705C6.3085 0.992543 9.08658 1.46534 11.6866 4.35238ZM11.9947 21.5669C11.9801 21.5729 11.9819 21.5709 11.9962 21.5662C11.9957 21.5665 11.9952 21.5667 11.9947 21.5669ZM12.2791 21.5662C12.2934 21.5709 12.2952 21.5729 12.2806 21.5669C12.2801 21.5667 12.2796 21.5665 12.2791 21.5662Z"
                                            stroke="#706F6F"
                                            stroke-width="1.21376"
                                        />
                                    </svg>

                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.ChosenProducts
                                                    ? 600
                                                    : 400,
                                        }}
                                    >
                                        {sideBarOptions.ChosenProducts}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "12px",
                                        px: "40px",
                                        py: "17px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                        alignItems: "center",
                                    }}
                                    onClick={() => {
                                        setActiveSideBar(sideBarOptions.Reviews)
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="23"
                                        viewBox="0 0 24 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 15.9447V3.8575C1 2.36348 2.21114 1.15234 3.70515 1.15234H20.6124C22.1064 1.15234 23.3175 2.36348 23.3175 3.8575V15.3544C23.3175 16.8484 22.1064 18.0596 20.6124 18.0596H11.7445C11.3492 18.0596 10.9587 18.1462 10.6005 18.3134L4.84435 20.9996C3.95066 21.4166 3.14131 20.2954 3.78313 19.5466C4.27998 18.967 3.8783 18.0596 3.11485 18.0596C1.94685 18.0596 1 17.1127 1 15.9447Z"
                                            stroke="#706F6F"
                                            stroke-width="1.23986"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M5.33984 12.3115H18.9783"
                                            stroke="#706F6F"
                                            stroke-width="1.23986"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M5.33984 6.73242H18.9783"
                                            stroke="#706F6F"
                                            stroke-width="1.23986"
                                            stroke-linecap="round"
                                        />
                                    </svg>

                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.Reviews
                                                    ? 600
                                                    : 400,
                                        }}
                                    >
                                        {sideBarOptions.Reviews}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "12px",
                                        px: "40px",
                                        py: "17px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                        alignItems: "center",
                                    }}
                                    onClick={() => {
                                        setActiveSideBar(
                                            sideBarOptions.ReviewedProducts
                                        )
                                    }}
                                >
                                    <svg
                                        width="26"
                                        height="24"
                                        viewBox="0 0 26 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21.9191 7.62V8.2169L22.513 8.15716L25.3742 7.86937V15.3706H22.459H21.9191V15.9105V22.6665C15.9253 22.1869 9.90268 22.1869 3.90883 22.6665V15.9105V15.3706H3.36895H0.539876V7.87081L3.31363 8.15655L3.90883 8.21787V7.61952V2.99303C3.90883 2.74904 4.08906 2.54256 4.33081 2.50958C10.0265 1.73267 15.8014 1.73267 21.4971 2.50958C21.7389 2.54256 21.9191 2.74904 21.9191 2.99303V7.62Z"
                                            stroke="#706F6F"
                                            stroke-width="1.07975"
                                        />
                                        <path
                                            d="M13.3001 12.7749L15.724 15.257H25.2878V8.13603C17.0632 9.03903 8.76447 9.03903 0.539876 8.13603V15.257H10.1037L12.5276 12.7749L12.9138 12.3794L13.3001 12.7749Z"
                                            stroke="#706F6F"
                                            stroke-width="1.07975"
                                        />
                                    </svg>

                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.ReviewedProducts
                                                    ? 600
                                                    : 400,
                                        }}
                                    >
                                        {sideBarOptions.ReviewedProducts}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "12px",
                                        px: "40px",
                                        py: "17px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                        alignItems: "center",
                                    }}
                                    onClick={() => {
                                        setActiveSideBar(
                                            sideBarOptions.Exchange
                                        )
                                    }}
                                >
                                    <svg
                                        width="26"
                                        height="23"
                                        viewBox="0 0 26 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21.9191 7.07898V7.67589L22.513 7.61615L25.3742 7.32835V14.8296H22.459H21.9191V15.3695V22.1255C15.9253 21.6459 9.90268 21.6459 3.90883 22.1255V15.3695V14.8296H3.36895H0.539876V7.3298L3.31363 7.61554L3.90883 7.67686V7.07851V2.45201C3.90883 2.20802 4.08906 2.00154 4.33081 1.96857C10.0265 1.19166 15.8014 1.19166 21.4971 1.96857C21.7389 2.00154 21.9191 2.20802 21.9191 2.45201V7.07898Z"
                                            stroke="#706F6F"
                                            stroke-width="1.07975"
                                        />
                                        <path
                                            d="M13.3001 12.2339L15.724 14.716H25.2878V7.59501C17.0632 8.49801 8.76447 8.49801 0.539876 7.59501V14.716H10.1037L12.5276 12.2339L12.9138 11.8384L13.3001 12.2339Z"
                                            stroke="#706F6F"
                                            stroke-width="1.07975"
                                        />
                                    </svg>

                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.Exchange
                                                    ? 600
                                                    : 400,
                                        }}
                                    >
                                        {sideBarOptions.Exchange}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "12px",
                                        px: "40px",
                                        py: "17px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                        alignItems: "center",
                                    }}
                                    onClick={() => {
                                        setActiveSideBar(
                                            sideBarOptions.PersonalData
                                        )
                                    }}
                                >
                                    <svg
                                        width="26"
                                        height="25"
                                        viewBox="0 0 26 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 19.9555V23.8042H25V19.9555C25 16.4129 22.1281 13.541 18.5855 13.541H7.41452C3.87188 13.541 1 16.4129 1 19.9555Z"
                                            fill="#706F6F"
                                            stroke="#706F6F"
                                            stroke-width="1.2829"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M19.2135 5.84353C19.2135 7.01281 18.5816 8.1208 17.4622 8.95856C16.3426 9.79643 14.7663 10.3337 12.9978 10.3337C11.2293 10.3337 9.65297 9.79643 8.53337 8.95856C7.41391 8.1208 6.78208 7.01281 6.78208 5.84353C6.78208 4.67425 7.41391 3.56625 8.53337 2.72849C9.65297 1.89062 11.2293 1.35337 12.9978 1.35337C14.7663 1.35337 16.3426 1.89062 17.4622 2.72849C18.5816 3.56625 19.2135 4.67425 19.2135 5.84353Z"
                                            fill="#706F6F"
                                            stroke="#706F6F"
                                            stroke-width="1.2829"
                                        />
                                    </svg>

                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.PersonalData
                                                    ? 600
                                                    : 400,
                                        }}
                                    >
                                        {sideBarOptions.PersonalData}
                                    </Box>
                                </Box>

                                <Box
                                    onClick={() => {
                                        localStorage.removeItem("CHOICE_JWT")
                                        router.push("/")
                                    }}
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 600,
                                        lineHeight: "24.2px",

                                        px: "40px",
                                        py: "31px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Вийти
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    flex: "3 1 0",
                                }}
                            >
                                {renderedInfo}
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <BestOffers />
                <DeliveryInfo />
            </Box>
        </>
    )
}
