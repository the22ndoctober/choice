"use client"

import React, { useState } from "react"
import { Box, Button, Grid, InputBase } from "@mui/material"
import { Colors } from "@/client"
import { useMutation } from "@tanstack/react-query"
import { changeInfo } from "@/api/dashboard"

const PersonalData = ({ user }) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(user.name)
    const [surname, setSurname] = useState(user.surname)
    const [email, setEmail] = useState(user.email)
    const [birthday, setBirthay] = useState(user.birthDate)

    //Tanstack

    const changeInfoMutate = useMutation({
        queryKey: ["dashboard"],
        queryFn: () =>
            changeInfo({
                JWT:
                    global?.window?.localStorage?.getItem("CHOICE_JWT") !== null
                        ? localStorage.getItem("CHOICE_JWT")
                        : "",
                name,
                surname,
                email,
                birthday,
            }),
    })

    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "21px",
                    minHeight: "70svh",
                    p: "36px",
                }}
            >
                <Box
                    sx={{
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "29px",
                        color: Colors.grey,
                    }}
                >
                    Персональні дані
                </Box>
                <Grid
                    container
                    sx={{
                        columnGap: "27px",
                    }}
                >
                    <Box
                        sx={{
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "16px",
                            lineHeight: "19px",
                        }}
                    >
                        Особисті дані
                    </Box>
                    <Grid
                        container
                        sx={{
                            maxWidth: "fit-content",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setEdit(true)
                        }}
                    >
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.25793 14.8651C4.02843 15.0946 3.73039 15.2432 3.40854 15.2885C2.41688 15.4282 1.56493 14.5763 1.70464 13.5846C1.74998 13.2628 1.89855 12.9647 2.12804 12.7352L11.674 3.1893L13.8039 5.31918L4.25793 14.8651Z"
                                fill="#706F6F"
                            />
                            <path
                                d="M14.511 4.61207L12.3811 2.48219L12.7346 2.12864C13.3204 1.54285 14.2721 1.54477 14.8602 2.13292C15.4484 2.72107 15.4503 3.67273 14.8645 4.25852L14.511 4.61207Z"
                                fill="#706F6F"
                            />
                        </svg>
                        <Box
                            sx={{
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "12px",
                                lineHeight: "15px",
                                color: Colors.neutral,
                                textDecorationLine: "underline",
                            }}
                        >
                            Змінити
                        </Box>
                    </Grid>
                </Grid>
                {!edit ? (
                    <Grid
                        container
                        sx={{
                            rowGap: "12px",
                            flexDirection: "column",
                        }}
                    >
                        <Grid container sx={{}}>
                            <Box
                                sx={{
                                    color: Colors.grey,
                                    width: "180px",
                                    mr: "21px",
                                }}
                            >
                                ПІБ:{" "}
                            </Box>
                            <Box
                                sx={{
                                    width: "fit-content",
                                }}
                            >{`${user.name} ${user.surname}`}</Box>
                        </Grid>
                        <Grid container sx={{}}>
                            <Box
                                sx={{
                                    color: Colors.grey,
                                    width: "180px",
                                    mr: "21px",
                                }}
                            >
                                Номер телефону:
                            </Box>
                            <Box
                                sx={{
                                    width: "fit-content",
                                }}
                            >
                                {user.phone}
                            </Box>
                        </Grid>
                        <Grid container sx={{}}>
                            <Box
                                sx={{
                                    color: Colors.grey,
                                    width: "180px",
                                    mr: "21px",
                                }}
                            >
                                E-mail:
                            </Box>
                            <Box
                                sx={{
                                    width: "fit-content",
                                }}
                            >
                                {user.email}
                            </Box>
                        </Grid>
                        <Grid container sx={{}}>
                            <Box
                                sx={{
                                    color: Colors.grey,
                                    width: "180px",
                                    mr: "21px",
                                }}
                            >
                                Дата народження:
                            </Box>
                            <Box
                                sx={{
                                    width: "fit-content",
                                }}
                            >
                                {user.birthDate}
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            rowGap: "21px",
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                width: "fit-content",
                                columnGap: "21px",
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    flexDirection: "column",
                                    width: "fit-content",
                                    rowGap: "12px",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                    }}
                                >
                                    Прізвище
                                </Box>
                                <InputBase
                                    placeholder=""
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    sx={{
                                        width: "252px",
                                        py: "8px",
                                        border: `2px solid ${Colors.grey}`,
                                        color: Colors.black,
                                        borderRadius: "15px",
                                        "& .MuiInputBase-input": {
                                            px: "24px",
                                            color: Colors.maxDark,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid
                                container
                                sx={{
                                    flexDirection: "column",
                                    rowGap: "12px",
                                    width: "fit-content",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                    }}
                                >
                                    Ім'я
                                </Box>
                                <InputBase
                                    placeholder=""
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{
                                        width: "252px",
                                        py: "8px",
                                        border: `2px solid ${Colors.grey}`,
                                        color: Colors.black,
                                        borderRadius: "15px",
                                        "& .MuiInputBase-input": {
                                            px: "24px",
                                            color: Colors.maxDark,
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{
                                width: "fit-content",
                                columnGap: "21px",
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    flexDirection: "column",
                                    width: "fit-content",
                                    rowGap: "12px",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                    }}
                                >
                                    E-mail
                                </Box>
                                <InputBase
                                    placeholder=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{
                                        width: "252px",
                                        py: "8px",
                                        border: `2px solid ${Colors.grey}`,
                                        color: Colors.black,
                                        borderRadius: "15px",
                                        "& .MuiInputBase-input": {
                                            px: "24px",
                                            color: Colors.maxDark,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid
                                container
                                sx={{
                                    flexDirection: "column",
                                    rowGap: "12px",
                                    width: "fit-content",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                    }}
                                >
                                    Дата народження
                                </Box>
                                <InputBase
                                    placeholder=""
                                    value={birthday}
                                    onChange={(e) => setBirthay(e.target.value)}
                                    sx={{
                                        width: "252px",
                                        py: "8px",
                                        border: `2px solid ${Colors.grey}`,
                                        color: Colors.black,
                                        borderRadius: "15px",
                                        "& .MuiInputBase-input": {
                                            px: "24px",
                                            color: Colors.maxDark,
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{
                                columnGap: "21px",
                                justifyContent: "right",
                            }}
                        >
                            <Button
                                sx={{
                                    borderRadius: "15px",
                                    width: { lg: 240 },
                                    color: Colors.grey,
                                    outline: `2px solid ${Colors.grey}`,
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    lineHeight: "22px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                    height: "54px",
                                    textTransform: "none",
                                }}
                                onClick={() => {
                                    setEdit(false)
                                }}
                            >
                                Скасувати
                            </Button>
                            <Button
                                sx={{
                                    borderRadius: "15px",
                                    width: { lg: 240 },
                                    color: Colors.white,
                                    background: Colors.neutral,
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    lineHeight: "22px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                    height: "54px",
                                    textTransform: "none",
                                    ":hover": {
                                        background: Colors.lightGreen,
                                    },
                                }}
                                onClick={() => {
                                    changeInfoMutate.mutate()
                                }}
                            >
                                Змінити
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default PersonalData
