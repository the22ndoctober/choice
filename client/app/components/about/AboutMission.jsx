import { Colors } from "@/client"
import { Box, Typography } from "@mui/material"
import AboutMissionItem from "./AboutMissionItem"

const items = [
    {
        id: "0",
        src: "/mission/1.jpg",
        title: "Місія компанія",
        text: "Забезпечити доступність якісної техніки та смартфонів для кожного клієнта. Ми працюємо над тим, щоб кожен зміг знайти ідеальне рішення для своїх потреб, отримуючи від нас надійність, якість і підтримку на кожному етапі покупки.",
    },
    {
        id: "1",
        src: "/mission/2.jpg",
        title: "Бачення компанії",
        text: "Наше бачення полягає в тому, щоб стати провідним постачальником бу техніки і смартфонів, відомими своєю надійністю, інноваціями та відмінним обслуговуванням клієнтів. Ми прагнемо створити середовище, де кожен може знайти не лише техніку, але й відчуття впевненості в своїй покупці та використанні продуктів Choice.",
    },
    {
        id: "2",
        src: "/mission/3.jpg",
        title: "Цінності компанії",
        text: "Якість: Ми віддаємо перевагу продуктам і послугам високої якості, що відповідають найвищим стандартам.Надійність: Кожен товар, який ми пропонуємо, проходить ретельний відбір і тестування, щоб забезпечити надійність і довговічність.",
    },
]

const AboutMission = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "36px",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    color: Colors.maxDark,
                }}
            >
                Наша місія{" "}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    columnGap: "24px",
                    width: "100%",
                }}
            >
                {items.map((item) => (
                    <AboutMissionItem
                        key={item.id}
                        src={item.src}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default AboutMission
