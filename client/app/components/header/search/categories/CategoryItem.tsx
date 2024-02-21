import Image from "next/image"
import React from "react"
import Grid from "@mui/material/Grid"

const CategoryItem = ({ categoryInfo }: any) => {
    return (
        <>
            <Grid
                container
                sx={{
                    direction: "row",
                    columnGap: 2,
                    alignItems: "center",
                    p: 1,
                }}
            >
                <img src={categoryInfo.image} alt="" width={30} height={30} />
                <div>{categoryInfo.title}</div>
            </Grid>
        </>
    )
}

export default CategoryItem
