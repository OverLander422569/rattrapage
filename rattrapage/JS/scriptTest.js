$(document).ready(function () {

    //déclaration des variables
    var round = 1;
    var nbEssai = 10;


    // Générer un chiffre en aléatoire
    var min = 1;
    var max = 100;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    var toprint;

    //Afficher le nombre généré
    document.getElementById("random").innerHTML = "Nombre Généré : " + random;

    //Validation avec touche Entrée
    $("#PropositionField").on('keyup', function (e) {
        if (e.which == 13) {
            $("#SubmitButton").click();
        }
    });

    $("#SubmitButton").click(function(){
        var tentative=[];
        var reponse = $("#PropositionField").val();

        // Ajouter dans le ul la réponse de l'utilisateur
        //Créer un <li>
        // J'ajoute un child au <li> puis j'ajoute le <li> au <ul>
        // Créer un texte dans le <li>

        if (reponse < random) {
            toprint = " c'est plus !";
        } else if (reponse > random) {
            toprint = " c'est moins !";
        } else if (reponse == random) {
            toprint = " bravo !";
        }

        // Vider le input
        $("#PropositionField").val(" ");

        $("#ListeRep").append('<li>Vous avez dit : ' + reponse + toprint + '</li>');


        // Affichage d'une pop-up quand solution trouvée pour que l'utilisateur choisisse si rejoue ou pas
        if (toprint == " bravo !") {
            if (confirm("Voulez-vous rejouer ?")) {
                location.reload();
                hello();
            } else {
                alert("Au Revoir Looser ! :) ");
            }
        }

        // Affichage d'une astuce au bout de 6 essais
        if (round == 6) {
            $("#help").html("ASTUCE : Il est compris entre 1 et 100");
        }

        // Affichage du nombre de clics
        $("#NbClic").html('<p>Nombre de coups : ' + round++ + '</p>');

        // tableau pour afficher chacun des essais
        tentative.push(reponse);
        $("#tableau").append(tentative + '.');
    });

    //template pour utiliser le même titre par pages (ne fonctionne pas)
    function loadUser() {
        // récupération du template
        var template = $('#template').html();

        // objet javascript contenant les données à afficher
        var data = {
            titre: "Le jeu du plus ou moins",
            name: "Roger"
        };

        // génération du HTML
        var rendered = Mustache.render("{{titre}}");

        // Insertion du résultat dans la page HTML
        $('#target').html(rendered);
    }



});
