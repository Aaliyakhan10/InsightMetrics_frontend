// Loader functionality
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(function() {
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    const icon = this.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});


   // Custom cursor
   const cursor = document.querySelector('.cursor');
   const cursorFollower = document.querySelector('.cursor-follower');
   
   document.addEventListener('mousemove', (e) => {
       cursor.style.left = e.clientX + 'px';
       cursor.style.top = e.clientY + 'px';
       
       setTimeout(() => {
           cursorFollower.style.left = e.clientX + 'px';
           cursorFollower.style.top = e.clientY + 'px';
       }, 100);
   });
   
   // Hover effects
   document.querySelectorAll('a, button, .badge-item').forEach(el => {
       el.addEventListener('mouseenter', () => {
           cursor.classList.add('active');
       });
       
       el.addEventListener('mouseleave', () => {
           cursor.classList.remove('active');
       });
       
       el.addEventListener('mousedown', () => {
           cursor.classList.add('click');
       });
       
       el.addEventListener('mouseup', () => {
           cursor.classList.remove('click');
       });
   });
   
   // Badge animation
   document.querySelectorAll('.badge-item').forEach((badge, index) => {
       badge.style.opacity = '0';
       badge.style.transform = 'translateY(20px)';
       
       setTimeout(() => {
           badge.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
           badge.style.opacity = '1';
           badge.style.transform = 'translateY(0)';
       }, 800 + (index * 150));
   });