"use client"

import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem"
import { CategoriesStyles } from "./styles/styles"
import { useRef, useState } from "react"
import { relative } from "path"

const Categories = ({ categories }: any) => {
    return (
        <Box
            sx={{
                width: { xl: 1440, lg: 1140 },
                margin: "0 auto",
                height: { sm: "70svh" },
                overflowY: "scroll",
                position: "absolute",
                left: 0,
                py: "24px",
                zIndex: 1000,
            }}
        >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <Box
                    sx={{
                        ...CategoriesStyles.wrapper,
                    }}
                >
                    {categories.map((cat: any) => (
                        <CategoryItem
                            key={cat.category.category_id[0]}
                            categoryInfo={cat}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Categories
