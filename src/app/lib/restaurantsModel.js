import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    city: String,
    address: String,
    contact: String,    
})
mongoose.models = {}
export const restaurantModel = mongoose.models.restaurantModel || mongoose.model("restaurants", restaurantSchema)