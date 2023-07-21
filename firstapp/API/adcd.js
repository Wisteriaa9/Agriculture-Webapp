const exp = require("express");
const userapp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


userapp.use(exp.json())

userapp.post(
  "/adc",
  expressAsyncHandler(async (req, res) => {
    const adccollectionobj = req.app.get("adccollectionobj");
    const newadc = req.body;

    const isexisted=await adccollectionobj.findOne({adc_id:newuser.adc_id})
    if(isexisted!=null){
        res.status(200).send({message:"adc already registered in database"})
    }
    else{
        await adccollectionobj.insertOne(newadc);
        res.status(201).send({message:"New Product registered"});
    }
  })
);


userapp.get("/adc", expressAsyncHandler(async(req,res)=>{
    const adccollectionobj=req.app.get("adccollectionobj")
    const adc=await adccollectionobj.find().toArray()
    res.send({message:"adc list",payload:adc})
}));



userapp.get('/adc/:cid',expressAsyncHandler(async(req,res)=>{
    const id= req.params.cid;
    const adccollectionobj=req.app.get("adccollectionobj")
    const adc= await adccollectionobj.find({adc_id:id}).toArray()
    res.send({message:"product",payload:adc})
}))


userapp.put('/adc/:mid',expressAsyncHandler(async(req,res)=>{
    const tid= req.params.mid;
    const adccollectionobj=req.app.get("adccollectionobj")
    const modifieduser=req.body
    await adccollectionobj.updateOne({adc_id:tid},{$set:{...modifieduser}})
    const alladc=await adccollectionobj.find().toArray()
    res.send({message:"modified",payload:alladc})
}))


userapp.delete('/adc/:cid',expressAsyncHandler((req,res)=>{
    const tid=(req.params.cid);
    const adccollectionobj=req.app.get("adccollectionobj");
    adccollectionobj.deleteOne({adc_id:tid});
    res.send({message:`Deleted product with id ${tid}`});
}))

module.exports = userapp;