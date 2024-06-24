"use client"

import { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { ProductStyles } from "./styles/styles"
import AboutProduct from "./AboutProduct"
import ProductInfo from "./ProductInfo"
import { Colors } from "@/client"
import { useSelector } from "react-redux"

const ProductItem = ({ product }: any) => {
    const [renderedPage, setRenderedPage] = useState<any>(
        <AboutProduct product={product} />
    )

    const targetCat = useSelector((state: any) => state.categories.data)
    const categoriesStatus = useSelector(
        (state: any) => state.categories.status
    )

    useEffect(() => {
        if (categoriesStatus === "success") {
            console.log(product)
            // console.log(
            //     targetCat.find(
            //         (cat: any) => cat.category.title === product.category.title
            //     )
            // )
        }
    }, [targetCat])

    return (
        <Grid container sx={{ direction: "column", rowGap: "12px" }}>
            <Grid
                container
                sx={{
                    columnGap: 2,
                    px: "36px",
                    py: "19px",
                    borderRadius: "15px",
                    fontSize: "20px",
                    cursor: "pointer",
                    background: Colors.paper,
                }}
            >
                <Box
                    onClick={() => {
                        // setRenderedPage(<AboutProduct product={product} />)
                    }}
                    sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "17px",
                    }}
                >
                    Про товар
                </Box>
                {/* 
                <Box
                    onClick={() => {
                        setRenderedPage(<ProductInfo product={product} />)
                    }}
                >
                    Характеристики
                </Box> */}
            </Grid>
            <Grid
                container
                direction={"row"}
                sx={{
                    px: { xs: "17px", lg: "36px" },
                    py: "19px",
                    borderRadius: "15px",
                    width: { xs: "100%" },
                    background: Colors.paper,
                }}
            >
                {renderedPage}
            </Grid>
        </Grid>
    )
}

export default ProductItem
