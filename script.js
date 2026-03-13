let nomeCliente = document.getElementById("nomeCliente")
let btnCadastrar = document.querySelector("#btnCadastrar")
let mensagem = document.getElementById("mensagem")

btnCadastrar.addEventListener("click", () => {
mensagem.innerText = `Seja bem vindo ${nomeCliente.value}`
})