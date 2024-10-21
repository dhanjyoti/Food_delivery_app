import { connectionStr } from "@/app/lib/db";
import { restaurantModel } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr, {useNewUrlParser:true})
    const data = await restaurantModel.find()
    console.log(data)
    return NextResponse.json({result:data})
}

export async function POST(request){
    let payload = await request.json();
    await mongoose.connect(connectionStr, {useNewUrlParser:true})
    const restaurant = new restaurantModel(payload)
    const result = await restaurant.save();
    return NextResponse.json({result, success:true})
}