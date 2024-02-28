import React from "react"
import Box from "@mui/material/Box"
import { Colors } from "@/client"
import Grid from "@mui/material/Grid"

import SearchProductItem from "./searchDropDown/SearchProductItem"

const SearchDropDrown = ({ products, productsIsLoading }: any) => {
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    background: Colors.paper,
                    width: "100%",
                    height: { sm: 600 },
                    overflowY: "scroll",
                    left: 0,
                    zIndex: 999,
                }}
            >
                <Grid container sx={{ direction: "column" }}>
                    <Grid container direction={"column"} rowGap={2} p={2}>
                        {productsIsLoading ? (
                            <div>Завантажується</div>
                        ) : (
                            <>
                                {(products || []).map((product: any) => (
                                    <SearchProductItem
                                        product={product}
                                        key={product.title}
                                    />
                                ))}
                            </>
                        )}
                    </Grid>
                    {/* <Grid container>
                        {!categoriesIsLoading ? (
                            <div>Завантажується</div>
                        ) : (
                            <>
                                {categories.map((category: any) => (
                                    <SearchProductItem category={category} />
                                ))}
                            </>
                        )}
                    </Grid> */}
                </Grid>
            </Box>
        </>
    )
}

export default SearchDropDrown
