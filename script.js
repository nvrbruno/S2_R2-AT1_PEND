let nomeTarefa = document.getElementById("nomeTarefa")
let btnCriar = document.querySelector("#btnCriar")
let mensagem = document.getElementById("mensagem")
let listaTarefas = document.getElementById("listaTarefas")

btnCriar.addEventListener("click", () => {
    let item = document.createElement("li")
    item.className = "list-group-item"
    item.innerText = nomeTarefa.value
    listaTarefas.appendChild(item)
    mensagem.className = "text-success fw-bold"
    mensagem.innerText = "Criado com sucesso"
})