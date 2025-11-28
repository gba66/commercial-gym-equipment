// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown a')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(function(dropdown) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            });
        }
    });
    
    // Handle dropdown menu on mobile
    if (window.innerWidth <= 992) {
        const dropdownLinks = document.querySelectorAll('.dropdown > a');
        dropdownLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    const dropdownMenu = this.nextElementSibling;
                    const isVisible = dropdownMenu.style.display === 'block';
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                        if (menu !== dropdownMenu) {
                            menu.style.display = 'none';
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdownMenu.style.display = isVisible ? 'none' : 'block';
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-section h3');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            
            // Close all other answers
            document.querySelectorAll('.faq-section p').forEach(p => {
                if (p !== answer) {
                    p.style.display = 'none';
                }
            });
            
            // Toggle current answer
            answer.style.display = isVisible ? 'none' : 'block';
        });
        
        // Initially hide FAQ answers on mobile
        if (window.innerWidth <= 768) {
            question.nextElementSibling.style.display = 'none';
        }
    });
});