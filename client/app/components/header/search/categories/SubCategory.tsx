"use client"

import { useEffect, useState } from "react"
import ProductLink from "./ProductLink"
import { ListItemButton, Collapse, List, Box, Grid } from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { useQuery } from "@tanstack/react-query"
import { GetCategoryProducts, GetSubCats } from "@/api/test"
import { Colors } from "@/client"

const SubCategory = ({ categoryInfo, parent }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const categoryMutatuion = useQuery({
        queryKey: [`products${categoryInfo.category.category_id}`],
        queryFn: () => GetCategoryProducts(categoryInfo.category.category_id),
    })

    const handleClick = () => {
        setOpen((state: boolean) => !state)
    }

    const level2Styles = {
        color: Colors.dark,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "19px",
    }

    const level3Styles = {
        color: Colors.grey,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
    }

    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "3px",
                }}
            >
                <Box
                    key={categoryInfo.category.product_id}
                    sx={
                        categoryInfo.category.level < 3
                            ? level2Styles
                            : level3Styles
                    }
                >
                    {categoryInfo.category.title}
                </Box>
                {categoryInfo.child !== null && (
                    <Grid
                        container
                        sx={{ flexDirection: "column", rowGap: "3px" }}
                    >
                        {categoryInfo.child.map((child: any) => (
                            <SubCategory
                                key={child.category.title}
                                parent={parent}
                                categoryInfo={child}
                            />
                        ))}
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default SubCategory
