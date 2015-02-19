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

	div.className = "realdiv";
	div.style.cursor = "default";
	//todo: unfortunately this is how it is done :,(.
	style.textContent = "* {padding: 0;margin: 0;} .realdiv {margin: auto;width: 500px; font-family: Arial, Helvetica, sans-serif;} ul, ol {list-style: none;} .nav li div {background-color: black;color: white;text-decoration: none;padding: 10px 15px;display: block;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;} .nav > li {float: left;} .nav li div:hover {background-color: #434343;} .nav li ul {display: none;position: absolute;min-width: 40px;} .nav li:hover > ul {display: block;} .nav li ul li {position: relative;} .nav li ul li ul {right: -140px;top: 0;}";
	ul.className = "nav";

	shadow.appendChild(style);
	div.appendChild(ul);
	shadow.appendChild(div);

	lidivCreator(JSON.parse(this.getAttribute("content")).header).forEach(function (element) {
		ul.appendChild(element);
	});
};


// ------>|------>
// ------>|
var lidivCreator = function (xson) {
	return xson.map(function (element) {
		var li = document.createElement("li"),
			div = document.createElement("div"),
			ul = document.createElement("ul");
		div.textContent = element.name;
		li.appendChild(div);
		li.appendChild(ul);

		console.log(element.children);
		if(element.children !== null) {
			lidivCreator(element.children).forEach(function (ele) {
				ul.appendChild(ele);
			});
		}
		return li;
	});
};

var XMenu = document.registerElement('x-menu', {
	prototype: MenuProto
});