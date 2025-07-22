document.addEventListener('DOMContentLoaded', function() {
    // Add smooth hover animations
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // Prevent floating when clicked
        link.addEventListener('click', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
