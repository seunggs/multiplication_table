angular.module('myApp', [])
	.controller('MultiplicationCtrl', function($scope, $attrs){
		var populateNumbers = function(x){
			var numbers = [];
			for(var i=0; i<x; i++) {
				numbers[i] = i + 1;
			}
			return numbers;
		};
		$scope.numberLimit = $attrs.initialNumberLimit || 10;
		$scope.$watch('numberLimit', function(limit) {
			$scope.numbers = populateNumbers(limit);
		})
		$scope.compute = function(a, b) {
			return a * b;
		};
	});