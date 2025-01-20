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
      { lat: -34.529142, lng: -58.452134 },
      { lat: -34.549801, lng: -58.500400 },
      { lat: -34.615646, lng: -58.531279 },
      { lat: -34.653807, lng: -58.529005},
      { lat: -34.705668, lng: -58.461574},
      { lat: -34.907339, lng: -58.628735},
      { lat: -34.907339, lng: -58.628735},
      { lat: -34.935029, lng: -58.551953},
      { lat: -34.841084, lng: -58.436746},
      { lat: -34.840082, lng: -58.358851},
      { lat: -34.721508, lng: -58.189480},
      { lat: -34.721508, lng: -58.189480},
      { lat: -34.529142, lng: -58.452134 },
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
