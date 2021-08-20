app.controller('ReadClientCtrl', function($scope, $rootScope, Client, $timeout) {

    $rootScope.loading = true;

    $timeout(function() {
        if (Client.getClients() !== []) {
            $rootScope.loading = false;
            $scope.clients = Client.getClients().$$state.value;
        }
    }, 1000)

    $scope.supprimer = function(id, nom) {

        Client.deleteClient(id, nom);

        document.location.href = "#!/read";
    }

})