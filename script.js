document.addEventListener('DOMContentLoaded', function() {// Mobile Menu Toggle - Improved Version
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');

// Initialize menu state
if (window.innerWidth <= 768) {
    navMenu.style.display = 'none';
}

mobileMenuBtn.addEventListener('click', function() {
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = 'white';
        navMenu.style.padding = '20px 0';
        navMenu.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
    } else {
        navMenu.style.display = 'none';
    }
});

// Improved window resize handler
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = 'static';
        navMenu.style.backgroundColor = 'transparent';
        navMenu.style.padding = '0';
        navMenu.style.boxShadow = 'none';
    } else {
        navMenu.style.display = 'none';
    }
});

    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
    
    // Pricing Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding prices
            if (this.dataset.tab === 'monthly') {
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                yearlyPrices.forEach(price => price.classList.add('hidden'));
            } else {
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                yearlyPrices.forEach(price => price.classList.remove('hidden'));
            }
        });
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            }
        });
    });
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .pricing-card, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.product-card, .pricing-card, .faq-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});