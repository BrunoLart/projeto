// Arquivo: js/cadastro.js
// JavaScript específico para a página de Cadastro
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
    function aplicarMascaraCPF(input) {
        let valor = input.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        input.value = valor;
    }

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

    function aplicarMascaraCEP(input) {
        let valor = input.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        input.value = valor;
    }

    // --- Funcionalidade do Formulário de Cadastro ---
    const formCadastro = document.querySelector('.form-cadastro');
    if (formCadastro) {
        const inputNome = formCadastro.querySelector('input[name="nome"]');
        const inputEmail = formCadastro.querySelector('input[name="email"]');
        const inputCPF = formCadastro.querySelector('input[name="cpf"]');
        const inputTelefone = formCadastro.querySelector('input[name="telefone"]');
        const inputNascimento = formCadastro.querySelector('input[name="nascimento"]');
        const selectEstadoCivil = formCadastro.querySelector('select[name="estado_civil"]');
        const inputProfissao = formCadastro.querySelector('input[name="profissao"]');
        const inputEndereco = formCadastro.querySelector('input[name="endereco"]');
        const inputCidade = formCadastro.querySelector('input[name="cidade"]');
        const inputCEP = formCadastro.querySelector('input[name="cep"]');
        const selectTipoResidencia = formCadastro.querySelector('select[name="tipo_residencia"]');
        const selectTemQuintal = formCadastro.querySelector('select[name="tem_quintal"]');
        const selectOutrosPets = formCadastro.querySelector('select[name="outros_pets"]');
        const selectExperiencia = formCadastro.querySelector('select[name="experiencia"]');
        const textareaMotivo = formCadastro.querySelector('textarea[name="motivo"]');
        const textareaExpectativas = formCadastro.querySelector('textarea[name="expectativas"]');

        // Aplicar máscaras
        inputCPF.addEventListener('input', () => {
            aplicarMascaraCPF(inputCPF);
            validarCPF(inputCPF);
        });

        inputTelefone.addEventListener('input', () => {
            aplicarMascaraTelefone(inputTelefone);
            validarTelefone(inputTelefone);
        });

        inputCEP.addEventListener('input', () => {
            aplicarMascaraCEP(inputCEP);
            validarCEP(inputCEP);
        });

        // Validações em tempo real
        inputNome.addEventListener('input', () => validarCampo(inputNome));
        inputEmail.addEventListener('input', () => validarEmail(inputEmail));
        inputNascimento.addEventListener('change', () => validarIdade(inputNascimento));
        selectEstadoCivil.addEventListener('change', () => validarSelect(selectEstadoCivil));
        inputProfissao.addEventListener('input', () => validarCampo(inputProfissao));
        inputEndereco.addEventListener('input', () => validarCampo(inputEndereco));
        inputCidade.addEventListener('input', () => validarCampo(inputCidade));
        selectTipoResidencia.addEventListener('change', () => validarSelect(selectTipoResidencia));
        selectTemQuintal.addEventListener('change', () => validarSelect(selectTemQuintal));
        selectOutrosPets.addEventListener('change', () => validarSelect(selectOutrosPets));
        selectExperiencia.addEventListener('change', () => validarSelect(selectExperiencia));
        textareaMotivo.addEventListener('input', () => validarCampo(textareaMotivo));
        textareaExpectativas.addEventListener('input', () => validarCampo(textareaExpectativas));

        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validar todos os campos
            const isNomeValido = validarCampo(inputNome);
            const isEmailValido = validarEmail(inputEmail);
            const isCPFValido = validarCPF(inputCPF);
            const isTelefoneValido = validarTelefone(inputTelefone);
            const isIdadeValida = validarIdade(inputNascimento);
            const isEstadoCivilValido = validarSelect(selectEstadoCivil);
            const isProfissaoValida = validarCampo(inputProfissao);
            const isEnderecoValido = validarCampo(inputEndereco);
            const isCidadeValida = validarCampo(inputCidade);
            const isCEPValido = validarCEP(inputCEP);
            const isTipoResidenciaValido = validarSelect(selectTipoResidencia);
            const isTemQuintalValido = validarSelect(selectTemQuintal);
            const isOutrosPetsValido = validarSelect(selectOutrosPets);
            const isExperienciaValida = validarSelect(selectExperiencia);
            const isMotivoValido = validarCampo(textareaMotivo);
            const isExpectativasValida = validarCampo(textareaExpectativas);

            const todosValidos = isNomeValido && isEmailValido && isCPFValido && isTelefoneValido && 
                               isIdadeValida && isEstadoCivilValido && isProfissaoValida && 
                               isEnderecoValido && isCidadeValida && isCEPValido && 
                               isTipoResidenciaValido && isTemQuintalValido && isOutrosPetsValido && 
                               isExperienciaValida && isMotivoValido && isExpectativasValida;

            if (todosValidos) {
                alert('Cadastro para adoção enviado com sucesso! Entraremos em contato em breve para dar continuidade ao processo.');
                formCadastro.reset();
                formCadastro.querySelectorAll('.form-grupo').forEach(fg => fg.classList.remove('sucesso'));
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

    function validarCPF(input) {
        const cpf = input.value.replace(/\D/g, '');
        
        if (cpf.length === 0) {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        }
        
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            definirErro(input, 'CPF inválido.');
            return false;
        }
        
        // Validação do dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let digito1 = resto < 10 ? resto : 0;
        
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digito2 = resto < 10 ? resto : 0;
        
        if (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2) {
            definirSucesso(input);
            return true;
        } else {
            definirErro(input, 'CPF inválido.');
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

    function validarCEP(input) {
        const cep = input.value.replace(/\D/g, '');
        
        if (cep.length === 0) {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        }
        
        if (cep.length !== 8) {
            definirErro(input, 'CEP deve ter 8 dígitos.');
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
        const idade = hoje.getFullYear() - nascimento.getFullYear();
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

    function validarSelect(select) {
        if (select.value === '') {
            definirErro(select, 'Este campo é obrigatório.');
            return false;
        } else {
            definirSucesso(select);
            return true;
        }
    }

});
