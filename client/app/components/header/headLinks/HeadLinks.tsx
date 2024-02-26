import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { useRouter } from "next/navigation"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import HomeIcon from "@mui/icons-material/Home"
import { Colors } from "@/client"
import { HeadLinksStyles } from "./styles/styles"

const HeadLinks = ({ links }: any) => {
    const router = useRouter()

    console.log(links)

    return (
        <>
            <Grid
                container
                direction={"row"}
                sx={{ ...HeadLinksStyles.wrapper }}
            >
                <Box
                    onClick={() => {
                        router.push(`/`)
                    }}
                >
                    <HomeIcon sx={{ fontSize: "32px" }} />
                </Box>
                <ArrowForwardIosIcon />
                {(links || []).map((link: any, id: number) => (
                    <>
                        <Box
                            key={link.title}
                            onClick={() => {
                                router.push(`/products/${link.url}`)
                            }}
                        >
                            {link.title}
                        </Box>
                        <Box key={link.title + "icon"}>
                            {id !== links.length - 1 ? (
                                <ArrowForwardIosIcon />
                            ) : (
                                ""
                            )}
                        </Box>
                    </>
                ))}
            </Grid>
        </>
    )
}

export default HeadLinks
