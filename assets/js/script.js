/* Reset and Base Styles */
html {
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #1f2937;
    background-color: #ffffff;
    margin: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* Header Styles */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    z-index: 50;
    border-bottom: 1px solid #e5e7eb;
    transition: transform 0.3s ease;
}

.nav-container {
    max-width: 10000px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

/* Logo Section - Centered */
.logo-section {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.05);
}

.company-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.company-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    line-height: 1.1;
}

/* Navigation Menu - Right Aligned */
.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: auto;
}

.nav-link {
    color: #374151;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: #2563eb;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #2563eb;
}

/* Mobile Menu Button */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 20;
}

.hamburger-line {
    width: 2rem;
    height: 0.25rem;
    background: #374151;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
}

.mobile-menu-btn.active .hamburger-line:first-child {
    transform: rotate(45deg);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg);
}

/* Hero Section */
.research-hero {
    padding: 8rem 1rem 4rem;
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-title {
    font-size: 3rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 2rem;
    line-height: 1.1;
}

.hero-description {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 3rem;
}

.hero-description p {
    margin-bottom: 1rem;
}

.hero-description p:last-child {
    margin-bottom: 0;
}

/* Publications Section */
.publications-section {
    padding: 5rem 1rem;
    background-color: #ffffff;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.section-subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
}

.publications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.publication-card {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.publication-card:hover {
    border-color: #d1d5db;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
}

.publication-card.coming-soon {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border: 2px dashed #cbd5e1;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.card-icon {
    width: 3.5rem;
    height: 3.5rem;
    background-color: #dbeafe;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    flex-shrink: 0;
}

.publication-card:hover .card-icon {
    background-color: #bfdbfe;
    transform: scale(1.1);
}

.card-category {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    background-color: #f3f4f6;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.card-title {
    font-size: 1.375rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.card-description {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.card-meta {
    margin-bottom: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #f3f4f6;
}

.author-info {
    font-size: 0.9rem;
    color: #6b7280;
    margin-bottom: 0.5rem;
}

.publication-date {
    font-size: 0.875rem;
    color: #9ca3af;
}

.card-actions {
    margin-top: auto;
}

.btn-primary,
.btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 0.875rem;
}

.btn-primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
    background-color: #f3f4f6;
    color: #6b7280;
    cursor: not-allowed;
}

.btn-icon {
    font-size: 1rem;
}

/* Research CTA Section */
.research-cta {
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #8b5cf6, #3b82f6);
    color: white;
    text-align: center;
}

.cta-content {
    max-width: 600px;
    margin: 0 auto;
}

.cta-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.cta-description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
}

.cta-contact {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 0.75rem;
    backdrop-filter: blur(10px);
}

.contact-text {
    font-size: 1.125rem;
    margin: 0;
}

/* Footer */
.footer {
    background-color: #111827;
    color: #ffffff;
    padding: 2rem 1rem;
    text-align: center;
}

.footer p {
    color: #9ca3af;
    font-size: 0.875rem;
    margin: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(12px);
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        transition: right 0.3s ease;
        z-index: 15;
    }

    .nav-menu.active {
        right: 0;
    }

    .mobile-menu-btn {
        display: flex;
    }

    .logo-section {
        position: static;
        transform: none;
    }

    .logo {
        height: 80px;
        width: 80px;
    }

    .company-text {
        font-size: 1.125rem;
    }

    .hero-title {
        font-size: 2.25rem;
    }

    .hero-description {
        font-size: 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .publications-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .publication-card {
        padding: 1.5rem;
    }

    .cta-title {
        font-size: 1.75rem;
    }

    .cta-description {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 1.875rem;
    }

    .publication-card {
        padding: 1.25rem;
    }

    .card-title {
        font-size: 1.25rem;
    }
}
