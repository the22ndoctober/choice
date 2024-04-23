import Image from "next/image"
import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import { GetCategoryProducts, GetSubCats } from "@/api/test"
import { useQuery, useMutation } from "@tanstack/react-query"
import { Colors } from "@/client"
import { Box, Button } from "@mui/material"
import ProductLink from "./ProductLink"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import SubCategory from "./SubCategory"

const CategoryItem = ({ categoryInfo, scrollOffset }: any) => {
    const [isShowProductsList, setIsShowProductsList] = useState<boolean>(false)

    return (
        <>
            <Box
                onMouseEnter={() => {
                    setIsShowProductsList(true)
                }}
                onMouseLeave={() => {
                    setIsShowProductsList(false)
                }}
            >
                <Grid
                    container
                    sx={{
                        flexDirection: "row",
                        columnGap: 2,
                        alignItems: "center",
                    }}
                    onClick={() => {
                        setIsShowProductsList((state: boolean) => !state)
                    }}
                >
                    <Grid
                        container
                        sx={{
                            color: isShowProductsList
                                ? Colors.teal
                                : Colors.black,
                            justifyContent: "space-between",
                            alignItems: "center",
                            cursor: "pointer",
                            paddingY: "5px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "13px",
                            }}
                        >
                            <Box>
                                <img
                                    src={categoryInfo.category.image}
                                    alt=""
                                    width={30}
                                    key={1}
                                    height={30}
                                />
                            </Box>
                            <Box
                                sx={{
                                    textWrap: "break-line",
                                    width: "auto",
                                    maxWidth: 180,
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}
                            >
                                {categoryInfo.category.title}
                            </Box>
                        </Box>
                        <ArrowForwardIosIcon
                            sx={{
                                color: isShowProductsList
                                    ? Colors.teal
                                    : Colors.black,
                                width: "13px",
                                height: "13px",
                            }}
                        />
                    </Grid>
                </Grid>

                {isShowProductsList && (
                    <Grid
                        key={categoryInfo.category_id + "_content"}
                        container
                        direction={"column"}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: { sm: 248 },
                            width: { xl: 1136 },
                            height: "80svh",
                            bgcolor: Colors.white,
                            columnGap: 2,
                            rowGap: 2,
                        }}
                    >
                        {categoryInfo.child !== null &&
                            categoryInfo.child.map((child: any) => (
                                <SubCategory
                                    key={child.product_id}
                                    categoryInfo={child}
                                />
                            ))}

                        {/* {categoryMutatuion.isLoading ? (
                            <Box>Завантаження товару</Box>
                        ) : categoryMutatuion.data.length > 0 ? (
                            categoryMutatuion.data.map((product: any) => (
                                <ProductLink
                                    key={product.title}
                                    product_id={product.product_id}
                                    category_id={categoryInfo.category_id}
                                    product_title={product.title}
                                />
                            ))
                        ) : (
                            getSubCats === null && (
                                <Box>Немає продуктів в даній категорії</Box>
                            )
                        )} */}
                    </Grid>
                )}
            </Box>
        </>
    )
}

export default CategoryItem
