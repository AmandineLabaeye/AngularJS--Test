app.controller('EditClientCtrl', function($scope, $rootScope, Client, $routeParams, $timeout) {

    $rootScope.loading = true;

    Client.getClient($routeParams.id).then(function(client) {

        $timeout(function() {
            $rootScope.loading = false;

            $scope.id = client[$routeParams.id].id;
            $scope.name = client[$routeParams.id].name;
            $scope.siret = client[$routeParams.id].siret;

        }, 1000);
    })

    $scope.modifier = function(nom, siret) {

        Client.editClient($scope.id, nom, siret);

        document.location.href = "#!/read";
    }

})