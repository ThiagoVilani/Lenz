import { nav } from "./constantes.js";

export function InsertarNavGrande(document,window){
        if (window.innerWidth > 750){
            document.querySelector("nav").remove(); // Eliminar el <nav> si existe
            try{
                document.querySelector(".main-mobile").insertAdjacentHTML("beforebegin", nav);
            }catch{
                try{
                    document.querySelector("main").insertAdjacentHTML("beforebegin",nav);
                }catch{
                    console.log("Error al insertar la nav");
                }
            }
        } 
        window.addEventListener("resize", function () {
            let anchoPantalla = window.innerWidth;
            let navExistente = document.querySelector("nav");
    
            if (anchoPantalla > 750 && navExistente) {
                navExistente.remove(); // Eliminar el <nav> si existe
                try{
                    document.querySelector(".main-mobile").insertAdjacentHTML("beforebegin", nav);
                }catch{
                    try{
                        document.querySelector("main").insertAdjacentHTML("beforebegin",nav);
                    }catch{
                        console.log("Error al insertar la nav");
                    }
                }
            }
        });
}

