"use client"

import { useState } from "react"
import src from "@/public/test_item.png"
import Image from "next/image"
import { Box, Grid, Typography, Button } from "@mui/material"
import { Colors } from "@/client"
import { favouritesTeal } from "../../static/favouritesTeal"
import { cartCard } from "../../static/cartCard"

const cardContainerStyles = {
    width: { lg: 250, xl: 272 },
    height: { lg: "auto" },
    background: Colors.paper,
    borderRadius: "15px",
    rowGap: { lg: "10px" },
    p: { lg: "20px", xl: "22px" },
}

const imageStyles = {
    width: { lg: 200, xl: 224 },
    height: { lg: "auto" },
    margin: "0 auto",
}

const tagsWrapperStyles = {
    columnGap: { lg: "8px", xl: "10px" },
    justifyContent: "left",
}

const tagStyles = {
    color: Colors.white,
    borderRadius: "15px",
    p: { lg: "8px", xl: "8px" },
    fontSize: { lg: "12px" },
}

const priceButtonStyles = {
    fontSize: { lg: "24px" },
    color: Colors.teal,
    background: "none",
    border: `1px solid ${Colors.teal}`,
    borderRadius: "15px",
    textAlign: "center",
    px: { lg: 2 },
    py: { lg: 1 },
    lineHeight: "1",
    fontWeight: 800,
}

const cartButtonStyles = {
    background: Colors.teal,
    borderRadius: "15px",
    py: { lg: 1 },
    px: { lg: "12px" },
}

const ProductCard = ({ title, price, currency, tags }: any) => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <>
            <Grid container sx={cardContainerStyles}>
                <Grid container sx={tagsWrapperStyles}>
                    {tags.map((tag: any) => (
                        <Box
                            key={tag.title}
                            sx={{ ...tagStyles, background: tag.color }}
                        >
                            {tag.title}
                        </Box>
                    ))}
                </Grid>
                <Box sx={imageStyles}>
                    <Image
                        src={src}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                    />
                </Box>
                <Grid container sx={{ flexDirection: "column" }}>
                    <Typography sx={{ color: Colors.grey, fontSize: "10px" }}>
                        Штрихкод:352
                    </Typography>
                    <Typography
                        sx={{
                            color: Colors.black,
                            fontSize: "14px",
                            fontWeight: 500,
                        }}
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid
                    container
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Button sx={priceButtonStyles}>
                        {price + " " + currency}
                    </Button>
                    <Box sx={{ p: "7px" }}>{favouritesTeal}</Box>
                    <Box
                        onMouseEnter={() => {
                            setActive(true)
                        }}
                        onMouseLeave={() => {
                            setActive(false)
                        }}
                        sx={{
                            ...cartButtonStyles,
                            background: active
                                ? Colors.lightGreen
                                : Colors.teal,
                        }}
                    >
                        {cartCard}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductCard
