import { Box, Grid } from "@mui/material"
import React from "react"

const ProductsSearch = () => {
    return (
        <Box sx={{ minHeight: "70svh", width: "100%" }}>
            <Grid
                direction={"column"}
                sx={{ margin: "0 auto", width: { xl: 1440, lg: 1140 } }}
            ></Grid>
        </Box>
    )
}

export default ProductsSearch
