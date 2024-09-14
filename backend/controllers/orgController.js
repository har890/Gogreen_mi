import organicModel from "../models/organicModel.js";
import fs from 'fs'


// add products
const addProduct = async(req,res)=>{

    let image_filename=`${req.file.filename}`;

    const organic=new organicModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await organic.save();
        res.json({success:true,message:"Product Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})

    }

}
// all product list
const listProduct=async(req,res)=>{
    try{
        const items=await organicModel.find({});
        res.json({success:true,data:items})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}
// remove item
const removeProduct=async(req,res)=>{
    try{
        const item = await organicModel.findById(req.body.id);
        fs.unlink(`uploads/${item.image}`,()=>{})
        await organicModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product Removed"})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

export {addProduct,listProduct,removeProduct}