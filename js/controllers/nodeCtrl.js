angular.module('boardApp').controller('nodeCtrl', function (nodeFactory) {
	

this.createNewElem = function () {
		console.log("new row", this.rowPositionNewElem);
		console.log("new col", this.colPositionNewElem);
		var rowPosition = this.rowPositionNewElem;
		var colPosition = this.colPositionNewElem;
		var typeElem = this.typeNewElem;
		nodeFactory.checkElement(rowPosition, colPosition, typeElem);
		nodeFactory.createNewElement(rowPosition, colPosition, typeElem);
		this.rowPositionNewElem = "";
		this.colPositionNewElem = "";
		this.typeNewElem = null;
	};





























	// this.isEditing = false;
	// this.editingCard = null;
	// this.isShortForm = true;
	

	// this.deleteCard = function (card) {
	// 	cardFactory.deleteCard(card);
	// };

	// this.editCard = function (card) {
	// 	this.isEditing = true;
	// 	this.editingCard = angular.copy(card);
	// };

	// this.updateCard = function (card) {
	// 	cardFactory.updateCard(this.editingCard);
	// 	this.isEditing = false;
	// 	this.editingCard = null;
	// };

	// this.cancelEditCard = function (card) {
	// 	this.isEditing = false;
	// 	this.editingCard = null;
	// };

	// this.moveLeftCard = function (card, index, previousList) {
	// 	cardFactory.moveLeftCard(card, index, previousList);
	// 	console.log('card', card);
	// };

	// this.moveRightCard = function (card, index, nextList, listsLength) {
	// 	cardFactory.moveRightCard(card, index, nextList, listsLength);
	// 	console.log('card', card);
	// };

});    