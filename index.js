import { InsertarNavGrande } from "./herramientas.js";

document.addEventListener("DOMContentLoaded", () => {
  InsertarNavGrande(document,window);
  
  //  Esto era para probar hacer las URLs mas limpias

  // console.log(document.getElementsByClassName("nav-link")[2]);
  // document.getElementsByClassName("nav-link")[2].addEventListener("click",async()=>{
  //   await fetch("http://127.0.0.1:3000/contacto");
  //   console.log("click");
  // });
});
