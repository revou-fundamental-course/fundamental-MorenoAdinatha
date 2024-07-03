document.addEventListener("DOMContentLoaded", function () {
    let nama = prompt("Infokan nama kamu", "Pengunjung");
    document.getElementById("nama").innerHTML = nama;

    function validateForm() {
        const nama = document.getElementById("nama-lengkap").value;
        const tanggalLahir = document.getElementById("tgllhr").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const messages = document.getElementById("pesan").value;

        if (nama === "" || tanggalLahir === "" || !gender || messages === "") {
            alert("Isilah kolom yang kosong!");
            return false;
        } else {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });

            // Update the view-form section
            document.getElementById("nama-lengkap-pengirim").innerText = nama;
            document.getElementById("tanggal-lahir-pengirim").innerText = tanggalLahir;
            document.getElementById("gender-pengirim").innerText = gender.value;
            document.getElementById("pesan-pengirim").innerText = messages;
            document.getElementById("tanggal-submit").innerText = formattedDate;

            return false;
        }
    }

    // Auto slide banner
    const slides = document.querySelectorAll(".banner-item");
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        const bannerSlide = document.getElementById("bannerSlide");
        bannerSlide.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
