var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");


var port = process.env.PORT || 8080


app.get("/",function(req,res){
	res.render("search");
});
app.get("/results",function(req,res){
	var query=req.query.search;     
	request("http://www.omdbapi.com/?apikey=74dc826&s=" + query,function(error,response,body){
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			//res.send(results["Search"][0]["Title"]);
			res.render("results",{data:data});
		}
	});
});

app.listen(port,function(){
	console.log("app running");
})


