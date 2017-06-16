$(function() {
  console.log("Loading cities...");

  function loadCities() {
    $.getJSON( "/api/cities/", function(cities) {
        console.log(cities);
        var message = "Nobody is here";
        if ( cities.length > 0 ) {
          message = "From " + cities[0].country;
        }
        $( ".intro-text" ).text(message);
    });
  }

  loadCities();
  setInterval( loadCities, 2000) ;
});
