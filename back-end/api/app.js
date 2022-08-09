var router = require("./router/router.js");
var express = require("express");
var app = express();
app.use(router)
app.set("port",process.env.PORT||8080);
app.listen(app.get("port"),function(){
    console.log("el servidor esta en el puerto " + app.get("port"))
})

