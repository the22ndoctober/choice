import Product from "@/app/components/main/products/Product"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"

// export async function generateStaticParams() {
//     const pages: any = await fetch("http://localhost:3002/static").then((res) =>
//         res.json()
//     )

//     console.log(pages)

//     return [{ product: "1" }]
// }

export default function ProductPage({ params }: any) {
    console.log(params)
    return (
        <>
            <Navigation />
            <Search params={params.product} />
            <Product params={params} />
        </>
    )
}
