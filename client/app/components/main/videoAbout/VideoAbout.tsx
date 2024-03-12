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
                            lg: 1140,
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
                            alignItems: "left",
                            justifyContent: "center",
                            rowGap: "14px",
                            height: "100%",
                            width: "auto",
                            mt: "-30px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                color: Colors.black,
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
                            Текст під відео
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
                                height: { xl: 468 },
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
