/**
* MovieDetailController
* Movie details controller
* $scope 
* $http  
* $routeParams 
*/
function MovieDetailController($scope, $http, $routeParams) {
  $scope.id = $routeParams.movieId;
  
  $http.get('data/movies.json').success(function(data) {
	  int incre = 1
	  $scope.movie = data[$routeParams.movieId + 1];
  });
 
}