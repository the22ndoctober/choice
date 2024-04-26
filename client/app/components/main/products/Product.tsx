"use client"

import { GetProducts } from "@/api/test"
import { Box, Grid } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"
import ProductItem from "@/app/components/main/products/ProductItem"
import HeadLinks from "@/app/components/header/headLinks/HeadLinks"
import DeliveryInfo from "../deliveryInfo/DeliveryInfo"
import { Colors } from "@/client"
import parse from "html-react-parser"

export default function Product({ params }: any) {
    const { isLoading, error, data, isSuccess }: any = useQuery({
        queryKey: ["product", params.product],
        queryFn: () => GetProducts(params.product),
    })

    if (isLoading) return <div>Loading...</div>

    if (data.error) return <div>No such product</div>

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Box
                    sx={{
                        width: { xl: "1440px" },
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 auto",
                        rowGap: "39px",
                        py: { sm: "28px" },
                    }}
                >
                    <HeadLinks
                        links={[
                            {
                                url: params.product,
                                title: "Category",
                            },
                            {
                                url: params.product,
                                title: data.products[0].title,
                            },
                        ]}
                    />
                    <ProductItem product={data.products[0]} />

                    <Grid container sx={{ justifyContent: "space-between" }}>
                        <Grid
                            container
                            direction={"column"}
                            sx={{ flex: "1", rowGap: "36px" }}
                        >
                            <Box
                                sx={{
                                    color: Colors.black,

                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29.05px",
                                    textAlign: "left",
                                    pl: "23px",
                                }}
                            >
                                Характеристики
                            </Box>
                            <Grid
                                container
                                sx={{
                                    pl: "23px",
                                    borderRadius: "15px",
                                    background: Colors.paper,
                                }}
                            ></Grid>
                        </Grid>
                        <Grid
                            container
                            direction={"column"}
                            sx={{ flex: "1", rowGap: "36px" }}
                        >
                            <Box
                                sx={{
                                    color: Colors.black,
                                    pl: "23px",
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29.05px",
                                    textAlign: "left",
                                }}
                            >
                                Перевірка від спеціаліста "Чойс":
                            </Box>
                            <Grid
                                container
                                sx={{
                                    pl: "23px",
                                    borderRadius: "15px",
                                    background: Colors.paper,
                                }}
                            >
                                <div className="discription">
                                    {parse(data.products[0].description)}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <DeliveryInfo />
                </Box>
            </Box>
        </>
    )
}
