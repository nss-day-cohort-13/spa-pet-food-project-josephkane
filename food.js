
var foodList = document.getElementById("main-content")

function dogDataCall () {
	var dogData = JSON.parse(this.responseText);
	populateDOM(dogData.dog_brands);
}

function catDataCall () {
	var catData = JSON.parse(this.responseText);
	populateDOM(catData.cat_brands)
}

function populateDOM (XHRdata) {
	var HTML = "";
	for (var i = 0; i < XHRdata.length; i++) {
		// if (XHRdata[i].brand === "Chuck Wagon") {
		// 	HTML = `<h1>For Dogs:</h1>`;
		// } else if (XHRdata[i].brand === "Purrina") {
		// 	HTML = `<h1>For Cats:</h1>`;
		// };
		HTML = `<div class="brand clearfix"><h2 class="brand-headline">${XHRdata[i].brand}</h2>`;
		if (XHRdata[i].brand === "Purrina" || XHRdata[i].brand === "Meow Meal")	{
			HTML += `<h3 class="breed-headline">Breeds:</h3>`;
		};
		var loopData = XHRdata[i].types;
		var breedArray = XHRdata[i];
		if (XHRdata[i].breed) {
			for (var l = 0; l < breedArray.breed.length; l++) {
				HTML += `<p class="cat-breeds">${breedArray.breed[l]}</p>`
			};
		};
		for (var j = 0; j < loopData.length; j++) {
		HTML += `<div class="types">`;
			HTML += `<h3 class="type-headline">${loopData[j].type}</h3>`
			var arrayData = loopData[j].volumes;
			HTML += `<div class="products"><ul>`;
			for (var k = 0; k < arrayData.length; k++) {
				HTML += `<li>${arrayData[k].size}: ${arrayData[k].price}</li>`;
			} // k
			HTML += `</ul></div></div>`;
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
