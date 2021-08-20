app.controller('AddClientCtrl', function($scope, $rootScope, Client, $timeout) {

    $rootScope.loading = true;

    $timeout(function() {
        $rootScope.loading = false;

    }, 1000);

    $scope.ajouter = function(id, nom, siret) {

        Client.addClient(id, nom, siret);

        document.location.href = "#!/read";
    }

})