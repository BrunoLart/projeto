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