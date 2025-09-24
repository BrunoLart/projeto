

let tarefas = [];

function adicionarTarefa(){

    
        
       const inputTarefa = document.getElementById("inputTarefa")      
        let tarefa = inputTarefa.value.trim() //value é o valor do input/ 
        
        // validação reGex campo doação.
        const inputTarefaRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        
        if (!inputTarefaRegex.test(inputTarefa.value)) {
        alert(('Doação inválido - POR FAVOR insira uma doação válida!! .'))
        return;
    
    }
          
        //let mensagem = para mensagemErro e mensagemSucesso. 
        const mensagem = document.getElementById("mensagem")

        
        
         if(tarefa == ""){

            let mensagemErro = "Doação inválida"
            mensagem.textContent = mensagemErro; 
             mensagem.style.color = "red";
        }  else{ 
       
        let mensagemSucesso = "Doação  adicionada com sucesso, Obrigado pela sua doação !";
         mensagem.textContent = mensagemSucesso; 
         mensagem.style.color = "green";  
         tarefas.push(tarefa)
         renderizarTarefas() // chamar (tarefa) no array for    
         
         
        
        }
        // limpa o input do usuário
        inputTarefa.value = ""
        
   
    // mensagem.textContent.style.color/ mudar a cor 
    
    }

    function renderizarTarefas(){
        const listaTarefas = document.getElementById("listaTarefas")
        listaTarefas.innerHTML = ""  /*apagar a tarefas html*/
        
        let i = 0;
        for(i; i < tarefas.length; i++){ //tarefas.length quantidade de vezes que i vai percorrer
        
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i] /* adiciona tarefas[i] ao for  */
        listaTarefas.appendChild(novaTarefa) 
        }


    }

        