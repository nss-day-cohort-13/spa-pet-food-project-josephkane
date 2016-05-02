
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
	for (var i = 0; i < XHRdata.brands.length; i++) {
		foodList.innerHTML += `<h2 class="brand">${XHRdata.brands[i].brand}</h2>`;
		var loopData = XHRdata.brands[i].types;
		var breedArray = XHRdata.brands[i];
		if (XHRdata.brands[i].breed) {
			for (var l = 0; l < breedArray.breed.length; l++) {
				foodList.innerHTML += `<div class="cat-breeds">${breedArray.breed[l]}</div>`
			};
		}
		for (var j = 0; j < loopData.length; j++) {
			foodList.innerHTML += `<h3 class="types">${loopData[j].type}</h3>`
			var arrayData = loopData[j].volumes;
			for (var k = 0; k < arrayData.length; k++) {
				foodList.innerHTML += `<div class="size">${arrayData[k].size}</div><div class="price">${arrayData[k].price}</div`;
			} // k
		} // j
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
