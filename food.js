
var foodList = document.getElementById("main-content")

function dogDataCall () {
	var dogData = JSON.parse(this.responseText);
	populateDOMDog(dogData);
}

function catDataCall () {
	var catData = JSON.parse(this.responseText);
	populateDOMCat(catData)
}

function populateDOMDog (XHRdata) {
	for (var i = 0; i < XHRdata.dog_brands.length; i++) {
		foodList.innerHTML += `<h2 class="brand">${XHRdata.dog_brands[i].brand}</h2>`;
		var loopData = XHRdata.dog_brands[i].types;
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
