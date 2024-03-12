import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Colors } from "@/client"
import {
    deliveryIcon,
    guaranteeIcon,
    paymentIcon,
    returtingIcon,
} from "../../static/deliveryInfo"
import Typography from "@mui/material/Typography"

const DeliveryInfo = () => {
    const deliveryInfoBlock = [
        {
            id: 0,
            title: "Доставка",
            content:
                'Самовивіз із магазину "CHOICE", доставка за адресою або у відділення "Нова Пошта" і "Meest".',
            svg: deliveryIcon,
        },
        {
            id: 1,
            title: "Гарантія",
            content:
                "Сертифікована техніка з офіційною гарантією від виробника.",
            svg: guaranteeIcon,
        },
        {
            id: 2,
            title: "Оплата",
            content: "Оплачуй товар готівкою, картою або онлайн.",
            svg: paymentIcon,
        },
        {
            id: 3,
            title: "Повернення",
            content:
                "Повернення товару відбувається протягом 14 днів після покупки, у відповідності із діючим законом.",
            svg: returtingIcon,
        },
    ]

    return (
        <Box
            sx={{
                width: "100%",
                height: "200px",
                py: "46px",
                background: Colors.paper,
            }}
        >
            <Grid
                container
                sx={{
                    width: { lg: 1140, xl: 1440 },
                    height: "100%",
                    margin: "0 auto",
                    justifyContent: "space-between",
                }}
            >
                {deliveryInfoBlock.map((block: any) => (
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            rowGap: "20px",
                            width: { lg: 200, xl: 240 },
                        }}
                    >
                        <Grid
                            container
                            sx={{ alignItems: "center", columnGap: 2 }}
                        >
                            {block.svg}
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    lineHeight: "22px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}
                            >
                                {" "}
                                {block.title}
                            </Typography>
                        </Grid>
                        <Typography
                            sx={{
                                textWrap: "wrap",
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: "19px",
                                letterSpacing: "0em",
                                textAlign: "left",
                            }}
                        >
                            {block.content}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default DeliveryInfo
