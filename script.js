document.querySelectorAll('.openPopup').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'block'; // Menampilkan pop-up
    });
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'none'; // Menyembunyikan pop-up
    });
});

// Klik di luar pop-up untuk menutup
window.addEventListener('click', function(event) {
    document.querySelectorAll('.popup').forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});


// Mencari semua elemen yang memiliki class 'openPopup'
document.querySelectorAll('.openPopup').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'block'; // Menampilkan pop-up
    });
});

// Mencari semua elemen dengan class 'close' untuk menutup pop-up
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'none'; // Menyembunyikan pop-up
    });
});

// Menutup pop-up jika pengguna mengklik area luar pop-up
window.addEventListener('click', function(event) {
    document.querySelectorAll('.popup').forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
