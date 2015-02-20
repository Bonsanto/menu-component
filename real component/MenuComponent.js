var MenuProto = Object.create(HTMLDivElement.prototype);

Object.defineProperty(MenuProto, 'content', {
	value: {},
	writable: true
});

MenuProto.createdCallback = function () {
	var shadow = this.createShadowRoot();
	var style = document.createElement("style");
	var div = document.createElement("div");
	var ul = document.createElement("ul");

	var exe = function (something) {
		eval(something);
		div.className = "realdiv";
		div.style.cursor = "default";
		ul.className = "nav";
		//todo: unfortunately this is how it is done :,(.
		style.textContent = "* {padding: 0;margin: 0;} .realdiv {margin: auto;width: 500px; font-family: Arial, Helvetica, sans-serif;} ul, ol {list-style: none;} .nav li div {background-color: black;color: white;text-decoration: none;padding: 10px 15px;display: block;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;} .nav > li {float: left;} .nav li div:hover {background-color: #434343;} .nav li ul {display: none;position: absolute;min-width: 150px;} .nav li:hover > ul {display: block;} .nav li ul li {position: relative;} .nav li ul li ul {right: -150px;top: 0;}";

		shadow.appendChild(style);
		div.appendChild(ul);
		shadow.appendChild(div);

		lidivCreator(settings.header).forEach(function (element) {
			ul.appendChild(element);
		});
	};

	eval(readFiles(this, exe)); //A settings variable appears.
};

var readFiles = function (element, fun) {
	var xml = new XMLHttpRequest();

	xml.onreadystatechange = function (e) {
		if (xml.status === 200 && xml.readyState === 4) fun(xml.responseText);
	};

	//xml.onreadystatechange = function () {
	//};

	xml.open("GET", element.getAttribute("src"), true);
	xml.send();
};

var lidivCreator = function (xson) {
	return xson.map(function (element) {
		var li = document.createElement("li"),
			div = document.createElement("div");

		div.textContent = element.name;
		li.appendChild(div);
		console.log(element.children);

		if (element.children !== null) {
			var ul = document.createElement("ul");
			li.appendChild(ul);

			lidivCreator(element.children).forEach(function (ele) {
				ul.appendChild(ele);
			});
		}
		return li;
	});
};

var settingsReader = function (location) {
	//If all file API are supported ...
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		var reader = new FileReader();
	} else {
		console.log("File API not supported");
	}
};

var XMenu = document.registerElement('x-menu', {
	prototype: MenuProto
});