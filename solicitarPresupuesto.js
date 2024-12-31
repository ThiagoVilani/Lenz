document.getElementById("form-solicitar-presupuesto").addEventListener("click",()=>{
    event.preventDefault();
})
document.getElementById("enviar-form").addEventListener("click",()=>{
    CartelPresupuesto();
})

function CartelPresupuesto(){
    Swal.fire({
        title: '¡Presupuesto solicitado!',
        text: 'Nos pondremos en contacto enseguida',
        icon: 'success'
      });
}