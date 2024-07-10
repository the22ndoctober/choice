"use client"

import { Box, Grid, InputBase } from "@mui/material"
import CircularProgress from "@mui/joy/CircularProgress"
import OrderNav from "./OrderNav"
import { Colors } from "@/client"
import { useSelector } from "react-redux"
import { getCart } from "@/app/redux/cart/cartSlice"
import { useEffect, useRef, useState } from "react"
import { TestAxiosReq } from "@/api/test"
import { useMutation } from "@tanstack/react-query"
import { getNovaPoshtaCities, getNovaPoshtaDepartment } from "@/api/novaPoshta"
import Radio from "@mui/joy/Radio"
import RadioGroup from "@mui/joy/RadioGroup"

const OrderCradentials = ({
    active,
    setActive,
    steps,
    userName,
    setUserName,
    userPhone,
    setUserPhone,
}: any) => {
    const [nameRequired, setNameRequired] = useState(false)
    const [phoneRequired, setPhoneRequired] = useState(false)

    useEffect(() => {
        setNameRequired(false)
    }, [userName])

    useEffect(() => {
        setPhoneRequired(false)
    }, [userPhone])

    const CredantialsResolver = () => {
        if (userName === "" || userPhone === "") {
            if (userName === "") {
                setNameRequired(true)
            }
            if (userPhone === "") {
                setPhoneRequired(true)
            }
            return
        }

        setActive(steps.delivery)
    }

    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    px: "34px",
                    rowGap: "22px",
                }}
            >
                <Box>
                    <InputBase
                        placeholder="Прізвище, імʼя, по батькові*"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        sx={{
                            width: "100%",
                            py: "8px",
                            border: `2px solid ${
                                nameRequired ? "red" : Colors.grey
                            }`,
                            color: nameRequired ? "red" : Colors.black,
                            borderRadius: "15px",
                            "& .MuiInputBase-input": {
                                px: "24px",
                                color: nameRequired ? "red" : Colors.maxDark,
                            },
                        }}
                    />
                    {nameRequired && (
                        <Box sx={{ color: "red" }}>*заповніть ПІБ</Box>
                    )}
                </Box>
                <Box>
                    <InputBase
                        placeholder="Телефон*"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        sx={{
                            width: "100%",
                            py: "8px",
                            border: `2px solid ${
                                phoneRequired ? "red" : Colors.grey
                            }`,

                            borderRadius: "15px",

                            "& .MuiInputBase-input": {
                                px: "24px",
                                color: phoneRequired ? "red" : Colors.maxDark,
                            },
                        }}
                    />
                    {phoneRequired && (
                        <Box sx={{ color: "red" }}>*заповніть номер</Box>
                    )}
                </Box>
                <Box
                    onClick={CredantialsResolver}
                    sx={{
                        background: Colors.neutral,
                        color: Colors.white,
                        borderRadius: "15px",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "16.94px",
                        flex: "1 1 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        py: "14px",
                        px: "38px",
                        width: "fit-content",
                    }}
                >
                    Далі
                </Box>
            </Grid>
        </>
    )
}

const OrderDelivery = ({
    cityQuery,
    setCityQuery,
    citySearchMutation,
    steps,
    active,
    setActive,
    deliveryOption,
    setDeliveryOption,
    deliveryLocale,
    setDeliveryLocale,
    deliveryDepartment,
    setDeliveryDepartment,
    departmentsSearchMutation,
    shortQuery,
    setShortQuery,
}: any) => {
    const [showOptions, setShowOptions] = useState(false)
    const [showDepartments, setShowDepartmentes] = useState(false)
    const [selected, setSelected] = useState("")

    return (
        <>
            <Grid
                container
                onBlur={() => {
                    setShowOptions(false)
                }}
                sx={{ flexDirection: "column", px: "34px", rowGap: "22px" }}
            >
                <Box
                    sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "19.36px",
                    }}
                >
                    Ваше місто
                </Box>
                <Box>
                    <InputBase
                        onFocus={() => {
                            setShowOptions(true)
                        }}
                        placeholder="Введіть назву міста"
                        value={cityQuery}
                        onChange={(e) => setCityQuery(e.target.value)}
                        sx={{
                            width: "100%",
                            py: "8px",
                            border: `2px solid ${Colors.grey}`,
                            zIndex: 11,
                            borderRadius: "15px",
                            background: Colors.paper,

                            "& .MuiInputBase-input": {
                                px: "24px",
                                color: Colors.maxDark,
                            },
                        }}
                    />
                    <Box
                        sx={{
                            width: "100%",
                            height: "0px",
                            position: "relative",
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                flexDirection: "column",
                                position: "absolute",
                                top: -5,
                                left: 0,
                                width: "100%",
                                height: "fit-content",
                                zIndex: 10,
                            }}
                        >
                            {showOptions &&
                                (citySearchMutation.isPending ? (
                                    <Box
                                        sx={{
                                            width: "100%",
                                            textAlign: "center",
                                            py: "12px",
                                            border: `1px solid ${Colors.light}`,
                                            background: Colors.paper,
                                        }}
                                    >
                                        <CircularProgress size="sm" />
                                    </Box>
                                ) : citySearchMutation.data.length === 0 ||
                                  citySearchMutation.data[0].Addresses
                                      .length === 0 ? (
                                    <Box
                                        sx={{
                                            width: "100%",
                                            textAlign: "center",
                                            py: "12px",
                                            border: `1px solid ${Colors.light}`,
                                            background: Colors.paper,
                                        }}
                                    >
                                        Немає підходящого міста
                                    </Box>
                                ) : (
                                    citySearchMutation.data[0].Addresses.map(
                                        (cities: any) => {
                                            return (
                                                <Box
                                                    key={cities.Present}
                                                    onMouseEnter={() => {
                                                        setSelected(
                                                            cities.Present
                                                        )
                                                    }}
                                                    onMouseLeave={() => {
                                                        setSelected("")
                                                    }}
                                                    sx={{
                                                        width: "100%",
                                                        textAlign: "center",
                                                        py: "12px",
                                                        border: `1px solid ${Colors.light}`,
                                                        background:
                                                            selected ===
                                                            cities.Present
                                                                ? Colors.dark
                                                                : Colors.paper,
                                                        color:
                                                            selected ===
                                                            cities.Present
                                                                ? Colors.paper
                                                                : Colors.black,
                                                        cursor: "pointer",
                                                    }}
                                                    onMouseDown={() => {
                                                        setCityQuery(
                                                            cities.Present
                                                        )
                                                        setShortQuery(
                                                            cities.MainDescription
                                                        )
                                                    }}
                                                >
                                                    {cities.Present}
                                                </Box>
                                            )
                                        }
                                    )
                                ))}
                        </Grid>
                    </Box>
                    <Grid container sx={{ columnGap: "6px" }}>
                        <Box
                            onClick={() => {
                                setCityQuery("м. Черкаси, Черкаська обл.")
                                setShortQuery("Черкаси")
                            }}
                            sx={{
                                cursor: "pointer",
                                py: "12px",
                                textDecoration: "underline",
                                color: Colors.grey,
                                fontSize: "14px",
                            }}
                        >
                            Черкаси
                        </Box>
                        <Box
                            onClick={() => {
                                setCityQuery("м. Золотоноша, Черкаська обл.")
                                setShortQuery("Золотоноша")
                            }}
                            sx={{
                                cursor: "pointer",
                                py: "12px",
                                textDecoration: "underline",
                                color: Colors.grey,
                                fontSize: "14px",
                            }}
                        >
                            Золотоноша
                        </Box>
                        <Box
                            onClick={() => {
                                setCityQuery("м. Київ, Київська обл.")
                                setShortQuery("Київ")
                            }}
                            sx={{
                                cursor: "pointer",
                                py: "12px",
                                textDecoration: "underline",
                                color: Colors.grey,
                                fontSize: "14px",
                            }}
                        >
                            Київ
                        </Box>
                    </Grid>
                    {citySearchMutation.isSuccess &&
                        citySearchMutation.data.length > 0 &&
                        citySearchMutation.data[0].Addresses.length > 0 &&
                        citySearchMutation.data[0].Addresses.some(
                            (item: any) => item.Present === cityQuery
                        ) && (
                            <OrderCityOptions
                                cityQuery={cityQuery}
                                option={deliveryOption}
                                setOption={setDeliveryOption}
                            />
                        )}
                </Box>
                {(deliveryOption === "Доставка курʼєром в Черкасах" ||
                    deliveryOption ===
                        "Доставка курʼєром по адресі “Нова пошта”" ||
                    deliveryOption === "Доставка у відділення “Укр Пошта”") && (
                    <Grid
                        container
                        sx={{ flexDirection: "column", rowGap: "12px" }}
                    >
                        <Box
                            sx={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "19.36px",
                            }}
                        >
                            {deliveryOption ===
                            "Доставка у відділення “Укр Пошта”"
                                ? "Номер відділення Укр пошти"
                                : "Адреса доставки"}
                        </Box>
                        <InputBase
                            placeholder="Введіть адрессу доставки"
                            value={deliveryLocale}
                            onChange={(e) => setDeliveryLocale(e.target.value)}
                            sx={{
                                width: "100%",
                                py: "8px",
                                border: `2px solid ${Colors.grey}`,
                                zIndex: 11,
                                borderRadius: "15px",
                                background: Colors.paper,

                                "& .MuiInputBase-input": {
                                    px: "24px",
                                    color: Colors.maxDark,
                                },
                            }}
                        />
                        <Box
                            onClick={() => {
                                if (deliveryLocale !== "") {
                                    setActive(steps.payment)
                                }
                            }}
                            sx={{
                                background: Colors.neutral,
                                color: Colors.white,
                                borderRadius: "15px",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "16.94px",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                py: "14px",
                                px: "38px",
                                width: "fit-content",
                                height: "fit-content",
                            }}
                        >
                            Далі
                        </Box>
                    </Grid>
                )}
                {deliveryOption === 'Самовивіз з магазину "Choice"' &&
                    deliveryLocale !== "" && (
                        <Box
                            onClick={() => {
                                setActive(steps.payment)
                            }}
                            sx={{
                                background: Colors.neutral,
                                color: Colors.white,
                                borderRadius: "15px",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "16.94px",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                py: "14px",
                                px: "38px",
                                width: "fit-content",
                                height: "fit-content",
                            }}
                        >
                            Далі
                        </Box>
                    )}

                {deliveryOption === "Доставка у відділення “Нова пошта”" && (
                    <Grid
                        container
                        onBlur={() => {
                            setShowDepartmentes(false)
                        }}
                        sx={{
                            flexDirection: "column",

                            rowGap: "22px",
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "19.36px",
                            }}
                        >
                            Відділення “Нової пошти”
                        </Box>
                        <Box>
                            <InputBase
                                onFocus={() => {
                                    setShowDepartmentes(true)
                                }}
                                placeholder="Введіть відділення “Нової пошти”"
                                value={deliveryDepartment}
                                onChange={(e) =>
                                    setDeliveryDepartment(e.target.value)
                                }
                                sx={{
                                    width: "100%",
                                    py: "8px",
                                    border: `2px solid ${Colors.grey}`,
                                    zIndex: 11,
                                    borderRadius: "15px",
                                    background: Colors.paper,

                                    "& .MuiInputBase-input": {
                                        px: "24px",
                                        color: Colors.maxDark,
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "0px",
                                    position: "relative",
                                }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        flexDirection: "column",
                                        position: "absolute",
                                        top: -5,
                                        left: 0,
                                        width: "100%",
                                        height: "fit-content",
                                        zIndex: 10,
                                    }}
                                >
                                    {showDepartments &&
                                        (departmentsSearchMutation.isPending ? (
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    textAlign: "center",
                                                    py: "12px",
                                                    border: `1px solid ${Colors.light}`,
                                                    background: Colors.paper,
                                                }}
                                            >
                                                <CircularProgress size="sm" />
                                            </Box>
                                        ) : departmentsSearchMutation.data
                                              .length === 0 ? (
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    textAlign: "center",
                                                    py: "12px",
                                                    border: `1px solid ${Colors.light}`,
                                                    background: Colors.paper,
                                                }}
                                            >
                                                Немає підходящого відділення
                                            </Box>
                                        ) : (
                                            departmentsSearchMutation.data.map(
                                                (departments: any) => {
                                                    return (
                                                        <Box
                                                            key={
                                                                departments.Description
                                                            }
                                                            onMouseEnter={() => {
                                                                setSelected(
                                                                    departments.Description
                                                                )
                                                            }}
                                                            onMouseLeave={() => {
                                                                setSelected("")
                                                            }}
                                                            sx={{
                                                                width: "100%",
                                                                textAlign:
                                                                    "center",
                                                                py: "12px",
                                                                border: `1px solid ${Colors.light}`,
                                                                background:
                                                                    selected ===
                                                                    departments.Description
                                                                        ? Colors.dark
                                                                        : Colors.paper,
                                                                color:
                                                                    selected ===
                                                                    departments.Description
                                                                        ? Colors.paper
                                                                        : Colors.black,
                                                                cursor: "pointer",
                                                            }}
                                                            onMouseDown={() => {
                                                                setDeliveryDepartment(
                                                                    departments.Description
                                                                )
                                                            }}
                                                        >
                                                            {
                                                                departments.Description
                                                            }
                                                        </Box>
                                                    )
                                                }
                                            )
                                        ))}
                                </Grid>
                            </Box>
                        </Box>
                        {deliveryDepartment !== "" && (
                            <Box
                                onClick={() => {
                                    setActive(steps.payment)
                                }}
                                sx={{
                                    background: Colors.neutral,
                                    color: Colors.white,
                                    borderRadius: "15px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "16.94px",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    py: "14px",
                                    px: "38px",
                                    width: "fit-content",
                                    height: "fit-content",
                                }}
                            >
                                Далі
                            </Box>
                        )}
                    </Grid>
                )}

                {deliveryOption === 'Самовивіз з магазину "Choice"' && (
                    <Box
                        onClick={() => {
                            setActive(steps.payment)
                        }}
                        sx={{
                            background: Colors.neutral,
                            color: Colors.white,
                            borderRadius: "15px",
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "16.94px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            py: "14px",
                            px: "38px",
                            width: "fit-content",
                            height: "fit-content",
                        }}
                    >
                        Далі
                    </Box>
                )}
            </Grid>
        </>
    )
}
const OrderPayment = ({ active, setActive, steps }: any) => {
    return <></>
}

const OrderCityOptions = ({ cityQuery, option, setOption }: any) => {
    const value1 = 'Самовивіз з магазину "Choice"'
    const value2 = "Доставка курʼєром в Черкасах"
    const value3 = "Доставка у відділення “Нова пошта”"
    const value4 = "Доставка курʼєром по адресі “Нова пошта”"
    const value5 = "Доставка у відділення “Укр Пошта”"

    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "12px",
                }}
            >
                <Box
                    sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "19.36px",
                    }}
                >
                    Спосіб доставки
                </Box>
                {cityQuery === "м. Черкаси, Черкаська обл." ? (
                    <>
                        <RadioGroup name="radio-buttons-group">
                            <Radio
                                checked={value1 === option ? true : false}
                                onClick={(e: any) => {
                                    setOption(e.target.value)
                                }}
                                value={value1}
                                label='Самовивіз з магазину "Choice"'
                                size="sm"
                                sx={{ color: Colors.dark }}
                            />
                            <Box
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "14.52px",
                                    color: Colors.grey,
                                    py: "6px",
                                }}
                            >
                                Заберіть товар в найближчій точці видачі
                            </Box>
                            <Radio
                                checked={value2 === option ? true : false}
                                onClick={(e: any) => {
                                    setOption(e.target.value)
                                }}
                                value={value2}
                                label="Доставка курʼєром в Черкасах"
                                size="sm"
                            />
                            <Box
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "14.52px",
                                    color: Colors.grey,
                                    py: "6px",
                                }}
                            >
                                Вартість доставки: 50 грн, сума замовлення від
                                1000грн - доставка БЕЗКОШТОВНО
                            </Box>
                        </RadioGroup>
                    </>
                ) : (
                    <>
                        <RadioGroup name="radio-buttons-group">
                            <Radio
                                checked={value3 === option ? true : false}
                                onClick={(e: any) => {
                                    setOption(e.target.value)
                                }}
                                value={value3}
                                label={value3}
                                size="sm"
                                sx={{ color: Colors.dark }}
                            />
                            <Box
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "14.52px",
                                    color: Colors.grey,
                                    py: "6px",
                                }}
                            >
                                Доставка по предоплаті 150 грн.
                            </Box>
                            <Radio
                                checked={value4 === option ? true : false}
                                onClick={(e: any) => {
                                    setOption(e.target.value)
                                }}
                                value={value4}
                                label={value4}
                                size="sm"
                            />
                            <Box
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "14.52px",
                                    color: Colors.grey,
                                    py: "6px",
                                }}
                            >
                                Доставка по предоплаті 150 грн.
                            </Box>
                            <Radio
                                checked={value5 === option ? true : false}
                                onClick={(e: any) => {
                                    setOption(e.target.value)
                                }}
                                value={value5}
                                label={value5}
                                size="sm"
                            />
                            <Box
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "14.52px",
                                    color: Colors.grey,
                                    py: "6px",
                                }}
                            >
                                Доставка по предоплаті 100 грн.
                            </Box>
                        </RadioGroup>
                    </>
                )}
            </Grid>
        </>
    )
}

const Order = () => {
    const steps = {
        cradentials: "Cradentials",
        delivery: "Delivery",
        payment: "Payment",
    }
    const [active, setActive] = useState(steps.cradentials)
    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState("+380")
    const [cityQuery, setCityQuery] = useState("")
    const [shortQuery, setShortQuery] = useState("")
    const [deliveryOption, setDeliveryOption] = useState("")
    const [deliveryLocale, setDeliveryLocale] = useState("")
    const [deliveryDepartment, setDeliveryDepartment] = useState("")
    const cart = useSelector(getCart)

    const citySearchMutation = useMutation({
        mutationKey: ["/orderCities"],
        mutationFn: (query: string) => getNovaPoshtaCities(query),
    })

    const departmentsSearchMutation = useMutation({
        mutationKey: ["/orderDepartments"],
        mutationFn: () =>
            getNovaPoshtaDepartment(shortQuery, deliveryDepartment),
    })

    useEffect(() => {
        TestAxiosReq()
    }, [])

    useEffect(() => {
        citySearchMutation.mutate(cityQuery)
        setDeliveryOption("")
        setDeliveryLocale("")
    }, [cityQuery])

    useEffect(() => {
        departmentsSearchMutation.mutate()
    }, [deliveryDepartment])

    return (
        <>
            <OrderNav />
            <Box
                sx={{
                    width: "100%",
                    minHeight: "70svh",
                    background: Colors.white,
                }}
            >
                <Grid
                    container
                    sx={{
                        width: { xl: 1440, lg: 1368, xs: 360 },
                        margin: "0 auto",
                        flexDirection: "column",
                        py: "38px",
                        rowGap: "17px",
                    }}
                >
                    <Box
                        sx={{
                            color: Colors.dark,
                            fontSize: "32px",
                            fontWeight: 600,
                            lineHeight: "38.73px",
                        }}
                    >
                        Оформлення замовлення
                    </Box>
                    <Grid
                        container
                        sx={{
                            columnGap: "17px",
                            flexDirection: { xs: "column", lg: "row" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                background: Colors.paper,
                                borderRadius: "15px",
                                flex: { xs: "none", lg: "5 1 0" },
                                p: "46px 34px",
                                rowGap: "19px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: "14px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight:
                                            active === steps.cradentials
                                                ? 600
                                                : 500,
                                        lineHeight: "14.52px",
                                        color:
                                            active === steps.cradentials
                                                ? Colors.maxDark
                                                : userPhone !== "" &&
                                                  userName !== ""
                                                ? Colors.maxDark
                                                : Colors.grey,
                                        border: `1px solid ${
                                            active === steps.cradentials
                                                ? Colors.maxDark
                                                : userPhone !== "" &&
                                                  userName !== ""
                                                ? Colors.maxDark
                                                : Colors.grey
                                        }`,
                                        borderRadius: "100%",
                                        background:
                                            active !== steps.cradentials &&
                                            userPhone !== "" &&
                                            userName !== ""
                                                ? Colors.maxDark
                                                : "none",
                                        width: "24px",
                                        height: "24px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    1
                                </Box>

                                <Box
                                    sx={{
                                        color:
                                            active === steps.cradentials
                                                ? Colors.maxDark
                                                : userPhone !== "" &&
                                                  userName !== ""
                                                ? Colors.maxDark
                                                : Colors.grey,
                                        fontSize: "18px",
                                        fontWeight:
                                            active === steps.cradentials
                                                ? 600
                                                : userPhone !== "" &&
                                                  userName !== ""
                                                ? 600
                                                : 500,
                                        lineHeight: "21.78px",
                                    }}
                                >
                                    Ваші дані
                                </Box>
                            </Box>
                            {active === steps.cradentials && (
                                <OrderCradentials
                                    active={active}
                                    setActive={setActive}
                                    steps={steps}
                                    userName={userName}
                                    setUserName={setUserName}
                                    userPhone={userPhone}
                                    setUserPhone={setUserPhone}
                                />
                            )}
                            {active !== steps.cradentials &&
                                userName !== "" &&
                                userPhone !== "" && (
                                    <Grid
                                        container
                                        sx={{
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: Colors.grey,
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                lineHeight: "16.94px",
                                            }}
                                        >
                                            {userName}, {userPhone}
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                setActive(steps.cradentials)
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
                                                    textDecoration: "underline",

                                                    fontSize: "12px",
                                                    fontWeight: 400,
                                                    lineHeight: "14.52px",
                                                }}
                                            >
                                                Змінити
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: "14px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight:
                                            active === steps.delivery ||
                                            active === steps.payment
                                                ? 600
                                                : 500,
                                        lineHeight: "14.52px",
                                        color:
                                            active === steps.delivery ||
                                            active === steps.payment
                                                ? Colors.maxDark
                                                : Colors.grey,
                                        border: `1px solid ${
                                            active === steps.delivery ||
                                            active === steps.payment
                                                ? Colors.maxDark
                                                : Colors.grey
                                        }`,
                                        background:
                                            active === steps.payment
                                                ? Colors.maxDark
                                                : "none",
                                        borderRadius: "100%",
                                        width: "24px",
                                        height: "24px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    2
                                </Box>
                                <Box
                                    sx={{
                                        color:
                                            active === steps.delivery ||
                                            active === steps.payment
                                                ? Colors.maxDark
                                                : Colors.grey,
                                        fontSize: "18px",
                                        fontWeight:
                                            active === steps.delivery ||
                                            active === steps.payment
                                                ? 600
                                                : 500,
                                        lineHeight: "21.78px",
                                    }}
                                >
                                    Доставка
                                </Box>
                            </Box>
                            {active === steps.delivery && (
                                <OrderDelivery
                                    cityQuery={cityQuery}
                                    setCityQuery={setCityQuery}
                                    citySearchMutation={citySearchMutation}
                                    steps={steps}
                                    active={active}
                                    setActive={setActive}
                                    deliveryOption={deliveryOption}
                                    setDeliveryOption={setDeliveryOption}
                                    deliveryLocale={deliveryLocale}
                                    setDeliveryLocale={setDeliveryLocale}
                                    deliveryDepartment={deliveryDepartment}
                                    setDeliveryDepartment={
                                        setDeliveryDepartment
                                    }
                                    departmentsSearchMutation={
                                        departmentsSearchMutation
                                    }
                                    shortQuery={shortQuery}
                                    setShortQuery={setShortQuery}
                                />
                            )}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: "14px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight:
                                            active === steps.payment
                                                ? 600
                                                : 500,
                                        lineHeight: "14.52px",
                                        color:
                                            active === steps.payment
                                                ? Colors.maxDark
                                                : Colors.grey,
                                        border: `1px solid ${
                                            active === steps.payment
                                                ? Colors.maxDark
                                                : Colors.grey
                                        }`,
                                        borderRadius: "100%",
                                        width: "24px",
                                        height: "24px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    3
                                </Box>
                                <Box
                                    sx={{
                                        color:
                                            active === steps.payment
                                                ? Colors.maxDark
                                                : Colors.grey,
                                        fontSize: "18px",
                                        fontWeight:
                                            active === steps.payment
                                                ? 600
                                                : 500,
                                        lineHeight: "21.78px",
                                    }}
                                >
                                    Оплата
                                </Box>
                            </Box>
                            {active === steps.payment && (
                                <Box>
                                    Завершіть замовлення і з вами зв'яжеться
                                    менеджер для уточнення данних
                                </Box>
                            )}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                background: Colors.paper,
                                borderRadius: "15px",
                                flex: { xs: "none", lg: "3 1 0" },
                                p: "46px 34px",
                                rowGap: "20px",
                                maxHeight: "fit-content",
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29.05px",
                                    color: Colors.dark,
                                }}
                            >
                                Склад замовлення
                            </Box>
                            <Box
                                sx={{
                                    maxHeight: "200px",
                                    overflowY: "scroll",
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: "20px",
                                    borderBottom: `2px solid ${Colors.white}`,
                                    pb: "30px",
                                }}
                            >
                                {cart.map((item: any) => (
                                    <Grid container sx={{ columnGap: "13px" }}>
                                        <Box
                                            sx={{
                                                width: { xs: 80 },
                                                height: { xs: 80 },
                                                overflow: "hidden",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: "15px",
                                                flex: "1 1 0",
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
                                                flex: "2.5 1 0",
                                                pr: "25px",
                                                justifyContent: "center",
                                                rowGap: "9px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    textWrap: "wrap",
                                                    color: Colors.maxDark,
                                                    fontSize: "14px",
                                                    fontWeight: 600,
                                                    lineHeight: "16.94px",
                                                }}
                                            >
                                                {item.title}
                                            </Box>
                                            <Box
                                                sx={{
                                                    textWrap: "wrap",
                                                    color: Colors.dark,
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    lineHeight: "24.2px",
                                                }}
                                            >
                                                {parseInt(item.price) +
                                                    " " +
                                                    "₴"}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Box>
                            <Box
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "29.05px",
                                    color: Colors.dark,
                                }}
                            >
                                Разом до сплати
                            </Box>
                            <Grid
                                container
                                sx={{
                                    justifyContent: "space-between",
                                    borderBottom: `2px solid ${Colors.white}`,
                                    pb: "13px",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        lineHeight: "16.94px",
                                    }}
                                >
                                    {cart.length} товарів на суму
                                </Box>
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        lineHeight: "21.78px",
                                    }}
                                >
                                    {cart.reduce(
                                        (acc: any, item: any) =>
                                            acc + parseInt(item.price),
                                        0
                                    ) +
                                        " " +
                                        "₴"}
                                </Box>
                            </Grid>
                            {deliveryOption ===
                                "Доставка курʼєром в Черкасах" &&
                                cart.reduce(
                                    (acc: any, item: any) =>
                                        acc + parseInt(item.price),
                                    0
                                ) < 1000 && (
                                    <Grid
                                        container
                                        sx={{
                                            justifyContent: "space-between",
                                            borderBottom: `2px solid ${Colors.white}`,
                                            pb: "13px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: Colors.grey,
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                lineHeight: "16.94px",
                                            }}
                                        >
                                            Доставка курʼєром в Черкасах
                                        </Box>
                                        <Box
                                            sx={{
                                                color: Colors.grey,
                                                fontSize: "18px",
                                                fontWeight: 600,
                                                lineHeight: "21.78px",
                                            }}
                                        >
                                            50 ₴
                                        </Box>
                                    </Grid>
                                )}
                            <Grid
                                container
                                sx={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: Colors.grey,
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        lineHeight: "16.94px",
                                    }}
                                >
                                    Разом до сплати
                                </Box>
                                <Box
                                    sx={{
                                        color: Colors.dark,
                                        fontSize: "32px",
                                        fontWeight: 800,
                                        lineHeight: "38.73px",
                                    }}
                                >
                                    {cart.reduce(
                                        (acc: any, item: any) =>
                                            acc + parseInt(item.price),
                                        0
                                    ) +
                                        (deliveryOption ===
                                            "Доставка курʼєром в Черкасах" &&
                                        cart.reduce(
                                            (acc: any, item: any) =>
                                                acc + parseInt(item.price),
                                            0
                                        ) < 1000
                                            ? 50
                                            : 0) +
                                        " " +
                                        "₴"}
                                </Box>
                            </Grid>
                            {active === steps.payment && (
                                <Box
                                    sx={{
                                        background: Colors.neutral,
                                        color: Colors.white,
                                        borderRadius: "15px",
                                        fontSize: { xs: "14px", lg: "18px" },
                                        fontWeight: { xs: 400, lg: 600 },
                                        lineHeight: "16.94px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        py: { xs: "16px", lg: "24px" },
                                        px: { xs: "16px", lg: "38px" },
                                        height: "fit-content",
                                        ":hover": {
                                            background: Colors.lightGreen,
                                        },
                                    }}
                                >
                                    Замовлення підтверджую
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Order
