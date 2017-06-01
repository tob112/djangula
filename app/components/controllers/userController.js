myApp.controller('userController', function ($state, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, apiService, Restangular) {

    var vm = this;


    var baseAccounts = Restangular.all('/api/v1/user');

    baseAccounts.getList().then(function (users) {


        vm.dtColumns = [
            DTColumnBuilder.newColumn('username').withTitle('Username'),
            DTColumnBuilder.newColumn('email').withTitle('Email')


        ];


        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('data', users.plain());


        vm.displayTable = true;


    });


});


