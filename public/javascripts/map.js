var mymap = L.map('map').setView([14.6081638,-90.6783766],12);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(mymap);


$.ajax(
    {
        dataType: "json",
        url: "/api/bicicletas",
        success: function (result) {
            console.log(result);
            result.bicicletas.forEach( function (bicicleta) {
                L.marker(bicicleta.coordenadas).addTo(mymap);
            })
        }
    }
)



