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
                height: { sm: "100svh" },
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
                        height: "auto",
                        zIndex: 1000,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            width: { md: 261 },
                            height: "100svh",

                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {categories.map((cat: any) => {
                            if (cat.category.level > 1) {
                                return
                            }
                            return (
                                <CategoryItem
                                    key={cat.category.title}
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
                        sx={{
                            width: { xl: 1200 },
                            height: "auto",
                            bgcolor: Colors.white,
                        }}
                    >
                        <Grid
                            container
                            direction={"column"}
                            sx={{
                                maxWidth: { lg: 350 },
                                height: "80svh",
                                columnGap: 2,
                                rowGap: 2,
                                px: 4,
                                py: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    color: Colors.dark,
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                }}
                            >
                                {selectedCategory.category.title}
                            </Box>
                            {selectedCategory.child !== null &&
                                selectedCategory.child.map((child: any) => (
                                    <>
                                        <SubCategory
                                            key={child.product_id}
                                            categoryInfo={child}
                                            parent={selectedCategory}
                                        />
                                    </>
                                ))}
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Box>
    )
}

export default Categories
