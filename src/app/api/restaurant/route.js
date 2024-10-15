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