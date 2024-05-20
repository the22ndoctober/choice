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

export default function UserInfo() {
    const sideBarOptions = {
        MyCabinet: "Мій кабінет",
        MyOrders: "Мої замовлення",
        ChosenProducts: "Обрані товари",
        Reviews: "Мої відгуки",
        ReviewedProducts: "Переглянуті товари",
        Exchange: "Обмін",
        PesonalData: "Персональні дані",
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
        retry: false,
        refetchOnReconnect: false,
    })

    if (isSuccess) {
        console.log(data.orders)
    }

    useEffect(() => {
        if (activeSideBar === sideBarOptions.MyCabinet) {
            setRenderedInfo(<MyCabinet />)
        }
        if (!isLoading) {
            if (activeSideBar === sideBarOptions.MyOrders) {
                setRenderedInfo(<MyOrders orders={data.orders} />)
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
                                        {isSuccess && data.name}
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
                                        py: "31px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                    }}
                                >
                                    <svg
                                        width="29"
                                        height="25"
                                        viewBox="0 0 29 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.6066 11.6426C23.1555 11.6426 22.801 11.9971 22.801 12.4482V22.5025H18.7084V18.1521C18.7084 15.8319 16.8071 13.9306 14.4869 13.9306C12.1667 13.9306 10.2654 15.8319 10.2654 18.1521V22.5025H6.20501V12.4482C6.20501 11.9971 5.85053 11.6426 5.39938 11.6426C4.94823 11.6426 4.59375 11.9971 4.59375 12.4482V23.3081C4.59375 23.7593 4.94823 24.1137 5.39938 24.1137H11.071C11.5222 24.1137 11.8766 23.7593 11.8766 23.3081V18.1521C11.8766 16.7019 13.0368 15.5418 14.4869 15.5418C15.937 15.5418 17.0971 16.7019 17.0971 18.1521V23.3081C17.0971 23.7593 17.4516 24.1137 17.9028 24.1137H23.6066C24.0578 24.1137 24.4123 23.7593 24.4123 23.3081V12.4482C24.4123 11.9971 24.0255 11.6426 23.6066 11.6426Z"
                                            fill="#051B32"
                                        />
                                        <path
                                            d="M28.702 11.0935L15.0062 0.169182C14.7162 -0.0563941 14.2973 -0.0563941 14.0073 0.169182L0.311551 11.0935C-0.0429267 11.3836 -0.107377 11.8669 0.18265 12.2214C0.343776 12.4148 0.569352 12.5114 0.827154 12.5114C0.98828 12.5114 1.18163 12.447 1.34276 12.3503L14.5229 1.84489L27.703 12.3503C28.0575 12.6403 28.5731 12.5759 28.8309 12.2214C29.0887 11.8992 29.0564 11.3836 28.702 11.0935Z"
                                            fill="#051B32"
                                        />
                                    </svg>
                                    <Box
                                        onClick={() => {
                                            setActiveSideBar(
                                                sideBarOptions.MyCabinet
                                            )
                                        }}
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.MyCabinet
                                                    ? 600
                                                    : 400,
                                            lineHeight: "24.2px",
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
                                        py: "31px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                    }}
                                >
                                    <svg
                                        width="29"
                                        height="25"
                                        viewBox="0 0 29 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.6066 11.6426C23.1555 11.6426 22.801 11.9971 22.801 12.4482V22.5025H18.7084V18.1521C18.7084 15.8319 16.8071 13.9306 14.4869 13.9306C12.1667 13.9306 10.2654 15.8319 10.2654 18.1521V22.5025H6.20501V12.4482C6.20501 11.9971 5.85053 11.6426 5.39938 11.6426C4.94823 11.6426 4.59375 11.9971 4.59375 12.4482V23.3081C4.59375 23.7593 4.94823 24.1137 5.39938 24.1137H11.071C11.5222 24.1137 11.8766 23.7593 11.8766 23.3081V18.1521C11.8766 16.7019 13.0368 15.5418 14.4869 15.5418C15.937 15.5418 17.0971 16.7019 17.0971 18.1521V23.3081C17.0971 23.7593 17.4516 24.1137 17.9028 24.1137H23.6066C24.0578 24.1137 24.4123 23.7593 24.4123 23.3081V12.4482C24.4123 11.9971 24.0255 11.6426 23.6066 11.6426Z"
                                            fill="#051B32"
                                        />
                                        <path
                                            d="M28.702 11.0935L15.0062 0.169182C14.7162 -0.0563941 14.2973 -0.0563941 14.0073 0.169182L0.311551 11.0935C-0.0429267 11.3836 -0.107377 11.8669 0.18265 12.2214C0.343776 12.4148 0.569352 12.5114 0.827154 12.5114C0.98828 12.5114 1.18163 12.447 1.34276 12.3503L14.5229 1.84489L27.703 12.3503C28.0575 12.6403 28.5731 12.5759 28.8309 12.2214C29.0887 11.8992 29.0564 11.3836 28.702 11.0935Z"
                                            fill="#051B32"
                                        />
                                    </svg>
                                    <Box
                                        onClick={() => {
                                            setActiveSideBar(
                                                sideBarOptions.ChosenProducts
                                            )
                                        }}
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.ChosenProducts
                                                    ? 600
                                                    : 400,
                                            lineHeight: "24.2px",
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
                                        py: "31px",
                                        borderBottom: `2px solid ${Colors.light}`,
                                        cursor: "pointer",
                                    }}
                                >
                                    <svg
                                        width="29"
                                        height="25"
                                        viewBox="0 0 29 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.6066 11.6426C23.1555 11.6426 22.801 11.9971 22.801 12.4482V22.5025H18.7084V18.1521C18.7084 15.8319 16.8071 13.9306 14.4869 13.9306C12.1667 13.9306 10.2654 15.8319 10.2654 18.1521V22.5025H6.20501V12.4482C6.20501 11.9971 5.85053 11.6426 5.39938 11.6426C4.94823 11.6426 4.59375 11.9971 4.59375 12.4482V23.3081C4.59375 23.7593 4.94823 24.1137 5.39938 24.1137H11.071C11.5222 24.1137 11.8766 23.7593 11.8766 23.3081V18.1521C11.8766 16.7019 13.0368 15.5418 14.4869 15.5418C15.937 15.5418 17.0971 16.7019 17.0971 18.1521V23.3081C17.0971 23.7593 17.4516 24.1137 17.9028 24.1137H23.6066C24.0578 24.1137 24.4123 23.7593 24.4123 23.3081V12.4482C24.4123 11.9971 24.0255 11.6426 23.6066 11.6426Z"
                                            fill="#051B32"
                                        />
                                        <path
                                            d="M28.702 11.0935L15.0062 0.169182C14.7162 -0.0563941 14.2973 -0.0563941 14.0073 0.169182L0.311551 11.0935C-0.0429267 11.3836 -0.107377 11.8669 0.18265 12.2214C0.343776 12.4148 0.569352 12.5114 0.827154 12.5114C0.98828 12.5114 1.18163 12.447 1.34276 12.3503L14.5229 1.84489L27.703 12.3503C28.0575 12.6403 28.5731 12.5759 28.8309 12.2214C29.0887 11.8992 29.0564 11.3836 28.702 11.0935Z"
                                            fill="#051B32"
                                        />
                                    </svg>
                                    <Box
                                        onClick={() => {
                                            setActiveSideBar(
                                                sideBarOptions.MyOrders
                                            )
                                        }}
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight:
                                                activeSideBar ===
                                                sideBarOptions.MyOrders
                                                    ? 600
                                                    : 400,
                                            lineHeight: "24.2px",
                                        }}
                                    >
                                        {sideBarOptions.MyOrders}
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
