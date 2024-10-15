import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
})
mongoose.models = {}
export const restaurantModel = mongoose.models.restaurantModel || mongoose.model("restaurants", restaurantSchema)