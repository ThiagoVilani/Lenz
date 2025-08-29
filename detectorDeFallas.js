async function cargarArbol() {
  const res = await fetch("./arbolFallas.json");
  const arboleda = await res.json();
  iniciar(arboleda);
} 


function iniciar(nodo) {
  const divPregunta = document.getElementById("pregunta");
  const divBotones = document.getElementById("div-botones");
  divBotones.innerHTML = ""; 
  divPregunta.innerHTML = ""; 

  // Si es un nodo con pregunta
  if (nodo.pregunta){
    const pregunta = document.createElement("h2");
    pregunta.setAttribute("class","pregunta");
    pregunta.textContent = nodo.pregunta;
    divPregunta.appendChild(pregunta);

    nodo.opciones.forEach(op => {
      const boton = document.createElement("button");
      boton.setAttribute("class","boton-opcion");
      boton.textContent = op.texto;
      boton.onclick = () => {
        if(op.pregunta){
          console.log("tiene pregunta");
          iniciar(op.opciones);
        }else if (op.respuesta){
          console.log("tiene respuesta");
          mostrarResultado(op.respuesta);
        }else if (op.siguiente){
          console.log("tiene siguiente");
          iniciar(op.siguiente);
        }
      };
      divBotones.appendChild(boton);
    });
  }else if(nodo.respuesta){
    mostrarResultado(nodo.respuesta);
  }
}

function mostrarResultado(resultado) {
  const divBotones = document.getElementById("div-botones");
  const p = document.getElementById("pregunta");
  p.innerHTML = `<p>Diagnóstico: ${resultado}</p>`
  divBotones.innerHTML = `<button class="btn-volver" onclick="cargarArbol()">Volver a empezar</button>`;
}

cargarArbol();
