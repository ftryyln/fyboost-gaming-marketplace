document.addEventListener("DOMContentLoaded", () => {
    fetch('navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // --- Tambahin bagian ini setelah navbar dimuat ---
            const navbar = document.querySelector('.custom-navbar');
            if (navbar) {
                const navbarHeight = navbar.offsetHeight;
                const productsSection = document.getElementById('first-section');
                if (productsSection) {
                    productsSection.style.marginTop = navbarHeight + 'px';
                }
            }
        });

    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
