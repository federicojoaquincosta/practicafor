let numeroIteraciones = 0;
const IMG_GATO = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stray_calico_cat_near_Sagami_River-01.jpg/220px-Stray_calico_cat_near_Sagami_River-01.jpg" alt="gato" srcset="">`

function imprimir() {
    numeroIteraciones = document.querySelector("#cant_mensajes").value; 

for (let i = 1; i <= numeroIteraciones; i ++) {
    document.querySelector("#resultado").innerHTML += `
    ${IMG_GATO}
    <br>
    `
}
}