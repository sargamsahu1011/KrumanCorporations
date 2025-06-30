// Enhanced script.js with improved mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".header");

  // Toggle mobile menu
  menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  // Close menu when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    }
  });

  // Header scroll effect
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }
    
    lastScrollTop = scrollTop;
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Add loading animation for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
  });

  // Form submission handling
  const contactForm = document.querySelector('.reach-us form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Reset button after 3 seconds (adjust based on your form handling)
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }

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
  const animateElements = document.querySelectorAll('.feature-card, .mission-card, .stat-item');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Add scroll progress indicator
window.addEventListener('scroll', () => {
  const scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  
  // Create or update progress bar
  let progressBar = document.getElementById('scroll-progress');
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
