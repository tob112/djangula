/**
 * Created by tobi on 6/1/17.
 */

angular.module('myApp').factory('apiService', ['$http', 'Restangular', function ($http, Restangular) {


    var users = Restangular.all('api/v1/user');


    users.list = function () {
        return users.getList()

    };


    users.show = function (id) {
        return users.get(id)
    };

    users.create = function (users) {
        users.post(users).then(function () {

        })
    }

    return users

}]);