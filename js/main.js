

var app = angular.module('movieApp', ['ui.bootstrap']);

app.controller('movieCtrl', function($scope, $http){

	$scope.loadMovies = function(searchValue) {

		$scope.apiKey = 'uyha8h3zge33dghf8bpkjnyp';
		$scope.searchTerm = encodeURIComponent(searchValue);
		$scope.pageLimit = 3;
		$scope.pageNumber = 1;
		$scope.url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='+$scope.apiKey+'&q='+$scope.searchTerm+'&page_limit='+$scope.pageLimit+'&page='+$scope.pageNumber;

		$scope.maxSize = 8;
		$scope.resultsTotal = 0;
		$scope.pageTotal = 0;

		$scope.loading = true;
		$scope.movies = [];
		$http.get($scope.url).
		success(function(data, status, headers, config) {
			$scope.loading = false;
			$scope.resultsTotal = data['total'];
			$scope.movies = data['movies'];
		}).error(function(data, status, headers, config) {
			// log error
		});

		$scope.pageChanged = function() {
			$scope.pageNumber = $scope.currentPage;
		};

		$scope.$watch('resultsTotal + pageNumber', function() {
			$scope.pageTotal = ($scope.resultsTotal / $scope.pageLimit);
		});
	}

});