// ===== DOM Elements =====
const preloader = document.querySelector('.preloader');
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const themeToggle = document.querySelector('.theme-toggle');
const scrollTopBtn = document.querySelector('.scroll-top-btn');
const skillBars = document.querySelectorAll('.skill-per');
const projectItems = document.querySelectorAll('.project-item');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

// ===== Preloader =====
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }, 1000);
});

// ===== Sticky Navbar =====
window.addEventListener('scroll', () => {
    // Add scrolled class to header when scrolled
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }

    // Animate skill bars on scroll
    animateSkillBars();
});

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Theme Toggler =====
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle the icon
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll to Top Button =====
scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Active Navigation Links =====
const sections = document.querySelectorAll('section');
function setActiveNavLink() {
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector('.nav-links a.active')?.classList.remove('active');
            document.querySelector(`.nav-links a[href*=${sectionId}]`)?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// ===== Skills Animation =====
function animateSkillBars() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const sectionTop = aboutSection.offsetTop;
    const sectionHeight = aboutSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    if (scrollY > (sectionTop - windowHeight + 200) && scrollY < (sectionTop + sectionHeight)) {
        skillBars.forEach(skill => {
            const percentage = skill.getAttribute('data-per');
            skill.style.width = percentage;
        });
    }
}

// ===== Project Filter =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Set active button
        filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
        btn.classList.add('active');

        // Get filter value
        const filterValue = btn.getAttribute('data-filter');

        // Filter projects
        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filterValue === 'all' || filterValue === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== Testimonial Slider =====
let currentTestimonial = 0;

// Function to display the active testimonial
function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
    });

    testimonialItems[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

// Next button click
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    });
}

// Previous button click
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    });
}

// Dot navigation
if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
}

// Auto slide testimonials
let testimonialInterval;

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

function stopTestimonialInterval() {
    clearInterval(testimonialInterval);
}

// Start auto sliding if testimonials exist
if (testimonialItems.length > 0) {
    startTestimonialInterval();

    // Pause auto sliding on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', stopTestimonialInterval);
        testimonialSlider.addEventListener('mouseleave', startTestimonialInterval);
    }
}

// ===== Contact Form Validation =====
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (name === '' || email === '' || subject === '' || message === '') {
            showFormAlert('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showFormAlert('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulating form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        
        // Simulate API call
        setTimeout(() => {
            showFormAlert('Your message has been sent successfully!', 'success');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }, 2000);
    });
}

// Form helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormAlert(message, type) {
    // Check if alert already exists and remove it
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `form-alert ${type}`;
    alert.textContent = message;
    
    // Insert alert after the form
    contactForm.parentNode.insertBefore(alert, contactForm.nextSibling);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// ===== Animation on Scroll =====
function revealElements() {
    const elements = document.querySelectorAll('.service-card, .project-item, .contact-item, .blog-card');
    
    elements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealElements);

// ===== Create Resume Download Function =====
const resumeBtn = document.querySelector('a[download]');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        // Resume file exists, so no need to prevent default
        const resumeExists = true; // Changed to true since we've created the placeholder file
        
        if (!resumeExists) {
            e.preventDefault();
            alert('Resume will be available for download soon!');
        } else {
            // Optional: Add analytics tracking for resume downloads
            console.log('Resume downloaded');
        }
    });
}

// Call functions on initial load
revealElements();
setActiveNavLink(); 