(function() {
    
'use strict'

// Register 'phoneDetail' component, along with its associated controller and template
angular.module('phoneDetail').
component('phoneDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    controller: PhoneDetailController
});

function PhoneDetailController($routeParams) {
    this.phoneId = $routeParams.phoneId;
}
PhoneDetailController.$inject = ['$routeParams'];

})();