// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Handle window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Form submission handling
  const careersForm = document.getElementById('careersForm');
  if (careersForm) {
    careersForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      // Remove any existing messages
      const existingMessage = this.querySelector('.form-message');
      if (existingMessage) {
        existingMessage.remove();
      }
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Create FormData object
      const formData = new FormData(this);
      
      // Submit to Formspree
      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Success
          const successDiv = document.createElement('div');
          successDiv.className = 'form-message success';
          successDiv.textContent = 'Thank you for your application! We\'ll review it and get back to you.';
          this.insertBefore(successDiv, this.firstChild);
          this.reset();
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        // Error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-message error';
        errorDiv.textContent = 'Sorry, there was an error sending your message. Please try again.';
        this.insertBefore(errorDiv, this.firstChild);
      })
      .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove message after 5 seconds
        setTimeout(() => {
          const message = this.querySelector('.form-message');
          if (message) {
            message.remove();
          }
        }, 5000);
      });
    });
  }

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.feature-card, .mission-card, .stat-item, .career-card');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add scroll progress indicator
  let progressBar = null;
  
  window.addEventListener('scroll', () => {
    const scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Create or update progress bar
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'scroll-progress';
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: ${scrollProgress}%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #9333ea);
        z-index: 9999;
        transition: width 0.1s ease;
      `;
      document.body.appendChild(progressBar);
    } else {
      progressBar.style.width = `${scrollProgress}%`;
    }
  });

  // Keyboard navigation for mobile menu
  mobileMenuBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });

  // Add focus trap for mobile menu
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  }

  // Apply focus trap to navigation menu
  if (navMenu) {
    trapFocus(navMenu);
  }

  // Add hover effects for cards
  const cards = document.querySelectorAll('.feature-card, .career-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Add utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced resize handler
const debouncedResize = debounce(() => {
  console.log('Window resized');
}, 250);

window.addEventListener('resize', debouncedResize);
