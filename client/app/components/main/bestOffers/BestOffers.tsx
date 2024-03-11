import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Colors } from "@/client"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ProductCard from "../../basic/productCard/ProductCard"

const cardsApi = [
    { id: 0, title: "Redmi Note 8T 4/64", price: 3000, currency: ".грн" },
    { id: 1, title: "Redmi Note 8T 4/64", price: 3000, currency: ".грн" },
    { id: 2, title: "Redmi Note 8T 4/64", price: 3000, currency: ".грн" },
    { id: 3, title: "Redmi Note 8T 4/64", price: 3000, currency: ".грн" },
]

const BestOffers = () => {
    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "27px",
                    width: { lg: 1140, xl: 1440 },
                    margin: "0 auto",
                    height: "auto",
                    pt: "34px",
                    pb: "50px",
                }}
            >
                <Typography
                    sx={{ fontSize: { lg: "32px" }, color: Colors.black }}
                >
                    Найкращі пропозиції <ArrowForwardIosIcon />
                </Typography>
                <Grid
                    container
                    spacing={{ lg: "15px" }}
                    sx={{ justifyContent: "space-between" }}
                >
                    {cardsApi.map((card: any) => (
                        <ProductCard
                            key={card.id}
                            title={card.title}
                            price={card.price}
                            currency={card.currency}
                        />
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default BestOffers
