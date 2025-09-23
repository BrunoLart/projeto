
let tarefas = [];


function adicionnartarefa(){

    const inputTarefa = document.getElementById("inputTarefa")      
    let tarefa = inputTarefa.value.trim()
    
    const mensagem = document.getElementById("mensagem")

    if(tarefa == ""){

        let mensagemErro = "Digite uma tarefa para sua lista"
        mensagem.textContent = mensagemErro; 
    }else{

        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;   
        tarefas.push(tarefa)
        renderizarTarefas() 

    } 

    inputTarefa.value = ""

}