console.log("first line");

var productContainer = document.getElementById("productClass");
var departmentArray = [];
var productArray = [];
var catagoriesString = "";
var currentProduct = "";
var currentCatagory = "";
var seasonSelected = document.getElementById("seasonDropdown");
var currentSeasonSelected = "";
var products = new XMLHttpRequest();


function printToDom () {
	var productsString = "";
	for (var i = 0; i< productArray.length; i++) {
		productsString += `<div class="column-fluid">`;
		productsString += `<div class="col-sm-6 col-md-4">`;
		productsString += `<div class="thumbnail">`;
		productsString += `<div class="caption">`;
		productsString += `<h3>Name: ${productArray[i].name}</h3>`;
		productsString += `<p>Price: ${productArray[i].price}</p>`;
		productsString += `<p>Department: ${productArray[i].category_name}</p>`;
			if (productArray[i].category_season==currentSeasonSelected){
				productsString += `<p>${productArray[i].discPrice}</p>`;
			} else {
				productsString += `<p>${productArray[i].price}</p>`
			} 
		productsString +=`</div></div></div></div>`;
	}
	productContainer.innerHTML = productsString;
}

function pullProducts (xhrData) {
	productArray = xhrData.products;
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
			//// if its on the left it what you want it to print or add on the right is where you are getting it from. - #AndreaKnowledgeBOMB
			if (productArray[k].category_id === departmentArray[i].id){
				productArray[k]["category_name"] = departmentArray[i].name;
				productArray[k]["category_season"] = departmentArray[i].season_discount;
				productArray[k]["category_discount"] = departmentArray[i].discount;
				productArray[k]["discPrice"] = ((1-departmentArray[i].discount)*productArray[k].price).toFixed(2);
				
			}
		}
	}
	printToDom(); 
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

//function to run after click
function switchSeasons() {
	currentSeasonSelected =event.target.value;
	printToDom();
}

//This will request the data from the products.json
products.addEventListener("load", executeThisCodeAfterFileLoaded);
products.addEventListener("error", executeThisCodeAfterFileFails);
products.open("GET", "products.json");
products.send();

seasonSelected.addEventListener("change", switchSeasons);


