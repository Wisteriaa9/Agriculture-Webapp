const exp = require("express");
// const express= require('express');
// const app= express();
const app = exp();

const path = require("path");
// app.use(exp.static(path.join(__dirname, "./build")));

app.listen(3500, () => {
  console.log("http server listening on port no 3500");
});

const mclient = require("mongodb").MongoClient;

mclient
  .connect("mongodb://127.0.0.1")
  .then((dbRef) => {
    const dbobj = dbRef.db("database1");
    const userscollectionobj = dbobj.collection("userscollection");
    app.set("userscollectionobj", userscollectionobj);
    const productscollectionobj = dbobj.collection("productcollection");
    app.set("productscollectionobj", productscollectionobj);
    const fsellcollectionobj = dbobj.collection("farmersellcollection");
    app.set("fsellcollectionobj", fsellcollectionobj);
    const cpucollectionobj = dbobj.collection("cpucollection");
    app.set("cpucollectionobj", cpucollectionobj);
    const mfecollectionobj = dbobj.collection("mfecollection");
    app.set("mfecollectionobj", mfecollectionobj);
    const adccollectionobj = dbobj.collection("adccollection");
    app.set("adccollectionobj", adccollectionobj);
    const cpccollectionobj = dbobj.collection("cpccollection");
    app.set("cpccollectionobj", cpccollectionobj);
    app.set("dbobj", dbobj);
    console.log("DBconnection is successful");
  })
  .catch((err) => console.log("DBerror is", err));

// let users=[]

// const userapp = require("./API/userapi");
// app.use("/user-api", userapp);

app.use('/',require('./API/product'));
app.use('/',require('./API/mfe'));
app.use('/',require('./API/farmersell'));
app.use('/',require('./API/cpu'));
app.use('/',require('./API/cpc'));
app.use('/',require('./API/adcd'));

app.use(exp.json());

const invalidpathmiddleware = (req, res, next) => {
  res.send({ message: "invalid path" });
};
app.use("*", invalidpathmiddleware);

const errormiddleware = (error, req, res, next) => {
  res.send({ message: error.message });
};
app.use(errormiddleware);