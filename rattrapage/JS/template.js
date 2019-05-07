var template = {"titre":"Le jeu du plus ou moins"};
var data = "<h1>{{titre}}</h1>";
$('#titre').append(Mustache.render(data));