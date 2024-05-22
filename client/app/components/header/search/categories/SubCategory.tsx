"use client"

import { useEffect, useState } from "react"
import ProductLink from "./ProductLink"
import { ListItemButton, Collapse, List, Box, Grid } from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { useQuery } from "@tanstack/react-query"
import { GetCategoryProducts, GetSubCats } from "@/api/test"
import { Colors } from "@/client"
import { useRouter } from "next/navigation"

const SubCategory = ({ categoryInfo, parent }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [`products${categoryInfo.category.category_id}`],
        queryFn: () => GetCategoryProducts(categoryInfo.category.category_id),
    })

    const router = useRouter()

    const level2Styles = {
        color: Colors.dark,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "19px",
        cursor: "pointer",
        ":hover": {
            color: Colors.teal,
        },
    }

    const level3Styles = {
        color: Colors.grey,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        cursor: "pointer",
        ":hover": {
            color: Colors.dark,
        },
    }

    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "3px",
                    maxWidth: { lg: 350 },
                }}
            >
                <Box
                    key={categoryInfo.category.product_id}
                    sx={
                        categoryInfo.category.level < 3
                            ? level2Styles
                            : level3Styles
                    }
                    onClick={() => {
                        router.push(
                            `/categories?query=${categoryInfo.category.title}`
                        )
                    }}
                >
                    {categoryInfo.category.title}
                </Box>
                {categoryInfo.child !== null && (
                    <Grid
                        container
                        sx={{ flexDirection: "column", rowGap: "3px" }}
                    >
                        {categoryInfo.child.map((child: any) => (
                            <Box
                                key={child.category.product_id}
                                sx={
                                    child.category.level < 3
                                        ? level2Styles
                                        : level3Styles
                                }
                                onClick={() => {
                                    router.push(
                                        `/categories?query=${child.category.title}`
                                    )
                                }}
                            >
                                {child.category.title}
                            </Box>
                        ))}
                    </Grid>
                )}

                {categoryInfo.child === null &&
                    (!isLoading ? (
                        <Grid
                            container
                            sx={{ flexDirection: "column", rowGap: "3px" }}
                        >
                            {data[0].map(
                                (product: any, id: number) =>
                                    id < 4 && (
                                        <ProductLink
                                            category_id={product.category_id}
                                            product_id={product.product_id}
                                            product_title={product.title}
                                        />
                                    )
                            )}
                        </Grid>
                    ) : (
                        <Box>Завантаження</Box>
                    ))}
            </Grid>
        </>
    )
}

export default SubCategory
