// angular.module('boardApp').controller('tableCtrl', function (listFactory, cardFactory, $http, updateDBFactory) { 
angular.module('boardApp').controller('buildPanelCtrl', function (nodeFactory) { 

	// var date = new Date; 
	// this.today = date; 
	// this.check = function () {
	// 	console.log("buildPanelCtrl");
	// };
	this.handleDragStart = function(e, elementDND) {

		
		if(e.type == "mousedown" ) { 
			var type = e.path[2].attributes['ng-attr-data-type'].value;
			// console.log("row", e.target.attributes['ng-attr-data-row'].value);
			console.log("down");
			// console.log("down", type);

			nodeFactory.transferSetElement (type);
			elementDND = true;
			console.log("this.elementDND", elementDND);
		}

		if(e.type == "mouseup") {
			var objType = nodeFactory.transferGetElement();
			console.log("up", objType.type);
			elementDND = false;
			console.log("this.elementDND", elementDND);
			// nodeFactory.transferGetElement();
		}
		// console.log("e", e);
		var buildPanelElements = angular.element(document.querySelectorAll(".panelWrap"));
  		// this.style.opacity = '0.4';  // this / e.target is the source node.
		[].forEach.call(buildPanelElements, elem => angular.element(elem).addClass("attantion"));
}

	this.check = function () {
		var buildPanelElements = angular.element(document.querySelectorAll(".panelWrap"));
		// [].forEach.call(buildPanelElements, elem => angular.element(elem).addEventListener('dragstart', handleDragStart, false));
		console.log(buildPanelElements);
		// this.style.opacity = '0.4';
	};

	






	// console.log('listsCtrl'); 
	// // (function () { 
	// // listFactory.get 
	// // })() 

	// cardFactory.createCardsArr(); 
	// updateDB();

	// function updateDB () {
	// 	var lists = listFactory.getlistsStorage();
	// 	var cards = cardFactory.getCards();
	// 	updateDBFactory.pushNewTodoInBD(lists, cards);
	// 	// updateDBFactory.pushNewTodoInBD();
	// 	// $timeout(updateDB, 1000);
	// 	setTimeout (updateDB, 60000); //update every 5 minute 60000*5
	// }

	// this.lists = listFactory.getLists();

	// this.addList = function () {
	// 	listFactory.addList(this.listName);
	// 	this.listName = null;
	// 	this.isFull = listFactory.checkFullArr();
	// 	console.log("isFull" , this.isFull);
	// };

	// this.isFull = listFactory.checkFullArr(); //проверка на количество списков (должно быть не болле 5)
	// // this.isFull = true;
	// this.checkFull = function () {
	// 	this.isFull = listFactory.checkFullArr();	
	// };



}); 