import { Grid, Typography, Box } from "@mui/material"
import { NavStyles } from "./styles/styles"
import Image from "next/image"
import logo_src from "@/public/logo_nav.png"

const Navigtaion = () => {
    const NavButtons = [
        { key: "store", value: "Магазин" },
        { key: "about", value: "Про нас" },
        { key: "trade", value: "Обмін" },
        { key: "save_the_world", value: "Врятувати світ" },
        { key: "delivery", value: "Доставка" },
        { key: "help", value: "Допомога" },
    ]

    return (
        <>
            <Box sx={{ ...NavStyles.container }}>
                <Grid container sx={{ ...NavStyles.bodyWrapper }}>
                    <Grid container sx={{ ...NavStyles.logoWrapper }}>
                        <Image
                            src={logo_src}
                            alt="#"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Grid>
                    <Grid container sx={{ ...NavStyles.buttonsWrapper }}>
                        {NavButtons.map(
                            (button: { key: string; value: string }) => (
                                <Typography
                                    key={button.key}
                                    sx={{ ...NavStyles.buttonWrapper__item }}
                                >
                                    {button.value}
                                </Typography>
                            )
                        )}
                    </Grid>
                    <Grid container sx={{ ...NavStyles.infoWrapper }}></Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Navigtaion
