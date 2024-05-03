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

const CategoryItem = ({
    categoryInfo,
    scrollOffset,
    setSelected,
    selectedCat,
}: any) => {
    return (
        <>
            <Box
                onMouseEnter={() => {
                    setSelected(categoryInfo)
                }}
            >
                <Grid
                    container
                    sx={{
                        flexDirection: "row",
                        columnGap: 2,
                        alignItems: "center",

                        overflowX: "hidden",
                    }}
                    onClick={() => {
                        setSelected(categoryInfo)
                    }}
                >
                    <Grid
                        container
                        sx={{
                            color:
                                selectedCat !== null &&
                                selectedCat.category.title ===
                                    categoryInfo.category.title
                                    ? Colors.teal
                                    : Colors.black,
                            justifyContent: "space-between",
                            alignItems: "center",
                            cursor: "pointer",
                            // paddingY: "5px",
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
                                mr: "6px",
                                color:
                                    selectedCat !== null &&
                                    selectedCat.category.title ===
                                        categoryInfo.category.title
                                        ? Colors.teal
                                        : Colors.black,
                                width: "13px",
                                height: "13px",
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CategoryItem
