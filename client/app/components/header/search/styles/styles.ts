import { Colors } from "@/client"

export const SearchStyles = {
    wrapper: {
        background: { sm: Colors.maxDark },
        px: { sm: "51px" },
        py: { sm: "24px" },
        position: { sm: "relative" },
        display: "flex",
        columnGap: "50px",
    },
    catalog__button: {
        background: Colors.dark,
        color: Colors.white,
        textTransform: "none !important",
        fontSize: { sm: "30px" },
        display: "flex",
        columnGap: { sm: "19px" },
        px: { sm: "22px" },
    },
    search__wrapper: {
        ml: "0px !important",
        display: "flex",
        background: Colors.neutral,
        direction: "row",
        justifyContent: "space-beetween",
        minWidth: "60%",
        pr: "20px",
        color: "#fff",
        alignItems: "center",
    },
}
