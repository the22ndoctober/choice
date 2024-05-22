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
        <>
            <Box
                sx={{
                    width: { xl: 1440, lg: 1368 },
                    margin: "0 auto",
                    height: "fit-content",
                    position: "absolute",
                    top: "69px",
                    left: 0,
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
                            width: { lg: 230, xl: 248 },
                            height: "auto",

                            zIndex: 1000,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Box
                            sx={{
                                width: { lg: 248, xl: 261 },
                                py: "28px",
                                minHeight: { lg: "610px" },
                                display: "flex",
                                flexDirection: "column",
                                background: Colors.white,
                                justifyContent: "space-between",
                            }}
                        >
                            {categories
                                .toSorted((a: any, b: any) => {
                                    b.category.title - a.category.title
                                })
                                .map((cat: any) => {
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
                                bgcolor: Colors.white,
                                height: { lg: "610px" },
                                overflowX: "scroll",
                                py: "28px",
                            }}
                        >
                            <Grid
                                container
                                direction={"column"}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    flexWrap: "wrap",
                                    columnGap: 2,
                                    rowGap: 2,
                                    px: 4,
                                    pt: 1,
                                    pb: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        color: Colors.dark,
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "19px",
                                        maxWidth: { lg: 350 },
                                        cursor: "pointer",
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
        </>
    )
}

export default Categories
