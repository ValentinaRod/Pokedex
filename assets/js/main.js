
/*Ajax que llame cuando haga click*/
/*Ajax que me busque la img */



/*Ajax que llame a los 800 pokemones*/
$(document).ready(function(){
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon",
        type: "GET",
        dataType: "json",
        data: {"limit": "811"},
    })
    .done(function(res) {
        console.log("success");
        for (var i = 1; i < 700; i++) {
        var Mypoke = $("<div class= 'col s4 m4 l4 xl4' href='#modal1'> <img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + "></div>");
            $("div.misPokemones").append(Mypoke);
        }

	})
        .fail(function(){
            console.log('error');
        })
        .always(function(){
            console.log('complete');
        });
    })