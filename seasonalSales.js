console.log("first line");

var productContainer = document.getElementById("productClass");
var departmentArray = [];
var productArray = [];
var productsString = "";
var catagoriesString = "";
var currentProduct = "";
var currentCatagory = "";


// function pullCatagory (xhrData) {
// 	console.log(xhrData);
// 	for (var i=0; i< xhrData.catagories.length; i++) {
// 		currentCatagory = xhrData.catagories[i];
// 		console.log(currentCatagory);
// 		catagoriesString += `<h3>Department: ${currentCatagory.name}</h3>`
// 		catagoriesString +=  `<p>Price: ${currentCatagory.season_discount}</p>`
// 		console.log(catagoriesString);
// 	}
// 	productContainer.innerHTML = productsString;
// 	console.log(pullCatagory);
// }

function pullProducts (xhrData) {
	productArray = xhrData.products;
	console.log(productArray);
	for (var i = 0; i< xhrData.products.length; i++) {
		currentProduct = xhrData.products[i];
		// console.log(currentProduct);
		productsString += `<h3>Name: ${currentProduct.name}</h3>`
		productsString += `<p>Price: ${currentProduct.price}</p>`
		console.log(productsString);
	}
	productContainer.innerHTML = productsString;
}

function executeThisCodeAfterFileLoaded2 (){
	var data = JSON.parse(this.responseText);
	categoryInfo(data);
}

function categoryInfo (xhrData){
	console.log("xhrData", xhrData);
	departmentArray = xhrData.catagories;
	console.log(departmentArray);
	console.log(productArray);
	console.log(productArray.category_id);
	for(var i=0; i<departmentArray.length; i++){
		if (productArray.category_id === departmentArray[i].id){
			console.log("in my if statement");
		}
	} 
}

//function alerts for whether json files were atttainable. 
function executeThisCodeAfterFileLoaded (){
	// console.log("Data loaded!");
	//This is where you are actually pulling the data for access?
	var data = JSON.parse(this.responseText);
	pullProducts(data);
}

function executeThisCodeAfterFileFails (){
	alert("Data did not load!");
}

//this will grab and get JSON data from catagories file 
var catagories = new XMLHttpRequest();
catagories.addEventListener("load", executeThisCodeAfterFileLoaded2);
catagories.addEventListener("error", executeThisCodeAfterFileFails);
catagories.open("GET","catagories.json");
catagories.send();
// console.log(catagories);

//This will request the data from the products.json
var products = new XMLHttpRequest();
products.addEventListener("load", executeThisCodeAfterFileLoaded);
products.addEventListener("error", executeThisCodeAfterFileFails);
products.open("GET", "products.json");
products.send();

// console.log("last line");







