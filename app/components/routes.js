/**
 * Created by tobi on 6/1/17.
 */


myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(function ($injector) {

        var $state = $injector.get('$state');
        $state.go('app');

    });


    $stateProvider
        .state('app', {
            views: {
                'layout': {
                    templateUrl: 'index.html'
                }
            }
        }).state('user', {
        views: {
            'layout': {
                templateUrl: 'views/user.html',
                controller: 'userController',
                controllerAs: 'vm'
            }
        }
    })
});