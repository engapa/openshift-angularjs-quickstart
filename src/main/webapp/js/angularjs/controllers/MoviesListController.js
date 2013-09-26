/**
* MoviesListController
* Movies list controller
*/
function MoviesListController($scope, $http) {
  $http.get('data/movies.json').success(function(data) {
	$scope.movies = data;
  });
   
  //Combo box for ordering movies
  $scope.orderField = "title";
  $scope.orderReverse = "true";
}