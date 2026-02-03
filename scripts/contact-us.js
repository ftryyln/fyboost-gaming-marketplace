document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    this.reset();

    // Tampilkan modal Bootstrap
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    thankYouModal.show();
});