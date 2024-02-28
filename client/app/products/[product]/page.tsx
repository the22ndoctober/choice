import Product from "@/app/components/main/products/Product"

// export async function generateStaticParams() {
//     const pages: any = await fetch("http://localhost:3002/static").then((res) =>
//         res.json()
//     )

//     console.log(pages)

//     return [{ product: "1" }]
// }

export default function ProductPage({ params }: any) {
    return (
        <>
            <Product params={params} />
        </>
    )
}
