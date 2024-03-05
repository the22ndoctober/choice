import React from "react"
import ProductLink from "./ProductLink"

const SubCategory = ({ categoryInfo }: any) => {
    return (
        <>
            {categoryInfo.children ? (
                <SubCategory />
            ) : (
                <ProductLink category_id="" product_id="" product_title="" />
            )}
        </>
    )
}

export default SubCategory
