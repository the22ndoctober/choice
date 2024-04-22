"use client"

import { useEffect, useState } from "react"
import ProductLink from "./ProductLink"
import { ListItemButton, Collapse, List, Box } from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { useQuery } from "@tanstack/react-query"
import { GetCategoryProducts, GetSubCats } from "@/api/test"

const SubCategory = ({ categoryInfo }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const categoryMutatuion = useQuery({
        queryKey: [`products${categoryInfo.category.category_id}`],
        queryFn: () => GetCategoryProducts(categoryInfo.category.category_id),
        refetchOnMount: false,
    })

    const handleClick = () => {
        setOpen((state: boolean) => !state)
    }

    return (
        <>
            <Box sx={{ width: 300 }}>
                <List>
                    <ListItemButton onClick={handleClick}>
                        {categoryInfo.category.title}
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {categoryInfo.child !== null &&
                            categoryInfo.child.map((child: any) => (
                                <SubCategory
                                    key={child.product_id}
                                    categoryInfo={child}
                                />
                            ))}

                        {categoryMutatuion.isLoading ? (
                            <Box>Завантаження товару</Box>
                        ) : categoryMutatuion.data.length > 0 ? (
                            categoryMutatuion.data.map((product: any) => (
                                <ProductLink
                                    key={product.title}
                                    product_id={product.product_id}
                                    category_id={categoryInfo.category_id}
                                    product_title={product.title}
                                />
                            ))
                        ) : (
                            categoryMutatuion.data === null && (
                                <Box>Немає продуктів в даній категорії</Box>
                            )
                        )}
                    </Collapse>
                </List>
            </Box>
        </>
    )
}

export default SubCategory
