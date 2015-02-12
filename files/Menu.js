// eS UN DIV POR CASILLA.
var MenuPrototype = Object.create(HTMLDivElement.prototype); //div sin color

// base color for each tile.
Object.defineProperty(MenuPrototype, "basecolor", {
	value: "white",
	writable: true
});


Object.defineProperty(MenuPrototype, "tree", {
	value: {},
	writable: true
});

//                      ^
//                      |
//                      |
//                      |
//                      |
// This structure should be set on the tree property.
// The information to create the table must be inserted by using a JSON. something like this:
/**
 *  The basic cell.
 *
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

// Nested tables
MenuPrototype.createdCallback = function () {
	console.log(this);
	var masterTable = document.createElement("table");
	var firstRow = document.createElement("tr");
	var firstCell = document.createElement("td");

	firstCell.innerHTML = "blahblah";
	firstRow.appendChild(firstCell);
	masterTable.appendChild(firstRow);
	this.appendChild(masterTable);
};

var Menu = document.registerElement("x-menu", {
	prototype: MenuPrototype
});

