/*Ajax que llame a los 800 pokemones*/
/*Ajax que llame cuando haga click*/
/*Ajax que me busque la img */
$(document).ready(function(){// obtengo
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon",
        type: "GET",
        dataType: "json",
        data: {"limit": "811"},
    })
    .done(function(res) {
        console.log("success");
        for (var i = 1; i < 811; i++) {
        var pokePic = $("<div class= '.col-lg-3 .col-md-3 .col-s-3 .col-xs-3'> <img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + "></div>");
            $("div.pokemon").append(pokePic);
        }