var nameofmodule = angular.module('nameofapp', []);



/* SERVICE */
nameofmodule.service('NameOfService', function () {

    //contacts array to hold list of all contacts
    var servicevariable1contacts = [{ dataproperty1: 0, 'dataproperty2': 'Carlton', 'dataproperty3': 'c@d.com', 'dataproperty4': '123-2343-44' }];

    //to create unique contact id
    var servicevariable2uid = 1;
    
    //simply returns the contacts list
    this.servicefunction1 = function () { return servicevariable1contacts; }

    //simply search contacts list for given id and returns the contact object if found
    this.servicefunction2 = function (servicefunctionparameter1) { for (loopvariable2 in servicevariable1contacts) { if (servicevariable1contacts[loopvariable2].dataproperty1 == servicefunctionparameter1) { return servicevariable1contacts[loopvariable2]; } } }
    
    //save method create a new contact if not already exists else update the existing object
    this.servicefunction3 = function (servicefunctionparameter2) {
	    //if this is new contact, add it in contacts array
        if (servicefunctionparameter2.dataproperty1 == null) { servicefunctionparameter2.dataproperty1 = servicevariable2uid++; servicevariable1contacts.push(servicefunctionparameter2);} 
        //for existing contact, find this contact using id and update it.
        else { for (loopvariable3 in servicevariable1contacts) { if (servicevariable1contacts[loopvariable3].dataproperty1 == servicefunctionparameter2.dataproperty1) { servicevariable1contacts[loopvariable3] = servicefunctionparameter2; } } }
    }

    //iterate through contacts list and delete contact if found
    this.servicefunction4 = function (servicefunctionparameter3) { for (loopvariable4 in servicevariable1contacts) { if (servicevariable1contacts[loopvariable4].dataproperty1 == servicefunctionparameter3) { servicevariable1contacts.splice(loopvariable4, 1); } } }

});



/* CONTROLLER */
nameofmodule.controller('NameOfController', function ($scope, NameOfService) {

    $scope.scopeproperty1 = NameOfService.servicefunction1();
    $scope.scopeproperty2 = function () { NameOfService.servicefunction3($scope.model1); $scope.model1 = {}; }
    $scope.scopeproperty3 = function (controllerparameter1) { NameOfService.servicefunction4(controllerparameter1); if ($scope.model1.dataproperty1 == controllerparameter1) $scope.model1 = {}; }
    $scope.scopeproperty4 = function (controllerparameter2) { $scope.model1 = angular.copy(NameOfService.servicefunction2(controllerparameter2)); }

})


