// $(function() {
// 	//alert();
// });

// Declare dependency
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);

// Init controller
angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope) {
	$scope.tabs = [
		{ title:'Search Page', content:'Search Page Content' },
		{ title:'Favorites', content:'Favorites Content' }
	];
	$scope.alertMe = function() {
		setTimeout(function() {
			alert('You\'ve selected the alert tab!');
		});
	};
});

var apiKey = 'uyha8h3zge33dghf8bpkjnyp';
var searchTerm = encodeURIComponent('Toy Story');
var pageLimit = 4;
var pageNumber = 1;
var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='+apiKey+'&q='+searchTerm+'&page_limit='+pageLimit+'&page='+pageNumber;

$.ajax({
	url: url,
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
	}
});
