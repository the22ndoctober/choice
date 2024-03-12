import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import Box from "@mui/material/Box"

import SearchIcon from "@mui/icons-material/Search"
import { SearchStyles } from "./styles/styles"

import SearchDropDrown from "./SearchDropDrown"
import { useMutation, useQuery } from "@tanstack/react-query"
import { SearchProducts } from "@/api/test"
import { useState, useEffect } from "react"

const SearchItem = () => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [products, setProducts] = useState([])

    //TANSTACK
    const { data, isLoading } = useQuery({
        queryKey: ["search", "product"],
        queryFn: SearchProducts,
    })

    const SearchCategoriesQuery = useMutation({
        mutationKey: ["search", "categories"],
        mutationFn: SearchProducts,
    })

    //Use Effect

    useEffect(() => {
        if (searchQuery !== "") {
            const filtred = (): any => {
                let result = []

                let start = 0
                const middle = Math.floor(data.products.length / 2)
                let end = data.products.length - 1

                while (end !== middle) {
                    if (result.length > 3) break

                    if (
                        data.products[start].title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    ) {
                        result.push(data.products[start])
                        if (result.length > 3) break
                    }
                    if (
                        data.products[end].title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    ) {
                        result.push(data.products[end])
                        if (result.length > 3) break
                    }

                    start = start + 1
                    end = end - 1
                }
                return result
            }

            setProducts(filtred())
        }
    }, [searchQuery])

    //STYLED
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        width: "100%",
        "& input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            width: "100%",
            borderRadius: "50px",
            paddingLeft: "20px",
        },
    }))

    const SearchComp = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "auto",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    }))

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    minWidth: { lg: "500px", xl: "780px" },
                }}
            >
                <SearchComp sx={{ ...SearchStyles.search__wrapper }}>
                    <StyledInputBase
                        autoFocus={true}
                        className="search-placeholder"
                        placeholder="Пошук"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }}
                    />

                    <SearchIcon />
                </SearchComp>
                {searchQuery !== "" && (
                    <SearchDropDrown
                        products={products}
                        productsIsLoading={isLoading}
                    />
                )}
            </Box>
        </>
    )
}

export default SearchItem
