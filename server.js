const express= require("express");
const mongoose =require("mongoose");
const bodyparser =require("body-parser");
const mongojs=require("mongojs");
const route =require("./route");


const app = express();
const port =3000;

app.use(express.static("public"));

var databaseurl="my_babysitting";
var collections =["userinfo"];

var db = mongojs(databaseurl,collections);

db.on("error",function(error){
	console.log("Database connection error :"+error);
});

app.get("/",function(req,res){
	res.send("welcome to the first page");

});
app.get("/login",function(req,res){
	res.send("welcome to the login pate");

});
app.get("/register",function(req,res){
	res.send("welcome to the register pate");

});
app.get("/dashboard",function(req,res){
	res.send("welcome to the dashboard pate");

});
app.get("/api/alluser",function(req,res){
	db.userinfo.find({},function(error,found){
		if(error){
			console.log("Something wrong with your route");
		}
		else{

			res.json(found);
		
		}
	});
})
















app.listen(port,function(){
	console.log("App is listening the port : "+ port);
});
