/**
* MovieDetailController
* Movie details controller
* $scope 
* $http  
* $routeParams 
*/
function MovieDetailController($scope, $http, $routeParams) {
  $scope.movieId = parseInt($routeParams.movieId);
  
  $http.get('data/movies.json').success(function(data) {
	  $scope.movie = data[$scope.movieId - 1];
  });
 
}