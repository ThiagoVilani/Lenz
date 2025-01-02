document.getElementById("form-solicitar-presupuesto").addEventListener("click",()=>{
    event.preventDefault();
})
document.getElementById("enviar-form").addEventListener("click",async()=>{
    const ok = await Validar();
    if(ok){
        CartelPresupuesto();
    }
})

function CartelPresupuesto(){
    Swal.fire({
        title: '¡Presupuesto solicitado!',
        text: 'Nos pondremos en contacto enseguida',
        icon: 'success'
      });
}

async function Validar(){
    if(document.getElementById("input-nombre").value == "" ||
        document.getElementById("input-telefono").value == "" ||
        document.getElementById("input-ubicacion").value == ""){
        Swal.fire({
            title:"¡Campos vacios!",
            text:"Debe completar todos los datos antes de solicitar el presupuesto",
            icon:"error"
        })
        return false;
    }
    return true;
}