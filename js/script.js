// Validações e interações do site Atas Unidas

document.addEventListener('DOMContentLoaded', function() {
    
    // Validação do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter dados do formulário
            const formData = new FormData(contactForm);
            const nome = formData.get('nome');
            const email = formData.get('email');
            const telefone = formData.get('telefone');
            const assunto = formData.get('assunto');
            const mensagem = formData.get('mensagem');
            
            // Validações
            if (!validarNome(nome)) {
                mostrarErro('Por favor, insira um nome válido.');
                return;
            }
            
            if (!validarEmail(email)) {
                mostrarErro('Por favor, insira um email válido.');
                return;
            }
            
            if (telefone && !validarTelefone(telefone)) {
                mostrarErro('Por favor, insira um telefone válido.');
                return;
            }
            
            if (!assunto) {
                mostrarErro('Por favor, selecione um assunto.');
                return;
            }
            
            if (!validarMensagem(mensagem)) {
                mostrarErro('Por favor, insira uma mensagem válida.');
                return;
            }
            
            // Se todas as validações passaram
            mostrarSucesso('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                if (value.length < 14) {
                    value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                }
            }
            e.target.value = value;
        });
    }
    
    // Animação suave para links de navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de hover nos cards de serviços e depoimentos
    const cards = document.querySelectorAll('.service-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Função para mostrar mensagens de erro
    function mostrarErro(mensagem) {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = 'mensagem-erro';
        mensagemDiv.style.cssText = `
            background: #e74c3c;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            margin: 1rem 0;
            text-align: center;
            font-weight: bold;
        `;
        mensagemDiv.textContent = mensagem;
        
        // Remover mensagens anteriores
        const mensagensAnteriores = document.querySelectorAll('.mensagem-erro, .mensagem-sucesso');
        mensagensAnteriores.forEach(msg => msg.remove());
        
        // Inserir nova mensagem
        const form = document.getElementById('contactForm');
        if (form) {
            form.insertBefore(mensagemDiv, form.firstChild);
        }
        
        // Remover mensagem após 5 segundos
        setTimeout(() => {
            mensagemDiv.remove();
        }, 5000);
    }
    
    // Função para mostrar mensagens de sucesso
    function mostrarSucesso(mensagem) {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = 'mensagem-sucesso';
        mensagemDiv.style.cssText = `
            background: #27ae60;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            margin: 1rem 0;
            text-align: center;
            font-weight: bold;
        `;
        mensagemDiv.textContent = mensagem;
        
        // Remover mensagens anteriores
        const mensagensAnteriores = document.querySelectorAll('.mensagem-erro, .mensagem-sucesso');
        mensagensAnteriores.forEach(msg => msg.remove());
        
        // Inserir nova mensagem
        const form = document.getElementById('contactForm');
        if (form) {
            form.insertBefore(mensagemDiv, form.firstChild);
        }
        
        // Remover mensagem após 5 segundos
        setTimeout(() => {
            mensagemDiv.remove();
        }, 5000);
    }
    
    // Funções de validação
    function validarNome(nome) {
        return nome && nome.trim().length >= 2 && /^[a-zA-ZÀ-ÿ\s]+$/.test(nome);
    }
    
    function validarEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email && emailRegex.test(email);
    }
    
    function validarTelefone(telefone) {
        const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        return telefoneRegex.test(telefone);
    }
    
    function validarMensagem(mensagem) {
        return mensagem && mensagem.trim().length >= 10;
    }
    
    // Efeito de parallax no hero (se existir)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Lazy loading para imagens
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Contador animado para estatísticas (se existir)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Iniciar animação quando o elemento estiver visível
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counterObserver.observe(counter);
    });
    
    // Menu mobile responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu mobile ao clicar em um link
    const navLinksMobile = document.querySelectorAll('nav ul a');
    navLinksMobile.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    console.log('Script do Atas Unidas carregado com sucesso!');
});
