app.factory('Extensions', function() {

    let factory = {

        getExt: function(chaineInitiale) {
            let result = "";
            let id;

            for (let i = chaineInitiale.length; i >= 0; i--) {
                if (chaineInitiale[i] === ".") {
                    id = i;
                    result = "";
                    break;
                } else {
                    result = "Il n'y a pas d'extension dans ce nom de fichier";
                }
            }

            for (let o = id + 1; o < chaineInitiale.length; o++) {
                result += chaineInitiale[o];
            }

            return result;
        },

    };

    return factory;

});