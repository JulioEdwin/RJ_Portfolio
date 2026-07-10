// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        localStorage.setItem('theme', '');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on link click
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // trigger point

    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check on load
revealOnScroll();

// Typewriter Effect
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ["Frontend", "Backend", "Fullstack", "UI/UX"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // Typewriter Effect for student text
    const studentTextEl = document.querySelector('.student-text');
    if (studentTextEl) {
        const text = studentTextEl.textContent;
        studentTextEl.textContent = '';
        
        // Create a span for the text and a span for the cursor
        const textSpan = document.createElement('span');
        const studentCursor = document.createElement('span');
        studentCursor.innerHTML = '&nbsp;';
        studentCursor.className = 'cursor typing';
        studentCursor.style.animation = 'blink 1s infinite';
        
        studentTextEl.appendChild(textSpan);
        studentTextEl.appendChild(studentCursor);
        
        let i = 0;
        function typeStudentText() {
            if (i < text.length) {
                textSpan.textContent += text.charAt(i);
                i++;
                setTimeout(typeStudentText, 30); // Typing speed
            } else {
                studentCursor.style.animation = 'blink 1s infinite';
            }
        }
        setTimeout(typeStudentText, 1000); // Start delay
    }
});

// Form submission handler (prevent default for demo)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation check (HTML5 takes care of 'required', but let's add visual feedback)
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Envoi en cours...';
        btn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            btn.textContent = 'Message envoyé !';
            btn.style.backgroundColor = '#10b981'; // Success green
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = ''; // Reset to default
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Skills Filtering Logic
document.addEventListener("DOMContentLoaded", function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const techCards = document.querySelectorAll('.tech-grid .tech-card');

    if (filterBtns.length > 0 && techCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                techCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.classList.remove('hidden');
                        card.style.display = 'flex'; // Use flex to maintain card layout
                    } else {
                        if (card.getAttribute('data-category') === filterValue) {
                            card.classList.remove('hidden');
                            card.style.display = 'flex';
                        } else {
                            card.classList.add('hidden');
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
});

// CV Modal Logic
const cvModal = document.getElementById('cv-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const downloadBtns = document.querySelectorAll('.btn-download, .btn-outline');

downloadBtns.forEach(btn => {
    if (btn.textContent.toLowerCase().includes('télécharger')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (cvModal) cvModal.classList.add('active');
        });
    }
});

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        if (cvModal) cvModal.classList.remove('active');
    });
}

if (cvModal) {
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) {
            cvModal.classList.remove('active');
        }
    });
}
