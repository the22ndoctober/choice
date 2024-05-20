import mongoose, { Schema, models } from "mongoose"

const orderSchema = new mongoose.Schema({
    id: String,
    createdAt: Date,
    updatedAt: Date,
    status: String,
    cart: [
        {
            product_id: String,
            store_id: String,
            title: String,
            img_path: String,
            amount: Number,
            price: String,
            currency: String,
        },
    ],
})

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    createdAt: Date,
    updatedAt: Date,
    orders: [orderSchema],
})

const User = models?.User || mongoose.model("User", userSchema)
export default User
