import { Colors } from "@/client"

export const SearchStyles = {
    container: {
        background: { sm: Colors.maxDark },
        width: "100%",
    },
    wrapper: {
        width: { xl: 1440, lg: 1140 },
        margin: "0 auto",
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
        width: "auto",
        pr: "20px",
        color: "#fff",
        alignItems: "center",
    },
}
