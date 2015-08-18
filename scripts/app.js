(function() {
	var app = angular.module("myApp", ["ui.router"]);
	app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("home", {
				url: "",
				templateUrl: "views/home.html"
			})
			.state("customers", {
				url: "/customers",
				templateUrl: "views/customers.html"
			})
			.state("orders", {
				url: "/orders",
				templateUrl: "views/orders.html"
			})
			.state("settings", {
				url: "/settings",
				templateUrl: "views/settings.html"
			});
			$urlRouterProvider.otherwise("home");						
	}]);
})();