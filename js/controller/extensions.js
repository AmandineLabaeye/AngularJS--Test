app.controller('ExtensionsCtrl', function($scope, $rootScope, Extensions, $timeout) {

    $rootScope.loading = false;

    $scope.update = function(nomFichier) {

        let ext = Extensions.getExt(nomFichier);

        if (ext !== "") {

            $scope.extensions = ext;

            $scope.nomfichier = nomFichier;

        } else {

            $scope.extensions = "Il n'y a pas d'extensions dans ce nom de fichier";

            $scope.nomfichier = nomFichier;

        }

    }


});