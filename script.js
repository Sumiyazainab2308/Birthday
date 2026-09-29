document.addEventListener("DOMContentLoaded", () => {
    // 1. Enter Button Transition
    const enterBtn = document.getElementById('enter-btn');
    const openingScreen = document.getElementById('opening-screen');
    const mainContent = document.getElementById('main-content');

    if(enterBtn) {
        enterBtn.addEventListener('click', () => {
            // Fade out opening screen
            openingScreen.style.opacity = '0';
            
            setTimeout(() => {
                openingScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                // Scroll to top just in case
                window.scrollTo(0, 0);
            }, 2000); // Wait for fade transition
        });
    }

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // 3. Envelope Interaction
    const envelope = document.getElementById('envelope-trigger');
    if(envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
        });
    }

    // 4. Easter Egg Alert
    const easterEggBtn = document.querySelector('.easter-egg-btn');
    const easterEggModal = document.getElementById('easter-egg-modal');
    const closeBtn = document.querySelector('.close-btn');

    if(easterEggBtn && easterEggModal) {
        easterEggBtn.addEventListener('click', () => {
            easterEggModal.classList.remove('hidden');
        });
    }

    if(closeBtn && easterEggModal) {
        closeBtn.addEventListener('click', () => {
            easterEggModal.classList.add('hidden');
        });
    }

    // 5. Final Surprise Logic
    const finalSurpriseBtn = document.getElementById('final-surprise-btn');
    const finalOverlay = document.getElementById('final-surprise-overlay');
    const finalPhotos = document.querySelectorAll('.final-photo');

    if(finalSurpriseBtn && finalOverlay) {
        finalSurpriseBtn.addEventListener('click', () => {
            finalOverlay.classList.remove('hidden');
            
            setTimeout(() => {
                finalOverlay.classList.add('active');
            }, 50);

            // Animate photos one by one
            finalPhotos.forEach((photo, index) => {
                setTimeout(() => {
                    photo.classList.add('show');
                }, 1500 + (index * 1200)); 
            });
        });
    }
});
