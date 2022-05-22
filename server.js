const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static("public"));

app.get("/",function(request,response){
  response.sendFile(__dirname+"/index.html");
});

app.post("/",function(request,response){
  var mass = parseFloat(request.body.mass);
  var height = parseFloat(request.body.height);
  var BMI_ = Math.round(mass*1000/(height*height))/100;
  var bmi = String(BMI_);
  if(0<=BMI_<18.5){
    var state = "UnderWeight"
  }
else if(BMI_<25){
  var state = "Healthy Weight"
}
else if(BMI_<30){
  var state = "OverWeight"
}
else{
  var state = "Obesity"
}



  response.send("<h1 style = 'width: 80%; margin:auto;text-align:center;'>Your BMI 😃</h1></br><p style = 'margin:1rem;'> Your BMI is: "+ bmi+"</p><p style = 'margin:1rem;'> Your BMI Status: "+state+"</p>");
});

app.listen(3000,function(){
  console.log("Server is connected at port 3000");
  console.log(__dirname)
});
