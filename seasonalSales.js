console.log("first line");

var productContainer = document.getElementById("productClass");
var productsString = "";
var catagoriesString = "";
var currentProduct = "";
var currentCatagory = "";


function pullProducts (xhrData) {
	for (var i = 0; i< xhrData.products.length; i++) {
		currentProduct = xhrData.products[i];
		console.log(currentProduct);
		productsString += `<h3>Name: ${currentProduct.name}</h3>`
		productsString += `<p>Price: ${currentProduct.price}</p>`
		console.log(productsString);
	}
	productContainer.innerHTML = productsString;
	console.log(pullProducts);
}



//function alerts for whether json files were atttainable. 
function executeThisCodeAfterFileLoaded (){
	console.log("Data loaded!");
	//This is where you are actually pulling the data for access?
	var data = JSON.parse(this.responseText);
	pullProducts(data);
	// catagories(data);
	console.log("data from JSON", data);
}

function executeThisCodeAfterFileFails (){
	alert("Data did not load!");
}

//this will grab and get JSON data from catagories file 
// var catagories = new XMLHttpRequest();
// catagories.addEventListener("load", executeThisCodeAfterFileLoaded);
// catagories.addEventListener("error", executeThisCodeAfterFileFails);
// catagories.open("GET","catagories.json");
// catagories.send();

//This will request the data from the products.json
var products = new XMLHttpRequest();
products.addEventListener("load", executeThisCodeAfterFileLoaded);
products.addEventListener("error", executeThisCodeAfterFileFails);
products.open("GET", "products.json");
products.send();
console.log(products);


console.log("last line");







