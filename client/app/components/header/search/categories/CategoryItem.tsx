"use client"

import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"

import { Colors } from "@/client"
import { Box, Button } from "@mui/material"

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
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "13px",
                                px: "12px",
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
                                    maxWidth: { xs: 182, lg: 162 },
                                    fontSize: {
                                        xs: "14px",
                                        lg: "14px",
                                        xl: "14px",
                                    },
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    cursor: "pointer",
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
