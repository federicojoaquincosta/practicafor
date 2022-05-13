let numeroIteraciones = 0;
/*if (numeroIteraciones == 0) {
 //   document.querySelector("#meses_sub").innerHTML = `
//<option value="0">Seleccione</option>` }
*/

function generarOpciones() {
    numeroIteraciones = document.querySelector("#numero_opciones").value
    document.querySelector("#meses_sub").innerHTML = `
    <option value="0">Seleccione</option>`

    for (let i = 1; i <= numeroIteraciones; i++) {

        if (i == 1) {
            document.querySelector("#meses_sub").innerHTML += `
                <option value="${i}">${i} mes</option> `
        } else {
            document.querySelector("#meses_sub").innerHTML += `
            <option value="${i}">${i} meses</option>
            <br>
            `
        }
    }
}

