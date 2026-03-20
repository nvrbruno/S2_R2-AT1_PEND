let nomeTarefa = document.getElementById("nomeTarefa")
let btnCriar = document.querySelector("#btnCriar")
let mensagem = document.getElementById("mensagem")
let lista = document.getElementById("lista")

btnCriar.addEventListener("click", () => {
    let item = document.createElement("li")
    item.className = "list-group-item"
    item.innerText = inputTarefa.value
    lista.appendChild(item)
    mensagem.innerText = `Criado com sucesso`
})