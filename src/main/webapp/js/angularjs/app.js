/** AngularJs App **/
angular.module('app', []).

  //App routes
  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/movies', {
		  templateUrl: 'views/moviesList.html',
		  controller: MoviesListController
		  }).
	  
	  //Define parameter by (:)
      when('/movies/:movieId', {
		  templateUrl: 'views/movie.html',
		  controller: MovieDetailController
		  }).
	 
	  //redirect to default route  
      otherwise({
		  redirectTo: '/movies'});

}]);