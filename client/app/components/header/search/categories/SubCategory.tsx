"use client"

import { useEffect, useState } from "react"
import ProductLink from "./ProductLink"
import { ListItemButton, Collapse, List, Box } from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { useMutation, useQuery } from "@tanstack/react-query"
import { GetCategoryProducts } from "@/api/test"

const SubCategory = ({ categoryInfo }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const categoryMutatuion = useQuery({
        queryKey: [`products${categoryInfo.category_id}`],
        queryFn: () => GetCategoryProducts(categoryInfo.category_id),
    })

    const handleClick = () => {
        setOpen((state: boolean) => !state)
    }

    return (
        <>
            <Box sx={{ width: 300 }}>
                <List>
                    <ListItemButton onClick={handleClick}>
                        {categoryInfo.title}
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {categoryMutatuion.isLoading && <Box>Завантаження</Box>}
                        {!categoryMutatuion.isLoading &&
                        categoryMutatuion.data.length > 0 ? (
                            categoryMutatuion.data.map((product: any) => (
                                <ProductLink
                                    key={product.product_id}
                                    product_id={product.product_id}
                                    category_id={categoryInfo.category_id}
                                    product_title={product.title}
                                />
                            ))
                        ) : (
                            <Box>Немає товару в даній категорії</Box>
                        )}
                    </Collapse>
                </List>
            </Box>
        </>
    )
}

export default SubCategory
