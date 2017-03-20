var app=angular.module("movieApp" , ["ngRoute"]);


app.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/pages/index.html', {
        
            templateUrl : 'pages/index.html'/*,
            controller : 'apiCtrll'*/
        })
        
        $routeProvider.when('/pages/search.html', {
            templateUrl : 'pages/search.html',
            controller : 'newCtrll'
            
        })
        $routeProvider.when('/pages/detailedView.html', {
            templateUrl : 'pages/detailedView.html',
           controller : 'backCtrll'
            
        }).otherwise({
        	url : "/" ,
            redirectTo : 'pages/index.html'
        });
        
    }
]);


app.controller("apiCtrll",function($scope,$http, $rootScope, $location,$filter){
	
	
	$scope.findMovie=function(){
		movieName=$scope.movieName;
		nameMovie=$filter('uppercase')(movieName);
		var url="http://www.omdbapi.com/?t="+nameMovie;
		$http.get(url).then(function(response){
			$rootScope.movieDetails = response.data;
            $location.url('pages/search.html');
		});
	};
    
	
});

app.controller("newCtrll",function($scope,$http, $rootScope, $location){
	$scope.getDetail=function(){
		$location.url('pages/detailedView.html');
	},
	$scope.goBack=function(){
		$location.url('/pages/index.html');
	}
	

});
app.controller("backCtrll",function($scope,$http, $rootScope, $location){
	$scope.searchBack=function(){
		$location.url('/pages/search.html');
	}

});
