document.getElementById("form-solicitar-presupuesto").addEventListener("click",()=>{
    event.preventDefault();
})
document.getElementById("enviar-form").addEventListener("click",async()=>{
    const ok = await Validar();
    if(ok){
        const nombre = document.getElementById("input-nombre").value;
        const numeroTelefono = document.getElementById("input-telefono").value;
        const ubicacion = document.getElementById("input-ubicacion").value;
        const descripcion = document.getElementById("input-descripcion").value;
        await EnviarEmail(nombre,numeroTelefono,ubicacion,descripcion)
        CartelPresupuesto();
    }
})

async function EnviarEmail(nombre,numeroTelefono,ubicacion,descripcion){
    const response = await fetch('https://lenzback.onrender.com/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            nombre, 
            numeroTelefono,
            ubicacion,         
            descripcion
        }),
    });
}


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