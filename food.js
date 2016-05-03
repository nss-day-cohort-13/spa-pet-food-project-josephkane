
var foodList = document.getElementById("main-content")

function dogDataCall () {
	var dogData = JSON.parse(this.responseText);
	populateDOM(dogData);
}

function catDataCall () {
	var catData = JSON.parse(this.responseText);
	populateDOM(catData)
}

function populateDOM (XHRdata) {
	var HTML = "";
	for (var i = 0; i < XHRdata.brands.length; i++) {
		HTML = `<div class="brand"><h2 class="brand-headline">${XHRdata.brands[i].brand}</h2>`;
		if (XHRdata.brands[i].brand === "Purrina" || XHRdata.brands[i].brand === "Meow Meal")	{
			HTML += `<h3 class="breed-headline">Breed:</h3>`;
		};
		var loopData = XHRdata.brands[i].types;
		var breedArray = XHRdata.brands[i];
		if (XHRdata.brands[i].breed) {
			for (var l = 0; l < breedArray.breed.length; l++) {
				HTML += `<p class="cat-breeds">${breedArray.breed[l]}</p>`
			};
		};
		for (var j = 0; j < loopData.length; j++) {
			HTML += `<h3 class="types">${loopData[j].type}</h3>`
			var arrayData = loopData[j].volumes;
			for (var k = 0; k < arrayData.length; k++) {
				HTML += `<div class="products"><ul><li>${arrayData[k].size}</li><li>${arrayData[k].price}</li></div>`;
				console.log("html:", HTML);
			} // k
		} // j
		foodList.innerHTML += (HTML += `</div>`);
	} // i
}


var dogDataRequest = new XMLHttpRequest();
var catDataRequest = new XMLHttpRequest();

dogDataRequest.addEventListener("load", dogDataCall);
catDataRequest.addEventListener("load", catDataCall);

dogDataRequest.open("GET", "dogFood.json");
catDataRequest.open("GET", "catFood.json");

dogDataRequest.send();
catDataRequest.send();
