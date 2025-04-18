// require('dotenv').config({path: './env'}) // this also works fine

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()















/*
// function connectDB(){}

// connectDB() 
// the above function a valid approach but use iifi for professional approach
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express()
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ",error);
            throw error            
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error
    }
})()
*/