
var foodList = document.getElementById("main-content")

function dataCall () {
	var data = JSON.parse(this.responseText);
	console.log("data:", data);
	populateDOM(data);
}

function populateDOM (XHRdata) {
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

var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataCall);

dataRequest.open("GET", "dogFood.json");

dataRequest.send();
