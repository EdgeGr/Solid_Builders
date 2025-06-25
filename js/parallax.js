document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (hero && !isMobile) {
        // Set initial background position
        hero.style.backgroundPositionY = '0px';
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            // More subtle parallax effect
            hero.style.backgroundPositionY = scrollPosition * 0.3 + 'px';
            
            // Optional: Fade effect on scroll
            const opacity = 1 - (scrollPosition / 1000);
            hero.style.opacity = opacity > 0.7 ? opacity : 0.7;
        });
    } else if (hero) {
        // Disable parallax on mobile
        hero.style.backgroundAttachment = 'scroll';
    }
});