import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function PublicOffers() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "70dvh",
            }}
        >
            <Box
                sx={{
                    width: { xl: 1440, lg: 1368, xs: 360 },
                    margin: "0 auto",
                    py: "54px",
                    "& > p": {
                        ml: "24px",
                    },
                    "& > h4": {
                        mt: "24px",
                    },
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Публічна оферта
                </Typography>
                <Typography variant="body1">
                    Компанія "Choice", зареєстрована відповідно до законодавства
                    України за адресою:, представляє публічну оферту про
                    наступне:
                </Typography>

                <Typography variant="h4" gutterBottom>
                    1. Предмет оферти
                </Typography>
                <Typography variant="body1">
                    1.1. "Choice" пропонує будь-якій зацікавленій особі (далі -
                    "Клієнт") укласти договір на надання послуг з продажу та
                    обміну товарів різного типу.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    2. Умови оферти
                </Typography>
                <Typography variant="body1">
                    2.1. Оферта вважається акцептованою з моменту отримання
                    Клієнтом підтвердження укладення договору (прийняття
                    оферти).
                </Typography>
                <Typography variant="body1">
                    2.2. Умови договору визначаються згідно з умовами цієї
                    публічної оферти та іншими угодами між сторонами.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    3. Права та обов'язки сторін
                </Typography>
                <Typography variant="body1">
                    3.1. "Choice" зобов'язується надати Клієнту послуги
                    відповідно до умов цього договору.
                </Typography>
                <Typography variant="body1">
                    3.2. Клієнт зобов'язується сплатити "Choice" відповідну
                    винагороду за надані послуги відповідно до умов договору.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    4. Відповідальність сторін
                </Typography>
                <Typography variant="body1">
                    4.1. Кожна із сторін несе відповідальність за невиконання
                    або неналежне виконання своїх зобов'язань, передбачених цим
                    договором та чинним законодавством України.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    5. Інші умови
                </Typography>
                <Typography variant="body1">
                    5.1. Ця публічна оферта є дійсною з моменту публікації на
                    веб-сайті компанії "Choice" і залишається чинною до моменту
                    зміни або вилучення компанією "Choice".
                </Typography>
                <Typography variant="body1">
                    5.2. Усі суперечки та розбіжності, що виникають у зв'язку з
                    цим договором, вирішуються шляхом переговорів між сторонами.
                    У разі неможливості досягнення згоди спори вирішуються в
                    судовому порядку відповідно до законодавства України.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    6. Контактні дані
                </Typography>
                <Typography variant="body1">
                    6.1. Для уточнення деталей договору Клієнт може звертатися
                    до компанії "Choice" за наступними контактними даними:{" "}
                    <a href="mailto:choice.shop.sup@gmail.com">
                        choice.shop.sup@gmail.com
                    </a>
                </Typography>
            </Box>
        </Box>
    )
}

export default PublicOffers
