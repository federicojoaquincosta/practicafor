let numeroIteraciones = 0;

function imprimir() {
    numeroIteraciones = document.querySelector("#cant_mensajes").value; 

for (let i = 0; i < numeroIteraciones; i ++) {
    document.querySelector("#resultado").innerHTML += `
    <h3>Hola!</h3>
    <br>
    `
}
}