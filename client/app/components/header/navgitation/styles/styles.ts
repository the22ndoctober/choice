export const NavStyles = {
    container: {
        width: { sm: "100%" },
        background: "#F9FAFD",
    },
    bodyWrapper: {
        margin: "0 auto",
        width: { xl: 1440, lg: 1140 },
        py: { sm: "19px" },
        display: "flex",
        justifyContent: "space-between",
        direction: { sm: "row" },
        columnGap: { sm: "5%" },
    },
    logoWrapper: {
        width: { sm: "135px" },
        heigth: { sm: "43,91px" },
    },
    buttonsWrapper: {
        alignItems: { sm: "center" },
        width: { sm: "auto" },
        display: "flex",
        direction: "row",
        columnGap: { sm: "30px" },
    },
    buttonWrapper__item: {
        fontFamily: "Inter",
        fontSize: "18px",
        fontWeight: 300,

        letterSpacing: "0em",
        textAlign: "left",
        cursor: "pointer",
    },
    infoWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        width: "auto",
        columnGap: { sm: "20px" },
        alignItems: "center",
    },
}
