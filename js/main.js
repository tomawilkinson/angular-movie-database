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