var rawMaster = "https://github.com/endless-sky/endless-sky/raw/master/images/planet/";
var rawOther = "https://github.com/comnom/es-planet-sprites/raw/master/planets/";

var excludes = ["panels", "ringworld", "station", "wisp", "wormhole"]

var namesMaster = [];
var namesOther = [];

var lookup = {};

var imgIndex = 0;

function apiGetMaster() {
	var urlMaster = "https://api.github.com/repos/endless-sky/endless-sky/contents/images/planet?ref=master";
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			data = JSON.parse(this.responseText);
			apiGetOther(data);
		}
	};
	
	xhttp.open("GET", urlMaster, true);
	xhttp.setRequestHeader("Accept", "application/vnd.github.v3+json");
	xhttp.send();
}

function apiGetOther(data) {
	var urlOther = "https://api.github.com/repos/comnom/es-planet-sprites/contents/planets?ref=master";
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			data2 = JSON.parse(this.responseText);
			buildMap(data, data2);
		}
	};
	
	xhttp.open("GET", urlOther, true);
	xhttp.setRequestHeader("Accept", "application/vnd.github.v3+json");
	xhttp.send();
}

function stripExtension(string, extended = false) {
	return string.slice(0, -4);
}

function buildList(data, list) {
	for (var i = 0; i < data.length; i++) {
		exclude = false;
		
		for (var j = 0; j < excludes.length; j++) {
			if (data[i].name.startsWith(excludes[j])) {
				exclude = true;
			}
		}
		
		if (!exclude) {
			list.push(data[i].name);
		}
	}
}

function buildMap(data, data2) {
	buildList(data, namesMaster);
	buildList(data2, namesOther);
	
	for (var i = 0; i < namesMaster.length; i++) {
		var key = stripExtension(namesMaster[i]);
		var match = "";
		
		for (var j = 0; j < namesOther.length; j++) {
			if (namesOther[j].startsWith(key)) {
				match = namesOther[j];
			}
		}
		
		if (match) {
			lookup[key] = rawOther + match;
		}
		else {
			lookup[key] = "images/unknown.svg";
		}
	}
	populate();
}

function populate() {
	document.getElementById("base-planet").src = rawMaster + namesMaster[imgIndex];
	document.getElementById("variant-planet").src = lookup[stripExtension(namesMaster[imgIndex])];
	document.getElementById("index").innerHTML = (imgIndex + 1) + "/" + namesMaster.length;
}

function setVariantWidth() {
	var masterWidth = document.getElementById("base-planet").width;
	document.getElementById("variant-planet").width = masterWidth;
}

function previousImage() {
	if (imgIndex == 0) {
		imgIndex = namesMaster.length - 1;
	}
	else {
		imgIndex -= 1;
	}
	populate();
}

function nextImage() {
	if (imgIndex == namesMaster.length - 1) {
		imgIndex = 0;
	}
	else {
		imgIndex += 1;
	}
	populate();
}

function selectCategory() {
	if (document.getElementById("planet-selector").selectedIndex == 0) {
		return;
	}
	
	currentSelection = document.getElementById("planet-selector").value;
	
	for (var i = 0; i < namesMaster.length; i++) {
		if (namesMaster[i].startsWith(currentSelection)) {
			var newIndex = i;
			break;
		}
	}
	
	imgIndex = newIndex;
	populate();
}
