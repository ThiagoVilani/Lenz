// EnviarEmail()


async function EnviarEmail(){
    const response = await fetch('https://lenzback.onrender.com/visita-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
        }),
    });
}
