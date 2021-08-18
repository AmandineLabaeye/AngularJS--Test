app.factory('Client', function($q) {

    let factory = {

        clients: [{
                "id": 0,
                "name": "Anivet",
                "siret": 40919138048471
            },
            {
                "id": 1,
                "name": "Isostream",
                "siret": 88225848091812
            },
            {
                "id": 2,
                "name": "Xylar",
                "siret": 40439731017397
            },
            {
                "id": 3,
                "name": "Zogak",
                "siret": 97618066128037
            },
            {
                "id": 4,
                "name": "Polaria",
                "siret": 36488158232747
            },
            {
                "id": 5,
                "name": "Xth",
                "siret": 71486046681964
            }
        ],

        getClients: function() {
            var deferred = $q.defer();

            deferred.resolve(factory.clients);

            return deferred.promise;
        },

        getClient: function(id) {
            var deferred = $q.defer();

            var client = {};
            var clients = factory.getClients().then(function(clients) {;
                angular.forEach(factory.clients, function(value, key) {
                    if (value.id == id) {
                        client = value;
                    }
                    deferred.resolve(clients);
                })
            }, function(msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        },

        setClient: function(id, nom, siret) {
            // Il va ajouter un nouveau client
        },

        editClient: function(id, nom, siret) {
            // Il va modifier un client
        },

        deleteClient: function(id) {
            // Il va supprimer un client
        }

    };

    return factory;

})