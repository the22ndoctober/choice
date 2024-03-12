import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Colors } from "@/client"
import Button from "@mui/material/Button"

const InfoMain = () => {
    const infoBlock = [
        {
            id: 0,
            title: "Обмін",
            subtitle: "Заміна старого девайсу тепер ще доступніша.",
            content:
                "Ми створили програму обміну, що дозволить покращити твій досвід та збереже час.",
        },
        {
            id: 1,
            title: "Врятувати світ",
            subtitle: "Новий шанс для техніки та збереження планети.",
            content:
                "Команда “CHOICE” знайшла варіант, як приєднатись до захисту природи.",
        },
        {
            id: 2,
            title: "Про нас",
            subtitle: "Наша компанія виникла в умовах змін...",
            content:
                "Команда “CHOICE” знайшла варіант, як приєднатись до захисту природи.",
        },
    ]

    return (
        <>
            <Box sx={{ width: "100%", height: "100svh", py: "65px" }}>
                <Grid
                    container
                    sx={{
                        width: { lg: 1140, xl: 1440 },
                        height: "100%",
                        margin: "0 auto",
                        flexDirection: "column",
                        rowGap: "28px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontWeight: 400,
                            color: Colors.black,
                            height: "auto",
                        }}
                    >
                        <span style={{ fontWeight: 600 }}>Ми твій вибір </span>{" "}
                        для обміну
                    </Typography>
                    <Grid
                        container
                        sx={{
                            width: "100%",
                            height: 448,
                            justifyContent: "space-between",
                        }}
                    >
                        {infoBlock.map((block) => (
                            <Grid
                                container
                                sx={{
                                    background: Colors.paper,
                                    px: "23px",
                                    py: "34px",
                                    borderRadius: "15px",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    width: { lg: 355, xl: 452 },
                                    height: "100%",
                                }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        flexDirection: "column",
                                        rowGap: { lg: "15px", xl: "19px" },
                                        textWrap: "wrap",
                                        maxWidth: { lg: 270, xl: 310 },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: Colors.grey,
                                        }}
                                    >
                                        {block.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "24px",
                                            color: Colors.black,
                                            lineHeight: "29px",
                                        }}
                                    >
                                        {block.subtitle}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            color: Colors.grey,
                                            lineHeight: "16px",
                                        }}
                                    >
                                        {block.content}
                                    </Typography>
                                </Grid>
                                <Button
                                    sx={{
                                        background: Colors.paper,
                                        color: Colors.black,
                                        width: { lg: 160, xl: 200 },
                                        boxShadow:
                                            " 2px 2px 2px 2px rgb(0,0,0,0.22)",
                                        textTransform: "none",
                                    }}
                                >
                                    Дізнатись більше
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default InfoMain
