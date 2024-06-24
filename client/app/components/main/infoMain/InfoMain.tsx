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
            <Box sx={{ width: "100%", height: "auto", py: "65px" }}>
                <Grid
                    container
                    sx={{
                        width: { xs: 360, lg: 1368, xl: 1440 },
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
                            height: { xs: 750, lg: 448 },
                            columnGap: { lg: "28px" },
                            rowGap: { xs: "16px", lg: "0px" },
                            flexDirection: { xs: "column", lg: "row" },
                        }}
                    >
                        {infoBlock.map((block) => (
                            <Grid
                                container
                                sx={{
                                    background: Colors.paper,
                                    px: { xs: "8px", lg: "23px" },
                                    py: { xs: "8px", lg: "34px" },
                                    borderRadius: "15px",
                                    flexDirection: { xs: "column" },
                                    justifyContent: "space-between",
                                    flex: "1 1 0",
                                    height: { xs: "auto", lg: "100%" },
                                }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        flexDirection: "column",
                                        rowGap: {
                                            xs: "8px",
                                            lg: "15px",
                                            xl: "19px",
                                        },
                                        textWrap: "wrap",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: {
                                                xs: "12px",
                                                lg: "18px",
                                            },
                                            color: Colors.grey,
                                        }}
                                    >
                                        {block.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: {
                                                xs: "16px",
                                                lg: "24px",
                                            },
                                            color: Colors.black,
                                            lineHeight: {
                                                xs: "20px",
                                                lg: "29px",
                                            },
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
                                        width: { xs: 100, lg: 160, xl: 200 },
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
