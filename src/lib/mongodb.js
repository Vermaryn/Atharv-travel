import mongoose  from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nextjs-mongodb";

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI");
}

 let cached = global.mongoose;
 if(!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
 }

 export async function connectDB() {
    if(cached.conn){
        console.log("✅ MongoDB Already Connected");
        return cached.conn;
    } 
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI);
    }

    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected Successfully");
    return cached.conn;
 }