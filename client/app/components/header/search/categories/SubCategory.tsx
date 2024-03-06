"use client"

import { useState } from "react"
import ProductLink from "./ProductLink"
import {
    ListItemButton,
    ListItemText,
    Collapse,
    List,
    ListItemIcon,
    Box,
} from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

const SubCatDropableItem = ({ title }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        setOpen((state: boolean) => !state)
    }

    return (
        <>
            <Box sx={{ width: 300 }}>
                <ListItemButton onClick={handleClick}>
                    Смартфони
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>{title}</ListItemButton>
                    </List>
                </Collapse>
            </Box>
        </>
    )
}

const SubCategory = ({ categoryInfo }: any) => {
    return (
        <>
            {categoryInfo.children ? (
                <SubCategory />
            ) : (
                <SubCatDropableItem title={categoryInfo.title} />
                // <ProductLink category_id="" product_id="" product_title="" />
            )}
        </>
    )
}

export default SubCategory
