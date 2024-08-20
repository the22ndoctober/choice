import { Colors } from "@/client"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const VideoAbout = () => {
    return (
        <>
            <Box sx={{ width: "100%", height: "80svh" }}>
                <Grid
                    container
                    sx={{
                        width: {
                            lg: 1368,
                            xl: 1440,
                            py: "48px",
                            margin: "0 auto",
                            height: "100%",
                            justifyContent: "space-between",
                        },
                    }}
                >
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            rowGap: "14px",
                            height: "100%",
                            flex: "1 1 0",
                            mt: "-30px",
                            pr: "24px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter, sans-serif",
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "54px",
                                lineHeight: "64px",
                                color: Colors.maxDark,
                            }}
                        >
                            Заголовок під відео
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: Colors.grey,
                            }}
                        >
                            Повторне використання вживаних телефонів стає все
                            більше популярним у світі. Чому? Відповіді у нашому
                            відео.
                        </Typography>
                    </Grid>
                    <Box
                        sx={{
                            width: "auto",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: { lg: 700, xl: 901 },
                                height: { lg: 468 },
                            }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/XHTrLYShBRQ?si=16HFSaFxN6T510oS"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default VideoAbout
