document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('animation-wrapper');
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    wrapper.appendChild(svg);

    const colors = ['#e54b4b', '#9b59b6', '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#1abc9c'];
    const numLines = 100;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < numLines; i++) {
        const path = document.createElementNS(ns, 'path');
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * (Math.max(window.innerWidth, window.innerHeight)) + 300;

        const endX = centerX + radius * Math.cos(angle);
        const endY = centerY + radius * Math.sin(angle);
        
        // Random control points for curves
        const cp1x = centerX + (endX - centerX) * Math.random() * 0.5;
        const cp1y = centerY + (endY - centerY) * Math.random() * 0.5;
        const cp2x = centerX + (endX - centerX) * (Math.random() * 0.5 + 0.5);
        const cp2y = centerY + (endY - centerY) * (Math.random() * 0.5 + 0.5);

        path.setAttribute('d', `M${centerX},${centerY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`);
        path.setAttribute('stroke', colors[i % colors.length]);
        path.setAttribute('stroke-width', anime.random(1, 3));
        path.setAttribute('fill', 'none');
        path.classList.add('animated-line');
        svg.appendChild(path);
    }

    function animateLines() {
        anime.timeline({
            easing: 'easeInOutSine',
            duration: 1500,
            complete: animateLines // Loop the animation
        })
        .add({
            targets: '.animated-line',
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(20)
        })
        .add({
            targets: '.animated-line',
            strokeDashoffset: [0, anime.setDashoffset],
            delay: anime.stagger(20)
        }, '+=1000'); // Delay before starting the fade-out animation
    }

    animateLines();
});
