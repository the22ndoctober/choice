import { Colors } from "@/client"
import { Box, Grid } from "@mui/material"
import React from "react"
import { trashCart } from "../static/trashCart"

const CartItem = ({ id, title, image, price, currency, amount }: any) => {
    return (
        <Grid
            container
            sx={{
                p: { lg: "13px 21px" },
                background: Colors.white,
                borderRadius: "15px",
            }}
        >
            <Box sx={{ width: "115px" }}>
                <img
                    src={image}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                />
            </Box>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    width: "auto",
                    justifyContent: "space-between",
                }}
            >
                <Grid container sx={{ flexDirection: "column", rowGap: "3px" }}>
                    <Grid
                        container
                        sx={{
                            justifyContent: "space-between",
                            minWidth: { lg: "670px" },
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                lineHeight: "24px",
                                letterSpacing: "0em",
                                textAlign: "left",
                                width: "auto",
                            }}
                        >
                            {title}
                        </Box>
                        {trashCart}
                    </Grid>
                    <Box
                        sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "15px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: Colors.grey,
                        }}
                    >
                        Штрихкод: 352
                    </Box>
                </Grid>
                <Grid container sx={{ justifyContent: "space-between" }}>
                    <Box
                        sx={{
                            fontSize: "24px",
                            fontWeight: 800,
                            lineHeight: "29px",
                            letterSpacing: "0em",
                            textAlign: "right",
                            color: Colors.maxDark,
                            border: `2px solid ${Colors.maxDark}`,
                            p: "5px 12px",
                            borderRadius: "15px",
                        }}
                    >
                        {price + ` ${currency}`}
                    </Box>
                    <Grid
                        container
                        sx={{
                            width: { lg: 300 },
                            justifyContent: "space-between",
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                border: `2px solid ${Colors.grey}`,
                                borderRadius: "15px",
                                width: "auto",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    borderRight: `2px solid ${Colors.grey}`,
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.grey,
                                    px: "11px",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                -
                            </Box>
                            <Box
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    letterSpacing: "0em",
                                    color: Colors.grey,
                                    px: "15px",
                                    width: "50px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                }}
                            >
                                {amount}
                            </Box>
                            <Box
                                sx={{
                                    borderLeft: `2px solid ${Colors.grey}`,
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.grey,
                                    px: "9px",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                +
                            </Box>
                        </Grid>
                        <Box
                            sx={{
                                fontSize: "24px",
                                fontWeight: 800,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "right",
                                color: Colors.maxDark,
                                border: `2px solid ${Colors.maxDark}`,
                                p: "5px 12px",
                                borderRadius: "15px",
                            }}
                        >
                            {price * amount + ` ${currency}`}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CartItem
