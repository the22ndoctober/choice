"use client"

import { Colors } from "@/client"
import { Box, Grid } from "@mui/material"
import { trashCart } from "../../static/trashCart"
import { removeFavProduct } from "@/api/dashboard"
import { useState } from "react"

const ChosenProducts = ({ user }) => {
    const [data, setData] = useState(user.favProducts)

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "70svh",
                    overflowY: "scroll",
                }}
            >
                {!user.favProducts ||
                    (user.favProducts.length === 0 && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <svg
                                width="288"
                                height="288"
                                viewBox="0 0 288 288"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M199.298 213.15L200.93 155.221L202.474 153.979L203.324 156.38C209.145 172.818 212.215 190.099 212.416 207.528L199.298 213.15Z"
                                    fill="#706F6F"
                                    stroke="#706F6F"
                                    stroke-width="5.54565"
                                />
                                <path
                                    d="M96.3054 212.32L94.6806 154.642L92.7153 153.483L92.0427 155.44C86.3707 171.947 83.3822 189.253 83.1874 206.698L96.3054 212.32Z"
                                    fill="#706F6F"
                                    stroke="#706F6F"
                                    stroke-width="5.54565"
                                />
                                <path
                                    d="M199.001 196.012H175.975H167.977L147.484 227.256L158.803 242.376H199.001V196.012Z"
                                    stroke="#706F6F"
                                    stroke-width="5.54565"
                                />
                                <path
                                    d="M97.1478 196.012H167.97L137.245 242.376H97.1478V196.012Z"
                                    stroke="#706F6F"
                                    stroke-width="5.54565"
                                />
                                <path
                                    d="M201.993 112.456L224.747 110.657V150.664H201.775H199.002V153.436V195.605C165.103 192.938 131.047 192.938 97.1484 195.605V153.436V150.664H94.3755H71.2513V110.656L94.1583 112.456L97.1484 112.691V109.691V84.6975C130.963 80.3956 165.187 80.3956 199.002 84.6975V109.691V112.692L201.993 112.456Z"
                                    stroke="#706F6F"
                                    stroke-width="5.54565"
                                />
                                <path
                                    d="M125.928 169.006H169.42V172.421L125.928 169.455V169.006Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M146.044 136.653L147.879 135.108L149.671 136.701L165.301 150.594H224.409V110.834C173.486 115.993 122.173 115.993 71.2506 110.834V150.594H129.488L146.044 136.653Z"
                                    stroke="#706F6F"
                                    stroke-width="5.54411"
                                />
                                <path
                                    d="M232.146 54.5901C232.306 54.3186 232.642 54.2072 232.933 54.3291C239.917 57.2578 246.468 61.1262 252.405 65.827C252.653 66.0227 252.717 66.3709 252.557 66.6424L236.698 93.5004C236.488 93.857 236.043 93.9997 235.665 93.8323C228.853 90.8249 222.418 87.0272 216.493 82.5183C216.163 82.2674 216.074 81.8095 216.284 81.4529L232.146 54.5901Z"
                                    stroke="#706F6F"
                                    stroke-width="1.37071"
                                />
                                <circle
                                    cx="237.809"
                                    cy="68.3075"
                                    r="4.47657"
                                    transform="rotate(30.5607 237.809 68.3075)"
                                    fill="#706F6F"
                                    stroke="#706F6F"
                                    stroke-width="1.37173"
                                />
                                <circle
                                    cx="231.059"
                                    cy="79.7391"
                                    r="4.47657"
                                    transform="rotate(30.5607 231.059 79.7391)"
                                    stroke="#706F6F"
                                    stroke-width="1.37173"
                                />
                                <path
                                    d="M235.553 53.2725C241.298 56.0947 246.818 59.3541 252.064 63.0219L252.644 62.04C252.999 61.4382 252.856 60.6666 252.309 60.2321C247.913 56.742 243.057 53.8744 237.878 51.7104C237.233 51.4409 236.488 51.6884 236.133 52.2902L235.553 53.2725Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M17.8066 171.166C17.4064 170.123 17.8631 168.948 18.8619 168.449C29.5094 163.129 40.6473 158.853 52.1196 155.682C53.1958 155.385 54.322 155.953 54.7221 156.995L62.8731 178.229C63.2209 179.135 62.7239 180.146 61.7939 180.423C50.2933 183.856 39.0723 188.166 28.2303 193.314C27.3534 193.73 26.3076 193.312 25.9598 192.406L17.8066 171.166Z"
                                    stroke="#706F6F"
                                    stroke-width="1.46571"
                                />
                                <circle
                                    cx="30.4053"
                                    cy="177.424"
                                    r="4.78685"
                                    transform="rotate(-21 30.4053 177.424)"
                                    stroke="#706F6F"
                                    stroke-width="1.46681"
                                />
                                <circle
                                    cx="52.4921"
                                    cy="168.945"
                                    r="2.36582"
                                    transform="rotate(-21 52.4921 168.945)"
                                    fill="#706F6F"
                                />
                                <circle
                                    cx="46.3788"
                                    cy="166.225"
                                    r="2.36582"
                                    transform="rotate(-21 46.3788 166.225)"
                                    fill="#706F6F"
                                />
                                <circle
                                    cx="43.6561"
                                    cy="172.337"
                                    r="2.36582"
                                    transform="rotate(-21 43.6561 172.337)"
                                    fill="#706F6F"
                                />
                                <circle
                                    cx="49.7714"
                                    cy="175.059"
                                    r="2.36582"
                                    transform="rotate(-21 49.7714 175.059)"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M16.2182 81.6413C15.603 80.3607 16.0664 78.8223 17.2866 78.0945L18.6555 77.278C30.1936 70.396 42.3497 64.6076 54.9652 59.9882C56.205 59.5342 57.5869 60.0957 58.1586 61.2858L69.3781 84.64C54.9416 89.7096 41.0971 96.3314 28.0881 104.39L27.3625 104.839L16.2182 81.6413Z"
                                    stroke="#706F6F"
                                    stroke-width="1.66175"
                                />
                                <path
                                    d="M21.4141 110.892C39.0749 99.6488 58.0131 90.5508 77.8278 83.7909C78.6428 85.4875 77.9282 87.5236 76.2316 88.3388L51.0971 100.414L25.9629 112.489C24.2659 113.304 22.2294 112.589 21.4141 110.892Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M243.513 151.822C243.889 151.101 244.749 150.78 245.505 151.079L246.719 151.558C255.774 155.133 264.41 159.691 272.471 165.149C273.061 165.549 273.258 166.328 272.928 166.96L256.968 197.55L242.965 190.251L242.965 190.251L227.636 182.253L243.513 151.822Z"
                                    stroke="#706F6F"
                                    stroke-width="1.39294"
                                />
                                <path
                                    d="M227.623 180.773C238.322 185.047 248.562 190.389 258.188 196.72L257.262 198.495C256.496 199.963 254.685 200.532 253.217 199.766L240.592 193.18L227.968 186.593C226.5 185.827 225.931 184.017 226.696 182.549L227.623 180.773Z"
                                    fill="#706F6F"
                                />
                                <path
                                    d="M253.045 157.972L254.252 158.463C256.696 159.457 259.041 160.681 261.255 162.117L262.348 162.826L261.885 163.713L257.405 160.957L252.582 158.86L253.045 157.972Z"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="52.8242"
                                    y="198.803"
                                    width="15.1168"
                                    height="15.1168"
                                    rx="3.02335"
                                    transform="rotate(25.2004 52.8242 198.803)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="254.975"
                                    y="110.446"
                                    width="22.9806"
                                    height="22.9806"
                                    rx="4.59611"
                                    transform="rotate(25.2004 254.975 110.446)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="242.746"
                                    y="205.429"
                                    width="9.00906"
                                    height="9.00906"
                                    rx="1.80181"
                                    transform="rotate(72.6769 242.746 205.429)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="52.7793"
                                    y="123.699"
                                    width="9.00906"
                                    height="9.00906"
                                    rx="1.80181"
                                    transform="rotate(72.6769 52.7793 123.699)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="208.262"
                                    y="50.8057"
                                    width="14.5365"
                                    height="14.5365"
                                    rx="2.90731"
                                    transform="rotate(72.6769 208.262 50.8057)"
                                    fill="#706F6F"
                                />
                                <rect
                                    x="66.2695"
                                    y="38.5791"
                                    width="30.2683"
                                    height="30.2683"
                                    rx="6.05366"
                                    transform="rotate(-10.3631 66.2695 38.5791)"
                                    fill="#706F6F"
                                />
                            </svg>
                            <Box>Поки нема обраних товарів</Box>
                        </Box>
                    ))}

                <Grid
                    container
                    sx={{
                        flexDirection: "column",
                        px: "64px",
                        py: "64px",
                        rowGap: "12px",
                        height: "fit-content",
                    }}
                >
                    {user &&
                        data.map((item) => (
                            <Grid
                                key={item.product_id}
                                container
                                sx={{
                                    p: { lg: "27px 35px" },
                                    background: Colors.white,
                                    borderRadius: "15px",
                                    columnGap: "12px",
                                    width: "100%",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: "92px", lg: "130px" },
                                        height: { xs: "92px", lg: "130px" },
                                        borderRadius: "15px",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: Colors.paper,
                                    }}
                                >
                                    {item.image_path !== null ? (
                                        <img
                                            src={item.image_path}
                                            alt=""
                                            style={{
                                                width: "auto",
                                                height: "100%",
                                            }}
                                        />
                                    ) : (
                                        <svg
                                            width="130"
                                            height="130"
                                            viewBox="0 0 130 130"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="130"
                                                height="130"
                                                fill="#F3F3F3"
                                            />
                                            <path
                                                d="M49.042 63.9216C47.4345 67.9754 46.579 72.3172 46.5191 76.6797L50.0522 78.1938L49.6188 64.262L49.042 63.9216Z"
                                                fill="#706F6F"
                                                stroke="#706F6F"
                                                stroke-width="1.49533"
                                            />
                                            <path
                                                d="M78.8155 63.8547C80.4229 67.9085 81.2785 72.2503 81.3383 76.6128L77.8053 78.1269L78.2386 64.1951L78.8155 63.8547Z"
                                                fill="#706F6F"
                                                stroke="#706F6F"
                                                stroke-width="1.49533"
                                            />
                                            <path
                                                d="M63.8574 83.8401L66.9094 87.917H77.7484V75.4154H71.5397H69.3832L63.8574 83.8401Z"
                                                fill="#F3F3F3"
                                                stroke="#706F6F"
                                                stroke-width="1.49533"
                                            />
                                            <path
                                                d="M50.2848 75.4154H69.3814L61.0966 87.917H50.2848V75.4154Z"
                                                fill="#F3F3F3"
                                                stroke="#706F6F"
                                                stroke-width="1.49533"
                                            />
                                            <path
                                                d="M50.2852 63.9352V63.1876H49.5376H43.3024V53.6056L49.6226 52.8826L50.2852 52.8068V52.1398V45.4004C59.4031 44.2405 68.6312 44.2405 77.7491 45.4004V52.1398V52.7993L78.4034 52.8816L84.0954 53.5981V63.1876H78.4967H77.7491V63.9352V75.3056C68.6086 74.5866 59.4257 74.5866 50.2852 75.3056V63.9352Z"
                                                fill="#F3F3F3"
                                                stroke="#706F6F"
                                                stroke-width="1.49533"
                                            />
                                            <path
                                                d="M69.7734 68.1333H58.0461V69.054L69.7734 68.2545V68.1333Z"
                                                fill="#706F6F"
                                            />
                                            <path
                                                d="M84.6912 53.0162V64.0291C70.732 62.6141 56.6656 62.6141 42.7065 64.0291V53.0162C56.6393 51.1527 70.7583 51.1527 84.6912 53.0162Z"
                                                fill="#F3F3F3"
                                                stroke="#706F6F"
                                                stroke-width="1.49498"
                                            />
                                            <path
                                                d="M87.3276 37.7192C99.8373 50.6951 99.4594 71.3552 86.4835 83.8649C73.5077 96.3746 52.8475 95.9967 40.3378 83.0209C27.8281 70.045 28.206 49.3849 41.1819 36.8752C54.1577 24.3655 74.8179 24.7434 87.3276 37.7192ZM44.9107 78.6123C54.9856 89.0626 71.6246 89.367 82.0749 79.2921C92.5253 69.2172 92.8296 52.5781 82.7547 42.1278C72.6798 31.6775 56.0408 31.3731 45.5905 41.448C35.1401 51.5229 34.8358 68.162 44.9107 78.6123Z"
                                                fill="#706F6F"
                                            />
                                            <path
                                                d="M81.7269 83.2057L86.387 78.713L105.371 98.4042C106.611 99.691 106.574 101.74 105.287 102.981C104 104.221 101.951 104.184 100.711 102.897L81.7269 83.2057Z"
                                                fill="#706F6F"
                                            />
                                            <rect
                                                x="28.1934"
                                                y="30.9473"
                                                width="7.39168"
                                                height="7.39168"
                                                rx="1.61828"
                                                transform="rotate(-33.2688 28.1934 30.9473)"
                                                fill="#706F6F"
                                            />
                                            <rect
                                                x="46.3027"
                                                y="101.332"
                                                width="7.39168"
                                                height="7.39168"
                                                rx="1.61828"
                                                transform="rotate(-43.5156 46.3027 101.332)"
                                                fill="#706F6F"
                                            />
                                            <rect
                                                x="90.9336"
                                                y="25.3762"
                                                width="14.4591"
                                                height="14.4591"
                                                rx="2.69714"
                                                transform="rotate(-6.17362 90.9336 25.3762)"
                                                fill="#706F6F"
                                            />
                                            <rect
                                                x="100.479"
                                                y="72.1331"
                                                width="8.70647"
                                                height="8.70647"
                                                rx="1.61828"
                                                transform="rotate(30.2377 100.479 72.1331)"
                                                fill="#706F6F"
                                            />
                                            <rect
                                                x="22.9415"
                                                y="92.3513"
                                                width="18.2596"
                                                height="18.2596"
                                                rx="1.888"
                                                transform="rotate(-10.3631 22.9415 92.3513)"
                                                stroke="#706F6F"
                                                stroke-width="1.61828"
                                            />
                                            <rect
                                                x="77.559"
                                                y="26.951"
                                                width="9.19737"
                                                height="9.19737"
                                                rx="1.21072"
                                                transform="rotate(-66.1744 77.559 26.951)"
                                                stroke="#706F6F"
                                                stroke-width="0.815129"
                                            />
                                        </svg>
                                    )}
                                </Box>
                                <Grid
                                    container
                                    sx={{
                                        flexDirection: "column",

                                        justifyContent: "space-between",
                                        flex: "1 1 0",
                                        width: "150px",
                                    }}
                                >
                                    <Grid
                                        container
                                        sx={{
                                            flexDirection: "column",
                                            rowGap: "3px",
                                        }}
                                    >
                                        <Grid
                                            container
                                            sx={{
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    fontSize: {
                                                        xs: "14px",
                                                        lg: "20px",
                                                    },
                                                    fontWeight: 600,
                                                    lineHeight: "24px",
                                                    letterSpacing: "0em",
                                                    textAlign: "left",
                                                    width: "auto",
                                                    maxWidth: {
                                                        xs: "100px",
                                                        lg: "none",
                                                    },
                                                }}
                                            >
                                                {item.title}
                                            </Box>
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    cursor: "pointer",
                                                    ":hover": {
                                                        color: Colors.teal,
                                                    },
                                                    ":hover:before": {
                                                        position: "absolute",
                                                        content: '"Видалити"',
                                                        fontSize: "10px",
                                                        color: Colors.paper,
                                                        background: Colors.grey,
                                                        left: "calc(100% + 5px)",
                                                        top: "-25px",
                                                        p: "6px",
                                                    },
                                                }}
                                                onClick={() => {
                                                    if (
                                                        item.product_id &&
                                                        window?.localStorage
                                                    ) {
                                                        removeFavProduct(
                                                            window.localStorage.getItem(
                                                                "CHOICE_JWT"
                                                            ),
                                                            item.product_id
                                                        )
                                                        setData((state) =>
                                                            state.filter(
                                                                (prod) =>
                                                                    prod.product_id !==
                                                                    item.product_id
                                                            )
                                                        )
                                                    }
                                                }}
                                            >
                                                {trashCart}
                                            </Box>
                                        </Grid>
                                        <Box
                                            sx={{
                                                fontSize: "12px",
                                                fontWeight: 500,
                                                lineHeight: "15px",
                                                letterSpacing: "0em",
                                                textAlign: "left",
                                                color: Colors.grey,
                                                width: "fit-content",
                                            }}
                                        >
                                            Штрихкод: {item.code}
                                        </Box>
                                    </Grid>
                                    <Grid
                                        container
                                        sx={{ justifyContent: "space-between" }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: {
                                                    xs: "16px",
                                                    lg: "24px",
                                                },
                                                fontWeight: 800,
                                                lineHeight: "29px",
                                                letterSpacing: "0em",
                                                textAlign: "right",
                                                color: Colors.neutral,
                                                border: `2px solid ${Colors.neutral}`,
                                                p: "5px 12px",
                                                borderRadius: "15px",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {item.price + " ₴"}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </>
    )
}

export default ChosenProducts
