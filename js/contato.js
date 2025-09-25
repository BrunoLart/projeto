// Arquivo: js/contato.js
// JavaScript específico para a página de Contato
// Autor: [Seu Nome]
// Data: 24/09/2025

document.addEventListener('DOMContentLoaded', () => {

    // --- Efeito de rolagem no cabeçalho ---
    const cabecalho = document.querySelector('.cabecalho');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            cabecalho.classList.add('rolagem');
        } else {
            cabecalho.classList.remove('rolagem');
        }
    });

    // --- Animações ao rolar a página (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementosAnimar = document.querySelectorAll('.animar');
    elementosAnimar.forEach(el => observer.observe(el));

    // --- Máscaras para os campos ---
    function aplicarMascaraTelefone(input) {
        let valor = input.value.replace(/\D/g, '');
        if (valor.length <= 10) {
            valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
        } else {
            valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        }
        input.value = valor;
    }

    // --- Funcionalidade do Formulário de Contato ---
    const formContato = document.querySelector('.form-contato');
    if (formContato) {
        const inputNome = formContato.querySelector('input[name="nome"]');
        const inputEmail = formContato.querySelector('input[name="email"]');
        const inputTelefone = formContato.querySelector('input[name="telefone"]');
        const inputNascimento = formContato.querySelector('input[name="nascimento"]');
        const textareaMensagem = formContato.querySelector('textarea[name="mensagem"]');

        // Aplicar máscara do telefone
        inputTelefone.addEventListener('input', () => {
            aplicarMascaraTelefone(inputTelefone);
            validarTelefone(inputTelefone);
        });

        // Validações em tempo real
        inputNome.addEventListener('input', () => validarCampo(inputNome));
        inputEmail.addEventListener('input', () => validarEmail(inputEmail));
        inputNascimento.addEventListener('change', () => validarIdade(inputNascimento));
        textareaMensagem.addEventListener('input', () => validarCampo(textareaMensagem));

        formContato.addEventListener('submit', (e) => {
            e.preventDefault();
            const isNomeValido = validarCampo(inputNome);
            const isEmailValido = validarEmail(inputEmail);
            const isTelefoneValido = validarTelefone(inputTelefone);
            const isIdadeValida = validarIdade(inputNascimento);
            const isMensagemValida = validarCampo(textareaMensagem);

            if (isNomeValido && isEmailValido && isTelefoneValido && isIdadeValida && isMensagemValida) {
                alert('Mensagem enviada com sucesso! Agradecemos o seu contato.');
                formContato.reset();
                formContato.querySelectorAll('.form-grupo').forEach(fg => fg.classList.remove('sucesso'));
            }
        });
    }

    // --- Funções de Validação ---
    function definirErro(input, mensagem) {
        const formGrupo = input.parentElement;
        formGrupo.classList.add('erro');
        formGrupo.classList.remove('sucesso');
        const small = formGrupo.querySelector('.mensagem-erro');
        if (small) small.innerText = mensagem;
    }

    function definirSucesso(input) {
        const formGrupo = input.parentElement;
        formGrupo.classList.add('sucesso');
        formGrupo.classList.remove('erro');
        const small = formGrupo.querySelector('.mensagem-erro');
        if (small) small.innerText = '';
    }

    function validarCampo(input, required = true) {
        if (required && input.value.trim() === '') {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        } else {
            definirSucesso(input);
            return true;
        }
    }

    function validarEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(input.value).toLowerCase())) {
            definirSucesso(input);
            return true;
        } else if (input.value.trim() === '') {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        }
        else {
            definirErro(input, 'E-mail inválido.');
            return false;
        }
    }

    function validarTelefone(input) {
        const telefone = input.value.replace(/\D/g, '');
        
        if (telefone.length === 0) {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        }
        
        if (telefone.length < 10 || telefone.length > 11) {
            definirErro(input, 'Telefone deve ter 10 ou 11 dígitos.');
            return false;
        }
        
        definirSucesso(input);
        return true;
    }

    function validarIdade(input) {
        if (input.value === '') {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        }
        
        const nascimento = new Date(input.value);
        const hoje = new Date();
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth() - nascimento.getMonth();
        
        if (mesAtual < 0 || (mesAtual === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        
        if (idade < 18) {
            definirErro(input, 'Você deve ser maior de 18 anos.');
            return false;
        }
        
        if (idade > 100) {
            definirErro(input, 'Data de nascimento inválida.');
            return false;
        }
        
        definirSucesso(input);
        return true;
    }

});
