const RojoSlider = document.getElementById('rojo');
const VerdeSlider = document.getElementById('verde');
const AzulSlider = document.getElementById('azul');

const TextoRojo = document.getElementById('TextoRojo');
const TextoVerde = document.getElementById('TextoVerde');
const TextoAzul = document.getElementById('TextoAzul');

function updateBackgroundColor() {
    const rojo = RojoSlider.value;
    const verde = VerdeSlider.value;
    const azul = AzulSlider.value;


    function actualizarColor(rojo, verde, azul) {
        const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
        document.body.style.backgroundColor = colorRGB;
    }
    actualizarColor(rojo, verde, azul);
    rojo.textContent = rojo;
    verde.textContent = verde;
    azul.textContent = azul;
}

RojoSlider.addEventListener('input', updateBackgroundColor);
VerdeSlider.addEventListener('input', updateBackgroundColor);
AzulSlider.addEventListener('input', updateBackgroundColor);

// Color de fondo Inicial
updateBackgroundColor();