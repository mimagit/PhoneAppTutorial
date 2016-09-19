(function() {
    
'use strict'

// register 'phoneList' componmenet, along with its associated controller and template

angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',        
        controller: PhoneListController
    
});
    
function PhoneListController($http) {
    var self = this;
    
    // preselected value for order by drop down
    self.orderProp = "age"; 
    
    $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
    }); 
}
PhoneListController.$inject = ['$http'];

    
})();