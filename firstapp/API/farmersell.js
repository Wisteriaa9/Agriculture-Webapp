const exp = require("express");
const userapp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


userapp.use(exp.json())

userapp.post(
  "/fsell",
  expressAsyncHandler(async (req, res) => {
    const fsellcollectionobj = req.app.get("fsellcollectionobj");
    const newsell = req.body;
    await fsellcollectionobj.insertOne(newsell);
    res.status(201).send({message:"New Sell Request registered"});
})
);


userapp.get("/fsell", expressAsyncHandler(async(req,res)=>{
    const fsellcollectionobj=req.app.get("fsellcollectionobj")
    const fsell=await fsellcollectionobj.find().toArray()
    res.send({message:"fsell list",payload:fsell})
}));



userapp.get('/fsell/:fsid',expressAsyncHandler(async(req,res)=>{
    const id= req.params.fsid;
    const fsellcollectionobj=req.app.get("fsellcollectionobj")
    const prod= await fsellcollectionobj.find({username:id}).toArray()
    // const prod= await fsellcollectionobj.findById(req.body.cpu_id)     // use this if you want to pass out cpuid in data
    res.send({message:"product",payload:prod})
}))


userapp.put('/fsell/:fsid',expressAsyncHandler(async(req,res)=>{
    const tid= req.params.fsid;
    const fsellcollectionobj=req.app.get("fsellcollectionobj")
    const modifieduser=req.body
    await fsellcollectionobj.updateOne({username:tid},{$set:{...modifieduser}})
    const allfsell=await fsellcollectionobj.find().toArray()
    res.send({message:"modified",payload:allfsell})
}))


userapp.delete('/fsell/:fsid',expressAsyncHandler((req,res)=>{
    const tid=(req.params.fsid);
    const fsellcollectionobj=req.app.get("fsellcollectionobj");
    fsellcollectionobj.deleteOne({username:tid});
    res.send({message:`Deleted product with id ${tid}`});
}))

module.exports = userapp;