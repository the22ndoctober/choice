import React, { useState } from "react"
import Grid from "@mui/material/Grid"
import { useRouter } from "next/navigation"
import { Colors } from "@/client"

type ProductLinkProps = {
    category_id: string
    product_id: string
    product_title: string
}

const ProductLink = ({
    category_id,
    product_id,
    product_title,
}: ProductLinkProps) => {
    const [isProductHover, setIsProductHover] = useState<boolean>(false)
    const router = useRouter()
    return (
        <Grid
            item
            onMouseEnter={() => {
                setIsProductHover(true)
            }}
            onMouseLeave={() => {
                setIsProductHover(false)
            }}
            key={product_id}
            onClick={() => {
                router.push(`/products/${category_id}_${product_id}`)
            }}
            sx={{
                color: isProductHover ? Colors.light : Colors.maxDark,
                cursor: "pointer",
            }}
        >
            {product_title}
        </Grid>
    )
}

export default ProductLink
