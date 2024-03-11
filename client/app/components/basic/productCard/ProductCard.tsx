import React from "react"
import src from "@/public/test_item.png"
import Image from "next/image"
import { Box } from "@mui/material"

const imageStyles = {
    width: { lg: 240, xl: 300 },
    height: { lg: "auto" },
}

const ProductCard = ({ title, price, currency }: any) => {
    return (
        <>
            <Box sx={imageStyles}>
                <Image
                    src={src}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                />
                {title}
            </Box>
        </>
    )
}

export default ProductCard
