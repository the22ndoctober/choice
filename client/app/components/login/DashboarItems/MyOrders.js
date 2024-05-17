import { Box, Grid } from "@mui/material"
import { Colors } from "@/client"

const MyOrders = ({ orders }) => {
    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "41px",
                    minHeight: "70svh",
                    p: "46px",
                }}
            >
                <Box
                    sx={{
                        fontSize: "42px",
                        fontWeight: 600,
                        lineHeight: "50.83px",
                        color: Colors.black,
                    }}
                >
                    Мої замовлення
                </Box>
                <Grid
                    container
                    sx={{
                        flexDirection: "column",
                        rowGap: "12px",
                    }}
                >
                    {orders.map((order) => (
                        <>
                            <Grid
                                container
                                sx={{
                                    px: "35px",
                                    py: "12px",
                                    background: Colors.white,
                                    borderRadius: "15px",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: "1 1 0",
                                    }}
                                >
                                    №{order.id.slice(0, 6) + "..."}
                                </Box>
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                        flex: "1 1 0",
                                    }}
                                >
                                    {order.createdAt
                                        .replace("T", " ")
                                        .replace(/\.\d+Z/, "")}
                                </Box>
                                <Box
                                    sx={{
                                        color: "#36C3BB",
                                        flex: "1 1 0",
                                    }}
                                >
                                    {order.status}
                                </Box>
                                <Box
                                    sx={{
                                        width: "64px",
                                        height: "64px",
                                        background: Colors.paper,
                                        borderRadius: "15px",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={order.cart[0].img_path}
                                        alt=""
                                        style={{
                                            height: "100%",
                                            width: "auto",
                                            margin: "0 auto",
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default MyOrders
