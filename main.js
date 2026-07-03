// ======================================
// WEBSITE ROTI GORENG ROFIQ
// main.js
// ======================================

// Pesan Selamat Datang
window.addEventListener("load", function () {
    console.log("Selamat datang di Website Roti Goreng Rofiq");
});

// ===============================
// VALIDASI FORM KONTAK
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let nama = document.getElementById("nama").value.trim();
        let email = document.getElementById("email").value.trim();
        let hp = document.getElementById("hp").value.trim();
        let pesan = document.getElementById("pesan").value.trim();

        if (nama == "") {
            alert("Nama tidak boleh kosong!");
            return;
        }

        if (email == "") {
            alert("Email tidak boleh kosong!");
            return;
        }

        if (hp == "") {
            alert("Nomor HP tidak boleh kosong!");
            return;
        }

        if (pesan == "") {
            alert("Pesan tidak boleh kosong!");
            return;
        }

        alert("Terima kasih, pesan Anda berhasil dikirim.");

        contactForm.reset();

    });

}

// ===============================
// TOMBOL BACK TO TOP
// ===============================

let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (!topButton) return;

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

}

function topFunction() {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ===============================
// ANIMASI SCROLL
// ===============================

const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", function () {

    fadeElements.forEach(function (element) {

        let posisi = element.getBoundingClientRect().top;

        let tinggi = window.innerHeight - 100;

        if (posisi < tinggi) {

            element.classList.add("show");

        }

    });

});

// ===============================
// HOVER CARD
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transition="0.3s";

    });

});

// ===============================
// KONFIRMASI PESAN
// ===============================

function pesanSekarang(){

    alert("Terima kasih telah memilih Roti Goreng Rofiq.");

}

// ===============================
// TANGGAL OTOMATIS FOOTER
// ===============================

let tahun = document.getElementById("tahun");

if(tahun){

    tahun.innerHTML = new Date().getFullYear();

}
