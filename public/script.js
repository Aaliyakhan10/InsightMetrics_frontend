const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// 1️⃣ Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
} else {
  document.body.classList.remove("dark-theme");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

// 2️⃣ Toggle theme and update localStorage
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
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
// Form tab switch
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

showSignup.addEventListener("click", () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  showSignup.classList.add("active");
  showLogin.classList.remove("active");
});

showLogin.addEventListener("click", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  showLogin.classList.add("active");
  showSignup.classList.remove("active");
});

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
