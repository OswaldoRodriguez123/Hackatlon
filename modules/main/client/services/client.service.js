angular.module('users').service('transversal',  ['$q', '$http', function($q, $http){
    return({
        testing:testing
    }) 

    function testing(){
        return true;
    }
}])