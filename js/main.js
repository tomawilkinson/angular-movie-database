// $(function() {
// 	//alert();
// });

// Declare dependency
// angular.module('ui.bootstrap.demo', ['ui.bootstrap']);

// // Init controller
// angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope) {
// 	$scope.tabs = [
// 		{ title:'Search Page', content:'Search Page Content' },
// 		{ title:'Favorites', content:'Favorites Content' }
// 	];
// 	$scope.alertMe = function() {
// 		setTimeout(function() {
// 			alert('You\'ve selected the alert tab!');
// 		});
// 	};
// });

angular.module('movieApp', ['ui.bootstrap']);

var apiKey = 'uyha8h3zge33dghf8bpkjnyp';
var searchTerm = encodeURIComponent('Toy Story');
var pageLimit = 4;
var pageNumber = 1;
var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='+apiKey+'&q='+searchTerm+'&page_limit='+pageLimit+'&page='+pageNumber;

function MoviePrinter($scope) {

	$scope.movies = [{
		"id": "770672122",
		"title": "Toy Story 3",
		"year": 2010
	}, {
		"id": "9414",
		"title": "Toy Story 2",
		"year": 1999
	}, {
		"id": "9559",
		"title": "Toy Story",
		"year": 1995
	}, {
		"id": "771365842",
		"title": "Toy Story of Terror!",
		"year": 2013
	}];

	// $.ajax({
	// 	'async': false,
	// 	url: url,
	// 	dataType: "jsonp",
	// 	success: function(queryList) {
	// 		$scope.movies = queryList['movies'];
	// 		console.log(JSON.stringify($scope.movies))
	// 	}
	// });

	//console.log(getData());
	// $scope.movies = queryList['movies'];
	// console.log($scope.movies)
	// var movies = queryList['movies'];
	// console.log(movies)
}

var getData = function() {
	// $.ajax({
	// 	'async': false,
	// 	url: url,
	// 	dataType: "jsonp",
	// 	success: function(queryList) {
	// 		console.log(queryList)
	// 	}
	// });
}
