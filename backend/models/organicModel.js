import mongoose from "mongoose";

const organicSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true},
})

const organicModel = mongoose.models.organic || mongoose.model("organic",organicSchema);

export default organicModel;