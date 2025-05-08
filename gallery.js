// Data gambar untuk setiap kategori
const valorantImages = [
    "assets/images/gallery/valorant.png", "assets/images/gallery/valorant2.png", "assets/images/gallery/valorant3.png",
    "assets/images/gallery/valorant4.png", "assets/images/gallery/valorant5.png", "assets/images/gallery/valorant6.png"
];
const deltaForceImages = [
    "assets/images/gallery/delta-force.jpg", "assets/images/gallery/delta-force2.png", "assets/images/gallery/delta-force3.png",
    "assets/images/gallery/delta-force4.png", "assets/images/gallery/delta-force5.png", "assets/images/gallery/delta-force6.png"
];
const nightCrowsImages = [
    "assets/images/gallery/night-crows.png", "assets/images/gallery/night-crows2.png", "assets/images/gallery/night-crows3.png",
    "assets/images/gallery/night-crows4.png", "assets/images/gallery/night-crows5.png", "assets/images/gallery/night-crows6.png"
];
const odinImages = [
    "assets/images/gallery/odin.png", "assets/images/gallery/odin2.png", "assets/images/gallery/odin3.png",
    "assets/images/gallery/odin4.png", "assets/images/gallery/odin5.png", "assets/images/gallery/odin6.png"
];

// Function untuk menambahkan gambar ke halaman
function createImageGallery(images, galleryId) {
    const galleryElement = document.getElementById(galleryId);
    galleryElement.classList.add('row', 'g-3');  // Menggunakan class Bootstrap untuk jarak antar gambar

    images.forEach(src => {
        const col = document.createElement('div');
        col.classList.add('col-md-4');  // Setiap gambar dalam 1/3 kolom
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('img-fluid', 'rounded', 'shadow');
        col.appendChild(img);
        galleryElement.appendChild(col);
    });
}

// Memanggil fungsi untuk setiap kategori
createImageGallery(valorantImages, 'valorant-gallery');
createImageGallery(deltaForceImages, 'delta-force-gallery');
createImageGallery(nightCrowsImages, 'night-crows-gallery');
createImageGallery(odinImages, 'odin-gallery');
