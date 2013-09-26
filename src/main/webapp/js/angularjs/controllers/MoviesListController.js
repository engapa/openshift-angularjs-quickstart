/**
* MoviesListController
* Movies list controller
*/
function LibrosListController($scope, $http) {
  $http.get('data/movies.json').success(function(data) {
	$scope.movies = data;
  });
 
  //variable
  $scope.var1 = "variable definida desde el controlador";
  
  //Combo box for sorting movies
  $scope.orderField = "title";
  $scope.orderReverse = "true";
}