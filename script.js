let inputTarefa = document.getElementById("inputTarefa")
let btnAdicionar = document.querySelector("#btnAdicionar")
let mensagem = document.getElementById("mensagem")
let listaTarefas = document.getElementById("listaTarefas")

btnAdicionar.addEventListener("click", () => {

    if (!inputTarefa.value) {
        mensagem.innerText = 'Tarefa vazia!'
        mensagem.className = 'text-danger fw-bold'
    } else {
        let item = document.createElement("li")
        item.className = "list-group-item"
        item.innerText = inputTarefa.value
        listaTarefas.appendChild(item)
        mensagem.className = 'text-success fw-bold'
        mensagem.innerText = `Criado com sucesso`
    }

})