
/*
//per DIV INFORMAZIONI PROGETTI
$(document).ready(function(){
  $( ".info" ).on("mouseenter", function(n) {
  $(this).next().toggle();
} );
});

$(document).ready(function(){
  $( ".info" ).on("mouseleave", function(n) {
  $(this).next().toggle();
} );
});

$(document).ready(function(){
  $( ".info" ).on("click", function(n) {
  $( "project" ).toggle();
} );
});

function OpenMore(n) {
    var foto = $(".project");
    foto[n].style.display = "block";
    
    //var foto = $(".info");
    //foto[n].style.display = "none";
$( this ).find( "gallery" ).last().toggle();
$(this).style.backgroundColor= "#646464";

}

    //For multiple modals
    var more = $(".project");
    //i represents which modal. It will go through all modals
    for (var i = 0; i < more.length; i++) {
    }

*/
/*
function OpenMore(n) {
  $(".project")[n].style.display = "block";
  //var info = $(".project");
   //info[n].style.display = "block";
    //if (info[n].style.display = "none") {info[n].style.display = "block"};

$(this).toggleClass('aperto');
};*/


function OpenMore(n) {
  //$(".project")[n].style.display = "block";

  $($(".project")[n]).toggleClass('aperto');
};



//$(this).toggleClass(‘aperto’)


/*
var info = $(".project")
$(".riga").click(function(n){
  info.toggle();
});*/