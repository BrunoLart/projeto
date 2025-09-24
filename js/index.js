// JavaScript para ONG Patinhas Felizes - Página Principal

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() 
{
    // Inicializa todas as funcionalidades
    initNavbar();
    initSmoothScroll();
    initAnimations();
    initDoacaoForm();
    initNewsletterForm();
    initMobileMenu();
});

// === NAVBAR FUNCTIONS ===
function initNavbar() 
{
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() 
    {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona/remove classe baseada no scroll
        if (scrollTop > 100) 
        {
            navbar.classList.add('scrolled');
        } 
        else 
        {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Ativa link ativo baseado na seção visível
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() 
    {
        let current = '';
        
        sections.forEach(section => 
        {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) 
            {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => 
        {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) 
            {
                link.classList.add('active');
            }
        });
    });
}

// === MOBILE MENU ===
function initMobileMenu() 
{
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() 
    {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fecha menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => 
    {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Fecha menu ao clicar fora
    document.addEventListener('click', function(event) 
    {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav) 
        {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// === Rolagem suave ===
function initSmoothScroll() 
{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => 
    {
        anchor.addEventListener('click', function(e) 
        {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) 
            {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo(
                {
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === Animações ===
function initAnimations() 
{
    // Intersection Observer para animações de entrada
    const observerOptions = 
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) 
    {
        entries.forEach(entry => 
        {
            if (entry.isIntersecting) 
            {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const animateElements = document.querySelectorAll('.sobre-card, .animal-card, .noticia-card, .contato-item, .stat-item');
    animateElements.forEach(el => 
    {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animação dos números das estatísticas
    animateNumbers();
}

// === Animação de numeros ===
function animateNumbers() 
{
    const statNumbers = document.querySelectorAll('.stat-item h3');
    const statsObserver = new IntersectionObserver(function(entries) 
    {
        entries.forEach(entry => 
            {
            if (entry.isIntersecting) 
            {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent);
                animateNumber(target, 0, finalNumber, 2000);
                statsObserver.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(number => 
    {
        statsObserver.observe(number);
    });
}

function animateNumber(element, start, end, duration) 
{
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(function() 
    {
        current += increment;
        if (current >= end) 
        {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// === Form doação===
function initDoacaoForm() 
{
    const form = document.getElementById('doacao-form');
    const valorButtons = document.querySelectorAll('.valor-btn');
    const valorPersonalizado = document.getElementById('valor-personalizado');
    let selectedAmount = 0;
    
    // Botões de valor pré-definido
    valorButtons.forEach(button => 
    {
        button.addEventListener('click', function(e) 
        {
            e.preventDefault();
            
            // Remove seleção anterior
            valorButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona seleção atual
            this.classList.add('active');
            
            // Armazena valor
            selectedAmount = parseInt(this.dataset.valor);
            valorPersonalizado.value = '';
        });
    });
    
    // Campo de valor personalizado
    valorPersonalizado.addEventListener('input', function() 
    {
        if (this.value) 
        {
            valorButtons.forEach(btn => btn.classList.remove('active'));
            selectedAmount = parseInt(this.value) || 0;
        }
    });
    
    // Validação e envio do formulário
    form.addEventListener('submit', function(e) 
    {
        e.preventDefault();
        
        const nome = document.getElementById('nome-doador').value.trim();
        const email = document.getElementById('email-doador').value.trim();
        const telefone = document.getElementById('telefone-doador').value.trim();
        
        // Validações
        if (!nome) 
        {
            showMessage('Erro', 'Por favor, preencha seu nome completo.', 'error');
            return;
        }
        
        if (!email || !isValidEmail(email)) 
        {
            showMessage('Erro', 'Por favor, insira um e-mail válido.', 'error');
            return;
        }
        
        if (selectedAmount < 10) 
        {
            showMessage('Erro', 'O valor mínimo para doação é R$ 10,00.', 'error');
            return;
        }
        
        if (telefone && !isValidPhone(telefone)) 
        {
            showMessage('Erro', 'Por favor, insira um telefone válido.', 'error');
            return;
        }
        
        // Simula envio
        showLoading(form);
        
        setTimeout(() => 
        {
            hideLoading(form);
            showMessage(
                'Doação Realizada!', 
                `Obrigado, ${nome}! Sua doação de R$ ${selectedAmount.toFixed(2)} foi registrada. Você receberá um e-mail de confirmação.`, 
                'success'
            );
            form.reset();
            valorButtons.forEach(btn => btn.classList.remove('active'));
            selectedAmount = 0;
        }, 2000);
    });
}