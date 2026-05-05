// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Course details function
function showCourseDetails(courseName, courseDescription) {
    alert('Course: ' + courseName + '\n\n' + courseDescription + '\n\nAvailable for enrollment now!');
}

// Button interactions
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Course card interactions
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function () {
        alert('Explore ' + this.querySelector('h3').textContent + ' course');
    });
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.course-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

    // Simple interview coach demo (no external AI)
    function startInterviewCoach() {
        const intro = 'Interview Coach (demo): I will ask 3 quick questions. Ready?';
        if (!confirm(intro)) return;

        const q1 = prompt('Question 1: Describe the difference between an array and a linked list.');
        alert('Thanks — concise answer saved.\n\nNext question.');

        const q2 = prompt('Question 2: How would you find the middle node of a linked list in one pass?');
        alert('Nice.\n\nFinal question.');

        const q3 = prompt('Question 3: Give a short strategy for preparing for system design interviews.');
        alert('Demo complete — good job!\n\n(For full AI feedback, add your API key to the deployment to enable the real assistant.)');
    }

    console.log('Scaler Academy Clone - Website Loaded Successfully');
