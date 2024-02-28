import { Colors } from "@/client"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { useRouter } from "next/navigation"

const SearchProductItem = ({ product }: any) => {
    const router = useRouter()

    return (
        <>
            <Grid
                container
                display={"flex"}
                direction={"row"}
                sx={{
                    width: "100%",
                    height: 50,
                    columnGap: 2,
                    cursor: "pointer",
                }}
                onClick={() => {
                    router.push(`/products/${product.product_id}`)
                }}
            >
                <Box
                    sx={{
                        width: 50,
                        height: 50,
                        overflow: "hidden",
                        background: Colors.light,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={product.image_path}
                        alt=""
                        style={{ width: 50, height: "auto", maxHeight: 50 }}
                    />
                </Box>
                <Box>
                    <Grid container direction="column" sx={{ rowGap: 1 }}>
                        <Box sx={{ color: Colors.black, fontSize: "14px" }}>
                            {product.title}
                        </Box>
                        <Typography
                            sx={{
                                maxWidth: 100,
                                textAlign: "center",
                                fontSize: "14px",
                                color: Colors.teal,
                                borderRadius: "5px",
                                border: `1px solid ${Colors.teal}`,
                            }}
                        >
                            {`${product.price} ${product.currency}`}
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default SearchProductItem
