const { Router } = require("express");
var express = require("express");
var router = express.Router()
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.json()


router.get("/s",function(req,res){
    res.json([{dato:"dato1",dato2:"dato1"},{dato:"dato2",dato2:"dato2"},{dato:"dato3",dato2:"dato3"},{dato:"dato4",dato2:"dato4"}])
    console.log("se llamo a la llamada")
})
router.post("/data",urlencodedParser,(req,res)=>{  
console.log(req.body)
})
module.exports=router;