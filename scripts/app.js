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

		var activeFactorA, activeFactorB;

		$scope.clearActiveFactors = function() {
			activeFactorA = null;
			activeFactorB = null;
		};
		$scope.setActiveFactors = function(a, b) {
			activeFactorA = a;
			activeFactorB = b;
		};
		$scope.matchesFactor = function(a, b) {
			return a === activeFactorA || b === activeFactorB;
		};
	});