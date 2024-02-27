import Product from "@/app/components/main/products/Product"

export default function ProductPage({ params }: any) {
    return (
        <>
            <Product params={params} />
        </>
    )
}
