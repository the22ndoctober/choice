"use client"

import { useState } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { ProductStyles } from "./styles/styles"
import AboutProduct from "./AboutProduct"
import ProductInfo from "./ProductInfo"
import { Colors } from "@/client"

const ProductItem = ({ product }: any) => {
    const [renderedPage, setRenderedPage] = useState<any>(
        <AboutProduct product={product} />
    )

    return (
        <Grid container sx={{ direction: "column", background: Colors.paper }}>
            <Grid
                container
                sx={{
                    columnGap: 2,
                    px: "36px",
                    py: "19px",
                    fontSize: "20px",
                    cursor: "pointer",
                }}
            >
                <Box
                    onClick={() => {
                        setRenderedPage(<AboutProduct product={product} />)
                    }}
                >
                    Про товар
                </Box>
                |
                <Box
                    onClick={() => {
                        setRenderedPage(<ProductInfo product={product} />)
                    }}
                >
                    Характеристики
                </Box>
            </Grid>
            <Grid
                container
                direction={"row"}
                sx={{
                    px: "36px",
                    py: "19px",
                    width: { sm: "100%" },
                }}
            >
                {renderedPage}
            </Grid>
        </Grid>
    )
}

export default ProductItem
