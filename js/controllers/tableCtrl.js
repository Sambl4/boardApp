// angular.module('boardApp').controller('tableCtrl', function (listFactory, cardFactory, $http, updateDBFactory) { 
angular.module('boardApp').controller('tableCtrl', function () { 

	var date = new Date; 
	this.today = date; 

	console.log("tableCtrl");

	this.checkTD = function (e) {
		// console.log(e.target);
		if (e.target.attributes['ng-attr-data-row']) {
			console.log("row", e.target.attributes['ng-attr-data-row'].value,
					"col", e.target.attributes['ng-attr-data-col'].value );
		}
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