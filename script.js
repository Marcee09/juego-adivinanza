let numeroAzar = Math.round(Math.random() * 100) + 1;

let intentos = 5;

function jugar() {
    let numeroIng = document.getElementById('numero').value;
    let numeroIngresado = parseInt(numeroIng);

    let mensaje = document.getElementById('mensaje');

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = 'Cuidado!! Debes elegir un número entre 1 y 100';
        return;
    }

    if (intentos > 0) {
        if (numeroIngresado === numeroAzar) {
            mensaje.textContent = '¡Felicidades! Ganaste';
            mensaje.style.color = 'green';
            document.getElementById('numero').disabled = true;
            return;
        } else if (numeroIngresado < numeroAzar) {
            mensaje.textContent = 'Más alto! Elige un número mayor al ingresado';
            mensaje.style.color ='red'
        } else {
            mensaje.textContent = 'Más bajo! Elige un número menor al ingresado';
            mensaje.style.color = 'red'
        }

        intentos--;
        mensaje.textContent += ' Te quedan ' + intentos + ' intentos';
    } else {
        mensaje.textContent = '¡Oh no! Te quedaste sin intentos. El número era ' + numeroAzar;
        mensaje.style.color = 'red';
        document.getElementById('numero').disabled = true;
    }
}
