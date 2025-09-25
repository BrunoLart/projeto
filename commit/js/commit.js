// Função para filtrar commits
function filterCommits(filter) {
    const commits = document.querySelectorAll('.commit-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Atualizar botões ativos
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    commits.forEach(commit => {
        let show = false;
        
        switch(filter) {
            case 'all':
                show = true;
                break;
            case 'merge':
                show = commit.classList.contains('merge-commit');
                break;
            case 'regular':
                show = !commit.classList.contains('merge-commit');
                break;
            case 'bruno':
                show = commit.dataset.author === 'bruno';
                break;
            case 'charles':
                show = commit.dataset.author === 'charles';
                break;
            case 'vitor':
                show = commit.dataset.author === 'vitor';
                break;
            case 'emanuel':
                show = commit.dataset.author === 'emanuel';
                break;
        }
        
        if (show) {
            commit.style.display = 'block';
            commit.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            commit.style.display = 'none';
        }
    });
    
    updateStats(filter);
}

// Função para atualizar estatísticas
function updateStats(filter) {
    const commits = document.querySelectorAll('.commit-item');
    let totalCommits = 0;
    let mergeRequests = 0;
    
    commits.forEach(commit => {
        if (commit.style.display !== 'none') {
            totalCommits++;
            if (commit.classList.contains('merge-commit')) {
                mergeRequests++;
            }
        }
    });
    
    document.getElementById('totalCommits').textContent = totalCommits;
    document.getElementById('mergeRequests').textContent = mergeRequests;
}

// Função para animar entrada dos elementos
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const commitGroups = document.querySelectorAll('.commit-group');
    commitGroups.forEach(group => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(30px)';
        group.style.transition = 'all 0.6s ease';
        observer.observe(group);
    });
}

// Função para adicionar funcionalidade de busca
function addSearchFunctionality() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const commits = document.querySelectorAll('.commit-item');
        
        commits.forEach(commit => {
            const message = commit.querySelector('.commit-message').textContent.toLowerCase();
            const author = commit.querySelector('.author span').textContent.toLowerCase();
            
            if (message.includes(searchTerm) || author.includes(searchTerm)) {
                commit.style.display = 'flex';
            } else {
                commit.style.display = 'none';
            }
        });
    });
}

function drawCommitGraph() {
    // Função desativada para remover as linhas do gráfico, conforme solicitado.
    const timeline = document.getElementById('timeline');
    const timelineSection = document.querySelector('.timeline-section');
    const oldSvg = document.querySelector('.timeline-svg-graph');
    
    if (oldSvg) {
        oldSvg.remove();
    }
    if (timeline) {
        timeline.style.marginLeft = '0';
    }
    if (timelineSection) {
        timelineSection.style.paddingLeft = '0';
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('timeline');
    const groups = Array.from(timeline.querySelectorAll('.commit-group'));
    groups.reverse();
    groups.forEach(group => {
        const commitsInGroup = Array.from(group.querySelectorAll('.commit-item'));
        commitsInGroup.reverse();
        commitsInGroup.forEach(commit => group.appendChild(commit));
        timeline.appendChild(group);
    });
    // Adiciona o container do gráfico a cada item de commit
    const commits = document.querySelectorAll('.commit-item');
    commits.forEach(commit => {
        const graphContainer = document.createElement('div');
        graphContainer.className = 'commit-graph';
        commit.prepend(graphContainer);
    });

    drawCommitGraph();

    updateStats('all');
    animateOnScroll();
    addSearchFunctionality();
    
    // Adicionar efeito de digitação no título
    const title = document.querySelector('.header h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
    
    // Adicionar funcionalidade de clique nos commits para expandir detalhes
    const commitsForDetails = document.querySelectorAll('.commit-item');
    
    commitsForDetails.forEach(commit => {
        commit.addEventListener('click', function() {
            // Adicionar lógica para expandir detalhes do commit
            const isExpanded = this.classList.contains('expanded');
            
            if (!isExpanded) {
                this.classList.add('expanded');
                this.style.background = 'rgba(88, 166, 255, 0.1)';
                
                // Adicionar informações extras (simuladas)
                const extraInfo = document.createElement('div');
                extraInfo.className = 'extra-info';
                extraInfo.style.cssText = `
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 1px solid #30363d;
                    color: #8b949e;
                    font-size: 0.9rem;
                `;
                extraInfo.innerHTML = `
                    <div>📁 Arquivos modificados: 2-5 arquivos</div>
                    <div>➕ Adições: +${Math.floor(Math.random() * 100) + 10} linhas</div>
                    <div>➖ Remoções: -${Math.floor(Math.random() * 50)} linhas</div>
                `;
                
                this.querySelector('.commit-content').appendChild(extraInfo);
            } else {
                this.classList.remove('expanded');
                this.style.background = '';
                const extraInfo = this.querySelector('.extra-info');
                if (extraInfo) {
                    extraInfo.remove();
                }
            }
        });
    });
});
