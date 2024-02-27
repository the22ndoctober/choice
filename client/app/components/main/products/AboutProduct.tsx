import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Colors } from "@/client"
import Typography from "@mui/material/Typography"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"

const AboutProduct = ({ product }: any) => {
    console.log(product)

    return (
        <>
            <Grid
                container
                direction="column"
                sx={{
                    display: "flex",
                    rowGap: 2,
                    width: { sm: 630 },
                    borderRight: `1px solid ${Colors.light}`,
                    borderTop: `1px solid ${Colors.light}`,
                }}
            >
                <Box
                    sx={{
                        width: { sm: 600 },
                        height: "70svh",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        background: Colors.light,
                    }}
                >
                    <img
                        src={product.image_path}
                        alt=""
                        style={{ width: 600, height: "auto" }}
                    />
                </Box>
                <Grid
                    container
                    justifyContent="space-around"
                    sx={{
                        width: { sm: 600, overflow: "hidden", height: "80px" },
                    }}
                >
                    {(product.images || []).map((url: string, id: number) => (
                        <Box
                            key={product.title + id}
                            sx={{
                                width: { sm: 140 },
                                height: 80,
                                borderRadius: "10px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                background: Colors.light,
                            }}
                        >
                            <img
                                src={url}
                                alt=""
                                style={{ width: 140, height: "auto" }}
                            />
                        </Box>
                    ))}
                </Grid>
            </Grid>
            <Grid container direction="column" width={"50%"}>
                <Grid
                    container
                    direction={"column"}
                    rowGap={2}
                    sx={{
                        px: "54px",
                        py: "45px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "36px",
                            color: Colors.black,
                            fontWeight: 600,
                        }}
                    >
                        {product.title}
                    </Typography>
                    <Grid
                        container
                        direction={"row"}
                        sx={{ justifyContent: "space-between" }}
                    ></Grid>
                </Grid>

                <Grid
                    sx={{
                        px: "54px",
                    }}
                    container
                    direction={"row"}
                    columnGap={"20px"}
                >
                    <Box
                        sx={{
                            borderRadius: "10px",
                            border: `2px solid ${Colors.teal}`,
                            color: Colors.teal,
                            fontSize: { sm: "42px" },
                            minWidth: { sm: 250 },
                            py: "15px",
                            textAlign: "center",
                        }}
                    >
                        {product.price + product.currency}
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: Colors.white,
                            background: Colors.teal,
                            fontSize: { sm: "30px" },
                            minWidth: { sm: 250 },
                            py: "15px",
                            textAlign: "center",
                            columnGap: 2,
                        }}
                    >
                        <ShoppingBasketIcon
                            sx={{
                                color: Colors.white,
                                fontSize: { sm: "42px" },
                            }}
                        />
                        Купити
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutProduct
