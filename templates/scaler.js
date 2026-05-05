export const scalerWebsiteTemplate = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scaler - Learn to Code | Interview Prep | DSA Courses</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <span class="logo-text">Scaler</span>
            </div>
            <nav class="nav">
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Master Data Structures & Algorithms</h1>
                <p class="hero-subtitle">Learn from industry experts and crack your dream tech job</p>
                <button class="hero-button">Start Learning Today</button>
            </div>
            <div class="hero-image">
                <div class="hero-placeholder">
                    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="300" fill="#f0f4f8"/>
                        <circle cx="200" cy="150" r="80" fill="#ff6b6b"/>
                        <rect x="80" y="50" width="240" height="30" fill="#4ecdc4"/>
                        <rect x="80" y="100" width="240" height="30" fill="#95e1d3"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <!-- Courses Section -->
    <section class="courses" id="courses">
        <div class="container">
            <h2>Our Popular Courses</h2>
            <div class="courses-grid">
                <div class="course-card">
                    <div class="course-icon">🐍</div>
                    <h3>Python Fundamentals</h3>
                    <p>Complete Python programming from basics to advanced</p>
                    <a class="course-btn" href="python-fundamentals.html">Explore</a>
                </div>
                <div class="course-card">
                    <div class="course-icon">🎯</div>
                    <h3>Interview Prep</h3>
                    <p>Crack your tech interviews with guided practice</p>
                    <a class="course-btn" href="interview-prep.html">Explore</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="about">
        <div class="container">
            <h2>Why Choose Scaler?</h2>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-number">1</div>
                    <h3>Industry Expert Teachers</h3>
                    <p>Learn from experienced professionals working at top tech companies</p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">2</div>
                    <h3>Structured Curriculum</h3>
                    <p>Carefully designed courses that build your skills step by step</p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">3</div>
                    <h3>Hands-on Projects</h3>
                    <p>Learn by doing with real-world projects and assignments</p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">4</div>
                    <h3>Career Support</h3>
                    <p>Resume reviews, interview prep, and placement assistance</p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">5</div>
                    <h3>Community Access</h3>
                    <p>Join thousands of learners, share knowledge, and network</p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">6</div>
                    <h3>Lifetime Access</h3>
                    <p>Lifetime access to course materials and lifetime support</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2>Get in Touch</h2>
            <div class="contact-info">
                <p>Email: info@scaler.com</p>
                <p>Phone: +1-800-SCALER-1</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>About Scaler</h4>
                    <p>Empowering the next generation of tech professionals with world-class education.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <p>Email: info@scaler.com</p>
                    <p>Phone: +1-800-SCALER-1</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Scaler Academy. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`,
  css: `/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background-color: #fff;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.logo-text {
    color: #ff6b6b;
    font-size: 1.8rem;
    font-weight: 700;
}

.nav {
    flex: 1;
    margin: 0 2rem;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #ff6b6b;
}

.cta-button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #ff5252;
}

/* Hero Section */
.hero {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 600px;
    display: flex;
    align-items: center;
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
}

.hero-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #555;
}

.hero-button {
    align-self: flex-start;
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.hero-button:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-placeholder {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 4/3;
}

.hero-placeholder svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
}

/* Courses Section */
.courses {
    padding: 5rem 0;
    background-color: #f9f9f9;
}

.courses h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #1a1a1a;
}

.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.course-card {
    background: white;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.course-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.course-card h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
}

.course-card p {
    color: #666;
    margin-bottom: 1.5rem;
}

.course-card .course-btn {
    display: inline-block;
    background-color: #ff6b6b;
    color: white;
    text-decoration: none;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.course-card .course-btn:hover {
    background-color: #ff5252;
}
.features {
    padding: 5rem 0;
    background-color: white;
}

.features h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #1a1a1a;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-item {
    padding: 2rem;
    border-left: 4px solid #ff6b6b;
    background-color: #f9f9f9;
    border-radius: 5px;
}

.feature-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #ff6b6b;
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.feature-item h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
}

.feature-item p {
    color: #666;
}

/* Contact Section */
.contact {
    padding: 5rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.contact h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
}

.contact-form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: #999;
}

.contact-form button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.contact-form button:hover {
    background-color: #ff5252;
}

/* Footer */
.footer {
    background-color: #1a1a1a;
    color: white;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    margin-bottom: 1rem;
    color: #ff6b6b;
}

.footer-section p {
    color: #ccc;
    margin-bottom: 0.5rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #ff6b6b;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #ff6b6b;
}

.footer-bottom {
    text-align: center;
    border-top: 1px solid #333;
    padding-top: 1rem;
    color: #999;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero .container {
        grid-template-columns: 1fr;
    }

    .hero-title {
        font-size: 2rem;
    }

    .nav-links {
        gap: 1rem;
    }

    .courses-grid,
    .features-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .header .container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav {
        margin: 0;
        width: 100%;
    }

    .nav-links {
        flex-direction: column;
        gap: 0.5rem;
    }

    .hero-title {
        font-size: 1.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }
}`,

  js: `// Smooth scrolling for navigation links
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
    alert('Course: ' + courseName + '\\n\\n' + courseDescription + '\\n\\nAvailable for enrollment now!');
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

console.log('Scaler Academy Clone - Website Loaded Successfully');
`,

  pythonHtml: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Python Fundamentals — Scaler Clone</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container"><div class="logo"><span class="logo-text">Scaler</span></div></div>
    </header>
    <section class="container" style="padding:4rem 20px;">
        <h1>Python Fundamentals</h1>
        <p>Complete Python programming from basics to advanced. This course covers syntax, data structures, OOP, and practical projects.</p>
        <p><a class="course-btn" href="index.html">Back to Home</a></p>
    </section>
    <script src="script.js"></script>
</body>
</html>`,

  interviewHtml: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Interview Prep — Scaler Clone</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container"><div class="logo"><span class="logo-text">Scaler</span></div></div>
    </header>
    <section class="container" style="padding:4rem 20px;">
        <h1>Interview Prep</h1>
        <p>Master interview questions, system design basics, and coding problem strategies to succeed in technical interviews.</p>
        <p><a class="course-btn" href="index.html">Back to Home</a></p>
    </section>
    <script src="script.js"></script>
</body>
</html>
`,
};
export default scalerWebsiteTemplate;
