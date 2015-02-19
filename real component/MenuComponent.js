/**
 *  The basic cell.
 *  {
 *      "table": [
 *      {
 *          "name": "File",
 *          "enable": true,
 *          "visibility": true,
 *          "st_hover": true,
 *          "children": null
 *      }]
 *   }
 *
 *  Not so basic cell.
 *  {
 *      "table": [{
 *          "name": "File",
 *          "enable": true,
 *          "visibility": true,
 *          "st_hover": true,
 *          "children": [{
 *              "name": "File",
 *              "enable": true,
 *              "visibility": true,
 *              "st_hover": true,
 *              "children": [{
 *                  "name": "File",
 *                  "enable": true,
 *                  "visibility": true,
 *                  "st_hover": true,
 *                  "children": null
 *              }]
 *          },
 *          {
 *              "name": "File",
 *              "enable": true,
 *              "visibility": true,
 *              "st_hover": true,
 *              "children": null
 *          }]
 *      }]
 *   }
 *
 * */


var MenuProto = Object.create(HTMLDivElement.prototype);

Object.defineProperty(MenuProto, 'content', {
	value: {},
	writable: true
});

MenuProto.createdCallback = function () {
	var shadow = this.createShadowRoot();
	//var _this = this;

	var lists = liCreator(this.getAttribute("content").header);
};

//todo: simplify in 1 line Favio HW hint: foreach.
var liCreator = function (xson) {
	var lis = [];

	//Content is the name of the property that holds the json.
	for (var cell in xson) {
		lis.push(document.createElement("li"));
	}

	return lis;
};

var XMenu = document.registerElement('x-menu', {
	prototype: MenuProto
});

var json = {
	"header": [
		{
			"name": "File",
			"children": [
				{
					"name": "File",
					"children": [
						{
							"name": "File",
							"children": null
						}
					]
				},
				{
					"name": "File",
					"children": null
				}
			]
		},
		{
			"name": "Favio",
			"children": [
				{
					"name": "File",
					"children": [
						{
							"name": "File",
							"children": null
						}
					]
				},
				{
					"name": "File",
					"children": null
				}
			]
		},
		{
			"name": "Alberto",
			"children": [
				{
					"name": "File",
					"children": [
						{
							"name": "File",
							"children": null
						}
					]
				},
				{
					"name": "File",
					"children": null
				}
			]
		}
	]
};

console.log(json.header.length); //The number of column of the first row should be showed.