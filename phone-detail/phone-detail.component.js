(function() {
    
'use strict'

// Register 'phoneDetail' component, along with its associated controller and template
angular.module('phoneDetail').
component('phoneDetail', {
    templateUrl: "/phone-detail/phone-detail.template.html",
    controller: PhoneDetailController
});

function PhoneDetailController($http, $routeParams) {
    var self = this;
    var phoneId = $routeParams.phoneId;
    
    $http.get("phones/" + phoneId + ".json").then(function(response) {
        self.phone = response.data;
        
        self.setImage(self.phone.images[0]);
    });
    
    self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
    }
}
PhoneDetailController.$inject = ['$http', '$routeParams'];

})();