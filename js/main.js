

var movieApp = angular.module('movieApp', ['ui.bootstrap']);


movieApp.factory('requestMovieData', function($http) {

	return {
		getMovieData: function(pageLimit, pageNumber) {

			var apiKey = 'uyha8h3zge33dghf8bpkjnyp';
			var searchTerm = 'the';
			var pageLimit = pageLimit;
			var pageNumber = pageNumber;
			var domain = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=';
			var params = apiKey+'&q='+searchTerm+'&page_limit='+pageLimit+'&page='+pageNumber;
			var url = domain + params;

			return $http.get(url).then(function(result) {
				return result.data;
			});
		}
	}

});

movieApp.controller('searchCtrl', function($scope, requestMovieData){

	// $scope.pageLimit = 5;
	// $scope.pageNumber = 1;

	$scope.maxSize = 8;

	$scope.pageNumber = 1;

	$scope.resultsTotal = 100;
	$scope.pageTotal = 100;

	var getStuff = function() {

		$scope.pageLimit = 3;

		//console.log($scope.pageNumber)

		requestMovieData.getMovieData($scope.pageLimit, $scope.pageNumber).then(function(movieData) {
			$scope.movieData = movieData;
			$scope.movies = $scope.movieData['movies'];
			$scope.resultsTotal = $scope.movieData['total'];
			//console.log($scope.movieData)
		});
	}

	getStuff();

	$scope.pageChanged = function() {
		$scope.pageNumber = $scope.currentPage;
		getStuff();
	};

	$scope.$watch('resultsTotal + pageNumber', function() {
		$scope.pageTotal = ($scope.resultsTotal / $scope.pageLimit);
		//console.log()
	});

});


