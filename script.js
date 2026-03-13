let btnEnviar = document.querySelector("#btnEnviar")
let mensagem = document.getElementById("mensagem")

btnEnviar.addEventListener("click", () => {
mensagem.innerText = `Mensagem alterada pelo JS`
})