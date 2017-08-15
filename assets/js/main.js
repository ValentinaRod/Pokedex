
/*Ajax que llame cuando haga click*/
/*Ajax que me busque la img */



/*Ajax que llame a los 800 pokemones
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
    });
/*Ajax que llame cuando haga click-modal*/
/*$(document).ready(function(){
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon",
        type: "GET",
        dataType: "json",
        data: {"limit": "811"},
    })
    .done(function(res) {
        console.log("success");
        $('div.misPokemones').click(function(){
  		$('#modal1').modal('open');
 		return false;
});
        }

	})
        .fail(function(){
            console.log('error');
        })
        .always(function(){
            console.log('complete');

        });
    });*/

var obtenerPokemon = function(url){
    $.ajax({
            url: url,
            type: 'GET',
        dataType: 'json',
        data: {'limit': '12'},
    })
    .done(function(response) {
        console.log(response.results);
        dibujarPokemon(response.results);
        
        
        if(response.previous != null){
            $("#before").attr('href', response.previous);
            $("#before").show();
        }else{
            $("#before").hide();
        }
        if(response.next != null){
            $("#after").attr('href', response.next);
            $("#after").show()
        }else{
            $("#after").hide();
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    }); 
}

var llenarModal = function(url){
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json'
    })
    .done(function(response) {
        $("#modal-pokemon .modal-content").empty();
        $("#modal-pokemon .modal-content").append("<h4>"+response.name+"</h4>");
        $("#modal-pokemon .modal-content").append("<p>" + response.weight + "Kg </p>");
        $("#modal-pokemon .modal-content").append("<img src='" + response.sprites.front_default + "' >");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
}

var dibujarPokemon = function(arrPokemon){
    $("#pokemon-cont").empty();
    var template = "";
    var url = "";
    for(var i = 0; i < Math.ceil(arrPokemon.length / 4); i++){
        template += "<div class='row'>";
        for (var j = 0; j < 4; j++){
            url = arrPokemon[4*i + j].url;
            template += '<div class="col s3">';
            template += '<a href="#modal-pokemon" data-enlace=' + url + ' class="pokemon center">';
            template += '<article>'
            template += '<img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/' + arrPokemon[4*i + j].name + '.png" class="responsive-img">';
            template += '<p>' + arrPokemon[4*i + j].name;
            template += '</p></article></a></div>'
        }
        template += "</div>"

    }
    $("#pokemon-cont").append(template);
    $(".pokemon").click(function(){
        var url = $(this)[0].dataset.enlace;
        llenarModal(url);
    });
}

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  obtenerPokemon('https://pokeapi.co/api/v2/pokemon');

  $("#after,#before").click(function(event) {
    event.preventDefault();
    obtenerPokemon($(this).attr('href'));
  });
});     
    

