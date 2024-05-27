"use client"

import React, { useState } from "react"

const phoneGoods = [
    // Mobile Accessories
    {
        type: "accessory",
        name: "Phone Case",
        brand: "Generic",
        color: "Black",
        price: 9.99,
    },
    {
        type: "accessory",
        name: "Screen Protector",
        brand: "TechShield",
        compatibleWith: "iPhone 12",
        price: 14.99,
    },
    {
        type: "accessory",
        name: "Wireless Charger",
        brand: "ChargingTech",
        compatibleWith: "Android",
        price: 29.99,
    },
    {
        type: "accessory",
        name: "Bluetooth Headphones",
        brand: "SoundBlast",
        color: "White",
        price: 49.99,
    },
    {
        type: "accessory",
        name: "Portable Power Bank",
        brand: "ChargeUp",
        capacity: "10000mAh",
        price: 34.99,
    },
    {
        type: "accessory",
        name: "Car Phone Mount",
        brand: "DriveSafe",
        compatibility: "Universal",
        price: 19.99,
    },
    {
        type: "accessory",
        name: "USB-C Cable",
        brand: "QuickCharge",
        length: "3ft",
        price: 12.99,
    },
    {
        type: "accessory",
        name: "Wireless Earbuds",
        brand: "AirTunes",
        color: "Black",
        price: 69.99,
    },
    {
        type: "accessory",
        name: "PopSockets Grip",
        brand: "PopGrip",
        design: "Marble",
        price: 14.99,
    },
    {
        type: "accessory",
        name: "Smartphone Camera Lens Kit",
        brand: "ZoomPro",
        compatibility: "Universal",
        price: 39.99,
    },

    // Phones
    {
        type: "phone",
        name: "iPhone 13 Pro",
        brand: "Apple",
        color: "Graphite",
        storage: "256GB",
        price: 999,
    },
    {
        type: "phone",
        name: "Samsung Galaxy S22 Ultra",
        brand: "Samsung",
        color: "Phantom Black",
        storage: "512GB",
        price: 1299,
    },
    {
        type: "phone",
        name: "Google Pixel 6",
        brand: "Google",
        color: "Stormy Black",
        storage: "128GB",
        price: 799,
    },
    {
        type: "phone",
        name: "OnePlus 10 Pro",
        brand: "OnePlus",
        color: "Morning Mist",
        storage: "256GB",
        price: 899,
    },
    {
        type: "phone",
        name: "Xiaomi Mi 12",
        brand: "Xiaomi",
        color: "Celestial Blue",
        storage: "256GB",
        price: 899,
    },
    {
        type: "phone",
        name: "Sony Xperia 1 III",
        brand: "Sony",
        color: "Frosted Black",
        storage: "256GB",
        price: 1099,
    },
    {
        type: "phone",
        name: "Huawei P50 Pro",
        brand: "Huawei",
        color: "Golden Black",
        storage: "256GB",
        price: 1099,
    },
    {
        type: "phone",
        name: "Realme GT 2 Pro",
        brand: "Realme",
        color: "Racing Yellow",
        storage: "256GB",
        price: 799,
    },
    {
        type: "phone",
        name: "Motorola Edge 30 Pro",
        brand: "Motorola",
        color: "Stellar Blue",
        storage: "256GB",
        price: 899,
    },
    {
        type: "phone",
        name: "LG Velvet 3",
        brand: "LG",
        color: "Aurora White",
        storage: "128GB",
        price: 699,
    },

    // Tablets
    {
        type: "tablet",
        name: 'iPad Pro 12.9"',
        brand: "Apple",
        color: "Silver",
        storage: "512GB",
        price: 1099,
    },
    {
        type: "tablet",
        name: "Samsung Galaxy Tab S8+",
        brand: "Samsung",
        color: "Mystic Bronze",
        storage: "256GB",
        price: 899,
    },
    {
        type: "tablet",
        name: "Microsoft Surface Pro 8",
        brand: "Microsoft",
        color: "Platinum",
        storage: "512GB",
        price: 1499,
    },
    {
        type: "tablet",
        name: "Huawei MatePad Pro",
        brand: "Huawei",
        color: "Emerald Green",
        storage: "256GB",
        price: 799,
    },
    {
        type: "tablet",
        name: "Amazon Fire HD 10",
        brand: "Amazon",
        color: "Black",
        storage: "64GB",
        price: 149.99,
    },
    {
        type: "tablet",
        name: "Lenovo Tab P11 Plus",
        brand: "Lenovo",
        color: "Slate Grey",
        storage: "128GB",
        price: 349.99,
    },
    {
        type: "tablet",
        name: "Google Pixel Slate",
        brand: "Google",
        color: "Midnight Blue",
        storage: "256GB",
        price: 899,
    },
    {
        type: "tablet",
        name: "ASUS ZenPad 3S 10",
        brand: "ASUS",
        color: "Titanium Grey",
        storage: "64GB",
        price: 299.99,
    },
    {
        type: "tablet",
        name: "Sony Xperia Z4 Tablet",
        brand: "Sony",
        color: "Black",
        storage: "32GB",
        price: 499.99,
    },
    {
        type: "tablet",
        name: "Xiaomi Mi Pad 5",
        brand: "Xiaomi",
        color: "Pearl White",
        storage: "128GB",
        price: 449.99,
    },
]

const TEST = () => {
    const [query, setQuery] = useState("")

    console.log(results)

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "5px",
                }}
            ></div>
        </div>
    )
}

export default TEST
