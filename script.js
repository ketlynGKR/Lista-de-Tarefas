let tarefas = []

// Função que adiciona a tarefa à lista 
function adicionarTarefa() { 


    // Obtém o valor do campo de entrada 
    const inputTarefa = document.getElementById("inputTarefa") 
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

     //Se o valor do input for vazio então mostrar uma mensagem de erro para o usuário
     if (tarefa == "") {
        //mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
         // Exibe a mensagem de erro 
        mensagem.textContent = mensagemErro; 
    } else {
        // Mensagem de sucesso ao adicionar a tarefa 
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        // Exibe a mensagem de sucesso 
        mensagem.textContent = mensagemSucesso; 

        tarefas.push(tarefa)

        //chama a função de renderizarTarefas
        renderizarTarefas()
    }

    // Limpa o campo de entrada após adicionar 
    inputTarefa.value = "" 

}

function renderizarTarefas() {
        // Adiciona a tarefa à lista 
        const listaTarefas = document.getElementById("listaTarefas") 
        listaTarefas.innerHTML = ""

        //for (item inicial, item final, se vaide 1 em 1 ou se pula)
        //let i = 0 padrão usar i como o item inicial. O 0 é por que começa em 0
        for (let i = 0; i < tarefas.length; i++) {

            let novaTarefa = document.createElement("li") 
            novaTarefa.textContent = tarefas[i]

            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover"
            botaoRemover.textContent = "Remover"
            botaoRemover.onclick = () => removerTarefa(i)

            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.textContent = "Editar"
            botaoEditar.onclick = () => editarTarefa(i)


            novaTarefa.appendChild(botaoRemover)
            novaTarefa.appendChild(botaoEditar)
            // Insere o novo item na lista 
            listaTarefas.appendChild(novaTarefa)

        }

}

function removerTarefa(i) {
    //splice remove
    //tarefas.splice(indice, numero de quantos itens vão ser deletados)

    tarefas.splice(i, 1)
    renderizarTarefas()

    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Tarefa removida com sucesso!"
}

function editarTarefa(i) {
    let tarefaEditada = prompt ("Edite a tarefa:")
    //!== Diferente
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }

    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Tarefa editada com sucesso!"
}

function LimparLista() {
    if (tarefas == "") {
        //mostre uma mensagem de erro
        let apagarErro = " Nenhuma Lista para apagar!"
         // Exibe a mensagem de erro 
        mensagem.textContent = apagarErro; 
    } else {
        tarefas.length = 0
        // Mensagem de sucesso ao apagar as tarefa 
        let apagarSucesso = "Lista de tarefas limpa com sucesso!";
        // Exibe a mensagem de sucesso 
        mensagem.textContent = apagarSucesso;
    renderizarTarefas()
    }
}

