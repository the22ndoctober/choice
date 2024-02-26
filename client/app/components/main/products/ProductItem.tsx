import { useState } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { ProductStyles } from "./styles/styles"
import AboutProduct from "./AboutProduct"
import ProductInfo from "./ProductInfo"
import ProductPhoto from "./ProductPhoto"

const ProductItem = ({ product }: any) => {
    const [renderedPage, setRenderedPage] = useState<any>(
        <AboutProduct product={product} />
    )

    return (
        <Grid container sx={{ ...ProductStyles.pageWrapper }}>
            <Grid container sx={{ ...ProductStyles.switchBarWrapper }}>
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
                |
                <Box
                    onClick={() => {
                        setRenderedPage(
                            <ProductPhoto productPhoto={product.photo} />
                        )
                    }}
                >
                    Фото
                </Box>
            </Grid>
            <Grid
                container
                direction={"row"}
                sx={{ ...ProductStyles.blockWrapper }}
            >
                {renderedPage}
            </Grid>
        </Grid>
    )
}

export default ProductItem
