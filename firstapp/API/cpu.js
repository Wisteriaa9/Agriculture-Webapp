const exp = require("express");
const userapp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


userapp.use(exp.json())

userapp.post(
  "/cpu",
  expressAsyncHandler(async (req, res) => {
    const cpucollectionobj = req.app.get("cpucollectionobj");
    const newcpu = req.body;
    const isexisted=await cpucollectionobj.findOne({cpu_id:newcpu.cpu_id})
    if(isexisted!=null){
        res.status(200).send({message:"CPU already registered in database"})
    }
    else{
        await cpucollectionobj.insertOne(newcpu);
        res.status(201).send({message:"New Product registered"});
    }
  })
);


userapp.post("/cpu-ok", expressAsyncHandler(async(req,res)=>{
    const newcpu = req.body;
    if(newcpu.ok_farmer ==true)
    {
        const cbj = req.app.get("cpucollectionobj");
        const temp1= newcpu.f_username;
        const temp2= newcpu.f_productId;
        const fbj= req.app.get("fsellcollectionobj");
        const isexisted= await fbj.findOne({username:temp1, productId:temp2})
        if(isexisted!=null){
            fbj.deleteOne({username:temp1, productId:temp2})
            cbj.updateOne({cpu_id},{$set:{totalCapacity: (parseInt(totalCapacity)-=parseInt(fbj.quantity)).toString()}})
            return res.send({message:`Deleted sell request`});
        }
    }
}));


userapp.get("/cpu", expressAsyncHandler(async(req,res)=>{
    const cpucollectionobj=req.app.get("cpucollectionobj")
    const cpu=await cpucollectionobj.find().toArray()
    res.send({message:"cpu list",payload:cpu})
}));



userapp.get('/cpu/:cid',expressAsyncHandler(async(req,res)=>{
    const id= req.params.cid;
    const cpucollectionobj=req.app.get("cpucollectionobj")
    const cpu= await cpucollectionobj.find({cpu_id:id}).toArray()
    res.send({message:"product",payload:cpu})
}))


userapp.put('/cpu/:cid',expressAsyncHandler(async(req,res)=>{
    const tid= req.params.cid;
    const cpucollectionobj=req.app.get("cpucollectionobj")
    const modifieduser=req.body
    await cpucollectionobj.updateOne({cpu_id:tid},{$set:{...modifieduser}})
    const allcpu=await cpucollectionobj.find().toArray()
    res.send({message:"modified",payload:allcpu})
}))


userapp.delete('/cpu/:cid',expressAsyncHandler((req,res)=>{
    const tid=(req.params.cid);
    const cpucollectionobj=req.app.get("cpucollectionobj");
    cpucollectionobj.deleteOne({cpu_id:tid});
    res.send({message:`Deleted product with id ${tid}`});
}))

module.exports = userapp;