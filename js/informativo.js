
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

    // --- Funcionalidade do Formulário de Newsletter ---
    const formNewsletter = document.querySelector('.form-newsletter');
    if(formNewsletter) {
        const inputEmail = formNewsletter.querySelector('input[name="email"]');
        const checkboxAceite = formNewsletter.querySelector('input[name="aceite"]');
        
        inputEmail.addEventListener('input', () => validarEmail(inputEmail));

        formNewsletter.addEventListener('submit', (e) => {
            e.preventDefault();
            const isEmailValido = validarEmail(inputEmail);
            const isAceiteMarcado = checkboxAceite.checked;

            if (!isAceiteMarcado) {
                 alert('Você precisa aceitar os termos para se inscrever.');
            }

            if (isEmailValido && isAceiteMarcado) {
                alert(`O e-mail ${inputEmail.value} foi cadastrado com sucesso!`);
                formNewsletter.reset();
                inputEmail.parentElement.classList.remove('sucesso');
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

});
