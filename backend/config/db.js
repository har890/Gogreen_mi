import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://madeshharshini777:harshami@cluster0.t5p5uh0.mongodb.net/gogreen').then(()=>console.log("DB Connected"));
}