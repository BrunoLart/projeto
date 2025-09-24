function adicionarCadastro(){


    const name = document.getElementById('name');
    const email = document.getElementById('email');
    
    
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
     if (!nameRegex.test(name.value)) {
            alert(('Nome inválido - POR FAVOR insira um Nome válida!! .'))
            return;
        
        }
    
     else if (!emailRegex.test(email.value)) {
            alert(('Email inválido  .'))
            return;
        
        }
    //Value =""/ Limpa o campo (input) nome e email que o usuário digitar.
    name.value = ""
    email.value = ""
    alert('OBRIGADO POR FAZER PARTE DO NOSSO TIME');
    
    
    
    
    
    
    
    }