import React from "react"
import parse from "html-react-parser"
import Grid from "@mui/material/Grid"

const ProductInfo = ({ product }: any) => {
    return (
        <>
            <Grid container sx={{ flexDirection: "column", rowGap: "12px" }}>
                {parse(product.description)}
            </Grid>
        </>
    )
}

export default ProductInfo
