import { Colors } from "@/client"
import { Box } from "@mui/material"

const AboutMissionItem = ({ src, title, text }) => {
    return (
        <Box
            sx={{
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                overflow: "hidden",
                flex: "1 1 0",
            }}
        >
            <Box
                sx={{
                    height: "50%",
                    background: Colors.white,
                }}
            >
                <img
                    src={src}
                    alt="picture"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </Box>
            <Box
                sx={{
                    height: "50%",
                    background: Colors.light,
                    p: "24px",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "18px",
                }}
            >
                <Box
                    sx={{
                        color: Colors.maxDark,
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                >
                    {title}
                </Box>
                <Box
                    sx={{
                        color: Colors.grey,
                        fontSize: "16px",
                        fontWeight: 400,
                    }}
                >
                    {text}
                </Box>
            </Box>
        </Box>
    )
}

export default AboutMissionItem
