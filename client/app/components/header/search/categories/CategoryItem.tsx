import Image from "next/image"
import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import { GetCategoryProducts } from "@/api/test"
import { useQuery, useMutation } from "@tanstack/react-query"
import { Colors } from "@/client"
import { Box, Button } from "@mui/material"
import ProductLink from "./ProductLink"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import SubCategory from "./SubCategory"

const CategoryItem = ({ categoryInfo }: any) => {
    const [isShowProductsList, setIsShowProductsList] = useState<boolean>(false)

    const categoryMutatuion = useQuery({
        queryKey: [`products${categoryInfo.category_id}`],
        queryFn: () => GetCategoryProducts(categoryInfo.category_id),
    })

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
                        direction: "row",
                        columnGap: 2,
                        alignItems: "center",

                        p: 1,
                    }}
                    onClick={() => {
                        setIsShowProductsList((state: boolean) => !state)
                    }}
                >
                    <Box>
                        <img
                            src={categoryInfo.image}
                            alt=""
                            width={30}
                            key={1}
                            height={30}
                        />
                    </Box>

                    <Grid
                        container
                        sx={{
                            color: isShowProductsList ? Colors.light : "#000",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: { sm: 270 },
                            cursor: "pointer",
                        }}
                    >
                        <Box sx={{ textWrap: "break-line" }}>
                            {categoryInfo.title}
                        </Box>

                        <ArrowForwardIosIcon />
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
                            left: 400,
                            width: { xl: 1200 },
                            height: 850,
                            bgcolor: "#fff",
                            columnGap: 2,
                            rowGap: 2,
                            px: 4,
                            py: 2,
                        }}
                    >
                        {categoryMutatuion.isLoading && <Box>Завантаження</Box>}
                        {!categoryMutatuion.isLoading &&
                            (categoryMutatuion.data.length > 0
                                ? categoryMutatuion.data.map((product: any) => (
                                      <ProductLink
                                          key={product.product_id}
                                          product_id={product.product_id}
                                          category_id={categoryInfo.category_id}
                                          product_title={product.title}
                                      />
                                  ))
                                : !categoryInfo.children && (
                                      <Box>
                                          Немає продуктів в даній категорії
                                      </Box>
                                  ))}
                        {categoryInfo.children &&
                            categoryInfo.children.map((child: any) => (
                                <SubCategory
                                    key={child.product_id}
                                    categoryInfo={child}
                                />
                            ))}
                    </Grid>
                )}
            </Box>
        </>
    )
}

export default CategoryItem
