
// Init angular app
var movieApp = angular.module('movieApp', ['ui.bootstrap']);


// Return Rotten Tomato movie data - AJAX
movieApp.factory('requestMovieData', function($http) {

	return {
		getMovieData: function(pageLimit, pageNumber, searchValue) {

			// Vars
			var apiKey = 'uyha8h3zge33dghf8bpkjnyp';
			var searchValue = searchValue;
			var pageLimit = pageLimit;
			var pageNumber = pageNumber;
			var domain = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=';
			var params = apiKey+'&q='+searchValue+'&page_limit='+pageLimit+'&page='+pageNumber;
			var url = domain + params;

			return $http.get(url).then(function(result) {
				return result.data;
			});

		}
	}

});

movieApp.controller('searchCtrl', function($scope, requestMovieData){

	// Vars
	$scope.maxSize = 5;
	$scope.resultsTotal = null;
	$scope.pageTotal = null;
	$scope.pageNumber = 1;
	$scope.loading = true;

	$scope.loadMovies = function() {

		$scope.pageLimit = 10;

		requestMovieData.getMovieData($scope.pageLimit, $scope.pageNumber, $scope.searchValue).then(function(movieData) {
			$scope.loading = false;
			$scope.movieData = movieData;
			$scope.movies = $scope.movieData['movies'];
			$scope.resultsTotal = $scope.movieData['total'];
		});

	}

	$scope.pageChanged = function() {
		$scope.loadMovies();
	};

	$scope.$watch('resultsTotal + pageNumber', function() {
		// API has 25 page limit
		// Need a smarter way of calculating page limit to max 25 - needs to be dynamic based on pageLimit
		if($scope.resultsTotal / $scope.pageLimit >= 250) {
			$scope.pageTotal = 250;
		}else {
			$scope.pageTotal = ($scope.resultsTotal / $scope.pageLimit);
		}
	});

});


