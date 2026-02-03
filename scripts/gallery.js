/**
 * Premium Gallery Logic
 * Includes dynamic filtering and Lightbox functionality
 */

const galleryData = [
    // Valorant
    { src: 'assets/images/gallery/valorant.png', category: 'Valorant' },
    { src: 'assets/images/gallery/valorant2.png', category: 'Valorant' },
    { src: 'assets/images/gallery/valorant3.png', category: 'Valorant' },
    { src: 'assets/images/gallery/valorant4.png', category: 'Valorant' },
    { src: 'assets/images/gallery/valorant5.png', category: 'Valorant' },
    { src: 'assets/images/gallery/valorant6.png', category: 'Valorant' },
    // Delta Force
    { src: 'assets/images/gallery/delta-force.jpg', category: 'Delta Force' },
    { src: 'assets/images/gallery/delta-force2.png', category: 'Delta Force' },
    { src: 'assets/images/gallery/delta-force3.png', category: 'Delta Force' },
    { src: 'assets/images/gallery/delta-force4.png', category: 'Delta Force' },
    { src: 'assets/images/gallery/delta-force5.png', category: 'Delta Force' },
    { src: 'assets/images/gallery/delta-force6.png', category: 'Delta Force' },
    // Night Crows
    { src: 'assets/images/gallery/night-crows.png', category: 'Night Crows' },
    { src: 'assets/images/gallery/night-crows2.png', category: 'Night Crows' },
    { src: 'assets/images/gallery/night-crows3.png', category: 'Night Crows' },
    { src: 'assets/images/gallery/night-crows4.png', category: 'Night Crows' },
    { src: 'assets/images/gallery/night-crows5.png', category: 'Night Crows' },
    { src: 'assets/images/gallery/night-crows6.png', category: 'Night Crows' },
    // Odin
    { src: 'assets/images/gallery/odin.png', category: 'Odin' },
    { src: 'assets/images/gallery/odin2.png', category: 'Odin' },
    { src: 'assets/images/gallery/odin3.png', category: 'Odin' },
    { src: 'assets/images/gallery/odin4.png', category: 'Odin' },
    { src: 'assets/images/gallery/odin5.png', category: 'Odin' },
    { src: 'assets/images/gallery/odin6.png', category: 'Odin' }
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('main-gallery');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Initial Render
    renderGallery('all');

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Render Filtered
            const filter = btn.getAttribute('data-filter');
            renderGallery(filter);
        });
    });

    // Function to render gallery cards
    function renderGallery(filter) {
        galleryContainer.innerHTML = '';

        const filteredData = filter === 'all'
            ? galleryData
            : galleryData.filter(item => item.category === filter);

        filteredData.forEach(item => {
            const card = createGalleryCard(item);
            galleryContainer.appendChild(card);
        });

        // Re-observe for reveal animation
        if (window.revealObserver) {
            galleryContainer.querySelectorAll('.reveal').forEach(el => {
                window.revealObserver.observe(el);
            });
        }
    }

    // Function to create a premium gallery card
    function createGalleryCard(item) {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 reveal';

        col.innerHTML = `
            <div class="gallery-card" onclick="openLightbox('${item.src}')">
                <img src="${item.src}" alt="${item.category} Proof">
                <div class="gallery-overlay">
                    <i data-lucide="zoom-in"></i>
                </div>
            </div>
        `;

        // Initialize Lucide icons for the new card
        setTimeout(() => {
            if (window.lucide) window.lucide.createIcons();
        }, 0);

        return col;
    }

    // Lightbox Logic
    window.openLightbox = (src) => {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
