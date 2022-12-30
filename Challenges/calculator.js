const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//for calculator
app.get("/",function(req,res){
    res.sendFile(__dirname +"/calculator.html");
});

app.post("/",function(req,res){ 
var num1=Number(req.body.n1);
var num2=Number(req.body.n2);
var result=num1+num2;
res.send("The Result of calculation is "+ result);
});

//for bmi
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + '/bmiCalculator.html');
})
app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi= weight/(height*height);

    res.send("Your Bmi is : "+ bmi)

})

app.listen(4100,function(){
    console.log("server is running on port 4100.");
})