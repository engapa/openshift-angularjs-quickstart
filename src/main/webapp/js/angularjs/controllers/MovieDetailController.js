/**
* MovieDetailController
* Movie details controller
* $scope 
* $http  
* $routeParams 
*/
function MovieDetailController($scope, $http, $routeParams) {
  $scope.id = $routeParams.movieId;
  $scope.movie = $scope.movies[$scope.id];

  //$http.get('data/movie'+$scope.id+'.json').success(function(data) {
	//  $scope.movie = data[$scope.id];
  //});
 
}