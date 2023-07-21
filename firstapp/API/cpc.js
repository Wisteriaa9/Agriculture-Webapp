const exp = require("express");
const userapp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


userapp.use(exp.json())

userapp.post(
  "/cpc",
  expressAsyncHandler(async (req, res) => {
    const cpccollectionobj = req.app.get("cpccollectionobj");
    const newcpc = req.body;

    const isexisted=await cpccollectionobj.findOne({cpc_id:newuser.cpc_id})
    if(isexisted!=null){
        res.status(200).send({message:"cpc already registered in database"})
    }
    else{
        await cpccollectionobj.insertOne(newcpc);
        res.status(201).send({message:"New Product registered"});
    }
  })
);


userapp.get("/cpc", expressAsyncHandler(async(req,res)=>{
    const cpccollectionobj=req.app.get("cpccollectionobj")
    const cpc=await cpccollectionobj.find().toArray()
    res.send({message:"cpc list",payload:cpc})
}));



userapp.get('/cpc/:cid',expressAsyncHandler(async(req,res)=>{
    const id= req.params.cid;
    const cpccollectionobj=req.app.get("cpccollectionobj")
    const cpc= await cpccollectionobj.find({cpc_id:id}).toArray()
    res.send({message:"product",payload:cpc})
}))


userapp.put('/cpc/:mid',expressAsyncHandler(async(req,res)=>{
    const tid= req.params.mid;
    const cpccollectionobj=req.app.get("cpccollectionobj")
    const modifieduser=req.body
    await cpccollectionobj.updateOne({cpc_id:tid},{$set:{...modifieduser}})
    const allcpc=await cpccollectionobj.find().toArray()
    res.send({message:"modified",payload:allcpc})
}))


userapp.delete('/cpc/:cid',expressAsyncHandler((req,res)=>{
    const tid=(req.params.cid);
    const cpccollectionobj=req.app.get("cpccollectionobj");
    cpccollectionobj.deleteOne({cpc_id:tid});
    res.send({message:`Deleted product with id ${tid}`});
}))

module.exports = userapp;