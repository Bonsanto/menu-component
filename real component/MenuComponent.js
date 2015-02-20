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

	var exe = function (setts, styles) {
		eval(setts);
		div.className = "realdiv";
		div.style.cursor = "default";
		ul.className = "nav";
		//todo: unfortunately this is how it is done :,(.
		style.textContent = styles;

		shadow.appendChild(style);
		div.appendChild(ul);
		shadow.appendChild(div);

		lidivCreator(settings.header).forEach(function (element) {
			ul.appendChild(element);
		});
	};

	readFiles(this, exe);
};

var readFiles = function (element, fun) {
	var skeleton = element.getAttribute("src"),
		styles = element.getAttribute("css"),
		settingsReader = new XMLHttpRequest(),
		cssReader = new XMLHttpRequest();


	settingsReader.onreadystatechange = function (e) {
		if (settingsReader.status === 200 && settingsReader.readyState === 4) {

			cssReader.onreadystatechange = function (e) {
				if (cssReader.status === 200 && cssReader.readyState === 4) fun(settingsReader.responseText, cssReader.responseText);
				else if (cssReader.status === 404) console.log(styles + " wasn't found");
			};

			cssReader.open("GET", styles, true);
			cssReader.send();
		} else if (skeleton.status === 404) console.log(skeleton + " wasn't found");
	};

	settingsReader.open("GET", skeleton, true);
	settingsReader.send();
};

var lidivCreator = function (xson) {
	return xson.map(function (element) {
		var li = document.createElement("li"),
			div = document.createElement("div");

		div.textContent = element.name;
		li.appendChild(div);

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

var XMenu = document.registerElement('x-menu', {
	prototype: MenuProto
});