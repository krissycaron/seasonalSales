console.log("first line");

var productsString = "";
var catagoriesString = "";
var current



//function alerts for whether json files were atttainable. 
function executeThisCodeAfterFileLoaded (){
	console.log("Data loaded!");
	//This is where you are actually pulling the data for access?
	// var data = JSON.parse(this.responseText);
	// products(data);
	// catagories(data);
	console.log("data from JSON", data);
}

function executeThisCodeAfterFileFails (){
	alert("Data did not load!");
}

//This will request the data from the products.json
var products = new XMLHttpRequest();
products.addEventListener("load", executeThisCodeAfterFileLoaded);
products.addEventListener("error", executeThisCodeAfterFileFails);
products.open("GET", "products.json");
products.send();
console.log(products);

//this will grab and get JSON data from catagories file 
var catagories = new XMLHttpRequest();
catagories.addEventListener("load", executeThisCodeAfterFileLoaded);
catagories.addEventListener("error", executeThisCodeAfterFileFails);
catagories.open("GET","catagories.json");
catagories.send();

console.log("last line");







