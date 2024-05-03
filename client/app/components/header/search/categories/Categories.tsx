"use client"

import { Box, Grid } from "@mui/material"
import CategoryItem from "./CategoryItem"
import { CategoriesStyles } from "./styles/styles"
import { useRef, useState } from "react"
import { relative } from "path"
import { Colors } from "@/client"
import SubCategory from "./SubCategory"

const Categories = ({ categories }: any) => {
    const [selectedCategory, setSelectedCategory] = useState<any>(null)

    return (
        <Box
            sx={{
                width: { xl: 1440, lg: 1140 },
                margin: "0 auto",
                height: { sm: "80svh" },
                position: "absolute",
                left: 0,
                py: "36px",
                zIndex: 301,
            }}
            onMouseLeave={() => {
                setSelectedCategory(null)
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        width: { lg: 400, xl: 248 },
                        height: { sm: "80svh" },
                        zIndex: 1000,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            width: { md: 261 },
                            height: "100%",
                            overflowY: "scroll",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {categories.map((cat: any) => {
                            if (cat.level > 1) {
                                return
                            }
                            return (
                                <CategoryItem
                                    key={cat.title}
                                    categoryInfo={cat}
                                    setSelected={setSelectedCategory}
                                    selectedCat={selectedCategory}
                                />
                            )
                        })}
                    </Box>
                </Box>
                {selectedCategory !== null && (
                    <Grid
                        key={selectedCategory.category_id + "_content"}
                        container
                        direction={"column"}
                        sx={{
                            width: { xl: 1200 },
                            height: "80svh",
                            bgcolor: Colors.white,
                            columnGap: 2,
                            rowGap: 2,
                            px: 4,
                            py: 2,
                        }}
                    >
                        {/* {selectedCategory.child !== null &&
                            selectedCategory.child.map((child: any) => (
                                <>
                                    <Box key={child.category.product_id}>
                                        {child.category.title}
                                    </Box>
                                    <SubCategory
                                    key={child.product_id}
                                    selectedCategory={child}
                                />
                                </>
                            ))} */}

                        {/* {categoryMutatuion.isLoading ? (
                            <Box>Завантаження товару</Box>
                        ) : categoryMutatuion.data.length > 0 ? (
                            categoryMutatuion.data.map((product: any) => (
                                <ProductLink
                                    key={product.title}
                                    product_id={product.product_id}
                                    category_id={selectedCategory.category_id}
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
        </Box>
    )
}

export default Categories
