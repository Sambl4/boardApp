angular.module('boardApp').factory('nodeFactory', function () { 
	var service = {}; 

	var list = new DoubleList(); 

	var Node = function (rowPosition, colPosition, type, data,  prev, next) {
		this.prev = null;
		this.next = null;
		this.type = type;
		this.rowPosition = rowPosition;
		this.colPosition = colPosition;
		this.data = data;
	};

	function DoubleList () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	};

	DoubleList.prototype.append = function (rowPosition, colPosition, type, data) {

		var node = new Node(rowPosition, colPosition, type, data);
		var current;

		if (this.head == null) {
			this.head = this.tail = node;
			this.head.next = this.tail;
			this.tail.prev = this.head;
			this.head.prev = this.tail.next = null;
			this.length ++;
		} else {
			current = this.tail;
			current.next = this.tail = node;
			this.tail.prev = current;
			this.length ++;
		}

		return this;
	};

	service.createNewElement = function (rowPosition, colPosition, type, data) {
		// console.log("rowPosition", rowPosition);
		// console.log("colPosition", colPosition);
		list.append(rowPosition, colPosition, type, data);
		console.log("list", list);
		return list;
	};


	service.checkElement = function (rowPosition, colPosition, type) {
		// var table = angular.element(document.querySelector(".table"));
		console.log("rowPosition", rowPosition);
		console.log("colPosition", colPosition);
		var horizontalElement = angular.element("<div class='horizonLineBlock'> <div class='sleepers'></div> <div class='rails'></div>  </div>");
		var verticalElement = angular.element("<div class='verticalLineBlock'> <div class='sleepers'></div> <div class='rails'></div>  </div>");
		var qwerty = angular.element("<button>");
		qwerty.css("width", "80px");
		qwerty.css("height", "40px");
		qwerty.css("background-color", "red");
		qwerty.text("but");
		// var horizontalElement = angular.element(
			// "<div class'horizonLineBlock'> <div class='sleepers'></div><div class='rails'></div></div>");
		
		// horizontalElement.addClass = ("horizonLineBlock");
		var tableForCheckIndex = angular.element(document).find('td');
				
				// tableForInsert.addClass("ooo");
		tableForCheckIndex = [].slice.call(tableForCheckIndex);
		tableForCheckIndex.map( function (elem, index) {

			if (elem.getAttribute("ng-attr-data-row") == rowPosition &&
				elem.getAttribute("ng-attr-data-col") == colPosition ) {

				if (type == "horizontal") {
					angular.element(elem).prepend(horizontalElement);
					// elem3.prepend(qwerty);
					// elem.prepend(qwerty);
					console.log("*******elem horizontal**********", elem);
					// elem.prepend(horizontalElement);
				} else if (type == "vertical") {
					console.log("*******elem vertical**********", elem);
					angular.element(elem).prepend(verticalElement);
				} 
			}
		});

		// var box = table.attr("ng-attr-data-row");
		// var box = table.find('td');
		
	};


	var obj = {
		type: ""
	};

	service.transferSetElement = function (type) {
		obj.type = type;
	};

	service.transferGetElement = function () {
		return obj;
	}
	// service.createCardsArr = function () { 
	// 	if (localStorage.length > 0) { 
	// 		for(var i = 0; i < localStorage.length; i++) { 
	// 			cards.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
	// 			// console.log("indexOF", cards[i].id); 
	// 			if ( Array.isArray(cards[i]) == true ) {
	// 					cards.pop();
	// 				console.log("yes");
	// 			}
	// 		}

	// // console.log("1111", localStorage.getItem(localStorage.key([1]))); 
	// // console.log("2222", JSON.parse(localStorage.getItem(localStorage.key([0])))); 
	// 	} else {

	// 		$http.get('/todo')
	//             .success(function(data) {
	//                 for(var i = 0; i < data.length; i++) { 
	// 					if (data[i].id != 100000001) {
	// 						cards.push(data[i]);
	// 						localStorage.setItem(data[i].id, JSON.stringify(data[i]));
	// 					}
	// 				}
	// 		});
	// 	}

	// console.log("cards", cards); 

	// return console.log(111115555111111); 

	// }; 


	// service.getCards = function (list) { 
	// // console.log("listsStorage.id", listFactory.listsStorage); 
	// // if (localStorage.length > 0) { 
	// // for(var i = 0; i < localStorage.length; i++) { 
	// // // cards.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
	// // } 
	// // } 
	// console.log("localStorage.length ", localStorage.length ); 



	// return cards;
	// }; 


	// service.createCard = function (list, cardName, cardDescription, cardDeadline, cardPriority) {
	// 	var cardPriorityFilter;

	// 	if (cardPriority == "Normal") {
 //            cardPriorityFilter = 3;
 //        } else if (cardPriority == "Very important") {
 //            cardPriorityFilter = 1;
 //        } else if (cardPriority == "Important") {
 //            cardPriorityFilter = 2;
 //        }

	// 	var newData = {
	// 		id: Date.now(),
	// 		name: cardName,
	// 		description: cardDescription,
	// 		status: 'stat' + list.list_id,
	// 		deadline: cardDeadline,
 //            priority: cardPriority,
 //            priorityStat: cardPriorityFilter,
 //            tmp: null
	// 	};

	// 	if (newData.name != null || newData.deadline >= Date.now() || newData.priority != null) {
	// 		cards.push(newData);
 //        	console.log(777777777);
	// 		localStorage.setItem(newData.id, JSON.stringify(newData));
	// 		$http.post('/todo', newData)
	//                 .success(function(data) {
	//                     // $scope.todoCol.push(data);
	//                     console.log(data);
	//                 });
	//         addFormVis = false;
 //        } else {
 //        	console.log(99999999999999);
 //           addFormVis = true;
 //           infoErr = "infoErrClass";
 //        }
	// };


	// service.deleteCard = function (card) {

	// 	localStorage.removeItem(card.id);

	// 	$http.delete('/todo/' + card.id, card)
 //            .success(function(data) {
 //                console.log(data);
 //        });

	// 	return  cards.splice( cards.indexOf(card),1);
	// };

	// service.deleteCardWithList = function (list) {
	// 	console.log("list_id", list.list_id);
	// 	for (var i = 0; i < cards.length; i++) {
	// 		if (cards[i].status == 'stat' + list.list_id ) {
	// 			console.log("before del", cards);
	// 			localStorage.removeItem(cards[i].id);

	// 			$http.delete('/todo/' + cards[i].id, cards[i])
	// 	            .success(function(data) {
	// 	                console.log(data);
	// 	        });
	// 				cards.splice( cards[i],1);
	// 	        console.log("after  del", cards);

	// 		}
	// 		console.log("cardsARR", cards[i].status);
	// 	}
	// };


	// service.updateCard = function (updatingCard) {
	// 	console.log('service updateCard', updatingCard);

	// 	var cardPriorityFilter;

	// 	if (updatingCard.priority == "Normal") {
 //            cardPriorityFilter = 3;
 //        } else if (updatingCard.priority == "Very important") {
 //            cardPriorityFilter = 1;
 //        } else {
 //            cardPriorityFilter = 2;
 //        }
		
	// 	var cardID = updatingCard.id;

	// 	if (!updatingCard.list_id) {
	// 		updatingCard.list_id = updatingCard.status;
	// 	}

	// 	var card = cards.find( function (cards) {
	// 		return cards.id == cardID;
	// 	});
	// 	card.name = updatingCard.name;
	// 	card.description = updatingCard.description;
	// 	card.deadline = updatingCard.deadline;
	// 	card.priority = updatingCard.priority;
	// 	card.priorityStat = cardPriorityFilter;
	// 	card.list_id = updatingCard.list_id;
	// 	card.status = 'stat' + updatingCard.list_id;

	// 	updateTodo (card);
	// };


	// service.moveLeftCard = function (card, index, previousList) {
		
	// 	console.log('cards length', cards.length );
	// 	console.log('card', card );
	// 	if (index == 0) {
	// 		console.log('i can`t move to left');
	// 	} else {
	// 		card.status = 'stat' +  previousList;
	// 		card.list_id = null;
	// 	}

	// 	updateTodo (card);
	// };


	// service.moveRightCard = function (card, index, nextList, listsLength) {
		
	// 	console.log('cards length', cards.length );
	// 	console.log('card', card );
	// 	if (index + 1 == listsLength) {
	// 		console.log('i can`t move to right');
	// 	} else {
	// 		card.status = 'stat' +  nextList;
	// 		card.list_id = null;
	// 	}

	// 	updateTodo (card);
	// };

	// function updateTodo (card) {


 //        $http.put('/todo/' + card.id, card)
 //            .success(function(data) {
 //                console.log(data);
 //            });

 //        localStorage.removeItem(card.id);
 //        localStorage.setItem(card.id, JSON.stringify(card));
 //    }



	return service;
});