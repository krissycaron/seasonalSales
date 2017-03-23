console.log("first line");

var productContainer = document.getElementById("productClass");
var departmentArray = [];
var productArray = [];
var productsString = "";
var catagoriesString = "";
var currentProduct = "";
var currentCatagory = "";

function pullProducts (xhrData) {
	productArray = xhrData.products;
	console.log(productArray);
	for (var i = 0; i< xhrData.products.length; i++) {
		currentProduct = xhrData.products[i];
		productsString += `<h3>Name: ${currentProduct.name}</h3>`
		productsString += `<p>Price: ${currentProduct.price}</p>`
	}
	productContainer.innerHTML = productsString;
	secondData();
}

function executeThisCodeAfterFileLoaded2 (){
	var data = JSON.parse(this.responseText);
	categoryInfo(data);
}

function categoryInfo (xhrData){
	departmentArray = xhrData.catagories;
	for(var k=0; k<productArray.length; k++){	
		for(var i=0; i<departmentArray.length; i++){
			if (productArray[k].category_id === departmentArray[i].id){
				productArray[k]["category_name"] = departmentArray[i].id;
				productArray[k]["category_season_discount"] = departmentArray[i].id;
				productArray[k]["category_discount"] = departmentArray[i].id;
			}
		}
	} 
}

//function alerts for whether json files were atttainable. 
function executeThisCodeAfterFileLoaded (){
	var data = JSON.parse(this.responseText);
	pullProducts(data);
}

function executeThisCodeAfterFileFails (){
	alert("Data did not load!");
}

function secondData(){	//this will grab and get JSON data from catagories file 
	var catagories = new XMLHttpRequest();
	catagories.addEventListener("load", executeThisCodeAfterFileLoaded2);
	catagories.addEventListener("error", executeThisCodeAfterFileFails);
	catagories.open("GET","catagories.json");
	catagories.send();
};

//This will request the data from the products.json
var products = new XMLHttpRequest();
products.addEventListener("load", executeThisCodeAfterFileLoaded);
products.addEventListener("error", executeThisCodeAfterFileFails);
products.open("GET", "products.json");
products.send();

console.log("last line");







// function pullCatagory (xhrData) {
// 	for (var i=0; i< xhrData.catagories.length; i++) {
// 		currentCatagory = xhrData.catagories[i];
// 		catagoriesString += `<h3>Department: ${currentCatagory.name}</h3>`
// 		catagoriesString +=  `<p>Price: ${currentCatagory.season_discount}</p>`
// 	}
// 	productContainer.innerHTML = productsString;
// }

