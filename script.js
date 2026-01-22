document.addEventListener('DOMContentLoaded', function() {
    
    // --- Translations ---
    const translations = {
        it: {
            nav_structures: "Strutture",
            nav_about: "Chi siamo",
            nav_contact: "Contattaci",
            hero_title: "Residenze di charme sul Lago di Como",
            hero_cta: "Scopri le strutture",
            section_structures: "Le nostre strutture",
            price_night: "150€ / notte",
            section_offers: "Contattaci per offerte e promozioni",
            section_about: "Chi siamo",
            about_text: "Como Intelvi Lodges offre tre residenze d’autore sul Lago di Como, pensate per chi cerca un soggiorno di comfort, tranquillità e autenticità. Ogni appartamento combina design contemporaneo e atmosfera tipica della valle, con spazi luminosi e dotazioni curate nei dettagli. Situati in posizioni strategiche tra lago, monti e borghi storici.",
            section_contact: "Contattaci",
            contact_title: "Contatti",
            form_title: "Richiesta informazioni",
            form_name: "Nome",
            form_surname: "Cognome",
            form_phone: "Telefono",
            form_select_apartment: "Seleziona Appartamento",
            form_select_default: "-- Scegli la struttura --",
            form_message: "Messaggio",
            form_submit: "Invia richiesta",
            form_name_placeholder: "Nome",
            form_surname_placeholder: "Cognome",
            form_message_placeholder: "Scrivi qui la tua richiesta...",
            section_discover: "Vieni a scoprire il Lago di Como",
            discover_btn: "Scopri i luoghi",
            footer_copyright: "&copy; 2026 Copyright Comointelvilodges.it - Tutti i diritti sono riservati.",
            footer_privacy: "Privacy Policy",
            footer_credits: "Web by <a href=\"https://instagram.com/_matteomarino\" target=\"_blank\">Matteo Marino</a>",
            modal_desc_title: "Descrizione",
            modal_location_title: "Posizione",
            feat_bedrooms: "Bedrooms",
            feat_beds: "Posti Letto",
            feat_bathrooms: "Bathrooms",
            feat_parking: "Posti Auto",
            feat_parking_single: "Posto Auto",
            feat_surface: "Superficie",
            feat_year: "Anno Costruzione",
            feat_included: "Incluso",
            feat_yes: "Sì",
            feat_ac: "Aria Cond.",
            feat_smoking: "Area Fumatori",
            feat_jacuzzi: "Idromassaggio",
            // Cà del Restel
            cadelrestel_desc_1: "A Castiglione dʼIntelvi, a 13 km da Monte Generoso e 15 km da Villa Carlotta, Cà del Restel propone un alloggio con WiFi gratuito, aria condizionata e terrazza. L’appartamento dispone di 2 posti auto all'aperto (no garage) con colonnina per ricarica elettrica e si trova in una zona dove potrete praticare l’escursionismo e il ciclismo.",
            cadelrestel_desc_2: "Questo appartamento presenta 3 camere da letto per un totale di 6 posti letto, 2 bagni, lenzuola, asciugamani, 2 TV LCD, una zona pranzo, una cucina con utensili e un balcone con vista sulla montagna. Parco Swissminiatur è a 21 km da questo appartamento, mentre Museo Villa Olmo si trova a 24 km dalla struttura.",
            // Lezzeno
            lezzeno_desc_1: "Con vista sulla città, La Terrazza sul lago Lezzeno mette a disposizione un alloggio dotato di splendida terrazza rooftop con vista lago stupenda e balcone, a circa 6,5 km da Imbarco Battelli Bellagio. L’alloggio dista 5,7 km da I Giardini di Villa Melzi e offre il WiFi gratuito e 1 posto auto privato scoperto (no garage) a 100 metri.",
            lezzeno_desc_2: "Questa casa vacanze con aria condizionata comprende 3 camere da letto per un totale di 6 posti letto, un soggiorno, una cucina con utensili, frigorifero e macchina da caffè, 2 TV LCD e 2 bagni con bidet e doccia. Presso questa casa vacanze troverete asciugamani e lenzuola tra i servizi offerti.",
            lezzeno_desc_3: "Nelle vicinanze potrete praticare il ciclismo. Stazione di Como Lago è a 23 km da questa casa vacanze, mentre Basilica di San Fedele si trova a 24 km dalla struttura. Aeroporto di Bergamo-Orio al Serio si trova a 66 km di distanza.",
            // Monti
            monti_desc_1: "Con vista sulla vallata e sui monti, La Terrazza sui Monti propone un alloggio con balcone e macchina da caffè, a circa 15 km da Villa Carlotta. Con aria condizionata, l’alloggio è a 13 km da Monte Generoso e offre WiFi gratis e 2 posti auto all'aperto (no garage) con colonnina per ricarica elettrica.",
            monti_desc_2: "Questo appartamento presenta 3 camere da letto per un totale di 6 posti letto, 2 bagni, lenzuola, asciugamani, 2 TV LCD, una zona pranzo, una cucina con utensili e un terrazzo di 60 mq con vasca Jacuzzi riscaldata, tavoli, lettini e tende da sole. Presso questo appartamento potrete usufruire di una vasca idromassaggio.",
            monti_desc_3: "Parco Swissminiatur è a 21 km da La Terrazza sui Monti, mentre Museo Villa Olmo si trova a 24 km dalla struttura."
        },
        en: {
            nav_structures: "Structures",
            nav_about: "About Us",
            nav_contact: "Contact Us",
            hero_title: "Charming Residences on Lake Como",
            hero_cta: "Discover Our Lodges",
            section_structures: "Our Lodges",
            price_night: "150€ / night",
            section_offers: "Contact us for offers and promotions",
            section_about: "About Us",
            about_text: "Como Intelvi Lodges offers three signature residences on Lake Como, designed for those seeking a stay of comfort, tranquility, and authenticity. Each apartment combines contemporary design with the typical atmosphere of the valley, featuring bright spaces and carefully curated details. Located in strategic positions between the lake, mountains, and historic villages.",
            section_contact: "Contact Us",
            contact_title: "Contacts",
            form_title: "Information Request",
            form_name: "Name",
            form_surname: "Surname",
            form_phone: "Phone",
            form_select_apartment: "Select Apartment",
            form_select_default: "-- Choose the lodge --",
            form_message: "Message",
            form_submit: "Send Request",
            form_name_placeholder: "Name",
            form_surname_placeholder: "Surname",
            form_message_placeholder: "Write your request here...",
            section_discover: "Come and discover Lake Como",
            discover_btn: "Discover places",
            footer_copyright: "&copy; 2026 Copyright Comointelvilodges.it - All rights reserved.",
            footer_privacy: "Privacy Policy",
            footer_credits: "Web by <a href=\"https://instagram.com/_matteomarino\" target=\"_blank\">Matteo Marino</a>",
            modal_desc_title: "Description",
            modal_location_title: "Location",
            feat_bedrooms: "Bedrooms",
            feat_beds: "Beds",
            feat_bathrooms: "Bathrooms",
            feat_parking: "Parking Spaces",
            feat_parking_single: "Parking Space",
            feat_surface: "Surface",
            feat_year: "Year Built",
            feat_included: "Included",
            feat_yes: "Yes",
            feat_ac: "Air Cond.",
            feat_smoking: "Smoking Area",
            feat_jacuzzi: "Jacuzzi",
            // Cà del Restel
            cadelrestel_desc_1: "In Castiglione dʼIntelvi, 13 km from Monte Generoso and 15 km from Villa Carlotta, Cà del Restel offers accommodation with free WiFi, air conditioning, and a terrace. The apartment features 2 outdoor parking spaces (no garage) with an electric charging station and is located in an area where you can enjoy hiking and cycling.",
            cadelrestel_desc_2: "This apartment features 3 bedrooms for a total of 6 beds, 2 bathrooms, bed linen, towels, 2 LCD TVs, a dining area, a fully equipped kitchen, and a balcony with mountain views. Swissminiatur Park is 21 km from the apartment, while Villa Olmo Museum is 24 km away.",
            // Lezzeno
            lezzeno_desc_1: "With city views, La Terrazza sul lago Lezzeno offers accommodation featuring a splendid rooftop terrace with stunning lake views and a balcony, approximately 6.5 km from the Bellagio Ferry Terminal. The property is 5.7 km from Villa Melzi Gardens and offers free WiFi and 1 private outdoor parking space (no garage) 100 meters away.",
            lezzeno_desc_2: "This air-conditioned holiday home includes 3 bedrooms for a total of 6 beds, a living room, a kitchen with utensils, fridge, and coffee machine, 2 LCD TVs, and 2 bathrooms with bidet and shower. Towels and bed linen are provided at the holiday home.",
            lezzeno_desc_3: "Cycling can be enjoyed nearby. Como Lago Station is 23 km from the holiday home, while the Basilica of San Fedele is 24 km away. Orio al Serio International Airport is 66 km away.",
            // Monti
            monti_desc_1: "With views of the valley and mountains, La Terrazza sui Monti offers accommodation with a balcony and coffee machine, about 15 km from Villa Carlotta. Air-conditioned, the property is 13 km from Monte Generoso and offers free WiFi and 2 outdoor parking spaces (no garage) with an electric charging station.",
            monti_desc_2: "This apartment features 3 bedrooms for a total of 6 beds, 2 bathrooms, bed linen, towels, 2 LCD TVs, a dining area, a kitchen with utensils, and a 60 sqm terrace with a heated Jacuzzi, tables, sun loungers, and awnings. Guests can make use of a hot tub at the apartment.",
            monti_desc_3: "Swissminiatur Park is 21 km from La Terrazza sui Monti, while Villa Olmo Museum is 24 km away."
        }
    };

    function setLanguage(lang) {
        // Save preference
        localStorage.setItem('selectedLang', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update active class on buttons
        document.querySelectorAll('.lang-option').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                // If it contains HTML (like the footer credits link), use innerHTML
                if (key === 'footer_credits' || key === 'footer_copyright') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.dataset.i18nTitle;
            if (translations[lang][key]) {
                el.title = translations[lang][key];
            }
        });
    }

    // Initialize language
    const savedLang = localStorage.getItem('selectedLang') || 'it';
    setLanguage(savedLang);

    // Event listeners for language switch
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        });
    });

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

    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const marginIcons = document.querySelectorAll('.margin-icon');
    marginIcons.forEach(icon => {
        observer.observe(icon);
    });

    const strutturaCards = document.querySelectorAll('.struttura-card');
    strutturaCards.forEach(card => {
        observer.observe(card);
    });

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));
});
