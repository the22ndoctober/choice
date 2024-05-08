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
                                                key={
                                                    category.category
                                                        .category_id[0]
                                                }
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
                                                    {category.category.image !==
                                                    null ? (
                                                        <img
                                                            src={
                                                                category
                                                                    .category
                                                                    .image
                                                            }
                                                            alt=""
                                                            style={{
                                                                width: 50,
                                                                height: "auto",
                                                                maxHeight: 50,
                                                            }}
                                                        />
                                                    ) : (
                                                        <svg
                                                            width="50"
                                                            height="50"
                                                            viewBox="0 0 50 50"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                width="50"
                                                                height="50"
                                                                fill="#F3F3F3"
                                                            />
                                                            <path
                                                                d="M20.4489 29.275L20.3029 24.5824L20.1086 24.4677C19.5672 25.8331 19.279 27.2956 19.2589 28.765L20.4489 29.275Z"
                                                                fill="#706F6F"
                                                                stroke="#706F6F"
                                                                stroke-width="0.503669"
                                                            />
                                                            <path
                                                                d="M29.7972 29.2525L29.9432 24.5599L30.1375 24.4453C30.6789 25.8107 30.9671 27.2731 30.9872 28.7425L29.7972 29.2525Z"
                                                                fill="#706F6F"
                                                                stroke="#706F6F"
                                                                stroke-width="0.503669"
                                                            />
                                                            <path
                                                                d="M29.7775 28.3392H27.6862H26.9598L25.0986 31.1769L26.1266 32.5501H29.7775V28.3392Z"
                                                                fill="#F3F3F3"
                                                                stroke="#706F6F"
                                                                stroke-width="0.503669"
                                                            />
                                                            <path
                                                                d="M20.5272 28.3392H26.9595L24.1689 32.5501H20.5272V28.3392Z"
                                                                fill="#F3F3F3"
                                                                stroke="#706F6F"
                                                                stroke-width="0.503669"
                                                            />
                                                            <path
                                                                d="M31.9159 20.9905V24.2205H30.0301H29.7783V24.4724V28.3022C26.6995 28.06 23.6065 28.06 20.5277 28.3022V24.4724V24.2205H20.2759H18.1757V20.9931L20.3045 20.7496L20.5277 20.724V20.4994V18.2293C23.5988 17.8386 26.7071 17.8386 29.7783 18.2293V20.4994V20.7215L29.9986 20.7492L31.9159 20.9905Z"
                                                                fill="#F3F3F3"
                                                                stroke="#706F6F"
                                                                stroke-width="0.503669"
                                                            />
                                                            <path
                                                                d="M27.0918 25.8865H23.1417V26.1966L27.0918 25.9273V25.8865Z"
                                                                fill="#706F6F"
                                                            />
                                                            <path
                                                                d="M32.116 20.7946V24.5041C27.4142 24.0275 22.6763 24.0275 17.9744 24.5041V20.7946C22.6674 20.1669 27.4231 20.1669 32.116 20.7946Z"
                                                                fill="#F3F3F3"
                                                                stroke="#706F6F"
                                                                stroke-width="0.503552"
                                                            />
                                                            <path
                                                                d="M33.0039 15.6421C37.2175 20.0128 37.0902 26.9717 32.7196 31.1853C28.349 35.3989 21.3901 35.2716 17.1764 30.901C12.9628 26.5304 13.0901 19.5715 17.4607 15.3578C21.8314 11.1442 28.7903 11.2715 33.0039 15.6421ZM18.7167 29.4161C22.1102 32.936 27.7147 33.0385 31.2347 29.645C34.7546 26.2515 34.8571 20.647 31.4636 17.1271C28.0701 13.6071 22.4656 13.5046 18.9457 16.8981C15.4257 20.2916 15.3232 25.8961 18.7167 29.4161Z"
                                                                fill="#706F6F"
                                                            />
                                                            <path
                                                                d="M31.1174 30.9632L32.6871 29.45L39.0814 36.0825C39.4992 36.516 39.4866 37.2061 39.0532 37.624C38.6197 38.0419 37.9296 38.0292 37.5117 37.5958L31.1174 30.9632Z"
                                                                fill="#706F6F"
                                                            />
                                                            <rect
                                                                x="13.0859"
                                                                y="13.3611"
                                                                width="2.48972"
                                                                height="2.48972"
                                                                rx="0.545083"
                                                                transform="rotate(-33.2688 13.0859 13.3611)"
                                                                fill="#706F6F"
                                                            />
                                                            <rect
                                                                x="19.1855"
                                                                y="37.0686"
                                                                width="2.48972"
                                                                height="2.48972"
                                                                rx="0.545083"
                                                                transform="rotate(-43.5156 19.1855 37.0686)"
                                                                fill="#706F6F"
                                                            />
                                                            <rect
                                                                x="34.2188"
                                                                y="11.4846"
                                                                width="4.87021"
                                                                height="4.87021"
                                                                rx="0.908471"
                                                                transform="rotate(-6.17362 34.2188 11.4846)"
                                                                fill="#706F6F"
                                                            />
                                                            <rect
                                                                x="37.4336"
                                                                y="27.2336"
                                                                width="2.93258"
                                                                height="2.93258"
                                                                rx="0.545083"
                                                                transform="rotate(30.2377 37.4336 27.2336)"
                                                                fill="#706F6F"
                                                            />
                                                            <rect
                                                                x="11.3171"
                                                                y="34.0438"
                                                                width="6.15035"
                                                                height="6.15035"
                                                                rx="0.63593"
                                                                transform="rotate(-10.3631 11.3171 34.0438)"
                                                                stroke="#706F6F"
                                                                stroke-width="0.545083"
                                                            />
                                                            <rect
                                                                x="29.7142"
                                                                y="12.0151"
                                                                width="3.09793"
                                                                height="3.09793"
                                                                rx="0.407804"
                                                                transform="rotate(-66.1744 29.7142 12.0151)"
                                                                stroke="#706F6F"
                                                                stroke-width="0.274558"
                                                            />
                                                        </svg>
                                                    )}
                                                </Box>
                                                <Box>
                                                    {category.category.title}
                                                </Box>
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
