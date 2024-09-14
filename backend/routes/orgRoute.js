import express from "express"
import { addProduct,listProduct,removeProduct } from "../controllers/orgController.js"
import multer from "multer"

const orgRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})




orgRouter.post("/add",upload.single("image"),addProduct)
orgRouter.get("/list",listProduct)
orgRouter.post("/remove",removeProduct);

export default orgRouter;