const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const cors=require("cors");

const cors=require("cors");
 const corsOptions ={
       origin:'*', 
       credentials:true, //access-control-allow-credentials:true
        optionSuccessStatus:200,
 }

 app.use(cors(corsOptions)) 

app.use(cors());
app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})
app.listen(port);

console.log("server started");