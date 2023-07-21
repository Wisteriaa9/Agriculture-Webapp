const exp = require("express");
const userapp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


userapp.use(exp.json())

userapp.post(
  "/mfe",
  expressAsyncHandler(async (req, res) => {
    const mfecollectionobj = req.app.get("mfecollectionobj");
    const newmfe = req.body;

    const isexisted=await mfecollectionobj.findOne({mfe_id:newuser.mfe_id})
    if(isexisted!=null){
        res.status(200).send({message:"mfe already registered in database"})
    }
    else{
        await mfecollectionobj.insertOne(newmfe);
        res.status(201).send({message:"New Product registered"});
    }
  })
);


userapp.get("/mfe", expressAsyncHandler(async(req,res)=>{
    const mfecollectionobj=req.app.get("mfecollectionobj")
    const mfe=await mfecollectionobj.find().toArray()
    res.send({message:"mfe list",payload:mfe})
}));



userapp.get('/mfe/:cid',expressAsyncHandler(async(req,res)=>{
    const id= req.params.cid;
    const mfecollectionobj=req.app.get("mfecollectionobj")
    const mfe= await mfecollectionobj.find({mfe_id:id}).toArray()
    res.send({message:"product",payload:mfe})
}))


userapp.put('/mfe/:mid',expressAsyncHandler(async(req,res)=>{
    const tid= req.params.mid;
    const mfecollectionobj=req.app.get("mfecollectionobj")
    const modifieduser=req.body
    await mfecollectionobj.updateOne({mfe_id:tid},{$set:{...modifieduser}})
    const allmfe=await mfecollectionobj.find().toArray()
    res.send({message:"modified",payload:allmfe})
}))


userapp.delete('/mfe/:cid',expressAsyncHandler((req,res)=>{
    const tid=(req.params.cid);
    const mfecollectionobj=req.app.get("mfecollectionobj");
    mfecollectionobj.deleteOne({mfe_id:tid});
    res.send({message:`Deleted product with id ${tid}`});
}))

module.exports = userapp;