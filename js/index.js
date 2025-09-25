
document.addEventListener('DOMContentLoaded', () => 
{

    // --- Efeito de rolagem no cabeçalho ---
    const cabecalho = document.querySelector('.cabecalho');
    window.addEventListener('scroll', () => 
    {
        if (window.scrollY > 50) 
        {
            cabecalho.classList.add('rolagem');
        } 
        else 
        {
            cabecalho.classList.remove('rolagem');
        }
    });

    // --- Animações ao rolar a página (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => 
        {
            if (entry.isIntersecting) 
            {
                entry.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementosAnimar = document.querySelectorAll('.animar');
    elementosAnimar.forEach(el => observer.observe(el));


    // --- Funcionalidade dos Pop-ups Laterais ---
    const popupNoticias = document.getElementById('popup-noticias');
    const popupDicas = document.getElementById('popup-dicas');

    // Apenas executa o código dos pop-ups se eles existirem na página
    if (popupNoticias && popupDicas) 
    {
        const noticias = [
            { texto: "Estudo revela que cães entendem mais de 80 palavras humanas.", imagem: "https://placedog.net/300/200?id=15" },
            { texto: "Gatos podem fazer mais de 100 sons diferentes, enquanto cães fazem apenas cerca de 10.", imagem: "https://placedog.net/300/200?id=16" },
            { texto: "Nova lei de proteção animal é aprovada com penas mais rígidas.", imagem: "https://placedog.net/300/200?id=17" }
        ];

        const dicas = [
            { texto: "Escove os dentes do seu pet regularmente para prevenir doenças bucais.", imagem: "https://placedog.net/300/200?id=25" },
            { texto: "Passeios diários são essenciais para a saúde física e mental do seu cão.", imagem: "https://placedog.net/300/200?id=26" },
            { texto: "Mantenha a caixa de areia do seu gato sempre limpa para evitar problemas de comportamento.", imagem: "https://placedog.net/300/200?id=27" }
        ];

        let noticiaAtual = 0;
        let dicaAtual = 0;
        
        const noticiaTexto = document.getElementById('noticia-texto');
        const noticiaImagem = document.getElementById('noticia-imagem');
        const dicaTexto = document.getElementById('dica-texto');
        const dicaImagem = document.getElementById('dica-imagem');

        function mostrarPopups() 
        {
            popupNoticias.classList.add('visivel');
            popupDicas.classList.add('visivel');
        }

        function fecharPopup(e) 
        {
            if (e.target.classList.contains('fechar-popup')) 
            {
                const popupId = e.target.getAttribute('data-popup');
                const popup = document.getElementById(popupId);
                if (popup) 
                {
                    popup.classList.remove('visivel');
                }
            }
        }

        function atualizarNoticia() 
        {
            noticiaTexto.textContent = noticias[noticiaAtual].texto;
            noticiaImagem.src = noticias[noticiaAtual].imagem;
            noticiaAtual = (noticiaAtual + 1) % noticias.length;
        }

        function atualizarDica() 
        {
            dicaTexto.textContent = dicas[dicaAtual].texto;
            dicaImagem.src = dicas[dicaAtual].imagem;
            dicaAtual = (dicaAtual + 1) % dicas.length;
        }

        // Iniciar pop-ups e ciclagem de conteúdo
        setTimeout(mostrarPopups, 2000);
        
        atualizarNoticia();
        atualizarDica();

        setInterval(atualizarNoticia, 5000);
        setInterval(atualizarDica, 7000);

        document.body.addEventListener('click', fecharPopup);
    }

    // --- Funcionalidade do Formulário de Doação ---
    const formDoacao = document.querySelector('.form-doacao');
    if (formDoacao) 
    {
        const botoesValor = formDoacao.querySelectorAll('.btn-valor');
        const inputOutroValor = formDoacao.querySelector('input[name="valor"]');
        const inputNome = formDoacao.querySelector('input[name="nome"]');
        const inputEmail = formDoacao.querySelector('input[name="email"]');

        botoesValor.forEach(botao => 
        {
            botao.addEventListener('click', () => 
            {
                botoesValor.forEach(btn => btn.classList.remove('selecionado'));
                botao.classList.add('selecionado');
                inputOutroValor.value = '';
                validarCampo(inputOutroValor, false);
            });
        });
        
        inputOutroValor.addEventListener('input', () => 
        {
            botoesValor.forEach(btn => btn.classList.remove('selecionado'));
            validarValorDoacao(inputOutroValor);
        });

        inputNome.addEventListener('input', () => validarCampo(inputNome));
        inputEmail.addEventListener('input', () => validarEmail(inputEmail));

        formDoacao.addEventListener('submit', (e) => 
        {
            e.preventDefault();
            const isNomeValido = validarCampo(inputNome);
            const isEmailValido = validarEmail(inputEmail);
            const isValorValido = validarValorDoacao(inputOutroValor) || Array.from(botoesValor).some(b => b.classList.contains('selecionado'));
            
            if (!isValorValido && !Array.from(botoesValor).some(b => b.classList.contains('selecionado'))) 
            {
                definirErro(inputOutroValor, 'Por favor, selecione ou insira um valor.');
            } 
            else if (isValorValido) 
            {
                definirSucesso(inputOutroValor);
            }

            if (isNomeValido && isEmailValido && isValorValido) 
            {
                alert('Obrigado pela sua doação!');
                formDoacao.reset();
                botoesValor.forEach(btn => btn.classList.remove('selecionado'));
                document.querySelectorAll('.form-grupo').forEach(fg => fg.classList.remove('sucesso'));
            }
        });
    }


    // --- Funções de Validação ---
    function definirErro(input, mensagem) 
    {
        const formGrupo = input.parentElement;
        formGrupo.classList.add('erro');
        formGrupo.classList.remove('sucesso');
        const small = formGrupo.querySelector('.mensagem-erro');
        if (small) small.innerText = mensagem;
    }

    function definirSucesso(input) 
    {
        const formGrupo = input.parentElement;
        formGrupo.classList.add('sucesso');
        formGrupo.classList.remove('erro');
        const small = formGrupo.querySelector('.mensagem-erro');
        if (small) small.innerText = '';
    }

    function validarCampo(input, required = true) 
    {
        if (required && input.value.trim() === '') 
        {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        } 
        else 
        {
            definirSucesso(input);
            return true;
        }
    }

    function validarEmail(input) 
    {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(input.value).toLowerCase())) 
        {
            definirSucesso(input);
            return true;
        } 
        else if (input.value.trim() === '') 
        {
            definirErro(input, 'Este campo é obrigatório.');
            return false;
        }
        else 
        {
            definirErro(input, 'E-mail inválido.');
            return false;
        }
    }

    function validarValorDoacao(input) 
    {
        const valor = parseFloat(input.value);
        if (input.value.trim() !== '' && (valor < 10 || valor > 1000)) 
        {
            definirErro(input, 'O valor deve ser entre R$ 10 e R$ 1000.');
            return false;
        } 
        else if (input.value.trim() === '') 
        {
            // Não é um erro se estiver vazio, pois pode ser um valor fixo
             const formGrupo = input.parentElement;
            formGrupo.classList.remove('erro', 'sucesso');
            const small = formGrupo.querySelector('.mensagem-erro');
            if (small) small.innerText = '';
            return false; // Retorna false pois não há valor válido AINDA
        }
        else 
        {
            definirSucesso(input);
            return true;
        }
    }

});
