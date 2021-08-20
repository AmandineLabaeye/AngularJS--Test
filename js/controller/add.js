app.controller('AddClientCtrl', function($scope, $rootScope, Client) {

    $rootScope.loading = false;

    $scope.ajouter = function(id, nom, siret) {

        Client.addClient(id, nom, siret);

        document.location.href = "#!/read";
    }

})