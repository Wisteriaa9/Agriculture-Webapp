const exp = require("express");
const userapp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


userapp.use(exp.json())

userapp.post(
  "/cpu-prod",
  expressAsyncHandler(async (req, res) => {
    const productscollectionobj = req.app.get("productscollectionobj");
    const newuser = req.body;

    const isexisted=await productscollectionobj.findOne({cpu_id:newuser.cpu_id})
    if(isexisted!=null){
        res.status(200).send({message:"Product details already exists cpu_db"})
    }
    else{
        await productscollectionobj.insertOne(newuser);
        res.status(201).send({message:"New Product registered"});
    }
  })
);


userapp.get("/cpu-prod", expressAsyncHandler(async(req,res)=>{
    const productscollectionobj=req.app.get("productscollectionobj")
    const products=await productscollectionobj.find().toArray()
    res.send({message:"products list",payload:products})
}));



userapp.get('/cpu-prod/:pid',expressAsyncHandler(async(req,res)=>{
    const id= req.params.pid;
    const productscollectionobj=req.app.get("productscollectionobj")
    const prod= await productscollectionobj.find({productId:id}).toArray();
    res.send({message:"product",payload:prod})
}))


userapp.put('/cpu-prod/:pid',expressAsyncHandler(async(req,res)=>{
    const tid= req.params.pid;
    const productscollectionobj=req.app.get("productscollectionobj")
    const modifieduser=req.body
    await productscollectionobj.updateOne({productId:tid},{$set:{...modifieduser}})
    const allproducts=await productscollectionobj.find().toArray()
    res.send({message:"modified",payload:allproducts})
}))


userapp.delete('/cpu-prod/:pid',expressAsyncHandler((req,res)=>{
    const tid=(req.params.pid);
    const productscollectionobj=req.app.get("productscollectionobj");
    productscollectionobj.deleteOne({productId:tid});
    res.send({message:`Deleted product with id ${tid}`});
}))

module.exports = userapp;