const nav = `<div class="container-fluid">
        <a href="#" class="lenz-logo">
          <img src="images/LenzLight.png" alt="lenz-logo">
        </a>
        <div id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/solicitarPresupuesto.html">Solicitar presupuesto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>`;


        // EnviarEmail()


async function EnviarEmail(){
    const response = await fetch('https://lenzback.onrender.com/visita-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
        }),
    });
}


document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 750){
        document.querySelector("nav").remove(); // Eliminar el <nav> si existe
        document.querySelector(".main-mobile").insertAdjacentHTML("beforebegin", nav);
    } 
    window.addEventListener("resize", function () {
        let anchoPantalla = window.innerWidth;
        let navExistente = document.querySelector("nav");

        if (anchoPantalla > 750 && navExistente) {
            navExistente.remove(); // Eliminar el <nav> si existe
            document.querySelector(".main-mobile").insertAdjacentHTML("beforebegin", nav);
            console.log("Nav insertado a " + anchoPantalla + "px");
        }
    });
});

