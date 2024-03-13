import React from "react"
import Box from "@mui/material/Box"
import { Colors } from "@/client"
import Grid from "@mui/material/Grid"

import SearchProductItem from "./searchDropDown/SearchProductItem"

const SearchDropDrown = ({
    products,
    productsIsLoading,
    setQuery,
    setOpenCat,
}: any) => {
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    background: Colors.paper,
                    width: "100%",
                    height: { sm: 600 },
                    left: 0,

                    zIndex: 400,
                    py: "25px",
                }}
            >
                <Box
                    sx={{ width: "100%", height: "100%", overflowY: "scroll" }}
                >
                    <Grid container sx={{ direction: "column" }}>
                        <Grid container direction={"column"} rowGap={2} p={2}>
                            {productsIsLoading ? (
                                <div>Завантажується</div>
                            ) : (
                                <>
                                    {(products || []).map((product: any) => (
                                        <SearchProductItem
                                            setOpenCat={setOpenCat}
                                            setQuery={setQuery}
                                            product={product}
                                            key={product.title}
                                        />
                                    ))}
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SearchDropDrown
