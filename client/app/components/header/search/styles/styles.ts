import { Colors } from "@/client"

export const SearchStyles = {
    container: {
        background: { sm: Colors.maxDark },
        width: "100%",
    },
    wrapper: {
        width: { xl: 1440, lg: 1140 },
        margin: "0 auto",
        height: { sm: "69px" },
        alignItems: "center",
        position: { sm: "relative" },
        display: "flex",
        columnGap: "50px",
    },
    catalog__button: {
        background: Colors.dark,
        color: Colors.white,
        textTransform: "none !important",
        pl: { sm: "24px" },
        pr: { sm: "56px" },
        height: "40px",
        fontSize: { sm: "18px" },
        display: "flex",
        columnGap: { sm: "17px" },
        borderRadius: "15px",
    },
    search__wrapper: {
        ml: "0px !important",
        display: "flex",
        background: Colors.neutral,
        direction: "row",
        justifyContent: "space-beetween",
        borderRadius: "15px",
        height: "40px",
        width: "auto",
        pr: "20px",
        color: "#fff",
        alignItems: "center",
    },
}
