import React from "react"
import parse from "html-react-parser"
import Grid from "@mui/material/Grid"
import "./styles/index.scss"

const ProductInfo = ({ product }: any) => {
    return (
        <>
            <Grid container sx={{ flexDirection: "column", rowGap: "12px" }}>
                <div className="discription">{parse(product.description)}</div>
            </Grid>
        </>
    )
}

export default ProductInfo
