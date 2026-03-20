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
        item.className = "d-flex align-items-center gap-2"

        let texto = document.createElement("span")
        texto.innerText = inputTarefa.value

        let btnRemover = document.createElement("button")
        btnRemover.innerText = "Remover"
        btnRemover.className = "btn btn-danger btn-sm"
        btnRemover.addEventListener("click", () => {
            item.remove()
        })

        item.appendChild(texto)
        item.appendChild(btnRemover)
        listaTarefas.appendChild(item)

        mensagem.className = 'text-success fw-bold'
        mensagem.innerText = 'Criado com sucesso'
    }
})