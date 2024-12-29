// Cargar el mapa cuando se cargue la página
window.onload = initMap;


function initMap() {
    const centro = { lat: -34.6037, lng: -58.3816 }; // Coordenadas del centro del mapa
    const mapa = new google.maps.Map(document.getElementById("zona-operacion"), {
      zoom: 13,
      center: centro,
    });

    // Coordenadas del polígono (forma de la zona)
    const coordenadasZona = [
      { lat: -34.413060, lng: -58.584014 },
      { lat: -34.694140, lng: -58.690723 },
      { lat: -34.866617, lng: -58.683282 },
      { lat: -34.955949, lng: -58.617701 },
      { lat: -34.850610, lng: -58.426010 },
      { lat: -34.742766, lng: -58.198312 },
      { lat: -34.446714, lng: -58.489600 },
    ];

    // Crear el polígono
    const zona = new google.maps.Polygon({
      paths: coordenadasZona,
      strokeColor: "#FF0000", // Color del borde
      strokeOpacity: 0.8,    // Opacidad del borde
      strokeWeight: 2,       // Grosor del borde
      fillColor: "#FF0000",  // Color de relleno
      fillOpacity: 0.35,     // Opacidad del relleno
    });

    // Añadir el polígono al mapa
    zona.setMap(mapa);
  }
