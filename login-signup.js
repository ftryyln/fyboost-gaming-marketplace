// window.addEventListener('DOMContentLoaded', () => {
//     // Handle Sign Up
//     const signupForm = document.querySelector('#signupModal form');
//     if (signupForm) {
//         signupForm.addEventListener('submit', function (e) {
//             e.preventDefault();

//             const inputs = this.querySelectorAll('input');
//             const name = inputs[0].value.trim();
//             const email = inputs[1].value.trim();
//             const password = inputs[2].value;

//             console.log("Signup form submitted!");
//             console.log({ name, email, password });

//             // Validasi minimal
//             if (!name || !email || !password) {
//                 alert("Semua field wajib diisi.");
//                 return;
//             }

//             fetch('php/signup.php', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, email, password })
//             })
//                 .then(res => {
//                     console.log("Signup response received");
//                     return res.json();
//                 })
//                 .then(data => {
//                     console.log(" Server response:", data);
//                     alert(data.message);

//                     if (data.success) {
//                         // Reset form & tutup modal
//                         document.getElementById('signupForm').reset();
//                         const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
//                         if (modal) modal.hide();
//                     }
//                 })
//                 .catch(err => {
//                     console.error("Fetch error:", err);
//                     alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
//                 });
//         });
//     }
// // Handle Login
//     const loginForm = document.querySelector('#loginModal form');
//     if (loginForm) {
//         loginForm.addEventListener('submit', function (e) {
//             e.preventDefault();

//             const inputs = this.querySelectorAll('input');
//             const email = inputs[0].value;
//             const password = inputs[1].value;

//             console.log("Login form submitted:", { email, password });

//             fetch('php/login.php', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email, password })
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log("Login response:", data);
//                     alert(data.message);
//                     if (data.success) location.reload();
//                 })
//                 .catch(err => {
//                     console.error("Login fetch error:", err);
//                     alert("Terjadi kesalahan saat login.");
//                 });
//         });
//     }
// });




window.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('[name="name"]').value.trim();
            const email = this.querySelector('[name="email"]').value.trim();
            const password = this.querySelector('[name="password"]').value;

            console.log("Signup form submitted:", { name, email, password });

            if (!name || !email || !password) {
                alert("Semua field wajib diisi.");
                return;
            }

            fetch('signup.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            })
                .then(res => res.json())
                .then(data => {
                    alert(data.message);
                    if (data.success) {
                        signupForm.reset();
                        const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
                        if (modal) modal.hide();
                    }
                })
                .catch(err => {
                    console.error("Fetch error:", err);
                    alert("Terjadi kesalahan saat mengirim data.");
                });
        });
    }
});