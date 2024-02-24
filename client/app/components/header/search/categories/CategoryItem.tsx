import Image from "next/image"
import React, { useState } from "react"
import Grid from "@mui/material/Grid"
import { GetCategoryProducts } from "@/api/test"
import { useQuery } from "@tanstack/react-query"
import { Colors } from "@/client"
import { Box, Button } from "@mui/material"
import ProductLink from "./ProductLink"

const CategoryItem = ({ categoryInfo }: any) => {
    const [isShowProductsList, setIsShowProductsList] = useState<boolean>(false)

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: [`products${categoryInfo.category_id}`],
        queryFn: (): any => GetCategoryProducts(categoryInfo.category_id),
    })

    if (isLoading) return <div>Loading</div>

    return (
        <>
            <Box
                onMouseEnter={() => {
                    setIsShowProductsList(true)
                }}
                onMouseLeave={() => {
                    console.log("it's me")
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
                    <img
                        src={categoryInfo.image}
                        alt=""
                        width={30}
                        height={30}
                    />
                    <Box
                        sx={{
                            color: isShowProductsList ? Colors.light : "#000",
                        }}
                    >
                        {categoryInfo.title}
                    </Box>
                </Grid>
                {isShowProductsList && (
                    <Grid
                        key={categoryInfo.title + "_content"}
                        container
                        direction={"column"}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 300,
                            width: { xl: 1200 },
                            height: 850,
                            bgcolor: "#fff",
                            columnGap: 2,
                            rowGap: 2,
                            p: 4,
                        }}
                    >
                        {data.products.length > 0 ? (
                            data.products.map((product: any) => (
                                <>
                                    <ProductLink
                                        key={product.product_id}
                                        product_id={product.product_id}
                                        category_id={categoryInfo.category_id}
                                        product_title={product.title}
                                    />
                                </>
                            ))
                        ) : (
                            <div>Немає товару по даній категорії</div>
                        )}
                    </Grid>
                )}
            </Box>
        </>
    )
}

export default CategoryItem
