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
	  $scope.movie = data[$scope.id];
  });
 
}