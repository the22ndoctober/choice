import { Colors } from "@/client"
import { Box, Typography } from "@mui/material"
import React from "react"

const AboutHeader = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    position: "relative",
                    overflowY: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    rowGap: "24px",
                    pb: "50px",
                    "::after": {
                        content: `""`,
                        position: "absolute",
                        bottom: { xs: "-25%", lg: "-70%" },
                        left: "50%",
                        width: "100%",
                        height: { xs: "150px", lg: "440px" },
                        borderRadius: "100%",
                        background: Colors.maxDark,
                        transform: "translate(-50%,-50%)",
                        zIndex: "300px",
                    },
                }}
            >
                <Typography
                    sx={{
                        color: Colors.maxDark,
                        fontFamily: "Inter, sans-serif",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: { xs: "18px", lg: "48px" },
                        lineHeight: { xs: "18px", lg: "48px" },
                        maxWidth: { xs: 250, lg: 750, xl: "900" },
                    }}
                >
                    Вибір, на який можна розраховувати
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: Colors.grey,
                        maxWidth: { xs: 250, lg: 750, xl: "900" },
                    }}
                >
                    На компанію Choice можна покладатися, коли мова йде про
                    надійність та доступність б/у техніки і смартфонів. Наш
                    асортимент охоплює найсучасніші моделі за вигідними цінами,
                    завдяки чому кожен клієнт може знайти оптимальне рішення для
                    своїх потреб. Наші пристрої проходять ретельну перевірку на
                    відповідність стандартам якості, що гарантує їх
                    довговічність та безпеку в експлуатації.
                </Typography>
            </Box>
        </>
    )
}

export default AboutHeader
