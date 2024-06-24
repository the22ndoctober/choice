import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Colors } from "@/client"
import Typography from "@mui/material/Typography"
import { logoWhite } from "../static/logoWhite"

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "500px",
                    background: Colors.maxDark,
                    pt: "38px",
                }}
            >
                <Grid
                    container
                    sx={{
                        width: { xs: 360, lg: 1368, xl: 1440 },
                        rowGap: { xs: "22px", lg: "140px", xl: "186px" },
                        margin: "0 auto",
                        columnGap: { xs: "22px", lg: "144px", xl: "186px" },
                    }}
                >
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            rowGap: "30px",
                            flex: "1 1 0",
                        }}
                    >
                        {logoWhite}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "9px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                044 056 50 20
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    textWrap: "wrap",
                                    maxWidth: { lg: 158 },
                                    color: Colors.white,
                                }}
                            >
                                Оформити замовлення 9:00 - 21:00
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "9px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                044 056 50 20
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    textWrap: "wrap",
                                    maxWidth: { lg: 140 },
                                    color: Colors.white,
                                }}
                            >
                                Служба підтримки 9:00 - 21:00
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            flex: "4 1 0",
                            columnGap: "145px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "9px",
                                width: "auto",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                CHOICE
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Про компанію
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "9px",
                                width: "auto",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Категорії
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Авто та мото
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Аудіо
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "9px",
                                width: "auto",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Сервіси
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Обмін
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "9px",
                                width: "auto",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Клієнтам
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "17px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: Colors.white,
                                }}
                            >
                                Публічні оферти
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer
