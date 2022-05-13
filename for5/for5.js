let numeroIteraciones = 0;

function generarOpciones() {
    numeroIteraciones = document.querySelector("#numero_opciones").value

    for (let i = 1; i <= numeroIteraciones; i++) {
        document.querySelector("#meses_sub").innerHTML += `
        <option value="${i}">${i} meses</option>
    <br>
    `
    }
}