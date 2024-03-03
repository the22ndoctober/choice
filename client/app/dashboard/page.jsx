import UserInfo from "@/app/components/login/UserInfo"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"

export default function Dashboard() {
    return (
        <>
            <Navigation />
            <Search />
            <UserInfo />
        </>
    )
}
