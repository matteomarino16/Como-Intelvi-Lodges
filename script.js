document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    // Select both possible navs to handle transition if needed, 
    // but primarily we want to toggle the mobile-nav on mobile.
    // Let's check if we are on mobile or check if mobile-nav exists.
    const mobileNav = document.getElementById('mobile-nav');
    
    // We can just use mobileNav as 'nav' variable if it exists, since on desktop menuToggle is hidden.
    const nav = mobileNav || document.querySelector('nav'); 
    
    const navLinks = nav ? nav.querySelectorAll('a') : [];
    const menuIcon = document.querySelector('.menu-toggle i');
    
    let menuOpenedScrollY = 0;

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Toggle icon between list and x
            if (nav.classList.contains('active')) {
                menuIcon.classList.remove('ph-list');
                menuIcon.classList.add('ph-x');
                menuOpenedScrollY = window.scrollY; // Capture scroll position when opened
                // document.body.style.overflow = 'hidden'; // Allow scrolling to trigger close
            } else {
                menuIcon.classList.remove('ph-x');
                menuIcon.classList.add('ph-list');
                // document.body.style.overflow = 'auto';
            }
        });

        // Close menu on scroll
        window.addEventListener('scroll', () => {
            if (nav.classList.contains('active')) {
                // Add a threshold to avoid accidental closing on micro-scrolls
                if (Math.abs(window.scrollY - menuOpenedScrollY) > 20) {
                    nav.classList.remove('active');
                    menuIcon.classList.remove('ph-x');
                    menuIcon.classList.add('ph-list');
                }
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuIcon.classList.remove('ph-x');
                menuIcon.classList.add('ph-list');
                // document.body.style.overflow = 'auto';
            });
        });
    }

    // --- Modal Management ---
    function setupModal(modalId, cardId) {
        const modal = document.getElementById(modalId);
        const card = document.getElementById(cardId);
        
        if (!modal || !card) return;

        const closeBtn = modal.querySelector('.close-modal');

        // Open modal
        card.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        // Close modal with X
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        // Close modal clicking outside
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Setup lightbox for this modal's images
        const galleryImages = modal.querySelectorAll('.modal-gallery img');
        if (galleryImages.length > 0) {
            galleryImages.forEach((img, index) => {
                img.addEventListener('click', function(e) {
                    e.stopPropagation(); 
                    openLightbox(index, galleryImages);
                });
            });
        }
    }

    // Initialize Modals
    setupModal('modal-cadelrestel', 'card-cadelrestel');
    setupModal('modal-terrazzalagolezzeno', 'card-terrazzalagolezzeno');
    setupModal('modal-terrazzasuimonti', 'card-terrazzasuimonti');


    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightboxBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let currentGalleryImages = [];

    function openLightbox(index, imagesNodeList) {
        currentGalleryImages = Array.from(imagesNodeList);
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function updateLightboxImage() {
        if (currentGalleryImages.length === 0) return;
        const img = currentGalleryImages[currentImageIndex];
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt || '';
    }

    function showNextImage() {
        if (currentGalleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
        updateLightboxImage();
    }

    function showPrevImage() {
        if (currentGalleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        updateLightboxImage();
    }

    // Event Listeners for Lightbox Controls
    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrevImage();
        });
    }

    // Close lightbox on click outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        }
    });
});
