const express =require("express");
const mongojs =require("mongojs");

const app=express();
const PORT=3000;

app.use(express.static("public"));

var databaseUrl ="my_babysitting";
var collections=["mom"];

var db=mongojs(databaseUrl,collections);

db.on("error",function(err){
	console.log("Database Error:",err);
});



app.get("/",function(req,res){
	res.send("Connecting to the first page of server");
});
app.get("/login",function(req,res){
	res.send(" This is for the login page");
});


app.get("/data",function(req,res){
	db.mom.find({},function(error,found){
		if(error){
			console.log(error);
		}
		else{
			res.json(found);
		}
	});

});
	app.listen(PORT,function(){
		console.log("App is listening the port :"+PORT);
	});
